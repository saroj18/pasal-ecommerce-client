import  { useEffect, useRef, useState } from "react";
import { navList } from "../../constants/NavList";
import { Link, useNavigate } from "react-router-dom";
import { Heart, ShoppingCart, User } from "lucide-react";
import AccountDropdown from "../popup/AccountDropdown";
import logo from "../../assets/logo.jpg";
import SearchBox from "../common/Search";
import ParaTypo from "../common/ParaTypo";
import { useQuery } from "../../utils/useQuery";

// type CountType={
//   wishListCount:number
//   cartCount:number
// }

const Navbar = () => {
  const [dropdown, setDropdown] = useState<boolean>(false);
  const navigate = useNavigate();
  const dropDownRef = useRef<HTMLDivElement>(null);
  const {data}=useQuery<any>('/product/cartandwishlist/count')

  const popupCloser = (e: MouseEvent) => {
    if (
      !dropDownRef.current?.contains(e.target as Node) ||
      dropDownRef.current?.contains(e.target as Node)
    ) {
      setDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", popupCloser);

    return () => document.removeEventListener("click", popupCloser);
  }, []);

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
        <div className="flex gap-x-6">
          <div className="relative">
          <Heart
            onClick={() => navigate("/wishlist")}
            className="cursor-pointer hidden lg:block"
            opacity={0.7}
          />
          <ParaTypo className="absolute hidden lg:block left-[90%] -top-[70%] text-red-500">{data?.wishListCount}</ParaTypo>
          </div>
          <div className="relative">
            <ShoppingCart
              onClick={() => navigate("/cart")}
              className="cursor-pointer hidden lg:block"
              opacity={0.7}
            />
            <ParaTypo className="absolute hidden lg:block left-[90%] -top-[70%] text-red-500">{data?.cartCount}</ParaTypo>
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
      </div>
    </nav>
  );
};

export default Navbar;
