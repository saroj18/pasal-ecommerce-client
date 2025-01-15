import { useNavigate } from "react-router-dom";

const Footer:React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className=" bg-black  text-white mt-7 max-h-fit ">
      <div className="container flex flex-wrap gap-y-6 justify-center md:justify-between py-6">
        <div className="grow w-full max-w-[250px] ">
          <h1 className="text-xl my-2">Support</h1>
          <p className="my-3">Kathmandu, Nepal</p>
          <p className="my-3">pasal@gmail.com</p>
          <p className="my-3">+997-9876543210</p>
        </div>
        <div className="relative grow w-full max-w-[250px]">
          <h1 className="text-xl">Exclusive</h1>
          <p className="my-3">Get discount on your every order</p>
        </div>
        <div className="grow w-full max-w-[250px]">
          <h1 className="text-xl my-2">Account</h1>
          <p
            onClick={() => navigate("/account")}
            className="my-3 cursor-pointer"
          >
            My Account
          </p>
          <p onClick={() => navigate("/cart")} className="my-3 cursor-pointer">
            Cart
          </p>
          <p
            onClick={() => navigate("/wishlist")}
            className="my-3 cursor-pointer"
          >
            Wishlist
          </p>
          <p
            onClick={() => navigate("/allproducts")}
            className="my-3 cursor-pointer"
          >
            Products
          </p>
        </div>
      </div>
      <p className="text-center">
        &copy; Copyright Reserve 2024. All right reserved
      </p>
    </section>
  );
};

export default Footer;
