import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "../components/SellerComponents/NavBar/NavBar";
import axios from "axios";

const SellerLayout = (props) => {
  const navigate = useNavigate();
  const { isAuthenticatedSeller, setIsAuthenticatedSeller } = props;

  // useEffect(() => {
  //   const authUser = async (token) => {
  //     if (!token) {
  //       localStorage.removeItem("token");
  //       navigate("/signin");
  //       return;
  //     }

  //     console.log(token);
  //     const role = localStorage.getItem("role");

  //     try {
  //       const response = await axios.get(
  //         `http://localhost:3000/api/user/auth-user/${role}`,
  //         {
  //           headers: {
  //             Authorization: `${localStorage.getItem("token")}`,
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );

  //       console.log(response);

  //       if (response.status === 200) {
  //         setIsAuthenticatedSeller(true);
  //       } else {
  //         setIsAuthenticatedSeller(false);
  //         localStorage.removeItem("token");
  //         navigate("/signin");
  //       }
  //     } catch (error) {
  //       console.log(error);
  //       setIsAuthenticatedSeller(false);
  //       localStorage.removeItem("token");
  //       navigate("/signin");
  //     }
  //   };

  //   const token = localStorage.getItem("token");
  //   authUser(token);
  // }, []); // Only dependencies that should trigger this effect

  useEffect(() => {
    if(localStorage.getItem("isAuthenticatedSeller") === "false") {
      navigate("/signin");
    }
    if(!localStorage.getItem("token") || !localStorage.getItem("isAuthenticatedSeller")) {
      navigate("/signin");
    }
  } , [navigate]);

  return (
    <>
      {localStorage.getItem("token") && isAuthenticatedSeller && (
        <div>
          <NavBar />
          <Outlet />
        </div>
      )}
    </>
  );
};

export default SellerLayout;
