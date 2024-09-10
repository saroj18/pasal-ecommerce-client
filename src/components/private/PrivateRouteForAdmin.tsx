import { useNavigate } from "react-router-dom";
import { useContextProvider } from "../../context/Context";
import React, { useEffect, useLayoutEffect, useState } from "react";

const PrivateRouteForAdmin = ({ children }: { children: React.ReactNode }) => {
  const { user } = useContextProvider();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  console.log(user);

  useEffect(() => {
    const checkUser = () => {
      if (user && user.role !== "admin") {
        console.log("call");
        navigate("/adminlogin", { replace: true });
      } else {
        setIsLoading(false);
      }
    };

    checkUser();
  }, [navigate, user]);

  return children;
};

export default PrivateRouteForAdmin;
