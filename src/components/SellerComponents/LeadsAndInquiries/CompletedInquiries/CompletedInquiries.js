import React from "react";

// Sample data for received inquiries (this would typically come from an API)
const inquiriesData = [
  {
    id: "INV123",
    customerId: "CUST001",
    productId: "PROD1001",
    productName: "Smartphone XYZ",
    quantity: 2,
    customerName: "Alice Johnson",
    customerPhone: "9876543210",
    date: "2024-11-01",
    status: "Completed",
  },
  {
    id: "INV124",
    customerId: "CUST002",
    productId: "PROD1002",
    productName: "Laptop ABC",
    quantity: 1,
    customerName: "Bob Smith",
    customerPhone: "9123456789",
    date: "2024-11-02",
    status: "Completed",
  },
  {
    id: "INV125",
    customerId: "CUST003",
    productId: "PROD1003",
    productName: "Wireless Earbuds",
    quantity: 3,
    customerName: "Charlie Brown",
    customerPhone: "9345678901",
    date: "2024-11-03",
    status: "Completed",
  },
];

const CompletedInquiries = () => {
  return (
    <div className="container mx-auto p-6 space-y-8 h-full overflow-y-auto">
      {/* Header Section */}
      <header className="bg-blue-600 text-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold">Completed Inquiries</h1>
        <p className="text-xl">View completed inquiries</p>
      </header>

      {/* Inquiry Table Section */}
      <section className="bg-white p-6 rounded-lg shadow-md border border-gray-300">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">
          Completed Inquiries List
        </h2>

        {/* Table for displaying inquiries */}
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
            {inquiriesData.map((inquiry) => (
              <tr key={inquiry.id} className="text-sm">
                <td className="p-3 border-b">{inquiry.id}</td>
                <td className="p-3 border-b">{inquiry.customerId}</td>
                <td className="p-3 border-b">{inquiry.productId}</td>
                <td className="p-3 border-b">{inquiry.productName}</td>
                <td className="p-3 border-b">{inquiry.quantity}</td>
                <td className="p-3 border-b">{inquiry.customerName}</td>
                <td className="p-3 border-b">{inquiry.customerPhone}</td>
                <td className="p-3 border-b">{inquiry.date}</td>
                <td
                  className={`p-3 border-b ${
                    inquiry.status === "Completed"
                      ? "text-green-600"
                      : "text-yellow-600"
                  }`}
                >
                  {inquiry.status}
                </td>
                <td className="p-3 border-b">
                  <button className="text-blue-500 hover:text-blue-700">
                    View
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

export default CompletedInquiries;
