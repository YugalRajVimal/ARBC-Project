import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllPopulatedCategories } from "../../../../api/BuyerAPI/buyerAPI";

const Categories2 = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getAllPopulatedCategories().then((data) => {
        data = data.slice(0, 6);
      setCategories(data);
    });
  }, []);

  const navigateToSubCategories = (categoryId) => {
    // Navigate to sub categories page
    navigate(`/subcategories/${categoryId}`);
  };

  const navigateToCategories = () => {
    // Navigate to categories page
    navigate("/categories");
  };



  return (
    <div className="p-2 flex flex-col justify-center gap-2 items-start">
      <h2 className="p-2 text-xl font-bold h-[12%]">Categories</h2>
      <div className=" flex flex-wrap justify-center w-full gap-4 overflow-x-auto mx-4">
        {categories.map((category, index) => (
            <div
            key={index}
            onClick={() => navigateToSubCategories(category._id)}
            className="flex flex-col justify-center items-center gap-2 cursor-pointer w-[280px] px-10 py-2 border-[1px] border-black rounded-md"
          >
            <img
              src={process.env.REACT_APP_API_URL + "/" + category.image}
              alt={category.name}
              className="h-[70px] w-[70px] object-cover border-[1px] border-black rounded-md"
            />
            <p className="text-sm font-semibold bg-blue-700 px-6 py-2 rounded-md whitespace-nowrap text-white">{category.name}</p>
          </div>
        ))}
        <div
            onClick={() => navigateToCategories()}
            className="flex flex-col justify-center items-center gap-2 cursor-pointer w-[280px] px-10 py-2 "
          >
            <p className="text-sm font-semibold bg-blue-700 px-6 py-2 rounded-md whitespace-nowrap text-white">All Categories</p>
          </div>
      </div>
    </div>
  );
};

export default Categories2;
