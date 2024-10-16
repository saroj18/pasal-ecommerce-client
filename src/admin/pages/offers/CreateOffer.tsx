import React, { useRef, useState } from "react";
import Label from "../../../components/common/Label";
import Input from "../../../components/common/Input";
import Button from "../../../components/common/Button";
import Select from "../../../components/common/Select";
import Option from "../../../components/common/Option";
import { useQuery } from "../../../hooks/useQuery";
import { ArrowLeft } from "lucide-react";
import { toast } from "react-toastify";
import { useMutation } from "../../../hooks/useMutation";
import { ProductType } from "../../../types/ProductType";

type OfferType = {
  name: string;
  products: string[];
  discount: string;
};

const CreateOffer = () => {
  const { data } = useQuery<ProductType[]>("/product?skip=0");
  const { mutate } = useMutation();

  const [offer, setOffer] = useState<OfferType>({
    name: "",
    products: [],
    discount: "",
  });
  const [products, setProducts] = useState<any[]>([]);

  const selectRef = useRef<HTMLSelectElement | null>(null);

  const offerHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOffer({ ...offer, [e.target.name]: e.target.value });
  };

  const productAddHandler = () => {
    const check = products.find(
      (ele: any) => ele._id === selectRef.current?.value,
    );
    if (check) return toast.error("Product already added");
    if (selectRef.current?.value) {
      setOffer({
        ...offer,
        products: [...offer.products, selectRef.current.value],
      });
      const value = (data as ProductType[]).find(
        (ele: any) => ele._id === selectRef.current?.value,
      );
      setProducts([...products, value]);
    } else {
      toast.error("Please select product");
    }
  };

  const offerCreateHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!offer.name || offer.products.length < 1) {
      toast.error("Please fill all the fields");
    }

    mutate("/offers", "POST", offer);
  };
  return (
    <>
      <ArrowLeft
        onClick={() => history.back()}
        className="mt-2 cursor-pointer"
      />
      <div className="w-full mx-auto flex flex-col justify-center items-center ">
        <form className="bg-white p-2 max-w-lg w-full rounded-md">
          <h1 className="text-center my-3 text-2xl">Create Offer</h1>
          <div className="flex flex-col">
            <Label>Offer Name</Label>
            <Input
              onChange={offerHandler}
              name="name"
              value={offer.name}
              placeholder="enter offer name"
              type="text"
            />
          </div>
          <div className="flex flex-col mt-4">
            <Label>Select Products</Label>
            <Select ref={selectRef}>
              <Option value="" selected disabled>
                Select Product
              </Option>
              {data &&
                (data as ProductType[]).map((ele: any) => {
                  return (
                    <Option key={ele._id} value={ele._id}>
                      {ele.name}
                    </Option>
                  );
                })}
            </Select>
            <span
              onClick={productAddHandler}
              className="w-fit py-1 px-3 text-white rounded-md bg-green-500 mt-2 cursor-pointer mx-auto"
            >
              Add
            </span>
          </div>
          <div className="flex flex-col">
            <Label>Offer Discount</Label>
            <Input
              name="discount"
              onChange={offerHandler}
              value={offer.discount}
              placeholder="enter offer name"
              type="text"
            />
          </div>
          <Button
            onClick={offerCreateHandler}
            className="w-full mt-4 bg-red-500"
          >
            Create
          </Button>
        </form>
        <div className="flex gap-x-1">
          {products &&
            products.map((ele: any) => {
              return (
                <div
                  title={ele.name}
                  key={ele._id}
                  className="flex items-center gap-x-2 mt-2 cursor-pointer border-2 rounded-md p-1"
                >
                  <img
                    src={ele.images[0]}
                    alt=""
                    className="w-[50px] h-[50px] rounded-md"
                  />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default CreateOffer;
