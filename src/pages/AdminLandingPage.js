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


const AdminLandingPage = () => {
  const [selectedPage, setSelectedPage] = useState("Category");


  return (
    <div className="h-[93vh] overflow-y-auto overflow-x-hidden flex bg-[#fdfef4]">
      <AdminSidePanel
        setSelectedPage={setSelectedPage}
        selectedPage={selectedPage}
      />

      <div className="w-4/5 h-full mx-1 bg-[#fdfef4] p-4">
          <>
            {/* {selectedPage === "Dashboard" && <Dashboard />} */}
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

          </>
      </div>
    </div>
  );
};

export default AdminLandingPage;
