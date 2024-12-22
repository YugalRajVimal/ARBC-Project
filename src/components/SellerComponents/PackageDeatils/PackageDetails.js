import React from "react";
import { IoClose } from "react-icons/io5";

const PackageDetails = (props) => {
  const { handleSubscribe, handlePackage } = props;
  const subscribePackage = async (subsRegion, subsPackage) => {
    // Handle Subscribe logic here
    await handleSubscribe(subsRegion, subsPackage);
  };

  const subscriptionPrice = {
    national: {
      fourMonths: 13000,
      sixMonths: 18900,
      twelveMonths: 35000,
    },
    international: {
      sixMonths: 50000,
      twelveMonths: 90000,
    },
  };

  const services = [
    "Local leads",
    "National Trade Leads",
    "International trade Leads",
    "Inquiry by email and SMS",
    "Full support by call and by email",
    "Feedback calls",
  ];

  return (
    <div className="absolute w-[90%] h-[90%] top-1/2 left-1/2 z-[110] -translate-y-1/2 -translate-x-1/2 bg-white shadow-2xl rounded-lg p-8 flex flex-col overflow-hidden overflow-y-auto">
      <div className="flex justify-between items-center px-4 ">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
          Subscription Packages
        </h1>
        <span className="text-2xl">
          <IoClose onClick={()=>handlePackage(false)} />
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
        {/* National Packages */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
          <h2 className="text-3xl font-semibold mb-4 text-gray-700">
            National Packages
          </h2>
          <ul>
            <li className="mb-4 flex justify-between items-center">
              <span className="font-medium text-lg">4 Months:</span>
              <span className="text-xl font-bold text-gray-800">
                ₹{subscriptionPrice.national.fourMonths}{" "}
                <span className="text-sm text-gray-600">
                  (excluding 18% GST)
                </span>
              </span>
              <button
                className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-md transition duration-300 hover:bg-blue-700"
                onClick={() => subscribePackage("national", "fourMonths")}
              >
                Subscribe
              </button>
            </li>
            <li className="mb-4 flex justify-between items-center">
              <span className="font-medium text-lg">6 Months:</span>
              <span className="text-xl font-bold text-gray-800">
                ₹{subscriptionPrice.national.sixMonths}{" "}
                <span className="text-sm text-gray-600">
                  (excluding 18% GST)
                </span>
              </span>
              <button
                className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-md transition duration-300 hover:bg-blue-700"
                onClick={() => subscribePackage("national", "sixMonths")}
              >
                Subscribe
              </button>
            </li>
            <li className="mb-4 flex justify-between items-center">
              <span className="font-medium text-lg">12 Months:</span>
              <span className="text-xl font-bold text-gray-800">
                ₹{subscriptionPrice.national.twelveMonths}{" "}
                <span className="text-sm text-gray-600">
                  (excluding 18% GST)
                </span>
              </span>
              <button
                className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-md transition duration-300 hover:bg-blue-700"
                onClick={() => subscribePackage("national", "twelveMonths")}
              >
                Subscribe
              </button>
            </li>
          </ul>
        </div>

        {/* International Packages */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
          <h2 className="text-3xl font-semibold mb-4 text-gray-700">
            International Packages
          </h2>
          <ul>
            <li className="mb-4 flex justify-between items-center">
              <span className="font-medium text-lg">6 Months:</span>
              <span className="text-xl font-bold text-gray-800">
                ₹{subscriptionPrice.international.sixMonths}{" "}
                <span className="text-sm text-gray-600">
                  (excluding 18% GST)
                </span>
              </span>
              <button
                className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-md transition duration-300 hover:bg-blue-700"
                onClick={() => subscribePackage("international", "sixMonths")}
              >
                Subscribe
              </button>
            </li>
            <li className="mb-4 flex justify-between items-center">
              <span className="font-medium text-lg">12 Months:</span>
              <span className="text-xl font-bold text-gray-800">
                ₹{subscriptionPrice.international.twelveMonths}{" "}
                <span className="text-sm text-gray-600">
                  (excluding 18% GST)
                </span>
              </span>
              <button
                className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-md transition duration-300 hover:bg-blue-700"
                onClick={() =>
                  subscribePackage("international", "twelveMonths")
                }
              >
                Subscribe
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Services Provided */}
      <div className="bg-gray-50 p-6 mt-8 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">
          Services Provided
        </h2>
        <ul className="list-disc pl-6 text-lg text-gray-700">
          {services.map((service, index) => (
            <li key={index} className="mb-2">
              {service}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PackageDetails;
