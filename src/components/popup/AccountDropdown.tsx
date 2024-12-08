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
    const { data, setData } = useAuth();
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
          setData(null);
          navigate("/login", { replace: true });
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
        <Link
          to={"/account"}
          className="flex items-center gap-4 p-2 hover:bg-neutral-100 cursor-pointer"
        >
          <User opacity={0.6} />
          <div>
            <ParaTypo className="">Manage My Account</ParaTypo>
          </div>
        </Link>
        <Link
          to={"/myorder"}
          className="flex items-center gap-4 p-2 hover:bg-neutral-100 cursor-pointer"
        >
          <ShoppingBag opacity={0.6} />
          <div>
            <ParaTypo className="">My Order</ParaTypo>
          </div>
        </Link>
        <Link
          to={"/account/myreview"}
          className="flex items-center gap-4 p-2 hover:bg-neutral-100 cursor-pointer"
        >
          <StarIcon opacity={0.6} />
          <div>
            <ParaTypo className="">My Reviews</ParaTypo>
          </div>
        </Link>
        <Link
          to={"/wishlist"}
          className="flex items-center gap-4 p-2 lg:hidden hover:bg-neutral-100 cursor-pointer"
        >
          <Heart opacity={0.6} />
          <div>
            <ParaTypo className="">My WishList</ParaTypo>
          </div>
          <ParaTypo className="text-red-500">{wishListCount}</ParaTypo>
        </Link>
        <Link
          to={"/cart"}
          className="flex items-center lg:hidden gap-4 p-2 hover:bg-neutral-100 cursor-pointer"
        >
          <ShoppingCart opacity={0.6} />
          <div>
            <ParaTypo className="">My Cart</ParaTypo>
          </div>
          <ParaTypo className="text-red-500">{cartCount}</ParaTypo>
        </Link>
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
