import React from "react";
import logo from "../../assets/logo.jpg";
import HeadingTypo from "../../components/common/HeadingTypo";

const Navbar = () => {
  return (
    <nav className="flex container items-center justify-around border-2">
      <img src={logo} className="h-[100px]" alt="" title="pasal" />
      <HeadingTypo className="text-5xl uppercase font-bold">
        WelCome on Pasal
      </HeadingTypo>
    </nav>
  );
};

export default Navbar;
