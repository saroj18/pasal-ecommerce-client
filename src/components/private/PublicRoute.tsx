import { useNavigate } from "react-router-dom";
import React, { useLayoutEffect } from "react";
import { useAuth, UserType } from "../../context/AuthProvider";
import Loading from "../Loading";

interface PublicRouteProps {
  children: React.ReactNode;
  role: string[];
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children, role }) => {
  const navigate = useNavigate();
  const { loading, data } = useAuth();
  const user = data as UserType | null;

  useLayoutEffect(() => {
    if (user && role.includes(user.role)) {
      // Centralized navigation logic based on role
      const redirectPath =
        user.role === "customer"
          ? "/"
          : user.role === "seller"
            ? "/dashboard"
            : "/admin/dashboard";

      navigate(redirectPath, { replace: true });
    }
  }, [user, role, navigate]);

  if (loading) {
    return <Loading />;
  }

  return <>{children}</>;
};

export default PublicRoute;
