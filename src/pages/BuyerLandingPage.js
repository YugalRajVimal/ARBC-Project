import React from "react";
import Home from "../components/BuyerComponents/HomePage/Home";
import Categories from "../components/BuyerComponents/Categories/Categories";
import FeaturedProducts from "../components/BuyerComponents/FeaturedProducts/FeaturedProducts";
import NewArrival from "../components/BuyerComponents/NewArrival/NewArrival";
import TrustedProducts from "../components/BuyerComponents/TrustedProducts/TrustedProducts";
import PostBuyRequirements from "../components/BuyerComponents/PostBuyRequirement/PostBuyRequirements";
import Testimonials from "../components/BuyerComponents/Testimonials/Testimonials";
import TopCategories from "../components/BuyerComponents/TopCategories/TopCategories";
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
      <Footer />
    </div>
  );
};

export default LandingPage;
