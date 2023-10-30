import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import Products from "../components/Products/Products";
import WomenClothing from "../components/WomenClothing/WomenClothing";
import Accessories from "../components/Accessories/Accessories";
import AboutUs from "../components/About/About";
import SignUp from "../components/SignUp/SignUp";
import Login from "../components/Login/Login";
import DefaultLayout from "./DefaultLayout";
import Layout from "./Layout";
import Cart from "../components/Cart/Cart";

export default function ThemeRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <DefaultLayout>
              <Home />
            </DefaultLayout>
          }
        />
        <Route
          path="products"
          element={
            <DefaultLayout>
              <Products />
            </DefaultLayout>
          }
        />
        <Route
          path="women-clothing"
          element={
            <DefaultLayout>
              <WomenClothing />
            </DefaultLayout>
          }
        />
        <Route
          path="/accessories"
          element={
            <DefaultLayout>
              <Accessories />
            </DefaultLayout>
          }
        />
        <Route
          path="/about-us"
          element={
            <DefaultLayout>
              <AboutUs />
            </DefaultLayout>
          }
        />
        <Route
          path="/cart"
          element={
            <DefaultLayout>
              <Cart />
            </DefaultLayout>
          }
        />
        <Route
          path="/sign-up"
          element={
            <Layout>
              <SignUp />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
