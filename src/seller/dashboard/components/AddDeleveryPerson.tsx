import React, { Fragment } from "react";
import HeadingTypo from "../../../components/common/HeadingTypo";
import Label from "../../../components/common/Label";
import Input from "../../../components/common/Input";
import Select from "../../../components/common/Select";
import Option from "../../../components/common/Option";
import Button from "../../../components/common/Button";

type addDeleveryPersonOptions = {
  children: string;
  value: string;
};

type addDeleveryPersonProps = {
  lable: string;
  type: "text" | "select" | "password" | "file";
  placeholder?: string;
  options?: addDeleveryPersonOptions[];
};

const addDeleveryPerson: addDeleveryPersonProps[] = [
  {
    lable: "First Name",
    type: "text",
    placeholder: "enter your first name",
  },
  {
    lable: "Last Name",
    type: "text",
    placeholder: "enter your last name",
  },
  {
    lable: "Address",
    type: "text",
    placeholder: "enter your address",
  },
  {
    lable: "Phone",
    type: "text",
    placeholder: "enter your phone",
  },
  {
    lable: "Email",
    type: "text",
    placeholder: "enter your email",
  },
  {
    lable: "Citizenship Number",
    type: "text",
    placeholder: "enter your citizenship number",
  },
  {
    lable: "Gender",
    type: "select",
    options: [
      {
        children: "Male",
        value: "male",
      },
      {
        children: "Female",
        value: "female",
      },
      {
        children: "Other",
        value: "other",
      },
    ],
  },
  {
    lable: "Password",
    type: "password",
    placeholder: "enter your password",
  },
  {
    lable: "ID Document",
    type: "file",
  },
];

const AddDeleveryPerson = () => {
  return (
    <div>
      <div className=" border-2 border-gray-300 rounded-md p-4 mt-5 bg-white shadow-md">
        <HeadingTypo className="text-2xl font-semibold underline mb-2 ">
          Add Delevery Person
        </HeadingTypo>
        <form className="grid grid-cols-3 gap-x-3">
          {addDeleveryPerson.map((ele, index) => {
            let input =
              ele.type == "select" ? (
                <div key={index} className="flex flex-col">
                  <Label className=" my-1">{ele.lable}</Label>
                  <Select className="h-[50px]">
                    {ele.options?.map((ele, index) => {
                      return <Option value={ele.value}>{ele.children}</Option>;
                    })}
                  </Select>
                </div>
              ) : (
                <div key={index} className="flex flex-col">
                  <Label className="text-xl my-1">{ele.lable}</Label>
                  <Input
                    className="h-[50px]"
                    type={ele.type}
                    placeholder={ele.placeholder}
                  />
                </div>
              );
            return input;
          })}
        </form>
        <Button className="bg-red-500 rounded-md px-4 py-2 text-white mt-4">
          Create
        </Button>
      </div>
    </div>
  );
};

export default AddDeleveryPerson;
