import { useEffect, useState } from "react";
import { navList } from "../../constants/NavList";
import { Link, useNavigate } from "react-router-dom";
import { Heart, ShoppingCart, Store, User } from "lucide-react";
import AccountDropdown from "../popup/AccountDropdown";
import logo from "../../assets/logo.jpg";
import SearchBox from "../common/Search";
import ParaTypo from "../common/ParaTypo";
import { useQuery } from "../../hooks/useQuery";
import { useContextProvider } from "../../context/Context";
import { useAuth, UserType } from "../../context/AuthProvider";

// type CountType={
//   wishListCount:number
//   cartCount:number
// }

const Navbar = () => {
  const [dropdown, setDropdown] = useState<boolean>(false);
  const navigate = useNavigate();
  const { data } = useQuery<any>("/product/cartandwishlist/count");
  const {  cart, setCart } = useContextProvider();
  let{data:user}=useAuth()
  user=user as UserType
  const [focus, setFocus] = useState(false);
  console.log(data);

  useEffect(() => {
    if (data) {
      setCart(data?.cartCount);
    }
  }, [data]);

  return (
    <nav className="flex justify-between items-center container ">
      <Link to={"/"}>
        <img src={logo} className="md:w-[80px] mr-10 w-[50px]" alt="" />
      </Link>
      <ul className=" hidden md:flex items-center gap-x-7">
        {navList.map((ele, index) => {
          if (
            ele.path == "login" &&
            user &&
            (user.role == "customer" || user?.role == "seller")
          )
            return;
          return (
            <Link key={index} to={ele.path}>
              <li
                className={
                  ele.path == "/admin/dashboard" ? "text-green-500" : ""
                }
              >
                {ele.name}
              </li>
            </Link>
          );
        })}
      </ul>

      <div className="flex items-center w-full md:w-[35%]  ">
        <SearchBox className="w-full" focus={focus} setFocus={setFocus} />

        {!focus &&
          user &&
          (user.role == "customer" || user?.role == "seller") && (
            <div className="flex gap-x-6">
              {user.role == "seller" && (
                <Store
                  onClick={() => navigate("/dashboard")}
                  className="cursor-pointer hidden lg:block"
                  opacity={0.7}
                />
              )}

              {user.role == "customer" && (
                <>
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
                </>
              )}
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
                    className="absolute -left-[212px]  top-10 z-10"
                    setDropdown={setDropdown}
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
