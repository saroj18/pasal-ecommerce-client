import { z } from "zod";

const genderEnum = ["male", "female", "other"];

export const DeleveryPersonZodSchema = z.object({
  firstname: z.string().min(1, { message: "firstname must be 1 character" }),
  lastname: z.string().min(1, { message: "lastname must be 1 character" }),
  address: z.string().min(1, { message: "address must be 1 character" }),
  phone: z.string().min(1, { message: "phone must be 1 character" }),
  email: z.string().email({ message: "invalid email" }),
  citiNumber: z.string().min(1, { message: "citiNumber must be 1 character" }),
  password: z.string().min(5, { message: "password must be 5 character" }),
  idDocument: z.instanceof(FileList).refine((value) => value.length > 0, {
    message: "invalid file",
  }),
  profileImage: z
    .instanceof(FileList)
    .refine((value) => value.length > 0, { message: "invalid file" }),
  gender: z
    .any()
    .refine((data) => genderEnum.includes(data), { message: "invalid gender" }),
});
