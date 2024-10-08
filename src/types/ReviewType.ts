import { ProductType } from "./ProductType";
import { UserType } from "./userType";

export type ReviewType = {
    _id:string
    reviewBy: UserType
  product:ProductType[];
  reviewMessage: string;
  reviewStar: Number;
  averageReview: Number;
    starArray: Number[];
  createdAt:string
}