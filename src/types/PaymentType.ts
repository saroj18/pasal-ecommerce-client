import { OrderType } from "../customer/pages/OrderCheckout";

export type PaymentType = {
  order: OrderType;
  status: string;
  ref_id: string;
  payMethod: string;
};
