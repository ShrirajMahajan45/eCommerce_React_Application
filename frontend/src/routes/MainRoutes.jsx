import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import UnauthWrapper from "./UnauthWrapper";
import AuthWrapper from "./AuthWrapper";

const Home = lazy(() => import("../pages/Home"));
const Products = lazy(() => import("../pages/Products"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const CreateProduct = lazy(() => import("../pages/admin/CreateProduct"));
const ProductDetails = lazy(() => import("../pages/admin/ProductDetails"));
const UserProfile = lazy(() => import("../pages/users/UserProfile"));

const PageNotFound = lazy(() => import("../pages/PageNotFound"));
const Cart = lazy(() => import("../pages/Cart"));

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />

      <Route
        path="/login"
        element={
          <UnauthWrapper>
            <Login />
          </UnauthWrapper>
        }
      />
      <Route
        path="/register"
        element={
          <UnauthWrapper>
            <Register />
          </UnauthWrapper>
        }
      />

      <Route path="/product/:id" element={<ProductDetails />} />

      <Route
        path="/admin/create-product"
        element={
          <AuthWrapper>
            <CreateProduct />
          </AuthWrapper>
        }
      />
      <Route
        path="/cart"
        element={
          <AuthWrapper>
            <Cart />
          </AuthWrapper>
        }
      />
      <Route
        path="/user-profile"
        element={
          <AuthWrapper>
            <UserProfile />
          </AuthWrapper>
        }
      />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default MainRoutes;
