import React from "react";
import { useParams } from "react-router-dom";

const productDetails = {
  productName: "Wireless Bluetooth Headphones",
  productImages: [
    "https://example.com/images/headphone1.jpg",
    "https://example.com/images/headphone2.jpg",
  ],
  productPrice: 79.99,
  productQuantity: 100,
  productUnitType: "piece",
  productOverview: "High-quality wireless headphones with noise cancellation.",
  productSpecifications: [
    { name: "Battery Life", value: "20 hours" },
    { name: "Bluetooth Version", value: "5.0" },
    { name: "Weight", value: "250g" },
  ],
  user: "60d21b4967d0d8992e610c85",
  categoryId: "60d21b4067d0d8992e610c80",
  subCategoryId: "60d21b4167d0d8992e610c81",
};

const sellerDetails = {
  userId: "60d21b4967d0d8992e610c85",
  companyName: "AudioTech Inc.",
  companyPhoneNumber: "123-456-7890",
  companyOwnershipType: "Private",
  companyTurnover: 500000,
  companyYearOfEstablishment: 2005,
  companyNumberOfEmployees: 50,
  companyFaxNumber: "123-456-7891",
  companyAddress: "123 Audio St, Music City",
  companyPincode: "123456",
  companyCity: "Music City",
  companyState: "Melody State",
  companyIdentifiers: {
    gstNumber: "27AAAPL1234C1ZV",
    aadharNumber: "123456789012",
    panNumber: "AAPL1234C",
    tanNumber: "TAN12345",
    images: ["https://example.com/images/company-id.jpg"],
  },
  companyLogo: "https://example.com/images/logo.jpg",
  companyPhotos: ["https://example.com/images/company1.jpg"],
  companyDescription:
    "AudioTech Inc. specializes in high-quality audio equipment, catering to professionals and enthusiasts.",
  modeOfPayment: ["Credit Card", "Bank Transfer", "Cash on Delivery"],
  companyWorkingDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  bankDetails: {
    bankAccountType: "Savings",
    bankLinkedPhoneNumber: "123-456-7890",
    accountHolderName: "AudioTech Inc.",
    accountNumber: "1234567890",
    ifscCode: "IFSC0001234",
  },
};

const BuyerDetailedProductPage = () => {
  const { productId } = useParams();

  return (
    <div className="p-4">
      <div className="flex mb-8">
        {/* Product Card */}
        <div className="w-full flex border border-gray-200 rounded-lg shadow-md p-4">
          {/* Left Image Section */}
          <div className="w-1/3 h-64 overflow-hidden rounded-lg">
            <img
              src={productDetails.productImages[0]}
              alt={productDetails.productName}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Details Section */}
          <div className="w-2/3 pl-6 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                {productDetails.productName}
              </h2>
              <p className="text-gray-600 mt-2">
                {productDetails.productOverview}
              </p>
              <p className="text-xl font-semibold text-blue-600 mt-4">
                ${productDetails.productPrice.toFixed(2)}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Available: {productDetails.productQuantity}{" "}
                {productDetails.productUnitType}(s)
              </p>
            </div>

            <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded self-start hover:bg-blue-700">
              Send Inquiry
            </button>
          </div>
        </div>

        {/* Seller Information */}
        <div className="w-1/3 p-4 border rounded-lg shadow-md ml-4">
          <h3 className="text-lg font-bold">{sellerDetails.companyName}</h3>
          <p className="text-gray-600">{sellerDetails.companyDescription}</p>
          <p className="text-sm mt-2">
            <strong>Phone:</strong> {sellerDetails.companyPhoneNumber}
          </p>
          <p className="text-sm mt-1">
            <strong>Location:</strong> {sellerDetails.companyAddress},{" "}
            {sellerDetails.companyCity}, {sellerDetails.companyState},{" "}
            {sellerDetails.companyPincode}
          </p>
          <p className="text-sm mt-1">
            <strong>Established:</strong>{" "}
            {sellerDetails.companyYearOfEstablishment}
          </p>
          <p className="text-sm mt-1">
            <strong>Working Days:</strong>{" "}
            {sellerDetails.companyWorkingDays.join(", ")}
          </p>
          <img
            src={sellerDetails.companyLogo}
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
              {productDetails.productOverview}
            </p>
          </div>

          {/* Detailed Product Specifications */}
          <div className="mb-4">
            <h4 className="text-lg font-semibold">Product Specifications</h4>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              {productDetails.productSpecifications.map((spec, index) => (
                <li key={index}>
                  <strong>{spec.name}:</strong> {spec.value}
                </li>
              ))}
            </ul>
          </div>

          {/* Company Details */}
          <div className="mb-4">
            <h4 className="text-lg font-semibold">Company Details</h4>
            <p>
              <strong>Employees:</strong>{" "}
              {sellerDetails.companyNumberOfEmployees}
            </p>
            <p>
              <strong>Turnover:</strong> ${sellerDetails.companyTurnover}
            </p>
            <p>
              <strong>Ownership:</strong> {sellerDetails.companyOwnershipType}
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
            {sellerDetails.companyIdentifiers.gstNumber}
          </p>
          <p>
            <strong>PAN Number:</strong>{" "}
            {sellerDetails.companyIdentifiers.panNumber}
          </p>
          <p>
            <strong>TAN Number:</strong>{" "}
            {sellerDetails.companyIdentifiers.tanNumber}
          </p>

          <h4 className="text-lg font-semibold mt-6">Bank Details</h4>
          <p>
            <strong>Account Type:</strong>{" "}
            {sellerDetails.bankDetails.bankAccountType}
          </p>
          <p>
            <strong>Account Holder:</strong>{" "}
            {sellerDetails.bankDetails.accountHolderName}
          </p>
          <p>
            <strong>IFSC:</strong> {sellerDetails.bankDetails.ifscCode}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BuyerDetailedProductPage;
