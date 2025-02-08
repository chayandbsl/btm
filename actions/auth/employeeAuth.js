"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { authConfig } from "../../config/auth.config";
import { clearUserCookies, USER_TYPES } from "../../lib/auth/cookie";
import { comparePassword, hashPassword } from "../../lib/auth/password";
import { createEmployeeSession, getEmployeeSession } from "../../lib/auth/session";
import { LoginFormSchema, SignupFormSchema } from "../../lib/auth/validation";
import prisma from "../../lib/db";

export async function employeeSignup(state, formData) {
  try {
    const validatedFields = SignupFormSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      mobile: formData.get("mobile"),
      reference: formData.get("reference"),
      password: formData.get("password"),
    });

    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }

    const { name, email, mobile, password, reference } = validatedFields.data;
    
    const existingUser = await prisma.team.findFirst({
      where: {
        OR: [
          { email: email },
          { mobile: mobile }
        ]
      }
    });

    if (existingUser) {
      return { error: "Email or mobile already exists" };
    }

    const hashedPassword = await hashPassword(password);
    if (!hashedPassword) {
      return { error: "Internal error. Try again." };
    }

    const parent = await prisma.team.findFirst({
      where: {
        id: +reference
      },
      select:{
        parent:true,
      }
    })

    let updatedParent = 0;
    if (parent) {
      updatedParent = parent.parent 
        ? `${parent.parent},${reference}` 
        : reference; 
    }
    
    await prisma.team.create({
      data: {
        name: name,
        mobile: mobile,
        email: email,
        reference: +reference,
        parent: updatedParent,
        present_address: "das",
        permanent_address: "dasd",
        password: hashedPassword,
        status: 1,
        created_at: new Date(),
        created_by: 0,
        updated_by: 0,
      },
    });

    revalidatePath("/teams/create")
    return { success: true };
  } catch (error) {
    console.error("Team add error:", error);

    if (error instanceof z.ZodError) {
      return { error: "Please check your input" };
    }

    return { error: "Something went wrong" };
  }

  // redirect(authConfig.authRedirects.employee.login);
}

export async function employeeSignin(state, formData) {
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
    const employee = await prisma.team.findUnique({
      where: { 
        email
      },
      select: {
        id: true,
        name: true,
        email: true,
        password: true,
      },
    });

    if (!employee) {
      return { error: "Invalid credentials" };
    }

    const isPasswordValid = await comparePassword(password, employee.password);
    if (!isPasswordValid) {
      return { error: "Invalid credentials" };
    }

    const { password: _, ...employeeWithoutPassword } = employee;
    const sessionCreated = await createEmployeeSession(employeeWithoutPassword);
    if (!sessionCreated) {
      return { error: "Authentication failed" };
    }

    await new Promise(resolve => setTimeout(resolve, 100));
   
    revalidatePath("/");
    
  } catch (error) {
    console.error("Employee signin error:", error);
    if (error instanceof z.ZodError) {
      return { error: "Please check your input" };
    }
    return { error: "Something went wrong" };
  } 

  redirect(authConfig.authRedirects.employee.dashboard);
}

export async function employeeSignout() {
  try {
    await clearUserCookies(USER_TYPES.EMPLOYEE);
  } catch (error) {
    console.error("Employee logout error:", error);
    return { error: "Something went wrong during logout" };
  }

  revalidatePath("/");
  redirect(authConfig.authRedirects.employee.login);
}

export async function getEmployeeSessionData() {
  try {
    return await getEmployeeSession();
  } catch (error) {
    console.error("Employee session error:", error);
    return null;
  }
}