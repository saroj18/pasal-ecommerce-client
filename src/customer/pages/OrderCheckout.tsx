import ParaTypo from "../../components/common/ParaTypo";
import CheckoutBox from "../../components/CheckoutBox";
import { X } from "lucide-react";
import SelectAndViewAddress from "./account/component/SelectAndViewAddress";
import { useQuery } from "../../utils/useQuery";
import { useMutation } from "../../utils/useMutation";
import { useLayoutEffect, useState } from "react";

export type OrderType = {
  product: string[];
  payMethod: string;
  deleveryAddress: string;
  billingAddress: string;
  totalPrice: number;
  deleveryCharge: number;
};

type Product = {
  id?: string;
  name?: string;
  description?: string;
  price?: number;
};

const OrderCheckout = () => {
  const { mutate, data, loading } = useMutation();
  const { data: productData, refetch } = useQuery<Product[]>("/product/cart");
  const deleteFromCart = (id: string) => {
    mutate("/product/cart", "DELETE", { productId: id }, refetch);
  };

  const [orderDetails, setOrderDetails] = useState<OrderType>({
    product: [],
    payMethod: "cash",
    deleveryAddress: "",
    billingAddress: "",
    totalPrice: 0,
    deleveryCharge: 20,
  });
  console.log("kera", productData);

  loading ? <h1>loading</h1> : null;
  useLayoutEffect(() => {
    let products: string[] = [];
    productData &&
      productData.forEach((ele: any) => {
        products.push(ele.product._id);
      });
    setOrderDetails((prv) => ({ ...prv, product: products }));
  }, [productData]);

  return (
    <div className="flex flex-col lg:flex-row justify-between mt-5 gap-x-6">
      <div className="w-full  flex items-start gap-3  border-2 border-gray-400 max-h-[200px]  md:h-fit flex-wrap overflow-y-scroll rounded-md p-4 shadow-md ">
        {productData &&
          productData?.map((ele: any, index: number) => {
            return (
              <div
                title={ele.product.name}
                key={index}
                className="border-2 w-full max-w-[150px] relative border-gray-250 shadow-md items-center justify-evenly sm:justify-center rounded-md flex gap-x-2 py-2 "
              >
                <X
                  onClick={() => deleteFromCart(ele._id)}
                  size={17}
                  className="absolute left-[85%] opacity-80 cursor-pointer top-2"
                />
                <div className="flex flex-col items-center justify-center">
                  <img
                    className="h-[30px] sm:h-[100px]"
                    src={ele.product.images[0]}
                    alt=""
                  />
                  <ParaTypo
                    title={`${ele.product.price * ele.productCount}`}
                    className="text-sm"
                  >
                    Rs: {`${ele.product.price}*${ele.productCount}`}
                  </ParaTypo>
                </div>
              </div>
            );
          })}
      </div>
      <div className="w-full mx-auto sm:max-w-[600px] sticky top-0 left-0 h-fit">
        <SelectAndViewAddress
          orderDetails={orderDetails}
          setOrderDetails={setOrderDetails}
        />
        <CheckoutBox
          orderDetails={orderDetails}
          setOrderDetails={setOrderDetails}
          cartData={productData}
        />
      </div>
    </div>
  );
};

export default OrderCheckout;
