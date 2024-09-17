import { useNavigate } from "react-router-dom";
import { useContextProvider } from "../../context/Context";
import React, { useLayoutEffect, useState } from "react";
import loading from "../../../src/assets/loading.gif";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useContextProvider();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    const checkUser = () => {
      if (!user || (user && user.role == "admin")) {
        navigate("/login", { replace: true });
      } else {
        setIsLoading(false);
      }
    };

    checkUser();
  }, [navigate, user]);

  if (isLoading) {
    return <img className="mx-auto w-[350px]" src={loading} alt="" />;
  }

  return children;
};

export default PrivateRoute;
