import HeadingTypo from "../../../../components/common/HeadingTypo";
import ParaTypo from "../../../../components/common/ParaTypo";
import SearchBox from "../../../../components/common/Search";
import jacket from "../../../../assets/jacket.png";
import Button from "../../../../components/common/Button";
import { useMutation } from "../../../../utils/useMutation";
import { useQuery } from "../../../../utils/useQuery";

const Order = () => {
  const { data } = useQuery<any>("/order/sellerorder");
  console.log(data);

  return (
    <div className="overflow-auto">
      <div className="flex flex-col md:flex-row w-full justify-between md:justify-around lg:justify-between items-center sticky left-0 top-0">
        <div>
          <HeadingTypo className="text-2xl">Order List</HeadingTypo>
          <ParaTypo className="text-[15px] opacity-75">
            All ordered list
          </ParaTypo>
        </div>
        <SearchBox className="w-full md:max-w-[45%] lg:max-w-[30%]" />
      </div>

      <table className="w-full text-sm md:text-base text-center mt-5 bg-white shadow-md">
        <thead>
          <tr className="sticky top-0 left-0 bg-white border-t-2">
            <th className="p-4">Product</th>
            <th className="p-4">Product ID</th>
            <th className="p-4">Order By</th>
            <th className="p-4">Order Date</th>
            <th className="p-4">Order Time</th>
            <th className="p-4">Payment</th>
            <th className="p-4">Discount</th>
            <th className="p-4">Amount</th>
            <th className="p-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((ele: any, index: number) => {
              return (
                <tr key={index} className="border-b-2 border-t-2 capitalize ">
                  <td
                    title={ele.orderProducts?.name}
                    className="p-2 flex flex-col items-center justify-center gap-x-2"
                  >
                    <img
                      className="w-[60px] border-2 border-gray-300 shadow-md rounded-md p-1"
                      src={ele.orderProducts?.images[0]}
                    />{" "}
                    {ele.orderProducts?.name.slice(0, 20)}...
                  </td>
                  <td title={ele.product} className="p-2">
                    {ele.product.slice(15)}
                  </td>
                  <td title={ele.customer[0]._id} className="p-2">
                    {ele.customer[0].fullname}
                  </td>
                  <td className="p-2">
                    {new Date(ele.createdAt).toDateString()}
                  </td>
                  <td className="p-2">
                    {new Date(ele.createdAt).toLocaleTimeString()}
                  </td>
                  <td className="p-2">{ele.payMethod}</td>
                  <td className="p-2">{ele.orderProducts?.discount}%</td>
                  <td className="p-2">Rs {ele.orderProducts?.price}</td>
                  <td className="p-2 flex gap-1 flex-col items-center">
                    <Button className="bg-green-500 px-3 w-full py-2 text-white rounded-md">
                      Placed
                    </Button>
                    <Button className="bg-red-500 px-3 w-full py-2 text-white  rounded-md">
                      Cancel
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Order;
