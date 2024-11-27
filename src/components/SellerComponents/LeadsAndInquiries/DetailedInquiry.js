import React from "react";

const DetailedInquiry = ({ selectedInquiryDetails, setSelectedPage }) => {
  if (!selectedInquiryDetails) return <div>No Inquiry Selected</div>;

  const { user, product, status, createdAt, updatedAt } = selectedInquiryDetails;
  const seller = product.user;

  return (
    <div className="container mx-auto p-6 space-y-4">
      <button
        onClick={() => setSelectedPage("ReceivedInquiries")}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Back to Inquiries
      </button>

      <h1 className="text-2xl font-bold text-blue-600">Detailed Inquiry Information</h1>

      {/* Inquiry Details */}
      <div className="bg-gray-100 p-4 rounded shadow border space-y-2">
        <h2 className="text-lg font-semibold">Inquiry Information</h2>
        <p>Inquiry ID: {selectedInquiryDetails._id}</p>
        <p>Status: <span className={status === "Completed" ? "text-green-600" : "text-blue-600"}>{status}</span></p>
        <p>Created At: {new Date(createdAt).toLocaleString()}</p>
        <p>Last Updated: {new Date(updatedAt).toLocaleString()}</p>
      </div>

      {/* Buyer Details */}
      <div className="bg-white p-4 rounded shadow border space-y-2">
        <h2 className="text-lg font-semibold">Buyer Details</h2>
        <p>Name: {user.name}</p>
        <p>Phone: {user.phoneNo}</p>
        <p>Email: {user.email}</p>
        {user.address && <p>Address: {user.address}</p>}
      </div>

      {/* Product Details */}
      <div className="bg-white p-4 rounded shadow border space-y-2">
        <h2 className="text-lg font-semibold">Product Details</h2>
        <p>Product Name: {product.productName}</p>
        <p>Quantity Requested: {product.productQuantity}</p>
        <p>Description: {product.productOverview}</p>
        <p>Price: ₹{product.productPrice}</p>
      </div>

      {/* Seller Details */}
      <div className="bg-white p-4 rounded shadow border space-y-2">
        <h2 className="text-lg font-semibold">Seller Details</h2>
        <p>Name: {seller.name}</p>
        <p>Contact: {seller.phoneNo}</p>
        <p>Email: {seller.email}</p>
        {seller.location && <p>Location: {seller.location}</p>}
      </div>
    </div>
  );
};

export default DetailedInquiry;
