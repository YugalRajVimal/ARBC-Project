import React from "react";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          Contact Us
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Last updated on 09-01-2025 15:57:55
        </p>

        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-700">
              Merchant Legal Entity Name:
            </h2>
            <p className="text-gray-600">ARBC GROUP</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-700">
              Registered Address:
            </h2>
            <p className="text-gray-600">
              STREET NO. GALI NO.21, HOUSE NO 21/30, BLK-A, PREM NAGAR, PHASE-3,
              NEW DELHI, WEST DELHI, DELHI, 110041, DELHI, Delhi, PIN: 110041
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-700">
              Operational Address:
            </h2>
            <p className="text-gray-600">
              STREET NO. GALI NO.21, HOUSE NO 21/30, BLK-A, PREM NAGAR, PHASE-3,
              NEW DELHI, WEST DELHI, DELHI, 110041, DELHI, Delhi, PIN: 110041
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-700">
              Telephone No:
            </h2>
            <p className="text-gray-600">8929788700</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-700">E-Mail ID:</h2>
            <p className="text-gray-600">arbcgroup@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
