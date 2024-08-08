import React, { createContext, useContext, useState } from "react";
import { string } from "zod";
import { AddressForm } from "../customer/pages/account/page/AddAddressForm";
import { VerifyForm, VerifyInfoTyype } from "../customer/pages/account/component/VerifyForm";
import { useQuery } from "../utils/useQuery";

type ProductType = {
  name: string;
  description: string;
  brand: string;
  category: string;
  barganing: string;
  chating: string;
  stock: string;
  discount: string;
  price: string;
  features: string[];
  images?: File[];
};
type ProvideProps = {
  sidebar: boolean;
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  accountSideBar: boolean;
  setAccountSideBar: React.Dispatch<React.SetStateAction<boolean>>;
  productInfo: ProductType;
  setProductInfo: React.Dispatch<React.SetStateAction<ProductType>>;
  zodError:{[key:string]:string}
  setZodError:React.Dispatch<React.SetStateAction<{[key:string]:string}>>
  verifyPopup:boolean
  setVerifyPopup:React.Dispatch<React.SetStateAction<boolean>>
  setVerifyInfo: React.Dispatch<React.SetStateAction<AddressForm | VerifyForm | VerifyInfoTyype>>;
  verifyInfo: AddressForm | VerifyForm | VerifyInfoTyype;
  data:any
};

const ContextProvider = createContext<ProvideProps | null>(null);

export const Context = ({ children }: { children: React.ReactNode }) => {
  const [sidebar, setSidebar] = useState<boolean>(false);
  const[verifyPopup,setVerifyPopup]=useState<boolean>(false)
  const [accountSideBar, setAccountSideBar] = useState<boolean>(false);
  const[zodError,setZodError]=useState<{[key:string]:string}>({})
  const [productInfo, setProductInfo] = useState<ProductType>({
    name: "",
    description: "",
    brand: "",
    category: "",
    barganing: "",
    chating: "",
    stock: "",
    discount: "",
    price: "",
    features: [],
    images: [],
  });
  const [verifyInfo,setVerifyInfo]=useState<VerifyInfoTyype | VerifyForm | AddressForm>({
    fullname:'',
    email:'',
    mobile:'',
    dob:'',
    state:'',
    district:'',
    tole:'',
    city:'',
    gender:'',
    defaultAddress:'',
    nearBy:'',
    ward:'',
    location:{
      lat:0,
      lng:0
    }
  })

  const {data}=useQuery('/user')
  return (
    <ContextProvider.Provider
      value={{
        sidebar,
        setSidebar,
        accountSideBar,
        setAccountSideBar,
        setProductInfo,
        productInfo,
        zodError,
        setZodError,
        verifyPopup,
        setVerifyPopup,
        setVerifyInfo,
        verifyInfo,
        data
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
};

export const useContextProvider = () => {
  const context = useContext(ContextProvider);
  if (!context) {
    throw new Error("You are outside from provider");
  }

  return context;
};

export default Context;
