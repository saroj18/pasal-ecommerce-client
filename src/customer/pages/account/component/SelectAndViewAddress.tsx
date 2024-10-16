import React, { useEffect, useState } from "react";
import Button from "../../../../components/common/Button";
import HeadingTypo from "../../../../components/common/HeadingTypo";
import Option from "../../../../components/common/Option";
import Select from "../../../../components/common/Select";
import { useQuery } from "../../../../hooks/useQuery";
import { OrderType } from "../../OrderCheckout";
import Shimmer from "../../../../components/common/Shimmer";
import { UserLocationType } from "../../../../types/UserLocationType";

type addressProps = {
  delevery: boolean;
  billing: boolean;
};

type AddressProps = {
  orderDetails: OrderType;
  setOrderDetails: React.Dispatch<React.SetStateAction<OrderType>>;
};

const SelectAndViewAddress = ({ setOrderDetails }: AddressProps) => {
  const [open, setOpen] = useState<addressProps>({
    delevery: false,
    billing: false,
  });
  const [address, setAddress] = useState({
    deleveryAddress: "",
    billingAddress: "",
  });

  const delevery: any[] = [];
  const billing: any[] = [];
  const { data, loading } = useQuery<UserLocationType[]>("/user/address");

  const deleveryAddressHandler = () => {
    setOpen((prv) => ({ ...prv, delevery: false }));
  };

  data &&
    (data as UserLocationType[]).forEach((ele: UserLocationType) => {
      if (
        ele.defaultAddress == "delevery" ||
        ele.defaultAddress == "deleveryandbilling"
      ) {
        delevery.push(ele);
      }
      if (
        ele.defaultAddress == "billing" ||
        ele.defaultAddress == "deleveryandbilling"
      ) {
        billing.push(ele);
      }
    });

  useEffect(() => {
    let dele = `${delevery[0]?.state} Province,${delevery[0]?.district} District,${delevery[0]?.city}-${delevery[0]?.ward},${delevery[0]?.tole} Tole,NearBy ${delevery[0]?.nearBy}`;
    let bill = `${billing[0]?.state} Province,${billing[0]?.district} District,${billing[0]?.city}-${billing[0]?.ward},${billing[0]?.tole} Tole,NearBy ${delevery[0]?.nearBy}`;
    setAddress((prv) => ({ ...prv, deleveryAddress: dele }));
    setAddress((prv) => ({ ...prv, billingAddress: bill }));
    setOrderDetails((prv) => ({
      ...prv,
      billingAddress: billing[0]?._id,
      deleveryAddress: delevery[0]?._id,
    }));
  }, [data]);

  const billingHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOrderDetails((prv) => ({ ...prv, billingAddress: e.target.value }));
    setAddress((prv) => ({ ...prv, billingAddress: e.target.title }));
  };
  const deleveryHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = JSON.parse(e.target.value);
    setOrderDetails((prv) => ({ ...prv, deleveryAddress: value.id }));
    setAddress((prv) => ({ ...prv, deleveryAddress: value.address }));
  };

  return (
    <div className="p-2 border-2 border-gray-200 shadow-md mb-2">
      <div className="border-2 p-2 rounded-md shadow-md">
        <HeadingTypo className="text-xl mb-2  ">Delevery Address</HeadingTypo>
        {loading ? (
          <Shimmer shape="rectange" />
        ) : (
          <div className="flex items-center gap-x-3">
            <HeadingTypo className="opacity-60 capitalize">
              {address.deleveryAddress}
            </HeadingTypo>
            <Button
              onClick={() => setOpen((prv) => ({ ...prv, delevery: true }))}
              className="bg-red-500 text-white px-3 py-2 rounded-md"
            >
              Change
            </Button>
          </div>
        )}
        {open.delevery && (
          <div>
            <Select
              onChange={deleveryHandler}
              className="w-full mt-4 capitalize"
            >
              {(data as UserLocationType[]).map((ele: any, index: number) => {
                const address = `${ele.state} Province,${ele.district} District,${ele.city}-${ele.ward},${ele.tole} Tole,NearBy ${ele.nearBy}`;
                return (
                  (ele.defaultAddress == "delevery" ||
                    ele.defaultAddress == "deleveryandbilling") && (
                    <Option
                      value={JSON.stringify({ address, id: ele._id })}
                      key={index}
                      className="capitalize"
                    >
                      {address}
                    </Option>
                  )
                );
              })}
            </Select>
            <Button
              onClick={deleveryAddressHandler}
              className="bg-blue-500 px-4 text-white my-2 py-2 rounded-md"
            >
              Set
            </Button>
          </div>
        )}
      </div>
      <div className="border-2 p-2 rounded-md shadow-md my-2">
        <HeadingTypo className="text-xl mb-2  ">Billing Address</HeadingTypo>
        {loading ? (
          <Shimmer shape="rectange" />
        ) : (
          <div className="flex items-center gap-x-3">
            <HeadingTypo className="opacity-60 capitalize">
              {address.billingAddress}
            </HeadingTypo>
            <Button
              onClick={() => setOpen((prv) => ({ ...prv, billing: true }))}
              className="bg-red-500 text-white px-3 py-2 rounded-md"
            >
              Change
            </Button>
          </div>
        )}
        {open.billing && (
          <div>
            <Select
              onChange={billingHandler}
              className="w-full mt-4 capitalize"
            >
              {(data as UserLocationType[]).map((ele: any, index: number) => {
                const address = `${ele.state} Province,${ele.district} District,${ele.city}-${ele.ward},${ele.tole} Tole,NearBy ${ele.nearBy}`;
                return (
                  (ele.defaultAddress == "billing" ||
                    ele.defaultAddress == "deleveryandbilling") && (
                    <Option value={ele._id} key={index} className="capitalize">
                      {address}
                    </Option>
                  )
                );
              })}
            </Select>
            <Button
              onClick={() => setOpen((prv) => ({ ...prv, billing: false }))}
              className="bg-blue-500 px-4 text-white my-2 py-2 rounded-md"
            >
              Set
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectAndViewAddress;
