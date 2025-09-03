import React from "react";
import TopCategories from "./TopCategories";
import ProductBanners from "./ProductBanners";
import CategoriesList from "./CategoriesList";
import FeaturedCategory from "./FeaturedCategory";

const Home = () => {
  return (
    <div className="md:h-full p-2 w-full flex  flex-col-reverse md:flex-row gap-4">
      {/* Left Side - Categories */}
      <div className="w-full md:w-[26%]">
        <TopCategories />
      </div>

      {/* Right Side - Banners + Featured */}
      <div className="w-full md:w-[74%] h-full flex flex-col gap-4">
        <ProductBanners />
        {/* <CategoriesList /> */}
        <FeaturedCategory />
      </div>
    </div>
  );
};

export default Home;
