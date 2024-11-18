import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import BuyerLayout from "./pages/BuyerLayout";
import BuyerLandingPage from "./pages/BuyerLandingPage";
import SellerLayout from "./pages/SellerLayout";
import SellerLandingPage from "./pages/SellerLandingPage";
import UserLogin from "./components/AuthComponents/UserLogin";
import UserSignUp from "./components/AuthComponents/UserSignUp";
import UserResetPassword from "./components/AuthComponents/UserResetPassword";
import VerifyAccount from "./components/AuthComponents/UserVerifyAccount";
import { useEffect, useState } from "react";
import AuthWrapper from "./AuthWrapper";
import BuyerProductsPage from "./pages/BuyerProductsPage";
import BuyerSubCategoryPage from "./pages/BuyerSubCategoryPage";
import BuyerDetailedProductPage from "./pages/BuyerDetailedProductPage";
import BuyerCategoriesPage from "./pages/BuyerCategoriesPage";
import AdminLandingPage from "./pages/AdminLandingPage";
import AdminLayout from "./pages/AdminLayout";
import AdminLogin from "./components/AdminComponents/AdminAuthComponents/AdminLogin";
import AdminResetPassword from "./components/AdminComponents/AdminAuthComponents/AdminResetPassword";
import AdminVerifyAccount from "./components/AdminComponents/AdminAuthComponents/AdminVerifyAccount";

function App() {
  const [isAuthenticatedSeller, setIsAuthenticatedSeller] = useState(
    localStorage.getItem("isAuthenticatedSeller") || false
  );
  const [isAuthenticatedBuyer, setIsAuthenticatedBuyer] = useState(
    localStorage.getItem("isAuthenticatedBuyer") || false
  );
  const [isAuthenticatedAdmin, setIsAuthenticatedAdmin] = useState(
    localStorage.getItem("isAuthenticatedAdmin") || false
  );

  return (
    <BrowserRouter>
      <Routes>
        {/* Buyer */}
        <Route
          path="/"
          element={
            <BuyerLayout
              isAuthenticatedBuyer={isAuthenticatedBuyer}
              setIsAuthenticatedBuyer={setIsAuthenticatedBuyer}
            />
          }
        >
          <Route index element={<BuyerLandingPage />} />
          <Route path="/categories" element={<BuyerCategoriesPage />} />
          <Route
            path="/subcategories/:categoryId"
            element={<BuyerSubCategoryPage />}
          />
          <Route
            path="/products/:subCategoryId"
            element={<BuyerProductsPage />}
          />
          <Route
            path="/product/:productId"
            element={<BuyerDetailedProductPage />}
          />
        </Route>
        {/* Seller */}
        <Route
          path="/seller"
          element={
            <SellerLayout
              isAuthenticatedSeller={isAuthenticatedSeller}
              setIsAuthenticatedSeller={setIsAuthenticatedSeller}
            />
          }
        >
          <Route index element={<SellerLandingPage />} />
        </Route>
        {/* Admin  */}
        <Route
          path="/admin"
          element={
            <AdminLayout
              isAuthenticatedSeller={true}
              setIsAuthenticatedSeller={setIsAuthenticatedSeller}
            />
          }
        >
          <Route index element={<AdminLandingPage />} />
        </Route>

        <Route>
          <Route
            path="/signin"
            element={
              <UserLogin
                setIsAuthenticatedSeller={setIsAuthenticatedSeller}
                setIsAuthenticatedBuyer={setIsAuthenticatedBuyer}
              />
            }
          />
          <Route
            path="/signup"
            element={
              <UserSignUp setIsAuthenticatedSeller={setIsAuthenticatedSeller} />
            }
          />
          <Route path="/reset-password" element={<UserResetPassword />} />
          <Route path="/verify-account" element={<VerifyAccount />} />"
          <Route
            path="/admin/reset-password"
            element={<AdminResetPassword />}
          />
          <Route
            path="/admin/verify-account"
            element={<AdminVerifyAccount />}
          />
          <Route
            path="/admin/signin"
            element={
              <AdminLogin setIsAuthenticatedAdmin={setIsAuthenticatedAdmin} />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
