import React from "react";
import Input from "./common/Input";
import { Send } from "lucide-react";

const Footer = () => {
  return (
    <section className=" bg-black  text-white mt-7 max-h-fit ">
      <div className="container flex flex-wrap gap-y-6 justify-center py-6">
        <div className="relative grow w-full max-w-[250px]">
          <h1 className="text-xl">Exclusive</h1>
          <p className="my-3">Subscribe</p>
          <p className="my-3">Get 10% off your first order</p>
        </div>
        <div className="grow w-full max-w-[250px] ">
          <h1 className="text-xl my-2">Support</h1>
          <p className="my-3">111 Bijoy sarani, Nepal</p>
          <p className="my-3">exclusive@gmail.com</p>
          <p className="my-3">+88015-88888-9999</p>
        </div>
        <div className="grow w-full max-w-[250px]">
          <h1 className="text-xl my-2">Account</h1>
          <p className="my-3">My Account</p>
          <p className="my-3">Login/Register</p>
          <p className="my-3">Cart</p>
          <p className="my-3">Wishlist</p>
          <p className="my-3">Shop</p>
        </div>
        <div className="grow w-full max-w-[250px]">
          <h1 className="text-xl my-2">Quick Link</h1>
          <p className="my-3">Privacy Policy</p>
          <p className="my-3">Terms of Use</p>
          <p className="my-3">FAQ</p>
          <p className="my-3">Contact</p>
        </div>
        <div className="grow w-full max-w-[250px]">
          <h1 className="text-xl my-2">Download App</h1>
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>
      </div>
      <p className="text-center">
        &copy; Copyright Rimel 2022. All right reserved
      </p>
    </section>
  );
};

export default Footer;
