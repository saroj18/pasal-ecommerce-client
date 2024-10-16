import React, { useEffect, useRef } from "react";
import ParaTypo from "../common/ParaTypo";
import { twMerge } from "tailwind-merge";
import {
  Heart,
  LogIn,
  LogOut,
  ShoppingBag,
  ShoppingCart,
  StarIcon,
  User,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthProvider";

type dropdownProps = {
  className: string;
  cartCount: number;
  wishListCount: number;
  setDropdown: React.Dispatch<React.SetStateAction<boolean>>;
};

const AccountDropdown = React.forwardRef<HTMLDivElement, dropdownProps>(
  ({ className, cartCount, wishListCount, setDropdown }, ref) => {
    const navigate = useNavigate();
    const { data } = useAuth();
    const dropDownRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      const popupCloser = (e: MouseEvent) => {
        if (
          !dropDownRef.current?.contains(e.target as Node) ||
          dropDownRef.current?.contains(e.target as Node)
        ) {
          setDropdown(false);
        }
      };

      document.addEventListener("click", popupCloser);

      return () => {
        document.removeEventListener("click", popupCloser);
      };
    }, []);

    const logOutHandler = async () => {
      try {
        const resp = await fetch(import.meta.env.VITE_HOST + "/user/logout", {
          method: "GET",
          credentials: "include",
        });
        const data = await resp.json();
        if (data.success) {
          toast.success(data.message);
          // setUser(null);
          navigate("/login", { replace: true });
          window.location.reload();
        } else {
          toast.error(data.error);
        }
      } catch (error: any) {
        toast.error(error.message);
      }
    };
    console.log("hello dear i am here");
    return (
      <div
        ref={ref}
        className={twMerge(
          "border-2 border-gray-300 rounded-md w-[250px] bg-white",
          className,
        )}
      >
        <div className="flex items-center gap-4 p-2 hover:bg-neutral-100 cursor-pointer">
          <User opacity={0.6} />
          <Link to={"/account"}>
            <ParaTypo className="">Manage My Account</ParaTypo>
          </Link>
        </div>
        <div className="flex items-center gap-4 p-2 hover:bg-neutral-100 cursor-pointer">
          <ShoppingBag opacity={0.6} />
          <Link to={"/myorder"}>
            <ParaTypo className="">My Order</ParaTypo>
          </Link>
        </div>
        <div className="flex items-center gap-4 p-2 hover:bg-neutral-100 cursor-pointer">
          <StarIcon opacity={0.6} />
          <Link to={"/account/myreview"}>
            <ParaTypo className="">My Reviews</ParaTypo>
          </Link>
        </div>
        <div className="flex items-center gap-4 p-2 lg:hidden hover:bg-neutral-100 cursor-pointer">
          <Heart opacity={0.6} />
          <Link to={"/wishlist"}>
            <ParaTypo className="">My WishList</ParaTypo>
          </Link>
          <ParaTypo className="text-red-500">{wishListCount}</ParaTypo>
        </div>
        <div className="flex items-center lg:hidden gap-4 p-2 hover:bg-neutral-100 cursor-pointer">
          <ShoppingCart opacity={0.6} />
          <Link to={"/cart"}>
            <ParaTypo className="">My Cart</ParaTypo>
          </Link>
          <ParaTypo className="text-red-500">{cartCount}</ParaTypo>
        </div>
        {!data && (
          <div className="flex items-center lg:hidden gap-4 p-2 hover:bg-neutral-100 cursor-pointer">
            <LogIn opacity={0.6} />
            <Link to={"/account/myreview"}>
              <ParaTypo className="">Login</ParaTypo>
            </Link>
          </div>
        )}
        <div
          onClick={logOutHandler}
          className="flex items-center gap-4 p-2 hover:bg-neutral-100 cursor-pointer"
        >
          <LogOut opacity={0.6} />
          <ParaTypo className="">Log Out</ParaTypo>
        </div>
      </div>
    );
  },
);

export default AccountDropdown;
