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

function App() {
  const [isAuthenticatedSeller, setIsAuthenticatedSeller] = useState(
    localStorage.getItem("isAuthenticatedSeller") || false
  );
  const [isAuthenticatedBuyer, setIsAuthenticatedBuyer] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
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
          <Route path="/products" element={<BuyerProductsPage />} />
          <Route
            path="/product/:productId"
            element={<BuyerDetailedProductPage />}
          />
        </Route>
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
          <Route path="/verify-account" element={<VerifyAccount />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
