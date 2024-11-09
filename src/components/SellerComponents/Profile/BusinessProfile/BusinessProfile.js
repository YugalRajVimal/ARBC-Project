import React from 'react';

// Sample data to represent a seller (this would typically come from an API)
const sellerData = {
  companyName: "Tech Solutions",
  companyPhoneNumber: "123-456-7890",
  companyOwnershipType: "Private Limited",
  companyTurnover: 5000000,
  companyYearOfEstablishment: 2010,
  companyNumberOfEmployees: 200,
  companyFaxNumber: "123-456-7891",
  companyAddress: "1234 Tech Street",
  companyPincode: "110001",
  companyCity: "New Delhi",
  companyState: "Delhi",
  companyIdentifiers: {
    gstNumber: "GST123456",
    aadharNumber: "AADHAR1234",
    panNumber: "PAN1234",
    tanNumber: "TAN1234",
    images: [
      "image1.jpg",
      "image2.jpg"
    ]
  },
  companyLogo: "logo.jpg",
  companyPhotos: [
    "photo1.jpg",
    "photo2.jpg"
  ],
  companyDescription: "Tech Solutions is a leading provider of innovative tech solutions.",
  modeOfPayment: ["Cash", "Bank Transfer", "UPI"],
  companyWorkingDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
};

const BusinessProfile = () => {
  return (
    <div className="container h-full w-full overflow-y-auto mx-auto p-6 space-y-8">

      {/* Header Section */}
      <header className="bg-[#e2a940] text-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold">{sellerData.companyName}</h1>
        <p className="text-xl">{sellerData.companyDescription}</p>
      </header>

      {/* Company Details Section */}
      <section className="bg-white p-6 rounded-lg shadow-md border border-gray-300">
        <h2 className="text-2xl font-bold mb-4 text-[#e2a940]">Company Details</h2>
        <div className="space-y-4">
          <p><strong>Phone Number:</strong> {sellerData.companyPhoneNumber}</p>
          <p><strong>Ownership Type:</strong> {sellerData.companyOwnershipType}</p>
          <p><strong>Turnover:</strong> ₹{sellerData.companyTurnover}</p>
          <p><strong>Year of Establishment:</strong> {sellerData.companyYearOfEstablishment}</p>
          <p><strong>Number of Employees:</strong> {sellerData.companyNumberOfEmployees}</p>
          <p><strong>Fax Number:</strong> {sellerData.companyFaxNumber || 'N/A'}</p>
          <div>
            <strong>Logo:</strong>
            <img src={sellerData.companyLogo} alt="Company Logo" className="w-32 h-32 object-cover mt-2 rounded-lg shadow-md" />
          </div>
        </div>
      </section>

      {/* Address Details Section */}
      <section className="bg-white p-6 rounded-lg shadow-md border border-gray-300">
        <h2 className="text-2xl font-bold mb-4 text-[#e2a940]">Address Details</h2>
        <div className="space-y-4">
          <p><strong>Address:</strong> {sellerData.companyAddress}</p>
          <p><strong>Pincode:</strong> {sellerData.companyPincode}</p>
          <p><strong>City:</strong> {sellerData.companyCity}</p>
          <p><strong>State:</strong> {sellerData.companyState}</p>
        </div>
      </section>

      {/* Taxation Details Section */}
      <section className="bg-white p-6 rounded-lg shadow-md border border-gray-300">
        <h2 className="text-2xl font-bold mb-4 text-[#e2a940]">Taxation Details</h2>
        <div className="space-y-4">
          <p><strong>GST Number:</strong> {sellerData.companyIdentifiers.gstNumber}</p>
          <p><strong>Aadhar Number:</strong> {sellerData.companyIdentifiers.aadharNumber}</p>
          <p><strong>PAN Number:</strong> {sellerData.companyIdentifiers.panNumber}</p>
          <p><strong>TAN Number:</strong> {sellerData.companyIdentifiers.tanNumber}</p>
          <div>
            <strong>Images:</strong>
            <div className="flex space-x-4 mt-2">
              {sellerData.companyIdentifiers.images.map((image, index) => (
                <img key={index} src={image} alt={`Tax Image ${index + 1}`} className="w-32 h-32 object-cover rounded-lg shadow-md" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods Section */}
      <section className="bg-white p-6 rounded-lg shadow-md border border-gray-300">
        <h2 className="text-2xl font-bold mb-4 text-[#e2a940]">Payment Methods</h2>
        <ul className="space-y-2">
          {sellerData.modeOfPayment.map((method, index) => (
            <li key={index} className="text-gray-700">- {method}</li>
          ))}
        </ul>
      </section>

      {/* Working Days Section */}
      <section className="bg-white p-6 rounded-lg shadow-md border border-gray-300">
        <h2 className="text-2xl font-bold mb-4 text-[#e2a940]">Working Days</h2>
        <ul className="space-y-2">
          {sellerData.companyWorkingDays.map((day, index) => (
            <li key={index} className="text-gray-700">- {day}</li>
          ))}
        </ul>
      </section>

      {/* Company Photos Section */}
      <section className="bg-white p-6 rounded-lg shadow-md border border-gray-300">
        <h2 className="text-2xl font-bold mb-4 text-[#e2a940]">Company Photos</h2>
        <div className="flex space-x-4">
          {sellerData.companyPhotos.map((photo, index) => (
            <img key={index} src={photo} alt={`Company Photo ${index + 1}`} className="w-32 h-32 object-cover rounded-lg shadow-md" />
          ))}
        </div>
      </section>
    </div>
  );
};

export default BusinessProfile;
