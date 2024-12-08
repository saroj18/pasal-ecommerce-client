import HeadingTypo from "../../../components/common/HeadingTypo";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { useContextProvider } from "../../../context/Context";
import { useAuth, UserType } from "../../../context/AuthProvider";
import { useState } from "react";

const SideBar = () => {
  const { accountSideBar, setAccountSideBar } = useContextProvider();
  let { data: user } = useAuth();
  user = user as UserType | null;
  const [sideBarName, setSideBarName] = useState("Manage My Account");

  return (
    <aside
      onClick={() => setAccountSideBar(false)}
      style={{ top: accountSideBar ? "0%" : "-70%" }}
      className=" md:flex flex-col transition-all scrollbar duration-400 p-3 shadow-lg w-full md:max-w-[220px] max-h-[500px] md:sticky -top-[18%] md:left-0 left- bg-white absolute"
    >
      <X
        onClick={() => setAccountSideBar(false)}
        className="absolute left-[90%] cursor-pointer top-2 md:hidden"
      />
      <Link to={"/account"} onClick={() => setSideBarName("Manage My Account")}>
        <HeadingTypo
          className={`text-lg my-2 ${sideBarName == "Manage My Account" ? "text-green-500" : ""}`}
        >
          Manage My Account
        </HeadingTypo>
      </Link>
      <ul className="text-lg pl-4 flex flex-col gap-y-3">
        <Link
          onClick={() => setSideBarName("My Profile")}
          to={"/account/myprofile"}
        >
          <li
            className={`cursor-pointer ${sideBarName == "My Profile" ? "text-green-500" : ""}`}
          >
            My Profile
          </li>
        </Link>
        <Link
          onClick={() => setSideBarName("Address Book")}
          to={"/account/addressbook"}
        >
          <li
            className={`cursor-pointer ${sideBarName == "Address Book" ? "text-green-500" : ""}`}
          >
            Address Book
          </li>
        </Link>
        {!user?.verify && (
          <Link
            to={"/account/verify"}
            onClick={() => setSideBarName("Verify Yourself")}
          >
            <li
              className={`cursor-pointer ${sideBarName == "Verify Yourself" ? "text-green-500" : ""}`}
            >
              Verify Yourself
            </li>
          </Link>
        )}
      </ul>
      <Link
        onClick={() => setSideBarName("My Reviews")}
        to={"/account/myreview"}
      >
        <HeadingTypo
          className={`text-lg cursor-pointer my-2 ${sideBarName == "My Reviews" ? "text-green-500" : ""}`}
        >
          My Reviews
        </HeadingTypo>
      </Link>
      {/* <Link to={"/account/message"}>
        <HeadingTypo className="text-lg cursor-pointer my-2">
          Message
        </HeadingTypo>
      </Link> */}
      <Link to={"/sellerlogin"}>
        <HeadingTypo className="text-lg cursor-pointer my-2">
          Sell On Pasal
        </HeadingTypo>
      </Link>
      <Link to={"/delevery-staff"}>
        <HeadingTypo className="text-lg cursor-pointer my-2">
          Delevery Staff
        </HeadingTypo>
      </Link>
      <Link to={"/adminlogin"}>
        <HeadingTypo className="text-lg cursor-pointer my-2">
          I am Admin
        </HeadingTypo>
      </Link>
    </aside>
  );
};

export default SideBar;
