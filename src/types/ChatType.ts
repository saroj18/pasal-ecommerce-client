import { ProductType } from "./ProductType";
import { UserType } from "./userType";

export type ChatType = {
  _id: string;
  sender: UserType;
  receiver: UserType;
  product: ProductType;
  message: string;
  type: string;
  recentMsg: string;
};
