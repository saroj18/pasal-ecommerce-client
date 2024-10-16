import { ProductType } from "./ProductType";
import { UserType } from "./userType";

export type CartType = {
  _id: string;
  product: ProductType;
  addedBy: UserType;
  productCount: Number;
};
