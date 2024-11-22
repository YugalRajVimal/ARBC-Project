import React, { useEffect, useState } from "react";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import NavBar from "../components/BuyerComponents/NavBar/NavBar";
import Footer from "../components/BuyerComponents/Footer/Footer";

const BuyerLayout = (props) => {
  const { isAuthenticatedBuyer, setIsAuthenticatedBuyer } = props;

  // useEffect(() => {
  //   if (localStorage.getItem("isAuthenticatedBuyer") === "false") {
  //     navigate("/signin");
  //   }
  //   if (!localStorage.getItem("token") || !localStorage.getItem("isAuthenticatedBuyer")) {
  //     navigate("/signin");
  //   }
  // }, [navigate]);

  return (
    <>
      <div>
        <NavBar
          isAuthenticatedBuyer={isAuthenticatedBuyer}
          setIsAuthenticatedBuyer={setIsAuthenticatedBuyer}
        />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default BuyerLayout;
