import Layout from "../src/Components/Layout";
import Shop from "../src/Pages/Shop";
import Cart from "../src/Pages/Cart";
import Details from "../src/Pages/Details";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

export const route = createBrowserRouter(
  createRoutesFromElements([
    <Route element={<Layout />}>
      <Route path="/" element={<Shop />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:id" element={<Details />} />
    </Route>,
  ])
);
