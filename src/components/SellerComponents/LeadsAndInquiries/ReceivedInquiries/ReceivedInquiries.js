import React from "react";
import axios from "axios";
import { updateInquiryStatus } from "../../../../api/SellerAPI/sellerAPI";

const ReceivedInquiries = ({
  inquiries,
  setSelectedPage,
  setSelectedInquiryDetails,
  fetchInquiries,
}) => {
  const handleViewInquiry = (inquiry) => {
    setSelectedInquiryDetails(inquiry);
    setSelectedPage("DetailedInquiry");
  };

  const handleStatusChange = async (inquiryId, newStatus) => {
    const response = await updateInquiryStatus(inquiryId, newStatus);
    if (response === 200) {
      fetchInquiries(); // Refresh the inquiries list after successful update
    }
  };

  return (
    <div className="w-full container mx-auto p-6 space-y-8 h-full overflow-y-auto">
      <header className="bg-blue-600 text-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold">Received Inquiries</h1>
      </header>
      <section className="w-full bg-white p-6 rounded-lg shadow-md border border-gray-300 overflow-y-auto overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-blue-100 text-left text-sm text-gray-700">
              <th className="p-3 border-b">Inquiry ID</th>
              <th className="p-3 border-b">Customer ID</th>
              <th className="p-3 border-b">Product ID</th>
              <th className="p-3 border-b">Product Name</th>
              <th className="p-3 border-b">Quantity</th>
              <th className="p-3 border-b">Customer Name</th>
              <th className="p-3 border-b">Customer Phone</th>
              <th className="p-3 border-b">Inquiry Date</th>
              <th className="p-3 border-b">Status</th>
              <th className="p-3 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {inquiries.map((inquiry) => (
              <tr key={inquiry._id} className="text-sm">
                <td className="p-3 border-b">{inquiry._id}</td>
                <td className="p-3 border-b">{inquiry.user._id}</td>
                <td className="p-3 border-b">{inquiry.product._id}</td>
                <td className="p-3 border-b">{inquiry.product.productName}</td>
                <td className="p-3 border-b">
                  {inquiry.product.productQuantity}
                </td>
                <td className="p-3 border-b">{inquiry.user.name}</td>
                <td className="p-3 border-b">{inquiry.user.phoneNo}</td>
                <td className="p-3 border-b">
                  {new Date(inquiry.createdAt).toLocaleDateString()}
                </td>
                <td
                  className={`p-3 border-b ${
                    inquiry.status === "Completed"
                      ? "text-green-600"
                      : inquiry.status === "Active"
                      ? "text-blue-600"
                      : "text-red-600"
                  }`}
                >
                  {inquiry.status}
                </td>
                <td className="p-3 border-b space-x-2 flex flex-col justify-center">
                  <button
                    onClick={() => handleViewInquiry(inquiry)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    View
                  </button>
                  <hr className="border-black border-[0.5px]" />
                  <button
                    onClick={() => handleStatusChange(inquiry._id, "Pending")}
                    className="text-purple-500 hover:text-purple-700"
                  >
                    Mark as Pending
                  </button>
                  <hr className="border-black border-[0.5px]" />
                  <button
                    onClick={() => handleStatusChange(inquiry._id, "Active")}
                    className="text-green-500 hover:text-green-700"
                  >
                    Mark as Active
                  </button>
                  <hr className="border-black border-[0.5px]" />
                  <button
                    onClick={() => handleStatusChange(inquiry._id, "Completed")}
                    className="text-red-500 hover:text-red-700"
                  >
                    Mark as Completed
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default ReceivedInquiries;
