import { useNavigate } from "react-router-dom";
import { useContextProvider } from "../../context/Context";
import React, { useEffect, useLayoutEffect, useState } from "react";

const PublicRouteForSeller = ({ children }: { children: React.ReactNode }) => {
  const { user } = useContextProvider();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  console.log(user);

  useEffect(() => {
    const checkUser = () => {
      if (user && user?.role == "seller") {
        navigate("/dashboard", { replace: true });
      } else {
        setIsLoading(false);
      }
    };

    checkUser();
  }, [user]);

  if (isLoading) {
    return null;
  }

  return children;
};

export default PublicRouteForSeller;
