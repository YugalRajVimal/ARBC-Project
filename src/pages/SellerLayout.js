import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "../components/SellerComponents/NavBar/NavBar";
import AuthWrapper from "../AuthWrapper";

const SellerLayout = (props) => {
  const { isAuthenticatedSeller, setIsAuthenticatedSeller } = props;

  return (
    <>
      <AuthWrapper setIsAuthenticatedSeller={setIsAuthenticatedSeller} />
      {isAuthenticatedSeller ? (
        <div>
          <NavBar />
          <Outlet />
        </div>
      ) : (
        // Navigate to login page
        <h1>LogIn First</h1>
      )}
    </>
  );
};

export default SellerLayout;
