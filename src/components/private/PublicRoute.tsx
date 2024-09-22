import { useNavigate } from "react-router-dom";
import { UserType } from "../../context/Context";
import React, { useLayoutEffect } from "react";
import { useAuth } from "../../context/AuthProvider";
import dd from "../../../src/assets/loading.gif";

const PublicRoute = ({
  children,
  role,
}: {
  children: React.ReactNode;
  role: string[];
}) => {
  const navigate = useNavigate();
  const { loading, data } = useAuth();

  useLayoutEffect(() => {
    const checkUser = () => {
      if (data && role.includes((data as UserType).role)) {
        if ((data as UserType).role == "customer") {
          navigate("/", { replace: true });
        }
        if ((data as UserType).role == "seller") {
          navigate("/dashboard", { replace: true });
        }
        if ((data as UserType).role == "admin") {
          navigate("/admin/dashboard", { replace: true });
        }
      }
    };

    checkUser();
  }, [data]);

  if (loading) {
    return <img className="mx-auto w-[350px]" src={dd} alt="" />;
  }

  return children;
};

export default PublicRoute;
