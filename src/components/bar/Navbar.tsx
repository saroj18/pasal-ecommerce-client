import React, { useEffect, useRef, useState } from "react";
import { navList } from "../../constants/NavList";
import { Link, useNavigate } from "react-router-dom";
import { Heart, Search, ShoppingCart, User } from "lucide-react";
import AccountDropdown from "../popup/AccountDropdown";
import logo from "../../assets/logo.jpg";
import SearchBox from "../common/Search";

const Navbar = () => {
  const [dropdown, setDropdown] = useState<boolean>(false);
  const navigate = useNavigate();
  const dropDownRef = useRef<HTMLDivElement>(null);

  const popupCloser = (e: MouseEvent) => {
    if (!dropDownRef.current?.contains(e.target as Node) || dropDownRef.current?.contains(e.target as Node)) {
      setDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", popupCloser);

    return () => document.removeEventListener("click", popupCloser);
  }, []);

  return (
    <nav className="flex justify-between items-center container">
      <Link to={'/'}><img src={logo} className="w-[80px]" alt="" /></Link>
      <ul className="flex items-center gap-x-7">
        {navList.map((ele, index) => {
          return (
            <Link key={index} to={ele.path}>
              <li>{ele.name}</li>
            </Link>
          );
        })}
      </ul>
      <div className="flex items-center  w-[35%] ">
        <SearchBox className="w-full" />
        <div className="flex gap-x-6">
          <Heart
            onClick={() => navigate("/wishlist")}
            className="cursor-pointer"
            opacity={0.7}
          />
          <ShoppingCart
            onClick={() => navigate("/cart")}
            className="cursor-pointer"
            opacity={0.7}
          />
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
                ref={dropDownRef}
                className="absolute -left-36 top-12 z-10"
              />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
