import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const [debouncedSearchText, setDebouncedSearchText] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchText(searchText);
    }, 500); // 500ms delay

    return () => {
      clearTimeout(handler);
    };
  }, [searchText]);

  useEffect(() => {
    if (debouncedSearchText) {
      // Perform the search
      console.log(debouncedSearchText, "Searching");
      // Your search function here, e.g., fetch data from an API
    }
  }, [debouncedSearchText]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
  };

  const handleLogout = () => {
    // Log out the user by removing token and redirecting to signinpage
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("role");
    localStorage.removeItem("isAuthenticatedSeller");
    navigate("/signin");
  }


  return (
    <div className=" h-[7vh] px-8 flex justify-between items-center shadow-[0px_0px_10px_2px_rgba(0,0,0,0.2)]">
      <div className="logo">LOGO</div>

      <div>
        <button onClick={handleLogout} className="flex justify-center items-center">
          LogOut
        </button>
      </div>
    </div>
  );
};

export default NavBar;
