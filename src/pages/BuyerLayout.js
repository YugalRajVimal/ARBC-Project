import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import NavBar from "../components/BuyerComponents/NavBar/NavBar";
import Footer from "../components/BuyerComponents/Footer/Footer";

const BuyerLayout = (props) => {
  const { isAuthenticatedBuyer, setIsAuthenticatedBuyer } = props;

  return (
    <div>
      <NavBar setIsAuthenticatedBuyer={setIsAuthenticatedBuyer} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default BuyerLayout;
