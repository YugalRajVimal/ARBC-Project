import React from 'react';

// Sample bank details to represent a seller (this would typically come from an API)
const bankDetailsData = {
  bankAccountType: "Savings",
  bankLinkedPhoneNumber: "987-654-3210",
  accountHolderName: "John Doe",
  accountNumber: "123456789012",
  ifscCode: "IFSC123456",
};

const BankDetails = () => {
  return (
    <div className="container mx-auto p-6 space-y-8">

      {/* Header Section */}
      <header className="bg-[#e2a940] text-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold">Bank Account Details</h1>
        <p className="text-xl">Manage and view the linked bank account details</p>
      </header>

      {/* Bank Details Section */}
      <section className="bg-white p-6 rounded-lg shadow-md border border-gray-300">
        <h2 className="text-2xl font-bold mb-4 text-[#e2a940]">Account Details</h2>
        <div className="space-y-4">
          <p><strong>Account Holder Name:</strong> {bankDetailsData.accountHolderName}</p>
          <p><strong>Account Number:</strong> {bankDetailsData.accountNumber}</p>
          <p><strong>Account Type:</strong> {bankDetailsData.bankAccountType}</p>
          <p><strong>Linked Phone Number:</strong> {bankDetailsData.bankLinkedPhoneNumber}</p>
          <p><strong>IFSC Code:</strong> {bankDetailsData.ifscCode}</p>
        </div>
      </section>
    </div>
  );
};

export default BankDetails;
