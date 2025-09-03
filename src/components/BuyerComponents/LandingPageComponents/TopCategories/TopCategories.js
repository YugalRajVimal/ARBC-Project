import React, { useEffect, useState } from "react";
import { getAsideListItems } from "../../../../api/BuyerAPI/buyerAPI";
import { useNavigate } from "react-router-dom";

const TopCategories = () => {
  const navigate = useNavigate();
  const [topCategories, setTopCategories] = useState([]);

  useEffect(() => {
    // Fetch top categories from API
    getAsideListItems(0).then((data) => {
      setTopCategories(data[0].categories);
    });
  }, []);

  const navigateToCategories = () => {
    // Navigate to categories page
    navigate("/categories");
  };

  const navigateToSubCategories = (categoryId) => {
    // Navigate to sub categories page
    navigate(`/subcategories/${categoryId}`);
  };
  return (
    <div className={`hidden p-8 w-[100%] `}>
      <h2 onClick={navigateToCategories} className="text-xl font-bold mb-4">
        Top Categories
      </h2>
      <div className="flex flex-wrap gap-2 pl-2">
        {topCategories.map((category, index) => (
          <p
            onClick={() => navigateToSubCategories(category._id)}
            key={index}
            className="bg-gray-100 rounded-md px-3 py-1 text-xs font-medium text-gray-800 hover:bg-gray-300"
          >
            {category.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default TopCategories;
