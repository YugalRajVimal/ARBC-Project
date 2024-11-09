import { useState } from "react";
import Dashboard from "../components/SellerComponents/Dashboard/Dashboard";
import UserProfile from "../components/SellerComponents/Profile/UserProfile/UserProfile";
import BusinessProfile from "../components/SellerComponents/Profile/BusinessProfile/BusinessProfile";
import BankDetails from "../components/SellerComponents/Profile/BankDetails/BankDetails";
import ReceivedInquiries from "../components/SellerComponents/LeadsAndInquiries/ReceivedInquiries/ReceivedInquiries";
import ActiveInquiries from "../components/SellerComponents/LeadsAndInquiries/ActiveInquiries/ActiveInquiries";
import CompletedInquiries from "../components/SellerComponents/LeadsAndInquiries/CompletedInquiries/CompletedInquiries";
import AddNewProduct from "../components/SellerComponents/ManageProducts/AddNewProduct/AddNewProduct";
import MyProducts from "../components/SellerComponents/ManageProducts/MyProducts/MyProducts";
import SidePanel from "../components/SellerComponents/SidePanel/SidePanel";

const SellerLandingPage = () => {
  const [selectedPage, setSelectedPage] = useState("Dashboard");

  return (
    <div className="h-[93vh] overflow-y-auto overflow-x-hidden flex bg-[#fdfef4]">
      <SidePanel setSelectedPage={setSelectedPage} selectedPage={selectedPage} />
      <div className="w-4/5 h-full mx-1 bg-[#fdfef4] p-4">
        {selectedPage === "Dashboard" && <Dashboard />}
        {selectedPage === "UserProfile" && <UserProfile />}
        {selectedPage === "BusinessProfile" && <BusinessProfile />}
        {selectedPage === "BankDetails" && <BankDetails />}
        {selectedPage === "ReceivedInquiries" && <ReceivedInquiries />}
        {selectedPage === "ActiveInquiries" && <ActiveInquiries />}
        {selectedPage === "CompletedInquiries" && <CompletedInquiries />}
        {selectedPage === "AddNewProduct" && <AddNewProduct />}
        {selectedPage === "MyProducts" && <MyProducts />}
      </div>
    </div>
  );
};

export default SellerLandingPage;
