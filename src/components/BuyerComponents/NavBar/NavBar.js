import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import getAddressFromCoordinates from "./getLocation";
import { IoMdCall } from "react-icons/io";

const NavBar = (props) => {
  const { isAuthenticatedBuyer, setIsAuthenticatedBuyer } = props;
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const [debouncedSearchText, setDebouncedSearchText] = useState("");
  const [logo, setLogo] = useState("");
  const [name, setName] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showFixedSearchBar, setShowFixedSearchBar] = useState(false);
  const [results, setResults] = useState({
    categories: [],
    subCategories: [],
    products: [],
  });
  const [location, setLocation] = useState({ state: "", country: "" });

  const states = {
    AN: "Andaman and Nicobar Islands",
    AP: "Andhra Pradesh",
    AR: "Arunachal Pradesh",
    AS: "Assam",
    BR: "Bihar",
    CG: "Chandigarh",
    CH: "Chhattisgarh",
    DN: "Dadra and Nagar Haveli",
    DD: "Daman and Diu",
    DL: "Delhi",
    GA: "Goa",
    GJ: "Gujarat",
    HR: "Haryana",
    HP: "Himachal Pradesh",
    JK: "Jammu and Kashmir",
    JH: "Jharkhand",
    KA: "Karnataka",
    KL: "Kerala",
    LA: "Ladakh",
    LD: "Lakshadweep",
    MP: "Madhya Pradesh",
    MH: "Maharashtra",
    MN: "Manipur",
    ML: "Meghalaya",
    MZ: "Mizoram",
    NL: "Nagaland",
    OR: "Odisha",
    PY: "Puducherry",
    PB: "Punjab",
    RJ: "Rajasthan",
    SK: "Sikkim",
    TN: "Tamil Nadu",
    TS: "Telangana",
    TR: "Tripura",
    UP: "Uttar Pradesh",
    UK: "Uttarakhand",
    WB: "West Bengal",
  };

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
    }, 500); // 500ms delay for debouncing

    return () => {
      clearTimeout(handler);
    };
  }, [searchText]);

  useEffect(() => {
    if (debouncedSearchText) {
      const fetchResults = async () => {
        console.log("Fetching results for:", debouncedSearchText);
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/user/search/${debouncedSearchText}`
        );
        const data = await response.data;

        console.log("Results:", data);
        setResults({
          categories: data.categories || [],
          subCategories: data.subCategories || [],
          products: data.products || [],
        });
      };

      fetchResults();
    } else {
      setResults({ categories: [], subCategories: [], products: [] });
    }
  }, [debouncedSearchText]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
  };

  const navigateTo = (path) => {
    navigate(`/${path}`);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("role");
    localStorage.removeItem("isAuthenticatedBuyer");
    setIsAuthenticatedBuyer(false);
  };

  const navigateToProductsPage = (subcategory) => {
    navigate(`/products/${subcategory}`);
  };

  const navigateToDetailedProduct = (productId) => {
    navigate(`/product/${productId}`);
  };

  const navigateToSubCategories = (categoryId) => {
    navigate(`/subcategories/${categoryId}`);
  };

  const getLogoName = async () => {
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

  const handleCloseSearchResults = () => {
    setSearchText("");
    setResults({ categories: [], subCategories: [], products: [] });
  };

  const handleStateChange = (e) => {
    setLocation((prevLocation) => ({
      ...prevLocation,
      state: e.target.value,
    }));
  };

  return (
    <div className="h-[7vh] flex justify-around items-center shadow-[0px_0px_10px_2px_rgba(0,0,0,0.2)] relative">
      <div className="flex justify-center items-center gap-1">
        <a
          href="/"
          className="logo h-[40px] aspect-[1/1] flex rounded-full overflow-hidden"
        >
          <img src={process.env.REACT_APP_API_URL + "/" + logo} alt="logo" />
        </a>
        <p className="whitespace-nowrap mx-2">{name}</p>
        <div className="m-2 px-3 py-[1px] hidden md:flex whitespace-nowrap bg-blue-100 rounded-md flex items-center">
          <select
            value={location.state}
            onChange={handleStateChange}
            className="bg-transparent focus:outline-none w-[120px]"
          >
            <option value="" disabled>
              Select State
            </option>
            {Object.entries(states).map(([code, name]) => (
              <option key={code} value={name}>
                {name}
              </option>
            ))}
          </select>
          <span className="ml-2">, {location.country}</span>
          <img
            src="./indiaFlag.jpg"
            alt="india-flag"
            className="h-4 rounded-sm ml-2"
          />
        </div>
      </div>

      <div className=" hidden md:flex gap-2 justify-center items-center">
        <IoMdCall />
        8929788700
      </div>

      <div className="searchBar h-[70%] min-[800px]:w-[40%] bg-[#f0f5ff] shadow flex justify-center items-center rounded-md text-md px-2 relative">
        <IoSearch
          className="text-xl cursor-pointer"
          onClick={() => setShowFixedSearchBar(true)}
        />
        <input
          type="text"
          id="searchBar"
          placeholder="Search for Products, Brands and More"
          className="bg-[#f0f5ff] hidden min-[800px]:block w-full h-full p-2"
          value={searchText}
          onChange={handleSearch}
        />
        {debouncedSearchText && (
          <button
            className="absolute right-2 text-gray-600 text-xl pr-1"
            onClick={handleCloseSearchResults}
          >
            <IoClose />
          </button>
        )}
        {debouncedSearchText && (
          <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded shadow-lg mt-1 p-4 z-10">
            <h3 className="font-semibold">
              Search Results for "{debouncedSearchText}"
            </h3>

            {results.categories.length > 0 && (
              <div className="mt-2">
                <h4 className="text-sm font-medium">Categories</h4>
                <ul className="text-sm text-gray-700 pl-4">
                  {results.categories.map((category) => (
                    <li
                      onClick={() => navigateToSubCategories(category._id)}
                      key={category._id}
                    >
                      {category.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {results.subCategories.length > 0 && (
              <div className="mt-2">
                <h4 className="text-sm font-medium">Subcategories</h4>
                <ul className="text-sm text-gray-700 pl-4">
                  {results.subCategories.map((subCategory) => (
                    <li
                      onClick={() => navigateToProductsPage(subCategory._id)}
                      key={subCategory._id}
                    >
                      {subCategory.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {results.products.length > 0 && (
              <div className="mt-2">
                <h4 className="text-sm font-medium">Products</h4>
                <ul className="text-sm text-gray-700 pl-4">
                  {results.products.map((product) => (
                    <li
                      onClick={() => navigateToDetailedProduct(product._id)}
                      key={product._id}
                    >
                      {product.productName}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {results.categories.length === 0 &&
              results.subCategories.length === 0 &&
              results.products.length === 0 && (
                <p className="text-sm text-gray-500">No results found.</p>
              )}
          </div>
        )}
      </div>
      {isAuthenticatedBuyer ? (
        <div className="flex gap-2">
          <a onClick={handleLogout}>Logout</a>
        </div>
      ) : (
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2"
          >
            Menu
          </button>
          {isDropdownOpen && (
            <ul className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-20">
              <li className="p-2 hover:bg-gray-100">
                <a onClick={() => navigateTo("signin")}>Sign In</a>
              </li>
              <li className="p-2 hover:bg-gray-100">
                <a onClick={() => navigateTo("signup")}>Sign Up</a>
              </li>
              <li className="p-2 hover:bg-gray-100">
                <a onClick={() => navigateTo("signup")}>Become a Seller</a>
              </li>
            </ul>
          )}
        </div>
      )}

      {showFixedSearchBar && (
        <div className="fixed top-0 left-0 w-full bg-white shadow-lg p-4 z-50">
          <div className="flex items-center">
            <IoSearch className="text-xl mr-2" />
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              value={searchText}
              onChange={handleSearch}
            />
            <button
              className="ml-2 text-gray-600"
              onClick={() => setShowFixedSearchBar(false)}
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
