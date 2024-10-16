import { ProductType } from "./ProductType";
import { ShopType } from "./ShopType";

export type TopListType = {
  topVender: ShopType[];
  topSellingProduct: ProductType[];
  topCategory: ProductType[];
  topExpensiveProduct: ProductType[];
};
