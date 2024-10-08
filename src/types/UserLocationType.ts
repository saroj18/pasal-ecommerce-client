import { LocationType } from "./ShopType";
import { UserType } from "./userType";

export type UserLocationType = {
     state: string;
    city:string
    tole:string,
    district:string
    ward:string
    nearBy:string
    defaultAddress:string
    location:LocationType
    addressOf:UserType
}