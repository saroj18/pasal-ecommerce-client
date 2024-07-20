import z from "zod";

export const productZodSchema = z.object({
  name: z
    .string({
      required_error: "product name required",
      invalid_type_error: "invalid productName",
    })
    .trim()
    .min(1, { message: "name must be 1 letter" }),
  description: z
    .string({
      required_error: "description required",
      invalid_type_error: "invalid description",
    })
    .trim()
    .min(50, { message: "description must be 50 letter" }),
  brand: z
    .string({
      required_error: "brand required",
      invalid_type_error: "invalid brand",
    })
    .trim()
    .min(1, { message: "brand must be 1 letter" }),
  category: z
    .string({
      required_error: "category required",
      invalid_type_error: "invalid category",
    })
    .trim()
    .refine((val) => val !== "", { message: "category required" }),
  barganing: z
    .string({
      required_error: "barganing required",
      invalid_type_error: "invalid barganing",
    })
    .trim()
    .min(1, { message: "barganing required" }),
  chating: z
    .string({
      required_error: "chating required",
      invalid_type_error: "invalid chating",
    })
    .trim()
    .min(1, { message: "chating required" }),
  stock: z
    .string({
      required_error: "stock required",
      invalid_type_error: "invalid stock",
    })
    .trim()
    .min(1, { message: "stock required" }),
  discount: z
    .string({
      required_error: "discount required",
      invalid_type_error: "invalid discount",
    })
    .trim()
    .min(1, { message: "discount required" }),
  price: z
    .string({
      required_error: "price required",
      invalid_type_error: "invalid price",
    })
    .trim()
    .min(1, { message: "price required" }),
  features: z.array(
    z.string({
      required_error: "features required",
      invalid_type_error: "invalid features",
    })
      .trim()
      .min(1, { message: "features required" }),
  ),
  images: z
    .any()
    .refine((val) => val?.length >= 3, { message: "3 images required" }),
});
