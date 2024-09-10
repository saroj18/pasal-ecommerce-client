import HeadingTypo from "../../../../components/common/HeadingTypo";
import ParaTypo from "../../../../components/common/ParaTypo";
import Select from "../../../../components/common/Select";
import Option from "../../../../components/common/Option";
import Button from "../../../../components/common/Button";
import { useMutation } from "../../../../utils/useMutation";
import React, { ChangeEvent, useEffect, useState } from "react";

const FilterBar = ({
  setProduct,
}: {
  setProduct: React.Dispatch<React.SetStateAction<any[]>>;
}) => {
  const [filter, setFilter] = useState({
    category: "",
    brand: "",
    price: 0,
    rating: 0,
  });
  const { mutate, data } = useMutation<any>();
  const [id, setId] = useState(1);

  const changeHandler = (e: ChangeEvent<HTMLSelectElement>, name: string) => {
    const list = { ...filter, [name]: e.target.value };
    setFilter(list);
    mutate("/product/filter?id=" + id, "POST", list);
  };

  useEffect(() => {
    if (data) {
      setProduct(data);
    }
  }, [data]);

  const clickHandler = (id: number) => {
    setId(id);
    mutate("/product/filter?id=" + id, "POST", filter);
  };

  return (
    <section className="border-gray-300 border-2 h-fit sticky top-28 left-0 w-full max-w-[250px] rounded-md shadow-md mr-5 px-4 py-2">
      <div className="flex justify-between relative items-center border-b-2 py-2">
        <HeadingTypo className=" text-xl">Filter</HeadingTypo>
        {/* <X className="absolute cursor-pointer top-1 left-[90%]" /> */}
      </div>
      <div className="my-3">
        <ParaTypo className="font-semibold text-xl my-3">Sort Price</ParaTypo>
        <div className="flex justify-between">
          <Button onClick={() => clickHandler(-1)} className="p-2 bg-green-500">
            High to Low
          </Button>
          <Button onClick={() => clickHandler(1)} className="p-2 bg-red-500">
            Low to High
          </Button>
        </div>
      </div>
      <hr />
      <ParaTypo className="text-xl font-semibold my-2">By Brand</ParaTypo>
      <Select
        onChange={(e) => changeHandler(e, "brand")}
        className="w-full my-2"
      >
        <Option value="">None</Option>
        <Option value="Samsung">Samsung</Option>
        <Option value="Mohit">Mohit</Option>
      </Select>
      <hr />
      <div className="my-2 ">
        <ParaTypo className="font-semibold text-xl my-3">By Price</ParaTypo>

        <Select onChange={(e) => changeHandler(e, "price")} className="w-full">
          <Option value="">None</Option>
          <Option value="0-999">0-999</Option>
          <Option value="1000-4999">1000-4999</Option>
          <Option value="5000-14999">5000-14999</Option>
          <Option value="15000-24999">15000-24999</Option>
          <Option value="25000">Above 25000</Option>
        </Select>
      </div>
      <hr />
      <div className="my-2">
        <ParaTypo className="font-semibold text-xl my-3">By Rating</ParaTypo>
        <Select onChange={(e) => changeHandler(e, "rating")} className="w-full">
          <Option value="">None</Option>
          <Option value="01">0-1</Option>
          <Option value="12">1-2</Option>
          <Option value="23">2-3</Option>
          <Option value="34">3-4</Option>
          <Option value="45">4-5</Option>
        </Select>
      </div>
      <hr />
      <div className="my-2">
        <ParaTypo className="font-semibold text-xl my-3">By Category</ParaTypo>
        <Select
          onChange={(e) => changeHandler(e, "category")}
          className="w-full"
        >
          <Option value="">None</Option>
          <Option value="grosery">Grocery</Option>
          <Option value="electronic">Electronic</Option>
        </Select>
      </div>
      <hr />
    </section>
  );
};

export default FilterBar;
