import { useNavigate } from "react-router-dom";
import { useContextProvider } from "../../context/Context";
import React, { useEffect, useLayoutEffect, useState } from "react";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useContextProvider();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  console.log(user);

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
    return null;
  }

  return children;
};

export default PrivateRoute;
