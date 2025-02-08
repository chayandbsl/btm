"use server";

import { users_user_type } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { authConfig } from "../../config/auth.config";
import { clearCookies } from "../../lib/auth/cookie";
import { comparePassword, hashPassword } from "../../lib/auth/password";
import { createSession, getSession } from "../../lib/auth/session";
import { LoginFormSchema, SignupFormSchema } from "../../lib/auth/validation";
import prisma from "../../lib/db";

export async function signup(state, formData) {
  try {
    const validatedFields = SignupFormSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      password: formData.get("password"),
    });

    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }

    const { name, email, phone, password } = validatedFields.data;

    const existingUser = await prisma.users.findUnique({
      where: { email: email },
    });

    if (existingUser) {
      return { error: "Email already exists" };
    }

    const hashedPassword = await hashPassword(password);

    await prisma.users.create({
      data: {
        name: name,
        email: email,
        phone: phone,
        password: hashedPassword,
        user_type: users_user_type.customer,
      },
    });
  } catch (error) {
    console.log("error", error);
    if (error instanceof z.ZodError) {
      return { error: "Please check your input" };
    }
    return { error: "Something went wrong" };
  }

  redirect(authConfig.authRedirects.login);
}

export async function signin(state, loginFormData) {
  try {
    const validatedFields = LoginFormSchema.safeParse({
      email: loginFormData.get("email"),
      password: loginFormData.get("password"),
    });

    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }

    const { email, password } = validatedFields.data;
    const user = await prisma.users.findUnique({
      where: { email: email },
      select: {
        id: true,
        name: true,
        email: true,
        password: true,
      },
    });

    if (!user) {
      return { error: "Invalid credentials" };
    }

    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) {
      return { error: "Invalid credentials" };
    }

    const { password: _, ...userWithoutPassword } = user;
    const sessionCreated = await createSession(userWithoutPassword);
    if (!sessionCreated) {
      console.error("Failed to set session cookie");
      return { error: "Authentication failed" };
    }

    // Add this to ensure cookies are set before redirect
    await new Promise(resolve => setTimeout(resolve, 100));

  } catch (error) {
    console.log("error", error);
    if (error instanceof z.ZodError) {
      return { error: "Please check your input" };
    }
    return { error: "Something went wrong" };
  }
  
  redirect(authConfig.authRedirects.dashboard);
    
}

export async function signout() {
  "use server"
  
  try {
    await clearCookies();
  } catch (error) {
    console.log("Logout error:", error);
    return { error: "Something went wrong during logout" };
  }

  revalidatePath("/");
  redirect(authConfig.authRedirects.login);
}

export async function session() {
  try {
    const sessionData = await getSession();
    return sessionData;
  } catch (error) {}
}
