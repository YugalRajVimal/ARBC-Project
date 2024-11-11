import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "../components/SellerComponents/NavBar/NavBar";
import AuthWrapper from "../AuthWrapper";
import axios from "axios";

const SellerLayout = (props) => {
  const navigate = useNavigate();
  const { isAuthenticatedSeller, setIsAuthenticatedSeller } = props;

  const navigateTo = (path) => {
    navigate(`/${path}`);
  };

  useEffect(() => {
    const authUser = async (token) => {
      if (!token) {
        localStorage.removeItem("token");
        navigate("/signin");
        return;
      }

      console.log(token);
      const role = localStorage.getItem("role");

      try {
        const response = await axios.get(
          `http://localhost:3000/api/user/auth-user/${role}`,
          {
            headers: {
              Authorization: `${localStorage.getItem("token")}`,
              "Content-Type": "application/json",
            },
          }
        );

        console.log(response);

        if (response.status === 200) {
          setIsAuthenticatedSeller(true);
          return;
        }

        setIsAuthenticatedSeller(false);
        localStorage.removeItem("token");
        navigate("/signin");
      } catch (error) {
        console.log(error);
        setIsAuthenticatedSeller(false);
        localStorage.removeItem("token");
        navigate("/signin");
      }
    };

    const token = localStorage.getItem("token");
    authUser(token);
  }, [setIsAuthenticatedSeller,isAuthenticatedSeller, navigate]);

  return (
    <>
      {/* <AuthWrapper setIsAuthenticatedSeller={setIsAuthenticatedSeller} /> */}
      {isAuthenticatedSeller && (
        <div>
          <NavBar />
          <Outlet />
        </div>
      )}
    </>
  );
};

export default SellerLayout;
