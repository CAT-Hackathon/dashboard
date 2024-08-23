import { z } from "zod";
const addUser = z.object({
  name: z.string({ message: "من فضلك ادحل اسم " }).min(2, "من فضلك ادحل اسم "),
  role: z.string({ message: "من فضلك ادحل اسم " }).min(1, "من فضلك ادحل اسم "),
  email: z.string({ message: "من فضلك ادحل حالة" }).min(1, "من فضلك ادحل حالة"),
  phone: z
    .string({ message: "من فضلك ادحل رقم تليفون" })
    .min(1, "من فضلك ادحل رقم تليفون"),
  password: z
    .string({ message: "من فضلك ادحل رقم تليفون" })
    .min(1, "من فضلك ادحل رقم تليفون"),
});
export { addUser };
