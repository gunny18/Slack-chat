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

export const CreateNamespaceForm = z.object({
  name: z
    .string({ message: "Name is required!" })
    .min(4, { message: "Name must have atleast 4 characters" }),
  imageURL: z
    .string({ message: "Image URL is required!" })
    .url({ message: "Must be a valid URL" }),
  endpoint: z
    .string({ message: "endpoint is required!" })
    .min(4, { message: "endpoint must have atleast 4 characters" }),
});

export const CreateRoomForm = z.object({
  name: z
    .string({ message: "Name is required!" })
    .min(4, { message: "Name must have atleast 4 characters" }),
  imageURL: z
    .string({ message: "Image URL is required!" })
    .url({ message: "Must be a valid URL" }),
  namespaceId: z
    .string({ message: "Namespace ID is required!" })
    .min(4, { message: "Namespace Id must have atleast 4 characters" }),
});
