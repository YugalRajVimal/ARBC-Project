import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const AdminSidePanel = (props) => {
  const { setSelectedPage, selectedPage } = props;

  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isAsideListOpen, setIsAsideListOpen] = useState(false);

  const toggleProfile = () => setIsProfileOpen(!isProfileOpen);
  const toggleAsideList = () => setIsAsideListOpen(!isAsideListOpen);

  return (
    <div className="w-1/5 h-full p-4">
      <ul className="space-y-4">
        {/* LogoAndName */}
        <li
          className={`p-2 rounded hover:bg-[#ffd383] shadow-lg ${
            selectedPage === "LogoAndName" && "bg-[#ffd383]"
          }`}
          onClick={() => setSelectedPage("LogoAndName")}
        >
          <h4 className="flex gap-2 items-center">Logo And Name</h4>
        </li>
        <li
          className={`p-2 rounded hover:bg-[#ffd383] shadow-lg ${
            selectedPage === "OnboardSeller" && "bg-[#ffd383]"
          }`}
          onClick={() => setSelectedPage("OnboardSeller")}
        >
          <h4 className="flex gap-2 items-center">Onboard Seller</h4>
        </li>
        <li
          className={`p-2 rounded hover:bg-[#ffd383] shadow-lg ${
            selectedPage === "Category" && "bg-[#ffd383]"
          }`}
          onClick={() => setSelectedPage("Category")}
        >
          <h4 className="flex gap-2 items-center">Category</h4>
        </li>
        <li
          className={`p-2 rounded hover:bg-[#ffd383] shadow-lg ${
            selectedPage === "SubCategory" && "bg-[#ffd383]"
          }`}
          onClick={() => setSelectedPage("SubCategory")}
        >
          <h4 className="flex gap-2 items-center">Sub Category</h4>
        </li>
        <li className={`p-2 rounded hover:bg-[#ffd383] shadow-lg`}>
          <h4
            className="flex gap-2 justify-between items-center cursor-pointer"
            onClick={toggleProfile}
          >
            Profile {isProfileOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </h4>
          {isProfileOpen && (
            <ul className="pl-4 mt-2 space-y-2">
              <li
                className={`hover:bg-[#ffbe48] p-2 rounded shadow-lg ${
                  selectedPage === "BuyerProfile" && "bg-[#ffbe48]"
                }`}
                onClick={() => setSelectedPage("BuyerProfile")}
              >
                Buyer Profile
              </li>
              <li
                className={`hover:bg-[#ffbe48] p-2 rounded shadow-lg ${
                  selectedPage === "SellerProfile" && "bg-[#ffbe48]"
                }`}
                onClick={() => setSelectedPage("SellerProfile")}
              >
                Seller Profile
              </li>
            </ul>
          )}
        </li>
        <li className={`p-2 rounded hover:bg-[#ffd383] shadow-lg`}>
          <h4
            className="flex gap-2 justify-between items-center cursor-pointer"
            onClick={toggleAsideList}
          >
            Aside List {isAsideListOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </h4>
          {isAsideListOpen && (
            <ul className="pl-4 mt-2 space-y-2">
              <li
                className={`hover:bg-[#ffbe48] p-2 rounded shadow-lg ${
                  selectedPage === "TopCategories" && "bg-[#ffbe48]"
                }`}
                onClick={() => setSelectedPage("TopCategories")}
              >
                Top Categories
              </li>
              <li
                className={`hover:bg-[#ffbe48] p-2 rounded shadow-lg ${
                  selectedPage === "FeaturedProducts" && "bg-[#ffbe48]"
                }`}
                onClick={() => setSelectedPage("FeaturedProducts")}
              >
                Featured Products
              </li>
              {/* Trusted Products */}
              <li
                className={`hover:bg-[#ffbe48] p-2 rounded shadow-lg ${
                  selectedPage === "TrustedProducts" && "bg-[#ffbe48]"
                }`}
                onClick={() => setSelectedPage("TrustedProducts")}
              >
                Trusted Products
              </li>
              {/* Popular Products  */}
              <li
                className={`hover:bg-[#ffbe48] p-2 rounded shadow-lg ${
                  selectedPage === "PopularProducts" && "bg-[#ffbe48]"
                }`}
                onClick={() => setSelectedPage("PopularProducts")}
              >
                Popular Products
              </li>

              {/* Product Showcase  */}
              <li
                className={`hover:bg-[#ffbe48] p-2 rounded shadow-lg ${
                  selectedPage === "ProductShowcase" && "bg-[#ffbe48]"
                }`}
                onClick={() => setSelectedPage("ProductShowcase")}
              >
                Product Showcase
              </li>
            </ul>
          )}
        </li>
        <li
          className={`p-2 rounded hover:bg-[#ffd383] shadow-lg ${
            selectedPage === "FeaturedCategory" && "bg-[#ffd383]"
          }`}
          onClick={() => setSelectedPage("FeaturedCategory")}
        >
          <h4 className="flex gap-2 items-center">Featured Category</h4>
        </li>
        <li
          className={`p-2 rounded hover:bg-[#ffd383] shadow-lg ${
            selectedPage === "PostBuyRequirements" && "bg-[#ffd383]"
          }`}
          onClick={() => setSelectedPage("PostBuyRequirements")}
        >
          <h4 className="flex gap-2 items-center">Buy Requirements </h4>
        </li>
        <li
          className={`p-2 rounded hover:bg-[#ffd383] shadow-lg ${
            selectedPage === "AllInquiries" && "bg-[#ffd383]"
          }`}
          onClick={() => setSelectedPage("AllInquiries")}
        >
          <h4 className="flex gap-2 items-center">All Inquiries </h4>
        </li>
        <li
          className={`p-2 rounded hover:bg-[#ffd383] shadow-lg ${
            selectedPage === "Banners" && "bg-[#ffd383]"
          }`}
          onClick={() => setSelectedPage("Banners")}
        >
          <h4 className="flex gap-2 items-center">Banners </h4>
        </li>
        <li
          className={`p-2 rounded hover:bg-[#ffd383] shadow-lg ${
            selectedPage === "Testimonials" && "bg-[#ffd383]"
          }`}
          onClick={() => setSelectedPage("Testimonials")}
        >
          <h4 className="flex gap-2 items-center">Testimonials </h4>
        </li>

        <li
          className={`p-2 rounded hover:bg-[#ffd383] shadow-lg ${
            selectedPage === "setInquiryCount" && "bg-[#ffd383]"
          }`}
          onClick={() => setSelectedPage("setInquiryCount")}
        >
          <h4 className="flex gap-2 items-center">Set Inquiry Count </h4>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidePanel;
