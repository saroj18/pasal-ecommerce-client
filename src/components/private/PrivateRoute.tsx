import { useNavigate } from "react-router-dom";
import React, { useLayoutEffect } from "react";
import dd from "../../../src/assets/loading.gif";
import { useAuth, UserType } from "../../context/AuthProvider";

const PrivateRoute = ({
  children,
  role,
}: {
  children: React.ReactNode;
  role: string[];
}) => {
  let { data, loading } = useAuth();
  data = data as UserType;
  const navigate = useNavigate();

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
  }, [data, loading]);

  if (loading) {
    return <img className="mx-auto w-[350px]" src={dd} alt="" />;
  }

  return children;
};

export default PrivateRoute;
