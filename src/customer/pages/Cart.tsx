import ParaTypo from "../../components/common/ParaTypo";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { Link } from "react-router-dom";
import { useQuery } from "../../hooks/useQuery";
import { Trash } from "lucide-react";
import { useMutation } from "../../hooks/useMutation";
import Shimmer from "../../components/common/Shimmer";
import { useEffect } from "react";
import { useContextProvider } from "../../context/Context";

const Cart = () => {
  const {
    data,
    refetch,
    loading: cartLoading,
  } = useQuery<any>("/product/cart", false);
  const { mutate, data: cartData } = useMutation();
  const { setCart } = useContextProvider();

  const cartDeleteHandler = (id: string) => {
    mutate("/product/cart", "DELETE", { productId: id }, refetch);
    setCart((prv) => prv - 1);
  };
  useEffect(() => {
    let cartValue = Number(localStorage.getItem("cartCount"));
    if (cartValue < 0) return;
    if (typeof cartData == "object") {
      localStorage.setItem("cartCount", JSON.stringify(cartValue - 1));
    }
  }, [cartData]);

  return (
    <div className="grid overflow-auto">
      {cartLoading ? (
        <Shimmer count={4} height="100px" shape="rectange" />
      ) : (
        <table className="w-full text-center">
          <thead>
            <tr>
              <th className="p-8">Product</th>
              <th className="p-8">Price</th>
              <th className="p-8">Quantity</th>
              <th className="p-8">Subtotal</th>
              <th className="p-8">Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((ele: any, index: number) => (
              <tr key={index} className=" my-8 border-b-2 border-t-2 ">
                <td className="p-4 ">
                  <img
                    className="w-[50px] mx-auto "
                    src={ele?.product.images?.[0]}
                    alt=""
                  />
                  <ParaTypo title={ele?.product.name} className="text-sm">
                    {ele?.product.name.slice(0, 30)}...
                  </ParaTypo>
                </td>
                <td className="p-4">Rs {ele?.product.priceAfterDiscount}</td>
                <td className="p-4">
                  <Input
                    type="number"
                    readOnly
                    value={ele?.productCount}
                    className="w-[60px] text-center font-bold"
                  />
                </td>
                <td className="p-4">
                  Rs {ele?.product.priceAfterDiscount * ele?.productCount}
                </td>
                <td className="p-4">
                  <Trash
                    onClick={() => cartDeleteHandler(ele?._id)}
                    className="mx-auto cursor-pointer"
                    strokeWidth={0.9}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {!data && (
        <ParaTypo className="text-center text-4xl font-semibold">
          0 Item on Cart
        </ParaTypo>
      )}
      {data && (
        <Link className="sm:place-self-end place-self-start" to={"/checkout"}>
          <Button className="bg-blue-500 text-white rounded-md px-3 py-2 mt-4  ">
            Go to Checkout
          </Button>
        </Link>
      )}

      <div className="w-fit mx-auto">
        <Link to={"/allproducts"}>
          <Button className="bg-red-500 text-white py-2 px-4 rounded-md mt-6 ">
            Back to Shopping
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
