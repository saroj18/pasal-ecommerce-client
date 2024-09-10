import { useNavigate } from "react-router-dom";
import { useContextProvider } from "../../context/Context";
import React, { useEffect, useLayoutEffect, useState } from "react";

const PublicRouteForAdmin = ({ children }: { children: React.ReactNode }) => {
  const { user } = useContextProvider();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  console.log(user);

  useEffect(() => {
    const checkUser = () => {
      if (user && user?.role == "admin") {
        navigate("/admin", { replace: true });
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

export default PublicRouteForAdmin;
