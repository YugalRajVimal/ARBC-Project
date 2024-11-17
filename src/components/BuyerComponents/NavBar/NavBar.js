import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const NavBar = (props) => {
  const { isAuthenticatedBuyer, setIsAuthenticatedBuyer } = props;
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const [debouncedSearchText, setDebouncedSearchText] = useState("");

  const [results, setResults] = useState({
    categories: [],
    subCategories: [],
    products: [],
  });

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
        // Fetch data from your API using axios
        console.log("Fetching results for:", debouncedSearchText);
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/user/search/${debouncedSearchText}`
        );
        const data = await response.data;
        // const response = await fetch(`${process.env.REACT_APP_API_URL}/user/search?searchText=${debouncedSearchText}`);
        // const data = await response.json();

        // Update the state with the structured results
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
    // Navigate to sub categories page
    navigate(`/subcategories/${categoryId}`);
  };

  return (
    <div className="h-[7vh] flex justify-around items-center shadow-[0px_0px_10px_2px_rgba(0,0,0,0.2)] relative">
      <a href="/" className="logo">
        LOGO
      </a>
      <div className="searchBar h-[70%] w-[60%] bg-[#f0f5ff] shadow flex justify-center items-center rounded-md text-md px-2 relative">
        <IoSearch className="text-xl" />
        <input
          type="text"
          id="searchBar"
          placeholder={` Search for Products, Brands and More`}
          className="bg-[#f0f5ff] w-full h-full p-2"
          value={searchText}
          onChange={handleSearch}
        />

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
        <div className="flex gap-4">
          <a onClick={handleLogout}>Logout</a>
        </div>
      ) : (
        <div className="flex gap-4">
          <a onClick={() => navigateTo("signin")}>Sign In</a>
          <a onClick={() => navigateTo("signup")}>Sign Up</a>
        </div>
      )}

      <a onClick={() => navigateTo("signup")}>Become a Seller</a>
    </div>
  );
};

export default NavBar;
