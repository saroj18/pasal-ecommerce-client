import AddAddressForm from "../../customer/pages/account/page/AddAddressForm";

const SellerAddress = () => {
  return (
    <div className="bg-gray-200 flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl my-4">Let's Verify YourSelf</h1>
      <AddAddressForm />;
    </div>
  );
};

export default SellerAddress;
