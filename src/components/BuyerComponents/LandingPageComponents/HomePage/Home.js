import React from "react";
import TopCategories from "./TopCategories";
import ProductBanners from "./ProductBanners";
import CategoriesList from "./CategoriesList";
import FeaturedCategory from "./FeaturedCategory";

const Home = () => {
  return (
    <div className="h-full p-2 flex justify-between">
      <TopCategories />
      <div className="w-[74%] h-full flex flex-col justify-around">
        <ProductBanners />
        <CategoriesList />
        <FeaturedCategory />
      </div>
    </div>
  );
};

export default Home;
