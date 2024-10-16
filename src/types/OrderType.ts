import { CartType } from "./CartType";
import { ProductType } from "./ProductType";
import { UserLocationType } from "./UserLocationType";
import { UserType } from "./userType";

export type OrderType = {
  _id: string;
  product: ProductType[] | ProductType;
  purchaseBy: UserType;
  deleveryAddress: UserLocationType;
  paymentStatus: string;
  payMethod: string;
  status: string;
  orderComplete: boolean;
  billingAddress: UserLocationType;
  totalPrice: number;
  deleveryCharge: number;
  reviewed: boolean;
  productQty: number;
  cartInfo: CartType[];
  updatedAt: string;
  createdAt: string;
  info: OrderType[];
  orderProducts: ProductType;
  customer: UserType[];
};
