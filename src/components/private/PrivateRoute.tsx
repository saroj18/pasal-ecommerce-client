import { Navigate, useNavigate } from "react-router-dom";
import React, { useLayoutEffect } from "react";
import dd from "../../../src/assets/loading.gif";
import { useAuth, UserType } from "../../context/AuthProvider";
import Loading from "../Loading";

const PrivateRoute = ({
  children,
  role,
}: {
  children: React.ReactNode;
  role: string[];
}) => {
  let { data, loading } = useAuth();
  data = data as UserType;
  if (loading) {
    return <Loading />;
  }
 
  return data ? <>{children}</> : <Navigate to="/login" replace={true} />;
};

export default PrivateRoute;
