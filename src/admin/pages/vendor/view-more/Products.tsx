import { Edit, Layers, Trash } from "lucide-react";
import ParaTypo from "../../../../components/common/ParaTypo";
import { useMutation } from "../../../../utils/useMutation";
import { useQuery } from "../../../../utils/useQuery";

const Products = () => {
  const { mutate } = useMutation();

  const { data } = useQuery<any>("/product/myproduct");
  console.log("dd", data);

  const productDeleteHandler = (id: string) => {
    mutate(`/product/${id}`, "DELETE", { id });
  };

  return (
    <div>
      <div className="bg-white ">
        <table className="w-full overflow-auto text-base text-center rounded-md shadow-md">
          <thead>
            <tr className="border-2 border-gray-300">
              <th className="p-3">Product</th>
              <th className="p-3">Product Id</th>
              <th className="p-3">Price</th>
              <th className="p-3">Brand</th>
              <th className="p-3">Category</th>
              <th className="p-3">Review</th>
              <th className="p-3">Total Sale</th>
              <th className="p-3">Added Date</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {data &&
              data.map((product: any) => (
                <tr className="border-2 border-gray-300  text-base">
                  <td className="flex flex-col items-center p-2">
                    <img
                      className="lg:h-[60px] h-[40px] rounded-md"
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
                  <td>Rs {product.price}</td>
                  <td>{product.brand}</td>
                  <td>{product.category}</td>
                  <td>22</td>
                  <td>20</td>
                  <td>2024-03-11</td>
                  <td className="flex justify-around items-start gap-x-1 px-3">
                    <Trash
                      onClick={() => productDeleteHandler(product._id)}
                      strokeWidth={0.9}
                      className="cursor-pointer size-4 md:size-5"
                    />
                    <Layers
                      color={`${data?.stock === 0 ? "red" : "green"}`}
                      strokeWidth={0.9}
                      className="cursor-pointer size-4 md:size-5"
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
