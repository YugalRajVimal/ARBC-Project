import { useEffect, useState } from "react";
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
import AddBusinessDetails from "../components/SellerComponents/Profile/BusinessProfile/AddBusinessDetails";
import axios from "axios";

const SellerLandingPage = () => {
  const [selectedPage, setSelectedPage] = useState("Dashboard");
  const [isBusinessProfileComplete, setIsBusinessProfileComplete] =
    useState(false);

  useEffect(() => {
    // Check if the business profile is complete
    // This would typically be a GET request to the backend API - /user/is-seller-details-completed
    // The API would return a boolean value indicating if the profile is complete
    // For now, we are setting it to true for demonstration purposes
    const checkIsBusinessProfileCompleted = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/user/is-seller-details-completed`,
          {
            headers: {
              Authorization: `${localStorage.getItem("token")}`,
            },
          }
        );

        console.log(response);
        if (response.status === 200) {
          if (response.data.isProfileCompleted) {
            setIsBusinessProfileComplete(true);
          } else if (!response.data.isProfileCompleted) {
            setIsBusinessProfileComplete(false);
          }
        }
      } catch (error) {
        console.log(error);
        setIsBusinessProfileComplete(false);
      }
    };
    checkIsBusinessProfileCompleted();
  }, []);

  return (
    <div className="h-[93vh] overflow-y-auto overflow-x-hidden flex bg-[#fdfef4]">
      <SidePanel
        setSelectedPage={setSelectedPage}
        selectedPage={selectedPage}
      />

      <div className="w-4/5 h-full mx-1 bg-[#fdfef4] p-4">
        {isBusinessProfileComplete ? (
          <>
            {selectedPage === "Dashboard" && <Dashboard />}
            {selectedPage === "UserProfile" && <UserProfile />}
            {selectedPage === "BusinessProfile" && <BusinessProfile />}
            {selectedPage === "BankDetails" && <BankDetails />}
            {selectedPage === "ReceivedInquiries" && <ReceivedInquiries />}
            {selectedPage === "ActiveInquiries" && <ActiveInquiries />}
            {selectedPage === "CompletedInquiries" && <CompletedInquiries />}
            {selectedPage === "AddNewProduct" && <AddNewProduct />}
            {selectedPage === "MyProducts" && <MyProducts />}
          </>
        ) : (
          <AddBusinessDetails />
        )}
      </div>
    </div>
  );
};

export default SellerLandingPage;
