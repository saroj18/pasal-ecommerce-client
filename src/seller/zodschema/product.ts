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
    z
      .string({
        required_error: "features required",
        invalid_type_error: "invalid features",
      })
      .trim()
      .min(1, { message: "features required" }),
  ),
  images: z.any().refine((val) => val?.length >= 3 || val === "UPDATE", {
    message: "3 images required",
  }),
});

export const ShopDetailsZodSchema = z.object({
  shopName: z
    .string({
      invalid_type_error: "invalid shopName",
      required_error: "shopName required",
    })
    .trim()
    .min(1, { message: "shopName must be 1 letter" }),
  address: z
    .string({
      invalid_type_error: "invalid address",
      required_error: "address required",
    })
    .trim()
    .min(1, { message: "address must be 1 letter" }),
  owner: z
    .string({
      invalid_type_error: "invalid owner",
      required_error: "owner required",
    })
    .trim()
    .min(1, { message: "owner must be 1 letter" }),
  category: z
    .string({
      invalid_type_error: "invalid category",
      required_error: "category required",
    })
    .trim()
    .min(1, { message: "category must be 1 letter" }),
  turnover: z
    .string({
      invalid_type_error: "invalid turnover",
      required_error: "turnover required",
    })
    .trim()
    .min(1, { message: "turnover must be 1 letter" }),
  citiNumber: z
    .string({
      invalid_type_error: "invalid citiNumber",
      required_error: "citiNumber required",
    })
    .trim()
    .min(1, { message: "citiNumber must be 1 letter" }),
  shopImage: z
    .any()
    .refine((val: any) => val, { message: "1 images must be required" }),
  documentImage: z
    .any()
    .refine((val: any) => val, { message: "1 images must be required" }),
  shopLocation: z
    .any()
    .refine((val: { [key: string]: number }) => val?.lat && val?.lng, {
      message: "location must be required",
    }),
  yourImage: z
    .any()
    .refine((val: any) => val, { message: "1 images must be required" }),
});
