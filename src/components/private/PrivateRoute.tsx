import { useNavigate } from "react-router-dom";
import { useContextProvider, UserType } from "../../context/Context";
import React, { useLayoutEffect } from "react";
import dd from "../../../src/assets/loading.gif";
import { useAuth } from "../../context/AuthProvider";

const PrivateRoute = ({
  children,
  role,
}: {
  children: React.ReactNode;
  role: string[];
}) => {
  const { user } = useContextProvider();
  const { data, loading } = useAuth();
  const navigate = useNavigate();
  console.log(data);
  console.log((data as UserType)?.role);

  useLayoutEffect(() => {
    const checkUser = () => {
      if (
        (!loading && !data) ||
        (data && !role?.includes((data as UserType).role))
      ) {
        if ((data as UserType)?.role == "customer") {
          navigate("/login", { replace: true });
        }
        if ((data as UserType)?.role == "seller") {
          navigate("/sellerlogin", { replace: true });
        }
        if ((data as UserType)?.role == "admin") {
          navigate("/adminlogin", { replace: true });
        }
      }
    };

    checkUser();
  }, [user, loading]);

  if (loading) {
    return <img className="mx-auto w-[350px]" src={dd} alt="" />;
  }

  return children;
};

export default PrivateRoute;
