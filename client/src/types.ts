import { z } from "zod";

export const RegisterSchema = z.object({
  username: z
    .string({ message: "Username is required!" })
    .min(5, { message: "Username must be atleast 5 characters!" }),
  email: z
    .string({ message: "Email is required!" })
    .email({ message: "Not a valid email" }),
  password: z
    .string({ message: "Password is required!" })
    .min(5, { message: "Password must be atleast 4 characters!" }),
});

export const LoginSchema = z.object({
  email: z
    .string({ message: "Email is required!" })
    .email({ message: "Not a valid email" }),
  password: z
    .string({ message: "Password is required!" })
    .min(5, { message: "Password must be atleast 4 characters!" }),
});
