import { z } from "zod";

const emailZodeSchema = z
  .string({
    required_error: "email must be required",
    invalid_type_error: "envalid email format",
  })
  .trim()
  .email({ message: "invalid email" })
  .min(12, { message: "email is too short" });

const passwordZodSchema = z
  .string({
    required_error: "password must be required",
    invalid_type_error: "password must be string",
  })
  .trim()
  .min(8, { message: "password length must be >8 character" })
  .max(15, { message: "password length must be <15 character" });

const roleZodeSchema = z
  .string({
    required_error: "role must be required",
    invalid_type_error: "invalid role type",
  })
  .trim()
  .optional();

const dobZodSchema = z
  .string({
    required_error: "dob must be required",
    invalid_type_error: "dob must be string",
  })
  .trim()
  .min(1, { message: "dob must be 1 letter" });

const genderZodSchema = z
  .string({
    required_error: "gender must be required",
    invalid_type_error: "gender must be string",
  })
  .trim()
  .min(1, { message: "gender must be 1 letter" });

const mobileZodSchema = z
  .string({
    required_error: "mobile must be required",
    invalid_type_error: "mobile must be string",
  })
  .trim()
  .min(1, { message: "mobile must be 1 letter" });

const fullnameZodSchema = z
  .string({
    required_error: "name must be required",
    invalid_type_error: "name must be string",
  })
  .trim()
  .regex(/^[a-zA-Z0-9]+$/, { message: "invalid name format" })
  .min(4, { message: "name must be 4 character" })
  .max(25, { message: "name must be less than 25 character" });

export const UserSignUpZodSchema = z.object({
  fullname: fullnameZodSchema,
  username: z
    .string({
      required_error: "username must be required",
      invalid_type_error: "username must be string",
    })
    .trim().regex(/^[a-zA-Z0-9]+$/,{message:"invalid name format"})
    .min(4, { message: "username must be 4 character" })
    .max(25, { message: "username must be less than 25 character" }),
  email: emailZodeSchema,
  password: passwordZodSchema,
  role: roleZodeSchema,
});

export const UserLoginZodSchema = z.object({
  email: emailZodeSchema,
  password: passwordZodSchema,
  role: roleZodeSchema,
});

export const UserVefifyZodSchema = z.object({
  fullname: fullnameZodSchema,
  email: emailZodeSchema,
  mobile: mobileZodSchema,
  dob: dobZodSchema,
  gender: genderZodSchema,
});

export const AddressZodSchema = z.object({
  state: z
    .string({
      required_error: "state must be required",
      invalid_type_error: "state must be string",
    })
    .trim()
    .min(1, { message: "state must be 1 letter" }),
  city: z
    .string({
      required_error: "city must be required",
      invalid_type_error: "city must be string",
    })
    .trim()
    .min(1, { message: "city must be 1 letter" }),
  district: z
    .string({
      required_error: "district must be required",
      invalid_type_error: "district must be string",
    })
    .trim()
    .min(1, { message: "district must be 1 letter" }),
  tole: z
    .string({
      required_error: "tole must be required",
      invalid_type_error: "tole must be string",
    })
    .trim()
    .min(1, { message: "tole must be 1 letter" }),
  ward: z
    .string({
      required_error: "ward must be required",
      invalid_type_error: "ward must be string",
    })
    .trim()
    .min(1, { message: "ward must be 1 letter" }),
  nearBy: z
    .string({
      required_error: "nearBy must be required",
      invalid_type_error: "nearBy must be string",
    })
    .trim()
    .min(1, { message: "nearBy must be 1 letter" }),
  defaultAddress: z
    .string({
      required_error: "defaultAddress must be required",
      invalid_type_error: "defaultAddress must be string",
    })
    .trim()
    .min(1, { message: "defaultAddress must be 1 letter" }),
  location: z
    .any()
    .refine((val: { [key: string]: number }) => val?.lat && val?.lng, {
      message: "location must be required",
    }),
});

export const EditProfileZodSchema = z
  .object({
    fullname: fullnameZodSchema,
    email: emailZodeSchema,
    mobile: mobileZodSchema,
    dob: dobZodSchema,
    gender: genderZodSchema,
    currentPassword: passwordZodSchema,
    newPassword: passwordZodSchema,
    confirmPassword: passwordZodSchema,
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "password not match",
    path: ["confirmPassword"],
  });

export const SellerUserZodSchema = z.object({
  fullname: fullnameZodSchema,
  email: emailZodeSchema,
  mobile: mobileZodSchema,
  dob: dobZodSchema,
  postalCode: z
    .string({
      required_error: "postalCode must be required",
      invalid_type_error: "postalCode must be string",
    })
    .trim()
    .min(1, { message: "postalCode must be 1 letter" }),
  gender: genderZodSchema,
});

export const LocalStorageUserRoleSchema = z.object({
  role: z.string().refine(
    (value) => {
      if (value === "CUSTOMER" || value === "SELLER") return true;
    },
    { message: "something went wrong,please login again" },
  ),
});
