import React, { useEffect, useState } from "react";
import axios from "axios";
import { load } from "@cashfreepayments/cashfree-js";

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
import Subscribe from "../components/SellerComponents/Subscribe/Subscribe";

const SellerLandingPage = () => {
  const [selectedPage, setSelectedPage] = useState("Dashboard");
  const [isBusinessProfileComplete, setIsBusinessProfileComplete] =
    useState(false);
  const [inquiries, setInquiries] = useState([]);
  const [subscribedStatus, setSubscribedStatus] = useState(false);
  const [showSubscriptionForm, setShowSubscriptionForm] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const [orderDetails, setOrderDetails] = useState({});
  const [selectedInquiryDetails, setSelectedInquiryDetails] = useState(null);

  const [cashfree, setCashfree] = useState(null);

  const fetchInquiries = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/user/get-inquiries`,
        {
          headers: { Authorization: `${localStorage.getItem("token")}` },
        }
      );
      if (response.status === 200) {
        setSubscribedStatus(true);
        setInquiries(response.data.inquiries);
      }
      if (response.status === 209) {
        //Not Subscribed and have more than 10 inquiries
        setInquiries(response.data.inquiries);
        setSubscribedStatus(false);
        alert(
          "You have reached inquiry limit. Please subscribe to view more inquiries."
        );
      }
    } catch (error) {
      console.error("Error fetching inquiries:", error);
    }
  };

  useEffect(() => {
    const initializeSDK = async () => {
      const sdk = await load({
        mode: "sandbox",
      });
      setCashfree(sdk);
    };
    initializeSDK();
  }, []);

  const handleSubscribe = async () => {
    //Generate Session Id and display Payment Form
    try {
      // Get sessionId with token and parameter

      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/user/seller/sessionid`,
        {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response", response);

      const data = await response.data;

      console.log("Data", data);

      if (response.status === 200) {
        console.log(response.data);
        setOrderDetails({
          orderId: response.data.order_id,
          orderAmount: response.data.order_amount,
          customerName: response.data.customer_details.customer_name,
          customerEmail: response.data.customer_details.customer_email,
          customerPhone: response.data.customer_details.customer_phone,
        });
        const sessionIdTemp = response.data.payment_session_id;
        console.log("SessionId", sessionIdTemp);
        setSessionId(sessionIdTemp);
        setShowSubscriptionForm(true);
        return sessionIdTemp;
      } else {
        console.error("Error generating sessionId");
        return null;
      }
    } catch (error) {
      console.error("Error generating sessionId:", error);
      return null;
    }
  };

  const handlePayment = async () => {
    try {
      if (!cashfree) {
        console.error("Cashfree SDK not initialized.");
        return;
      }

      if (!sessionId) {
        console.error("Session Id not found.");
        return;
      }

      let checkoutOptions = {
        paymentSessionId: sessionId,
        returnUrl: `${window.location.origin}/seller`,
        notifyUrl: `${process.env.REACT_APP_API_URL}/user/seller/cashfreeWebhook`,
      };

      await cashfree
        .checkout(checkoutOptions)
        .then(function (data) {
          console.log(data, "Payment Initiate");
        })
        .catch(function (error) {
          console.error(error);
        });

      setShowSubscriptionForm(false);
    } catch (error) {
      console.log(error);
    }
  };

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

    checkIsBusinessProfileCompleted();
    fetchInquiries();
  }, []);

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
      <SidePanel
        setSelectedPage={setSelectedPage}
        selectedPage={selectedPage}
        subscribedStatus={subscribedStatus}
        handleSubscribe={handleSubscribe}
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
                fetchInquiries={fetchInquiries}
              />
            )}
            {selectedPage === "ActiveInquiries" && (
              <ActiveInquiries
                inquiries={inquiries}
                setSelectedPage={setSelectedPage}
                setSelectedInquiryDetails={setSelectedInquiryDetails}
                fetchInquiries={fetchInquiries}
              />
            )}
            {selectedPage === "CompletedInquiries" && (
              <CompletedInquiries
                inquiries={inquiries}
                setSelectedPage={setSelectedPage}
                setSelectedInquiryDetails={setSelectedInquiryDetails}
                fetchInquiries={fetchInquiries}
              />
            )}
            {selectedPage === "AddNewProduct" && <AddNewProduct />}
            {selectedPage === "MyProducts" && <MyProducts />}
            {selectedPage === "DetailedInquiry" && (
              <DetailedInquiry
                selectedInquiryDetails={selectedInquiryDetails}
                setSelectedInquiryDetails={setSelectedInquiryDetails}
              />
            )}
            {showSubscriptionForm == true && (
              <Subscribe
                orderDetails={orderDetails}
                handlePayment={handlePayment}
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
