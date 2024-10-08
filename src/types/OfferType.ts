import { ProductType } from "./ProductType";

export type OfferType = {
    _id:string
    name: string;
  discount: number;
  offerStatus: boolean;
  product: ProductType[];
}