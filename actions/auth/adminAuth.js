"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { authConfig } from "../../config/auth.config";
import { clearUserCookies, USER_TYPES } from "../../lib/auth/cookie";
import { comparePassword, hashPassword } from "../../lib/auth/password";
import { createAdminSession, getAdminSession } from "../../lib/auth/session";
import { LoginFormSchema, SignupFormSchema } from "../../lib/auth/validation";
import prisma from "../../lib/db";

export async function adminSignup(state, formData) {
  try {
    const validatedFields = SignupFormSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      mobile: formData.get("mobile"),
      password: formData.get("password"),
    });

    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }

    const { name, email, mobile, password } = validatedFields.data;

    const existingUser = await prisma.users.findUnique({
      where: { email },
    });

    if (existingUser) {
      return { error: "Email already exists" };
    }

    const hashedPassword = await hashPassword(password);

    await prisma.admin_users.create({
      data: {
        name,
        email,
        mobile,
        password: hashedPassword,
      },
    });
  } catch (error) {
    console.error("Admin signup error:", error);
    if (error instanceof z.ZodError) {
      return { error: "Please check your input" };
    }
    return { error: "Something went wrong" };
  }

  redirect(authConfig.authRedirects.admin.login);
}

export async function adminSignin(state, formData) {
  try {
    const validatedFields = LoginFormSchema.safeParse({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }

    const { email, password } = validatedFields.data;
    const admin = await prisma.users.findUnique({
      where: { email },
      select: {
        id: true,
        name: true,
        email: true,
        password: true,
      },
    });

    if (!admin) {
      return { error: "Invalid credentials" };
    }

    const isPasswordValid = await comparePassword(password, admin.password);
    if (!isPasswordValid) {
      return { error: "Invalid credentials" };
    }

    const { password: _, ...adminWithoutPassword } = admin;
    const sessionCreated = await createAdminSession(adminWithoutPassword);
    if (!sessionCreated) {
      return { error: "Authentication failed" };
    }

    await new Promise(resolve => setTimeout(resolve, 100));
  } catch (error) {
    console.error("Admin signin error:", error);
    if (error instanceof z.ZodError) {
      return { error: "Please check your input" };
    }
    return { error: "Something went wrong" };
  }

  redirect(authConfig.authRedirects.admin.dashboard);
}

export async function adminSignout() {
  try {
    await clearUserCookies(USER_TYPES.ADMIN);
  } catch (error) {
    console.error("Admin logout error:", error);
    return { error: "Something went wrong during logout" };
  }

  revalidatePath("/admin");
  redirect(authConfig.authRedirects.admin.login);
}

export async function getAdminSessionData() {
  try {
    return await getAdminSession();
  } catch (error) {
    console.error("Admin session error:", error);
    return null;
  }
}