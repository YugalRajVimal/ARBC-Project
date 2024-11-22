import React, { useEffect } from "react";
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
import Categories2 from "../components/BuyerComponents/LandingPageComponents/Categories2/Categories2";
import axios from "axios";

const LandingPage = () => {
  const [logo, setLogo] = React.useState("");
  const [name, setName] = React.useState("");

  const getLogoName = async () => {
    // /api/admin/get-logo-name
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/admin/get-logo-name`
      );
      const data = await response.data;
      console.log("Logo Name:", data);
      setLogo(data.logoAndName.logo);
      setName(data.logoAndName.name);
      return data;
    } catch (error) {
      console.error("Error getting logo name:", error);
    }
  };

  useEffect(() => {
    getLogoName();
  }, []);

  return (
    <div className="h-[93vh] overflow-y-auto overflow-x-hidden">
      <Home />
      <FeaturedProducts />
      {/* <Categories /> */}
      <Categories2 />
      <div className="h-[300px] flex justify-center items-center gap-4">
        <NewArrival />
        <TrustedProducts name={name} />
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
