import { Outlet } from "react-router-dom";
import Header from "../Header";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/store";
import { loginUser } from "@/Hooks/useAuth";
import { useEffect } from "react";

const Layout = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(loginUser());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
