import { useEffect, useRef, useState } from "react";
import { navList } from "../../constants/NavList";
import { Link, useNavigate } from "react-router-dom";
import { Heart, ShoppingCart, Store, User } from "lucide-react";
import AccountDropdown from "../popup/AccountDropdown";
import logo from "../../assets/logo.jpg";
import SearchBox from "../common/Search";
import ParaTypo from "../common/ParaTypo";
import { useQuery } from "../../utils/useQuery";
import { useContextProvider } from "../../context/Context";

// type CountType={
//   wishListCount:number
//   cartCount:number
// }

const Navbar = () => {
  const [dropdown, setDropdown] = useState<boolean>(false);
  const [cart, setCart] = useState(0);
  const navigate = useNavigate();
  const dropDownRef = useRef<HTMLDivElement>(null);
  const { data } = useQuery<any>("/product/cartandwishlist/count");
  const { user } = useContextProvider();

  const popupCloser = (e: MouseEvent) => {
    if (
      !dropDownRef.current?.contains(e.target as Node) ||
      dropDownRef.current?.contains(e.target as Node)
    ) {
      setDropdown(false);
    }
  };

  useEffect(() => {
    function storageHandler() {
      let cartCount = Number(localStorage.getItem("cartCount"));
      setCart(cartCount);
    }
    document.addEventListener("click", popupCloser);
    window.addEventListener("cartCount", storageHandler);

    return () => {
      document.removeEventListener("click", popupCloser);
      window.removeEventListener("cartCount", storageHandler);
    };
  }, []);

  useEffect(() => {
    if (data) {
      setCart(data?.cartCount);
      localStorage.setItem("cartCount", data?.cartCount);
    }
  }, [data]);

  return (
    <nav className="flex justify-between items-center container ">
      <Link to={"/"}>
        <img src={logo} className="w-[80px] mr-10 hidden sm:block" alt="" />
      </Link>
      <ul className=" hidden md:flex items-center gap-x-7">
        {navList.map((ele, index) => {
          return (
            <Link key={index} to={ele.path}>
              <li>{ele.name}</li>
            </Link>
          );
        })}
      </ul>
      <div className="flex items-center w-full md:w-[35%]  ">
        <SearchBox className="w-full" />
        {user && (user.role == "customer" || user?.role == "seller") && (
          <div className="flex gap-x-6">
            {user.role == "seller" && (
              <Store
                onClick={() => navigate("/dashboard")}
                className="cursor-pointer hidden lg:block"
                opacity={0.7}
              />
            )}
            <div className="relative">
              <Heart
                onClick={() => navigate("/wishlist")}
                className="cursor-pointer hidden lg:block"
                opacity={0.7}
              />
              <ParaTypo className="absolute hidden lg:block left-[90%] -top-[70%] text-red-500">
                {data?.wishListCount}
              </ParaTypo>
            </div>
            <div className="relative">
              <ShoppingCart
                onClick={() => navigate("/cart")}
                className="cursor-pointer hidden lg:block"
                opacity={0.7}
              />
              <ParaTypo className="absolute hidden lg:block left-[90%] -top-[70%] text-red-500">
                {cart}
              </ParaTypo>
            </div>
            <div className="relative">
              <User
                onClick={(e) => {
                  setDropdown(!dropdown), e.stopPropagation();
                }}
                className="cursor-pointer"
                opacity={0.7}
              />
              {dropdown && (
                <AccountDropdown
                  cartCount={data?.cartCount}
                  wishListCount={data?.wishListCount}
                  ref={dropDownRef}
                  className="absolute -left-[212px]  top-10 z-10"
                />
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
