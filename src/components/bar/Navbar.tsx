import React, { useEffect, useState } from "react";
import { navList } from "../../constants/NavList";
import { Link, useNavigate } from "react-router-dom";
import Input from "../common/Input";
import { Heart, Search, ShoppingCart, User } from "lucide-react";
import AccountDropdown from "../popup/AccountDropdown";

const Navbar = () => {
  const [dropdown, setDropdown] = useState<boolean>(false);
  const navigate=useNavigate()

  const popupCloser=()=>{
    if(!dropdown){
      setDropdown(false)
    }else {
      return null
    }
  }

  useEffect(()=>{
    document.addEventListener('click',popupCloser)

    return ()=>document.removeEventListener('click',popupCloser)
  },[])

  return (
    <nav className="flex justify-between items-center container">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZRM_lRbBpez6mI1ZDq5eMBGJXCYej4SEeEpQAKwdAOA&s"
        className="w-[80px]"
        alt=""
      />
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
        <div className="relative w-full">
          <Input
            className="w-[90%]"
            type="text"
            placeholder="what are you looking for?"
          />
          <Search
            opacity={0.3}
            size={22}
            className="absolute left-[80%] top-2"
          />
        </div>
        <div className="flex gap-x-6">
          <Heart onClick={()=>navigate('/wishlist')} className="cursor-pointer" opacity={0.7} />
          <ShoppingCart onClick={()=>navigate('/cart')} className="cursor-pointer" opacity={0.7} />
          <div className="relative">
            <User
              onClick={(e) => {setDropdown(!dropdown),e.stopPropagation()}}
              className="cursor-pointer"
              opacity={0.7}
            />
            {dropdown && <AccountDropdown className="absolute -left-36 top-12" />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
