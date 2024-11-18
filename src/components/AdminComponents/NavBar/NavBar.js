import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();




  const handleLogout = () => {
    // Log out the user by removing token and redirecting to signinpage
    localStorage.removeItem("adminToken");
    localStorage.removeItem("userId");
    localStorage.removeItem("role");
    localStorage.removeItem("isAuthenticatedAdmin");
    navigate("/admin/signin");
  }


  return (
    <div className=" h-[7vh] px-8 flex justify-between items-center shadow-[0px_0px_10px_2px_rgba(0,0,0,0.2)]">
      <div className="logo text-2xl">ARBC Admin Panel</div>

      <div>
        <button onClick={handleLogout} className="flex justify-center items-center">
          LogOut
        </button>
      </div>
    </div>
  );
};

export default NavBar;
