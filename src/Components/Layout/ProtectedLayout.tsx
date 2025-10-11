import type { RootState } from "@/store";

import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedLayout = () => {
  const { user, loading } = useSelector((state: RootState) => state.Auth);
  const total = useSelector((state: RootState) => state.Cart.cartBill.total);
  const location = useLocation();

  if (loading) {
    return <div></div>;
  }

  if (!user) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  } else if (!Number(total)) {
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  return <Outlet />;
};

export default ProtectedLayout;
