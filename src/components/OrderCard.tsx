import { Fragment } from "react";
import ParaTypo from "./common/ParaTypo";
import HeadingTypo from "./common/HeadingTypo";
import { MapPin, Truck } from "lucide-react";
import Button from "./common/Button";
import { useMutation } from "../hooks/useMutation";
import { useAuth, UserType } from "../context/AuthProvider";
import { OrderType } from "../types/OrderType";
import { ProductType } from "../types/ProductType";

const OrderCard = ({
  background,
  info,
  element,
}: {
  background: string;
  info: OrderType[];
  date: string;
  element?: any;
}) => {
  const { mutate } = useMutation();
  let { data: user } = useAuth();
  user = user as UserType;
  const clickHandler = (id: string) => {
    mutate("/order/cancled", "POST", { id });
  };
  return (
    <>
      {info?.map((ele, index: number) => {
        return (
          <Fragment key={index}>
            <div className="w-full relative text-xs sm:text-xl max-w-[600px] p-2 border-2 border-gray-300 rounded-md shadow-md">
              <div className="flex w-full items-center justify-between">
                <div>
                  <ParaTypo className="opacity-75 text-sm">Order ID</ParaTypo>
                  <HeadingTypo className="text-sm">#{ele._id}</HeadingTypo>
                </div>
                {user?.role !== "admin" && (
                  <div>
                    <ParaTypo
                      className={`opacity-75 text-sm border-2 text-white  rounded-full px-2 py-1 bg-${background}-500`}
                    >
                      {element === "complete"
                        ? `Arrived On ${new Date(ele.updatedAt).toDateString()}`
                        : element === "pending"
                          ? `Estd.on ${new Date(ele.updatedAt).toDateString()}`
                          : `Cancelled On ${new Date(ele.updatedAt).toDateString()}`}
                    </ParaTypo>
                  </div>
                )}
              </div>
              <div className="flex justify-between border-gray-50o p-2 border-2 rounded-full my-2">
                <div className="flex items-center gap-x-2">
                  <Truck />
                  <span className="text-sm">Kalanki,Kathmandu</span>
                </div>
                <p>--------</p>
                <div className="flex items-center gap-x-2">
                  <MapPin />
                  <span className="capitalize text-sm">{`${ele.deleveryAddress.city},${ele.deleveryAddress.district}`}</span>
                </div>
              </div>
              <div className="flex h-[100px] items-center justify-around">
                <img
                  className="w-[100px]"
                  src={(ele?.product as ProductType).images?.[0]}
                  alt=""
                />
                <div className="w-full max-w-[60%] ">
                  <HeadingTypo
                    title={(ele.product as ProductType).name}
                    className="text-base  w-full truncate"
                  >
                    {(ele.product as ProductType).name}
                  </HeadingTypo>
                  <ParaTypo className="opacity-80">
                    Rs {(ele.product as ProductType).priceAfterDiscount}
                  </ParaTypo>
                </div>
              </div>
              {ele.status == "pending" && user?.role !== "admin" && (
                <Button
                  onClick={() => clickHandler(ele._id)}
                  className="bg-red-500 text-sm p-2 absolute left-[83%] top-[80%]"
                >
                  Cancle Order
                </Button>
              )}
            </div>
          </Fragment>
        );
      })}
    </>
  );
};

export default OrderCard;
