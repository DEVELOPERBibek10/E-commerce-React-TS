import { Navigate, Outlet, useLocation } from "react-router-dom";

import { useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/store";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loginUser } from "@/Hooks/useAuth";

const AuthLayout = () => {
  const { user, loading } = useSelector((state: RootState) => state.Auth);
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();

  useEffect(() => {
    dispatch(loginUser());
  }, [dispatch]);

  if (loading) {
    return <div></div>;
  }

  if (user) {
    const from = location.state?.from?.pathname || "/";
    return <Navigate to={from} replace />;
  } else {
    return <Outlet />;
  }
};

export default AuthLayout;
