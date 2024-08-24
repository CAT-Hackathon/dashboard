import { z } from "zod";

const addCompanySchema = z.object({
  phone: z.string().min(1, "Please enter a phone number."),
  website: z.string().url("Please enter a valid URL for the website."),

  name: z.string().min(1, "Please enter a company name."),
  address: z.string().min(1, "Please enter an address."),
  email: z
    .string()
    .email("Please enter a valid email address.")
    .min(1, "Please enter an email address."),
  description: z.string().min(1, "Please enter a description."),
  industry: z.string().min(1, "Please enter an industry."),
  logo: z.string().min(1, "Please upload a image file."),
});

export { addCompanySchema };
