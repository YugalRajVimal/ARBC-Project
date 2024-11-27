import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import getAddressFromCoordinates from "./getLocation";

const NavBar = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const [debouncedSearchText, setDebouncedSearchText] = useState("");
  const [logo, setLogo] = useState("");
  const [name, setName] = useState("");

  const [location, setLocation] = useState({ state: "", country: "" });

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const address = await getAddressFromCoordinates();
        setLocation(address);
      } catch (err) {
        console.error("Error fetching location:", err);
      }
    };

    fetchLocation();
  }, []);

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
  };

  const getLogoName = async () => {
    // /api/admin/get-logo-name
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/admin/get-logo-name`
      );
      const data = await response.data;
      console.log("Logo Name:", data);
      setLogo(data.logoAndName.logo);
      setName(data.logoAndName.name);
      return data;
    } catch (error) {
      console.error("Error getting logo name:", error);
    }
  };

  useEffect(() => {
    getLogoName();
  }, []);

  return (
    <div className=" h-[7vh] px-8 flex justify-between items-center shadow-[0px_0px_10px_2px_rgba(0,0,0,0.2)]">
      <div className="flex  justify-center items-center gap-1">
        
        <a
          href="/"
          className="logo h-[40px] aspect-[1/1] flex rounded-full overflow-hidden"
        >
          <img src={process.env.REACT_APP_API_URL + "/" + logo} alt="logo" />
        </a>
        <p className="whitespace-nowrap">{name}</p>
        <p className="m-2 px-3 py-[1px] hidden md:flex whitespace-nowrap bg-blue-100 rounded-md flex items-center">
          {location.state}, {location.country}
          <img
            src="./indiaFlag.jpg"
            alt="india-flag"
            className="h-4 rounded-sm ml-2"
          />
        </p>
      </div>

      <div>
        <button
          onClick={handleLogout}
          className="flex justify-center items-center"
        >
          LogOut
        </button>
      </div>
    </div>
  );
};

export default NavBar;
