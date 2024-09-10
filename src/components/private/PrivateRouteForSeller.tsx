import { useNavigate } from "react-router-dom";
import { useContextProvider } from "../../context/Context";
import React, { useEffect, useLayoutEffect, useState } from "react";

const PrivateRouteForSeller = ({ children }: { children: React.ReactNode }) => {
  const { user } = useContextProvider();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  console.log(user);

  useLayoutEffect(() => {
    const checkUser = () => {
      if ((user && user.role == "customer") || (user && user.role == "admin")) {
        navigate("/sellerlogin", { replace: true });
      } else {
        setIsLoading(false);
      }
    };

    checkUser();
  }, [navigate, user]);

  if (isLoading) {
    return <h1>herooooo</h1>;
  }
  return children;
};

export default PrivateRouteForSeller;
