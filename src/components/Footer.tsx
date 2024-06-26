import React from "react";
import Input from "./common/Input";
import { Send } from "lucide-react";

const Footer = () => {
  return (
    <section className=" bg-black text-white mt-7 max-h-[360px] h-screen">
      <div className="container flex justify-between py-6">
        <div className="relative">
          <h1 className="text-xl">Exclusive</h1>
          <p className="my-3">Subscribe</p>
          <p className="my-3">Get 10% off your first order</p>
          <Input type="text" placeholder="enter your email" className="bg-transparent" />
          <Send opacity={0.5} size={20} className="absolute left-[85%] top-[55%]"/>
        </div>
        <div>
          <h1 className="text-xl my-2">Support</h1>
          <p className="my-3">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh</p>
          <p className="my-3">exclusive@gmail.com</p>
          <p className="my-3">+88015-88888-9999</p>
        </div>
        <div>
          <h1 className="text-xl my-2">Account</h1>
          <p className="my-3">My Account</p>
          <p className="my-3">Login/Register</p>
          <p className="my-3">Cart</p>
          <p className="my-3">Wishlist</p>
          <p className="my-3">Shop</p>
        </div>
        <div>
          <h1 className="text-xl my-2">Quick Link</h1>
          <p className="my-3">Privacy Policy</p>
          <p className="my-3">Terms of Use</p>
          <p className="my-3">FAQ</p>
          <p className="my-3">Contact</p>
        </div>
        <div>
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
