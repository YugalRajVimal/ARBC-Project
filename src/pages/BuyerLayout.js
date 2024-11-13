import React, { useEffect } from "react";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import NavBar from "../components/BuyerComponents/NavBar/NavBar";
import Footer from "../components/BuyerComponents/Footer/Footer";

const BuyerLayout = (props) => {
  const navigate = useNavigate();
  const { isAuthenticatedBuyer, setIsAuthenticatedBuyer } = props;

  useEffect(() => {
    if (localStorage.getItem("isAuthenticatedBuyer") === "false") {
      navigate("/signin");
    }
    if (!localStorage.getItem("token") || !localStorage.getItem("isAuthenticatedBuyer")) {
      navigate("/signin");
    }
  }, [navigate]);

  return (
    <>
      {localStorage.getItem("token") && isAuthenticatedBuyer && (
        <div>
          <NavBar setIsAuthenticatedBuyer={setIsAuthenticatedBuyer} />
          <Outlet />
          <Footer />
        </div>
      )}
    </>
  );
};

export default BuyerLayout;
