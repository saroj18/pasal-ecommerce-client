import { z } from "zod";

const emailZodeSchema=z.string({
    required_error:"email must be required",
    invalid_type_error:"envalid email format"
}).trim().email({message:"invalid email"}).min(12,{message:"email is too short"})

const passwordZodSchema=z.string({
    required_error:"password must be required",
    invalid_type_error:"password must be string"
}).trim().min(8,{message:"password length must be >8 character"}).max(15,{message:"password length must be <15 character"})

const roleZodeSchema=z.string({
    required_error:"role must be required",
    invalid_type_error:"invalid role type"
}).trim().optional()

export const UserSignUpZodSchema=z.object({
    fullname:z.string({
        required_error:"name must be required",
        invalid_type_error:"name must be string"
    }).trim().min(4,{message:'name must be 4 character'}).max(25,{message:"name must be less than 25 character"}),
    username:z.string({
        required_error:"username must be required",
        invalid_type_error:"username must be string"
    }).trim().min(4,{message:'username must be 4 character'}).max(25,{message:"username must be less than 25 character"}),
    email:emailZodeSchema,
    password:passwordZodSchema,
    role:roleZodeSchema
})

export const UserLoginZodSchema=z.object({
    email:emailZodeSchema,
    password:passwordZodSchema,
    role:roleZodeSchema
})