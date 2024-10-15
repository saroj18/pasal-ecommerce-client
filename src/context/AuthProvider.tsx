import React, { createContext, useContext } from "react";
import { useQuery } from "../hooks/useQuery";
import { AddressForm } from "../customer/pages/account/page/AddAddressForm";

export interface UserType {
  _id:string
  fullname: string;
  role: "customer" | "admin" | "seller";
  verify: boolean;
  email: string;
  dob: string;
  mobile: string;
  gender: "male" | "female";
  address: AddressForm;
  oAuthLogin: boolean;
}

interface ContextType {
  data: UserType | UserType[] | null;
  loading: boolean;
}

const Provider = createContext<ContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { data, loading } = useQuery<UserType>("/user", false);
  return (
    <Provider.Provider value={{ data, loading }}>{children}</Provider.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(Provider);

  if (!context) {
    throw new Error("your are outside from provider");
  }
  return context;
};
