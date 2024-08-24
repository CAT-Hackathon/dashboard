import { z } from "zod";

const LoginSchema = z.object({
  phone: z
    .string()
    .min(11, { message: "Phone number must be exactly 11 characters long" })
    .max(11, { message: "Phone number must be exactly 11 characters long" })
    .regex(/^\d+$/, { message: "Phone number must contain only digits" }),

  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(32, { message: "Password must be at most 32 characters long" })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter",
    })
    .regex(/\d/, { message: "Password must contain at least one number" })
    .regex(/[@$!%*?&#]/, {
      message: "Password must contain at least one special character",
    }),
});

export { LoginSchema };
