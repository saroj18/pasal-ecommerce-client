import { ShopType } from "./ShopType";

export type ProductType = {
    _id:string
    name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  image: string;
  brand: string;
  chating: string;
  barganing: string;
  discount: number;
  features: string[];
  addedBy: ShopType
  images: string[];
  review: string[];
  starArray: Number[];
  isOnWishList: boolean;
  totalSale: number;
  priceAfterDiscount: number;
  userDiscount: number;
  offer: boolean;
    visitDate: Date[];
    rating: number
    relatedProducts: ProductType[]
  ourOtherProducts:ProductType[]
}