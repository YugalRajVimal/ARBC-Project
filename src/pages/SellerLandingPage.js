import React, { useEffect, useState } from "react";
import axios from "axios";
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
import DetailedInquiry from "../components/SellerComponents/LeadsAndInquiries/DetailedInquiry";

const SellerLandingPage = () => {
  const [selectedPage, setSelectedPage] = useState("Dashboard");
  const [isBusinessProfileComplete, setIsBusinessProfileComplete] =
    useState(false);
  const [inquiries, setInquiries] = useState([]);
  const [selectedInquiryDetails, setSelectedInquiryDetails] = useState(null);

  useEffect(() => {
    const checkIsBusinessProfileCompleted = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/user/is-seller-details-completed`,
          {
            headers: { Authorization: `${localStorage.getItem("token")}` },
          }
        );
        setIsBusinessProfileComplete(response.data.isProfileCompleted);
      } catch (error) {
        console.error("Error checking profile:", error);
      }
    };

    const fetchInquiries = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/user/get-inquiries`,
          {
            headers: { Authorization: `${localStorage.getItem("token")}` },
          }
        );
        setInquiries(response.data.inquiries);
      } catch (error) {
        console.error("Error fetching inquiries:", error);
      }
    };

    checkIsBusinessProfileCompleted();
    fetchInquiries();
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
            {selectedPage === "Dashboard" && (
              <Dashboard setSelectedPage={setSelectedPage} />
            )}
            {selectedPage === "UserProfile" && <UserProfile />}
            {selectedPage === "BusinessProfile" && <BusinessProfile />}
            {selectedPage === "BankDetails" && <BankDetails />}
            {selectedPage === "ReceivedInquiries" && (
              <ReceivedInquiries
                inquiries={inquiries}
                setSelectedPage={setSelectedPage}
                setSelectedInquiryDetails={setSelectedInquiryDetails}
              />
            )}
            {selectedPage === "ActiveInquiries" && (
              <ActiveInquiries
                inquiries={inquiries}
                setSelectedPage={setSelectedPage}
                setSelectedInquiryDetails={setSelectedInquiryDetails}
              />
            )}
            {selectedPage === "CompletedInquiries" && (
              <CompletedInquiries
                inquiries={inquiries}
                setSelectedPage={setSelectedPage}
                setSelectedInquiryDetails={setSelectedInquiryDetails}
              />
            )}
            {selectedPage === "AddNewProduct" && <AddNewProduct />}
            {selectedPage === "MyProducts" && <MyProducts />}
            {selectedPage === "DetailedInquiry" && (
              <DetailedInquiry
                selectedInquiryDetails={selectedInquiryDetails}
              />
            )}
          </>
        ) : (
          <AddBusinessDetails />
        )}
      </div>
    </div>
  );
};

export default SellerLandingPage;
