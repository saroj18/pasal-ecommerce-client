import { UserType } from "./userType";

export type LocationType = {
  lat: number;
  lng: number;
};

export type ShopType = {
  _id: string;
  shopName: string;
  owner: UserType;
  location: LocationType;
  category: string;
  image: string;
  shopImage: string;
  documentImage: string;
  yourImage: string;
  monthlyTurnover: string;
  shopAddress: string;
  verified: boolean;
  citiNumber: string;
  createdAt?: string;
};
