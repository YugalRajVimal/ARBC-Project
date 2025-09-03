import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { getFeaturedCategory } from "../../../../api/BuyerAPI/buyerAPI";
import { useNavigate } from "react-router-dom";

const FeaturedCategory = () => {
  const navigate = useNavigate();
  const [featuredCategory, setFeaturedCategory] = useState(null);

  const fetchFeaturedCategory = async () => {
    try {
      const response = await getFeaturedCategory();
      const data = await response.data;
      if (response.status === 200) {
        setFeaturedCategory(data);
      }
    } catch (error) {
      console.error("Error fetching featured category:", error);
    }
  };

  useEffect(() => {
    fetchFeaturedCategory();
  }, []);

  const navigateToSubCategories = (categoryId) => {
    navigate(`/subcategories/${categoryId}`);
  };

  const navigateToProductsPage = (subCategoryId) => {
    navigate(`/products/${subCategoryId}`);
  };

  if (!featuredCategory) return null;

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Title */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">
          Featured Category
        </h2>
        <div className="h-[2px] w-12 bg-green-500"></div>
      </div>

      {/* Main Card */}
      <div
        onClick={() => navigateToSubCategories(featuredCategory.categoryId)}
        className="w-full bg-[#ebedfd] shadow-md rounded-lg p-4 flex flex-col md:flex-row gap-6 cursor-pointer hover:shadow-lg transition"
      >
        {/* Category Title */}
        <div className="flex flex-col justify-center items-start md:w-1/3">
          <h3 className="text-lg font-bold text-gray-800">
            {featuredCategory.text}
          </h3>
        </div>

        {/* Subcategories */}
        <div className="flex flex-col md:flex-row gap-4 md:w-2/3">
          {/* SubCategory One */}
          <div
            onClick={(e) => {
              e.stopPropagation();
              navigateToProductsPage(
                featuredCategory.subCategoryOne.subCategoryId
              );
            }}
            className="flex items-center gap-4 bg-white rounded-lg p-3 flex-1 shadow-sm hover:shadow-md transition cursor-pointer"
          >
            <div className="h-16 w-16 rounded-md overflow-hidden">
              <img
                src={
                  process.env.REACT_APP_API_URL +
                  "/" +
                  featuredCategory?.subCategoryOne?.image
                }
                alt={featuredCategory?.subCategoryOne?.text}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex justify-between items-center flex-1">
              <h5 className="text-gray-800 font-medium">
                {featuredCategory?.subCategoryOne?.text}
              </h5>
              <span className="p-2 bg-[#ebedfd] rounded-full">
                <IoIosArrowForward className="text-gray-700" />
              </span>
            </div>
          </div>

          {/* SubCategory Two */}
          <div
            onClick={(e) => {
              e.stopPropagation();
              navigateToProductsPage(
                featuredCategory.subCategoryTwo.subCategoryId
              );
            }}
            className="flex items-center gap-4 bg-white rounded-lg p-3 flex-1 shadow-sm hover:shadow-md transition cursor-pointer"
          >
            <div className="h-16 w-16 rounded-md overflow-hidden">
              <img
                src={
                  process.env.REACT_APP_API_URL +
                  "/" +
                  featuredCategory?.subCategoryTwo?.image
                }
                alt={featuredCategory?.subCategoryTwo?.text}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex justify-between items-center flex-1">
              <h5 className="text-gray-800 font-medium">
                {featuredCategory?.subCategoryTwo?.text}
              </h5>
              <span className="p-2 bg-[#ebedfd] rounded-full">
                <IoIosArrowForward className="text-gray-700" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategory;
