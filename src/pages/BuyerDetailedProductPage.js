import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductPageDetails, postInquiry } from "../api/BuyerAPI/buyerAPI";

const BuyerDetailedProductPage = () => {
  const { productId } = useParams();

  const [productDetails, setProductDetails] = useState({});
  const [sellerDetails, setSellerDetails] = useState({});

  useEffect(() => {
    // Fetch top categories from API
    console.log(productId);
    getProductPageDetails(productId).then((data) => {
      console.log(data);
      setProductDetails(data.product || {});
      setSellerDetails(data.seller || {});
    });
  }, [productId]);

  const handleSendInquiry = async (productId, productName) => {
    if (!localStorage.getItem("token")) {
      alert("Login to send inquiry");
      return null;
    }
    if (!localStorage.getItem("isAuthenticatedBuyer")) {
      alert("Login to send inquiry");
      return null;
    }
    try {
      const response = await postInquiry(productId);
      if (response.status === 201) {
        alert("Inquiry sent successfully for product " + productName);
      } else {
        alert("LogIn First to send Inquiry" + productName);
      }
    } catch (error) {
      console.log(error);
      alert("LogIn First to send Inquiry " + productName);
    }
  };

  return (
    <div className="p-4">
      <div className="flex mb-8">
        {/* Product Card */}
        <div className="w-full flex border border-gray-200 rounded-lg shadow-md p-4">
          {/* Left Image Section */}
          <div className="w-1/3 h-64 overflow-hidden rounded-lg">
            <img
              src={
                process.env.REACT_APP_API_URL +
                  "/" +
                  productDetails.productImages?.[0] || ""
              }
              alt={productDetails.productName || ""}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Details Section */}
          <div className="w-2/3 pl-6 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                {productDetails.productName || "Product Name"}
              </h2>
              <p className="text-gray-600 mt-2">
                {productDetails.productOverview || "Overview not available."}
              </p>
              <p className="text-xl font-semibold text-blue-600 mt-4">
                ${productDetails.productPrice || "0.00"}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Available: {productDetails.productQuantity || 0}{" "}
                {productDetails.productUnitType || "units"}
              </p>
              {productDetails.youtubeLink && (
                <p>
                  <a
                    href={productDetails.youtubeLink || "#"}
                    target="_blank"
                    className="text-red-500"
                  >
                    Youtube Link
                  </a>
                </p>
              )}
            </div>

            <button
              onClick={(e) => (
                e.stopPropagation(),
                handleSendInquiry(productId, productDetails.productName)
              )}
              className="mt-4 bg-blue-600 text-white py-2 px-4 rounded self-start hover:bg-blue-700"
            >
              Send Inquiry
            </button>
          </div>
        </div>

        {/* Seller Information */}
        <div className="w-1/3 p-4 border rounded-lg shadow-md ml-4">
          <h3 className="text-lg font-bold">
            {sellerDetails.companyName || "Seller Name"}
          </h3>
          <p className="text-gray-600">
            {sellerDetails.companyDescription || "No description available."}
          </p>
          <p className="text-sm mt-2">
            <strong>Phone:</strong> {sellerDetails.companyPhoneNumber || "N/A"}
          </p>
          <p className="text-sm mt-1">
            <strong>Location:</strong> {sellerDetails.companyAddress},{" "}
            {sellerDetails.companyCity}, {sellerDetails.companyState},{" "}
            {sellerDetails.companyPincode}
          </p>
          <p className="text-sm mt-1">
            <strong>Established:</strong>{" "}
            {sellerDetails.companyYearOfEstablishment || "N/A"}
          </p>
          <p className="text-sm mt-1">
            <strong>Working Days:</strong>{" "}
            {sellerDetails.companyWorkingDays?.join(", ") || "N/A"}
          </p>
          <img
            src={
              process.env.REACT_APP_API_URL + "/" + sellerDetails.companyLogo ||
              ""
            }
            alt="Company Logo"
            className="w-24 mt-4"
          />
        </div>
      </div>

      <div className="flex">
        <div className="w-2/3 p-4">
          {/* Detailed Product Overview */}
          <div className="mb-4">
            <h4 className="text-lg font-semibold">Product Overview</h4>
            <p className="text-gray-600 mt-2">
              {productDetails.productOverview || "Overview not available."}
            </p>
          </div>

          {/* Detailed Product Specifications */}
          <div className="mb-4">
            <h4 className="text-lg font-semibold">Product Specifications</h4>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              {productDetails.productSpecifications?.map((spec, index) => (
                <li key={index}>
                  <strong>{spec.name}:</strong> {spec.value}
                </li>
              )) || <li>No specifications available.</li>}
            </ul>
          </div>

          {/* Company Details */}
          <div className="mb-4">
            <h4 className="text-lg font-semibold">Company Details</h4>
            <p>
              <strong>Employees:</strong>{" "}
              {sellerDetails.companyNumberOfEmployees || "N/A"}
            </p>
            <p>
              <strong>Turnover:</strong> ${sellerDetails.companyTurnover || "0"}
            </p>
            <p>
              <strong>Ownership:</strong>{" "}
              {sellerDetails.companyOwnershipType || "N/A"}
            </p>
          </div>
        </div>

        {/* Seller Taxation and Bank Details */}
        <div className="w-1/3 p-4 border-l">
          <h4 className="text-lg font-semibold mb-4">
            Seller Taxation Details
          </h4>
          <p>
            <strong>GST Number:</strong>{" "}
            {sellerDetails.companyIdentifiers?.gstNumber || "N/A"}
          </p>
          <p>
            <strong>PAN Number:</strong>{" "}
            {sellerDetails.companyIdentifiers?.panNumber || "N/A"}
          </p>
          <p>
            <strong>TAN Number:</strong>{" "}
            {sellerDetails.companyIdentifiers?.tanNumber || "N/A"}
          </p>

          <h4 className="text-lg font-semibold mt-6">Bank Details</h4>
          <p>
            <strong>Account Type:</strong>{" "}
            {sellerDetails.bankDetails?.bankAccountType || "N/A"}
          </p>
          <p>
            <strong>Account Holder:</strong>{" "}
            {sellerDetails.bankDetails?.accountHolderName || "N/A"}
          </p>
          <p>
            <strong>IFSC:</strong>{" "}
            {sellerDetails.bankDetails?.ifscCode || "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BuyerDetailedProductPage;
