import { z } from "zod";

const addUser = z.object({
  name: z
    .string({ message: "Please enter a name" })
    .min(2, "Name must be at least 2 characters long"),
  role: z.string({ message: "Please enter a role" }).min(1, "Role is required"),
  email: z
    .string({ message: "Please enter an email" })
    .email("Invalid email format"),
  phone: z
    .string({ message: "Please enter a phone number" })
    .min(11, "Phone number is required")
    .max(11, "Phone number is done")
    .regex(/^\d+$/, "Phone number must contain only digits"),
  password: z
    .string({ message: "Please enter a password" })
    .min(8, "Password must be at least 8 characters long"),
});

export { addUser };
