import React from "react";
import Home from "../components/HomePage/Home";
import Categories from "../components/Categories/Categories";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import NewArrival from "../components/NewArrival/NewArrival";
import TrustedProducts from "../components/TrustedProducts/TrustedProducts";
import PostBuyRequirements from "../components/PostBuyRequirement/PostBuyRequirements";
import Testimonials from "../components/Testimonials/Testimonials";
import TopCategories from "../components/TopCategories/TopCategories";
import PopularProducts from "../components/PopularProducts/PopularProducts";
import Footer from "../components/Footer/Footer";

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
