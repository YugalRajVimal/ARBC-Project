import React, { useEffect, useState } from "react";
import SubCategory from "./SubCategory/SubCategory";
import { getAllPopulatedCategories } from "../../../../api/BuyerAPI/buyerAPI";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();
  const [populatedCategories, setPopulatedCategories] = useState([]);
  useEffect(() => {
    // Fetch top categories from API
    getAllPopulatedCategories().then((data) => {
      //Only top 3 categories
      data = data.slice(0, 3);
      setPopulatedCategories(data);
    });
  }, []);

  const navigateToSubCategories = (categoryId) => {
    // Navigate to sub categories page
    navigate(`/subcategories/${categoryId}`);
  }

  return (
    <div className="h-[150%] w-full p-2 flex flex-col justify-between">
      {/* Top 3 Cateegories  */}
      {populatedCategories.map((populatedCategory) => (
        <div 
        onClick={()=>navigateToSubCategories(populatedCategory._id)}
        className="h-1/3 w-full">
          <h2 className="p-2 text-xl font-bold h-[12%]">{populatedCategory.name}</h2>
          <div className="h-[88%] flex justify-center overflow-x-auto mx-4">
            <div className=" flex justify-start overflow-x-auto gap-4">
              {populatedCategory.subCategories.map((subCategory, index) => (
                <SubCategory key={index} subCategory={subCategory} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
