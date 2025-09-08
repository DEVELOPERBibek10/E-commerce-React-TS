import AuthLayout from "../src/Components/Layout/AuthLayout";
import Shop from "../src/Pages/Shop";
import Cart from "../src/Pages/CartPage";
import ProductDetails from "../src/Pages/ProductDetailPage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import ProtectedLayout from "@/Components/Layout/ProtectedLayout";
import Payment from "@/Pages/Payment";
import Login from "@/Pages/Login";
import Layout from "@/Components/Layout/Layout";

export const route = createBrowserRouter(
  createRoutesFromElements([
    <Route element={<Layout />}>
      <Route path="/" element={<Shop />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:id" element={<ProductDetails />} />
    </Route>,
    <Route element={<AuthLayout />}>
      <Route path="/login" element={<Login />} />
    </Route>,
    <Route element={<ProtectedLayout />}>
      <Route path="/pay" element={<Payment />} />
    </Route>,
  ])
);
