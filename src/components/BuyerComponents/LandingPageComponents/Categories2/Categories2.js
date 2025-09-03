import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllPopulatedCategories } from "../../../../api/BuyerAPI/buyerAPI";

const Categories2 = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllPopulatedCategories().then((data) => {
      setCategories(data.slice(0, 10)); // show only first 10
    });
  }, []);

  const navigateToSubCategories = (categoryId) => {
    navigate(`/subcategories/${categoryId}`);
  };

  const navigateToCategories = () => {
    navigate("/categories");
  };

  return (
    <div className="w-full px-4 py-6">
      {/* Title */}
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        Categories
      </h2>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
        {categories.map((category, index) => (
          <div
            key={index}
            onClick={() => navigateToSubCategories(category._id)}
            className="flex flex-col items-center bg-white shadow-sm rounded-lg p-4 cursor-pointer transition transform hover:scale-105 hover:shadow-md"
          >
            {/* Image wrapper */}
            <div className="h-20 w-20 flex items-center justify-center rounded-full bg-gray-100 overflow-hidden mb-3">
              <img
                src={process.env.REACT_APP_API_URL + "/" + category.image}
                alt={category.name}
                className="h-16 w-16 object-cover rounded-full"
              />
            </div>
            {/* Category Name */}
            <p className="text-sm font-medium text-gray-800 bg-blue-600 text-white px-4 py-1.5 rounded-full">
              {category.name}
            </p>
          </div>
        ))}

        {/* All Categories Card */}
        <div
          onClick={navigateToCategories}
          className="flex flex-col items-center justify-center bg-blue-50 border border-dashed border-blue-400 shadow-sm rounded-lg p-4 cursor-pointer transition hover:scale-105 hover:shadow-md"
        >
          <p className="text-sm font-medium text-blue-600 bg-white px-4 py-1.5 rounded-full border border-blue-400">
            All Categories
          </p>
        </div>
      </div>
    </div>
  );
};

export default Categories2;
