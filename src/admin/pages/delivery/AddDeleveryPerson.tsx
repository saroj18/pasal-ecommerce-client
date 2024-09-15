import HeadingTypo from "../../../components/common/HeadingTypo";
import Label from "../../../components/common/Label";
import Input from "../../../components/common/Input";
import Select from "../../../components/common/Select";
import Option from "../../../components/common/Option";
import Button from "../../../components/common/Button";
import { addDeleveryPerson, addDeleveryPersonProps } from "./constant";
import { SubmitHandler, useForm } from "react-hook-form";
import { DeleveryPersonZodSchema } from "../../zodSchema/deleveryPerson";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "../../../hooks/useMutation";

export type FormInputs = z.infer<typeof DeleveryPersonZodSchema>;

const AddDeleveryPerson = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(DeleveryPersonZodSchema),
  });
  const { mutate } = useMutation();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]: [string, any]) => {
      if (typeof value == "object") {
        formData.append("images", value[0]);
      } else {
        formData.append(key, value);
      }
    });

    mutate("/deleveryperson", "POST", formData);
  };

  return (
    <div>
      <div className=" border-2 border-gray-300 rounded-md p-4 mt-5 bg-white shadow-md ">
        <HeadingTypo className="text-2xl font-semibold underline mb-2 ">
          Add Delevery Person
        </HeadingTypo>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-x-3"
        >
          {addDeleveryPerson.map((ele: addDeleveryPersonProps, index) => {
            let input =
              ele.type == "select" ? (
                <div key={index} className="flex flex-col">
                  <Label className=" my-1">{ele.lable}</Label>
                  <Select
                    {...register(ele.name as keyof FormInputs)}
                    className="h-[50px]"
                  >
                    {ele.options?.map((ele, index) => {
                      return (
                        <Option key={index} value={ele.value}>
                          {ele.children}
                        </Option>
                      );
                    })}
                  </Select>
                  {errors[ele.name as keyof FormInputs]?.message && (
                    <p className="text-red-500 text-sm">
                      {errors[ele.name as keyof FormInputs]?.message as string}
                    </p>
                  )}
                </div>
              ) : (
                <div key={index} className="flex flex-col">
                  <Label className="text-xl my-1">{ele.lable}</Label>
                  <Input
                    {...register(ele.name as keyof FormInputs)}
                    className="h-[50px]"
                    type={ele.type}
                    placeholder={ele.placeholder}
                  />
                  {errors[ele.name as keyof FormInputs]?.message && (
                    <p className="text-red-500 text-sm">
                      {errors[ele.name as keyof FormInputs]?.message as string}
                    </p>
                  )}
                </div>
              );
            return input;
          })}
          <Button className="bg-red-500 w-full md:max-w-fit rounded-md px-4 py-2 text-white mt-4">
            Add
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddDeleveryPerson;
