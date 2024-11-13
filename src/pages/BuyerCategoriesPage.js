import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PopularProducts from "../components/BuyerComponents/PopularProducts/PopularProducts";
import { getAllCategories } from "../api/BuyerAPI/buyerAPI";

const BuyerCategoriesPage = () => {
  const navigate = useNavigate();

  const navigateToSubCategory = (id) => {
    console.log(id);
    navigate(`/subcategories/${id}`);
  };

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    // Fetch top categories from API
    getAllCategories().then((data) => {
      console.log(data);
      setCategories(data);
    });
  }, []);

  return (
    <>
      <div className="p-4">
        <h2 className="text-xl font-semibold">All Categories</h2>
        <div className="h-full overflow-y-auto flex justify-around flex-wrap gap-2 p-4">
          {categories.map((category) => (
            <div
              onClick={() => navigateToSubCategory(category._id)}
              className=" h-[120px] w-[340px] bg-slate-100 flex justify-between items-center p-2"
            >
              <img className="h-full aspect-[1/1] bg-slate-200"></img>
              <div className="w-full p-2 pt-0 h-full">
                <h3 className="text-lg font-semibold">{category.name}</h3>
                <p className="text-sm">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <PopularProducts />
      </div>
    </>
  );
};

export default BuyerCategoriesPage;
