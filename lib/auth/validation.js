import { z } from "zod";

export const SignupFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .trim(),
  email: z.string().email({ message: "Please enter a valid email." }).trim(),
  mobile: z
    .string()
    .min(11, { message: "Mobile number must be 11 digit" })
    .max(11, { message: "Mobile number must be 11 digit" })
    .trim(),
  reference: z
    .string()
    .min(1, { message: "Reference is required" })
    .trim(),
  password: z
    .string()
    .min(6, { message: "Password at least 6 characters long" })
    .trim(),
});

export const LoginFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }).trim(),
  password: z
    .string()
    .min(6, { message: "Password at least 6 characters long" }),
});


