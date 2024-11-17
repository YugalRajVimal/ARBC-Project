import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { getFeaturedCategory } from "../../../../api/BuyerAPI/buyerAPI";
import { useNavigate } from "react-router-dom";

const FeaturedCategory = () => {
  const navigate = useNavigate();
  const [featuredCategory, setFeaturedCategory] = useState([]);

  const fetchFeaturedCategory = async () => {
    try {
      const response = await getFeaturedCategory();
      console.log(response);
      const data = await response.data;
      if (response.status === 200) {
        setFeaturedCategory(data);
        console.log(featuredCategory);
      }
    } catch (error) {
      console.error("Error fetching featured category:", error);
      alert("Error fetching featured category");
    }
  };

  useEffect(() => {
    fetchFeaturedCategory();
  }, []);

  const navigateToSubCategories = (categoryId) => {
    // Navigate to sub categories page
    navigate(`/subcategories/${categoryId}`);
  };

  const navigateToProductsPage = (subCategoryId) => {
    navigate(`/products/${subCategoryId}`);
  };
  return (
    <div className="h-[34%]  flex flex-col justify-center items-center">
      <p className="p-2 w-full text-left text-xl font-medium">
        Featured Category
      </p>
      <div
        onClick={() => navigateToSubCategories(featuredCategory.categoryId)}
        className="w-[95%] h-[40%] bg-[#ebedfd] shadow-[0px_0px_10px_2px_rgba(0,0,0,0.2)] rounded-md p-2 flex justify-around items-center"
      >
        <h3 className="flex flex-col font-bold">{featuredCategory.text}</h3>
        <div
          onClick={(e) => (
            e.stopPropagation(),
            navigateToProductsPage(
              featuredCategory.subCategoryOne.subCategoryId
            )
          )}
          className="w-[30%] h-[90%] bg-white rounded-sm flex justify-around items-center p-2"
        >
          <div className="h-[95%] aspect-[1/1]">
            <img
              src={
                process.env.REACT_APP_API_URL +
                "/" +
                featuredCategory?.subCategoryOne?.image
              }
              className="w-full h-full bg-slate-100 object-cover rounded-md"
            />
          </div>

          <h5> {featuredCategory?.subCategoryOne?.text}</h5>
          <span className="p-1 bg-[#ebedfd] rounded-full">
            <IoIosArrowForward />
          </span>
        </div>
        <div
          onClick={(e) => (
            e.stopPropagation(),
            navigateToProductsPage(
              featuredCategory.subCategoryTwo.subCategoryId
            )
          )}
          className="w-[30%] h-[90%] bg-white rounded-sm flex justify-around items-center p-2"
        >
          <div className="h-[95%] aspect-[1/1]">
            <img
              src={
                process.env.REACT_APP_API_URL +
                "/" +
                featuredCategory?.subCategoryTwo?.image
              }
              className="w-full h-full bg-slate-200 object-cover rounded-md"
            />
          </div>

          <h5> {featuredCategory?.subCategoryTwo?.text}</h5>
          <span className="p-1 bg-[#ebedfd] rounded-full">
            <IoIosArrowForward />
          </span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategory;
