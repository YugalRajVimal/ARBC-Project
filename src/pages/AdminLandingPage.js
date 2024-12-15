import { useEffect, useState } from "react";
import AdminSidePanel from "../components/AdminComponents/SidePanel/AdminSidePanel";
import AddCategory from "../components/AdminComponents/Category/AddCategory";
import AddSubCategory from "../components/AdminComponents/SubCategory/AddSubCategory";
import BuyerList from "../components/AdminComponents/Profile/BuyerList";
import SellerList from "../components/AdminComponents/Profile/SellerList";
import TopCategories from "../components/AdminComponents/AsideList/TopCategories";
import FeaturedProducts from "../components/AdminComponents/AsideList/FeaturedProducts";
import PopularProducts from "../components/AdminComponents/AsideList/PopularProducts";
import ProductShowcase from "../components/AdminComponents/AsideList/ProductShowcase";
import TrustedProducts from "../components/AdminComponents/AsideList/TrustedProducts";
import FeaturedCategory from "../components/AdminComponents/FeaturedCategory/FeaturedCategory";
import PostBuyRequirements from "../components/AdminComponents/PostBuyRequirements/PostBuyRequirements";
import AllInquiries from "../components/AdminComponents/AllInquiries/AllInquiries";
import Banners from "../components/AdminComponents/Banners/Banners";
import Testimonials from "../components/AdminComponents/Testimonials/Testimonials";
import LogoAndName from "../components/AdminComponents/LogoAndName/LogoAndName";
import axios from "axios";
import SetInquiryCount from "../components/AdminComponents/SetInquiryCount/SetInquiryCount";


const AdminLandingPage = () => {
  const [selectedPage, setSelectedPage] = useState("Category");
  const [logo, setLogo] = useState("");
  const [name, setName] = useState("");

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

    // Set the document title
    document.title = name || "Default Title";

    // Set the favicon
    if (logo) {
      const favicon = document.querySelector('link[rel="icon"]');
      if (favicon) {
        favicon.href = process.env.REACT_APP_API_URL +"/"+ logo;
      } else {
        const link = document.createElement("link");
        link.rel = "icon";
        link.href = logo;
        document.head.appendChild(link);
      }
    }
  }, [name, logo]);


  return (
    <div className="h-[93vh] overflow-y-auto overflow-x-hidden flex bg-[#fdfef4]">
      <AdminSidePanel
        setSelectedPage={setSelectedPage}
        selectedPage={selectedPage}
      />

      <div className="w-4/5 h-full mx-1 bg-[#fdfef4] p-4">
          <>
            {/* {selectedPage === "Dashboard" && <Dashboard />} */}
            {selectedPage === "LogoAndName" && <LogoAndName />}
            {selectedPage === "Category" && <AddCategory />}
            {selectedPage === "SubCategory" && <AddSubCategory />}
            {selectedPage === "BuyerProfile" && <BuyerList />}
            {selectedPage === "SellerProfile" && <SellerList />}
            {selectedPage === "TopCategories" && <TopCategories />}
            {selectedPage === "FeaturedProducts" && <FeaturedProducts />}
            {selectedPage === "PopularProducts" && <PopularProducts />}
            {selectedPage === "ProductShowcase" && <ProductShowcase />}
            {selectedPage === "TrustedProducts" && <TrustedProducts />}
            {selectedPage === "FeaturedCategory" && <FeaturedCategory />}
            {selectedPage === "PostBuyRequirements" && <PostBuyRequirements />}
            {selectedPage === "AllInquiries"&& <AllInquiries />}
            {selectedPage === "Banners" && <Banners />}
            {selectedPage === "Testimonials" && <Testimonials />}
            {selectedPage === "setInquiryCount" && <SetInquiryCount />}
          </>
      </div>
    </div>
  );
};

export default AdminLandingPage;
