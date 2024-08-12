import { UseFormRegister } from "react-hook-form";
import { FormInputs } from "./AddDeleveryPerson";

type addDeleveryPersonOptions = {
  children: string;
  value: string;
};

export type addDeleveryPersonProps = {
  lable: string;
  type: "text" | "select" | "password" | "file";
  placeholder?: string;
  options?: addDeleveryPersonOptions[];
  name: string;
};

export const addDeleveryPerson: addDeleveryPersonProps[] = [
  {
    lable: "First Name",
    type: "text",
    placeholder: "enter your first name",
    name: "firstname",
  },
  {
    lable: "Last Name",
    type: "text",
    placeholder: "enter your last name",
    name: "lastname",
  },
  {
    lable: "Address",
    type: "text",
    placeholder: "enter your address",
    name: "address",
  },
  {
    lable: "Phone",
    type: "text",
    placeholder: "enter your phone",
    name: "phone",
  },
  {
    lable: "Email",
    type: "text",
    placeholder: "enter your email",
    name: "email",
  },
  {
    lable: "Citizenship Number",
    type: "text",
    placeholder: "enter your citizenship number",
    name: "citiNumber",
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
    name: "gender",
  },
  {
    lable: "Password",
    type: "password",
    placeholder: "enter your password",
    name: "password",
  },
  {
    lable: "ID Document",
    type: "file",
    name: "idDocument",
  },
  {
    lable: "Profile Image",
    type: "file",
    name: "profileImage",
  },
];
