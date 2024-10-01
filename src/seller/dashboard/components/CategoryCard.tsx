import HeadingTypo from "../../../components/common/HeadingTypo";
import Label from "../../../components/common/Label";
import Select from "../../../components/common/Select";
import Option from "../../../components/common/Option";
import ParaTypo from "../../../components/common/ParaTypo";
import { FormProps } from "../pages/product/Product";

interface CategoryCardProps extends FormProps{}

const CategoryCard = ({register,errors}:CategoryCardProps) => {
  
  return (
    <div className="border-2 border-gray-300 p-3 rounded-md grow w-full">
      <HeadingTypo className="text-2xl font-semibold">Category</HeadingTypo>
      <div className="flex flex-col">
        <Label className="text-[17px] opacity-75 my-2">Product Category</Label>
        <Select {...register('category')}  name="category" className="h-[50px] text-xl">
          <Option value="" defaultChecked>
            Select Category
          </Option>
          <Option value="fashion">Fashion</Option>
          <Option value="electronic">Electronic</Option>
          <Option value="grosery">Grosery</Option>
          <Option value="Kitchen">Kitchen</Option>
          <Option value="decoration">Decoration</Option>
          <Option value="others">Others</Option>
        </Select>
        <ParaTypo className="text-red-500 text-[13px]">{errors.category?.message}</ParaTypo>
      </div>
    </div>
  );
};

export default CategoryCard;
