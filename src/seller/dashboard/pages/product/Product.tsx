import HeadingTypo from "../../../../components/common/HeadingTypo";
import ParaTypo from "../../../../components/common/ParaTypo";
import ProductInfo from "../../components/ProductInfo";
import ProductImage from "../../components/ProductImage";
import CategoryCard from "../../components/CategoryCard";
import PriceCard from "../../components/PriceCard";
import { Edit, Layers, Trash } from "lucide-react";
import Button from "../../../../components/common/Button";
import { productZodSchema } from "../../../zodschema/product";
import { FieldErrors, useForm, UseFormRegister } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "../../../../hooks/useMutation";
import { useQuery } from "../../../../hooks/useQuery";
import { useEffect, useState } from "react";
import Shimmer from "../../../../components/common/Shimmer";

export type ProductType = z.infer<typeof productZodSchema>;
export type FormProps = {
  register: UseFormRegister<ProductType>;
  errors: FieldErrors<ProductType>;
};

const Product = () => {
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [updateData, setUpdateData] = useState<any>();

  const { data, refetch, loading } = useQuery<any>("/product/myproduct");
  const { mutate, data: mutateData, loading: mutateLoading } = useMutation();

  console.log(mutateData);
  const {
    register,
    trigger,
    setValue,
    reset,
    setError,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductType>({
    resolver: zodResolver(productZodSchema),
    defaultValues: {
      name: "DSLR Camera",
      brand: "Samsung",
      category: "electronic",
      price: "12000",
      discount: "12",
      stock: "44",
      description: `Discover the power of professional photography with this high-performance DSLR camera. Designed for photographers of all levels, it offers an exceptional blend of quality, versatility, and durability.

    At its core, this DSLR boasts a high-resolution sensor, ensuring every shot is captured with stunning detail and clarity. Whether you're shooting wide landscapes or intricate portraits, the image quality is unparalleled. The fast autofocus system guarantees sharp images, even in challenging conditions or with moving subjects.

    One of the standout features is its interchangeable lens system. From wide-angle to telephoto, you have the freedom to choose the perfect lens for any situation, expanding your creative possibilities. The optical viewfinder provides a true-to-life, lag-free view of your scene, making composition easy and intuitive.`,
      chating: "enable",
      barganing: "enable",
    },
  });

  useEffect(() => {
    if (edit && updateData) {
      reset({
        name: updateData?.name || "",
        brand: updateData?.brand || "",
        category: updateData?.category || "",
        price: updateData?.price.toString() || "",
        discount: updateData?.discount || "",
        stock: updateData?.stock.toString() || 0,
        description: updateData?.description || "",
        chating: updateData?.chating || "",
        barganing: updateData?.barganing || "",
        images: "UPDATE",
      });
    }
  }, [edit, updateData, reset]);

  useEffect(() => {
    if (mutateData && edit) {
      setOpen(false);
      setEdit(false);
    }
  }, [mutateData]);

  const formData = new FormData();

  const onSubmit = (data: ProductType) => {
    if (data.features.length < 5) {
      setError("features", {
        message: "Atleast 5 features are required",
      });
      return;
    }
    const productInfo: { [key: string]: string } = {};
    Object.entries(data).forEach(([key, value]) => {
      if (key != "images") {
        productInfo[key] = value;
      } else {
        for (let i = 0; i < value.length; i++) {
          formData.append("images", value[i]);
        }
      }
    });
    formData.append("productInfo", JSON.stringify(productInfo));
    if (edit)
      mutate(`/product/${updateData._id}`, "POST", productInfo, refetch);
    else mutate("/product/add", "POST", formData, refetch);
    // reset();
  };

  const productDeleteHandler = (id: string) => {
    mutate(`/product/${id}`, "DELETE", refetch);
  };

  const editHandler = async (id: string) => {
    const resp = await fetch(import.meta.env.VITE_HOST + "/product/" + id);
    const respData = await resp.json();
    if (respData.success) {
      setOpen(true);
      setEdit(true);
      setUpdateData(respData.data);
    }
  };

  const formToogleHandler = () => {
    setOpen((prv) => !prv);
    setEdit(false);
  };

  return (
    <div>
      <HeadingTypo className="text-3xl">Add Product</HeadingTypo>
      <ParaTypo className="opacity-75 text-[15px]">
        Add your product for your customer
      </ParaTypo>

      <Button onClick={formToogleHandler} className="bg-green-500 my-4">
        {open ? "Close Form" : "Product Add"}
      </Button>

      {open && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col lg:flex-row gap-7 mt-5">
            <ProductInfo
              setValue={setValue}
              getValues={getValues}
              errors={errors}
              register={register}
            />
            <div className="flex grow flex-col border-2 border-gray-300 shadow-md rounded-md sm:p-5 gap-y-3 bg-white ">
              <div className=" gap-y-5 flex items-start flex-col md:flex-row gap-x-3">
                <ProductImage
                  setValue={setValue}
                  trigger={trigger}
                  errors={errors}
                  register={register}
                  updateData={updateData}
                />
                <CategoryCard errors={errors} register={register} />
              </div>
              <PriceCard
                updateData={updateData}
                setValue={setValue}
                errors={errors}
                register={register}
              />
            </div>
          </div>
          <Button
            disabled={mutateLoading}
            className={`bg-red-500 px-6 py-2 rounded-md text-white my-2 ${mutateLoading ? "cursor-progress" : "cursor-pointer"}`}
          >
            {edit ? "Update Product" : "Add Product"}
          </Button>
        </form>
      )}

      <div className="relative flex flex-col sm:flex-row items-center sm:justify-between  my-4">
        <div className="my-4">
          <HeadingTypo className="sm:text-3xl text-2xl ">
            Product Lists
          </HeadingTypo>
          <ParaTypo className="sm:text-[15px] text-xs opacity-75">
            See all your's products
          </ParaTypo>
        </div>
        {/* <SearchBox className="sm:max-w-[55%] md:max-w-[50%] lg:max-w-[30%] w-full" /> */}
      </div>
      <hr />
      {loading ? <Shimmer height="100px" count={5} shape="rectange" /> : null}
      {data?.length < 1 ? (
        <HeadingTypo className="text-center font-semibold text-xl">
          0 Product Found
        </HeadingTypo>
      ) : (
        <div className="bg-white overflow-auto ">
          <table className="w-full text-base text-center rounded-md shadow-md">
            <thead>
              <tr className="border-2 border-gray-300">
                <th className="p-3 whitespace-nowrap">Product</th>
                <th className="p-3 whitespace-nowrap">Product Id</th>
                <th className="p-3 whitespace-nowrap">Price</th>
                <th className="p-3 whitespace-nowrap">Discount</th>
                <th className="p-3 whitespace-nowrap">PAD</th>
                <th className="p-3 whitespace-nowrap">Brand</th>
                <th className="p-3 whitespace-nowrap">Category</th>
                <th className="p-3 whitespace-nowrap">Review</th>
                <th className="p-3 whitespace-nowrap">Total Sale</th>
                <th className="p-3 whitespace-nowrap">Added Date</th>
                <th className="p-3 whitespace-nowrap">Action</th>
              </tr>
            </thead>

            <tbody>
              {data &&
                data.map((product: any) => (
                  <tr
                    key={product?._id}
                    className="border-2 border-gray-300  text-base"
                  >
                    <td className="flex flex-col items-center p-2 whitespace-nowrap">
                      <img
                        className="lg:h-[80px] h-[40px] rounded-md"
                        src={product.images[0]}
                        alt=""
                      />
                      <ParaTypo
                        title={product.name}
                        className="text-sm lg:text-base max-w-xs truncate"
                      >
                        {product.name.slice(0, 30)}
                      </ParaTypo>
                    </td>
                    <td title={product._id}>{product._id.slice(15)}</td>
                    <td className="whitespace-nowrap">Rs {product.price}</td>
                    <td>{product.discount}%</td>
                    <td className="whitespace-nowrap">
                      Rs {product.priceAfterDiscount}
                    </td>
                    <td className="whitespace-nowrap">{product.brand}</td>
                    <td className="whitespace-nowrap">{product.category}</td>
                    <td className="whitespace-nowrap">
                      {product?.review?.length}
                    </td>
                    <td className="whitespace-nowrap">{product.totalSale}</td>
                    <td className="whitespace-nowrap">2024-03-11</td>
                    <td className="flex justify-around items-start gap-x-1 px-3">
                      <Trash
                        onClick={() => productDeleteHandler(product._id)}
                        strokeWidth={0.9}
                        className="cursor-pointer size-4 md:size-5"
                      />
                      <Edit
                        onClick={() => editHandler(product._id)}
                        strokeWidth={0.9}
                        className="cursor-pointer size-4 md:size-5"
                      />
                      <Layers
                        color={`${product.stock === 0 ? "red" : "green"}`}
                        strokeWidth={0.9}
                        className="cursor-pointer size-4 md:size-5"
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Product;
