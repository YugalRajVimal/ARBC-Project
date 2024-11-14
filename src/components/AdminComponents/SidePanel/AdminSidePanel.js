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
                  selectedPage === "FeaturedCategory" && "bg-[#ffbe48]"
                }`}
                onClick={() => setSelectedPage("FeaturedCategory")}
              >
                Featured Category
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
                onClick={() => setSelectedPage("PopulaProductShowcaserProducts")}
              >
                Product Showcase
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default AdminSidePanel;
