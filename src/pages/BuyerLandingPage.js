import React from "react";
import Home from "../components/BuyerComponents/LandingPageComponents/HomePage/Home";
import Categories from "../components/BuyerComponents/LandingPageComponents/Categories/Categories";
import FeaturedProducts from "../components/BuyerComponents/LandingPageComponents/FeaturedProducts/FeaturedProducts";
import NewArrival from "../components/BuyerComponents/LandingPageComponents/NewArrival/NewArrival";
import TrustedProducts from "../components/BuyerComponents/LandingPageComponents/TrustedProducts/TrustedProducts";
import PostBuyRequirements from "../components/BuyerComponents/LandingPageComponents/PostBuyRequirement/PostBuyRequirements";
import Testimonials from "../components/BuyerComponents/LandingPageComponents/Testimonials/Testimonials";
import TopCategories from "../components/BuyerComponents/LandingPageComponents/TopCategories/TopCategories";
import PopularProducts from "../components/BuyerComponents/PopularProducts/PopularProducts";
import Footer from "../components/BuyerComponents/Footer/Footer";

const LandingPage = () => {
  return (
    <div className="h-[93vh] overflow-y-auto overflow-x-hidden">
      <Home />
      <FeaturedProducts />
      <Categories />
      <div className="h-[300px] flex justify-center items-center gap-4">
        <NewArrival />
        <TrustedProducts />
      </div>
      <PostBuyRequirements />
      <Testimonials />
      <div className="flex flex-col justify-center items-center gap-4">
        <TopCategories />
        <PopularProducts />
      </div>
    </div>
  );
};

export default LandingPage;
