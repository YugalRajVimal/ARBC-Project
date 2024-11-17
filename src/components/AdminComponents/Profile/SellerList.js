import React, { useEffect, useState } from "react";
import { getAllSellers } from "../../../api/AdminAPI/adminAPI";

const SellerList = () => {
  const [sellers, setSellers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSellers = async () => {
      try {
        const response = await getAllSellers();
        if (response.status === 200) {
          setSellers(response.data);
        }
      } catch (err) {
        setError("Failed to fetch sellers.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSellers();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-4 bg-gray-50 h-full overflow-y-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Seller List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sellers.map((seller) => (
          <div
            key={seller._id}
            className="border border-gray-200 rounded-lg p-6 bg-white shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center mb-4">
              <img
                src={`${process.env.REACT_APP_API_URL}/${seller.userId.profileImg}`}
                alt={seller.userId.name}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-700">
                  {seller.userId.name}
                </h3>
                <p className="text-sm text-gray-500">{seller.userId.email}</p>
              </div>
            </div>
            <p className="text-gray-600 mb-2">Phone: {seller.userId.phoneNo}</p>
            <p className="text-gray-600 mb-2">
              Roles: {seller.userId.role.join(", ")}
            </p>
            <p className="font-semibold text-gray-800">Company Details</p>
            <p className="text-gray-600">Name: {seller.companyName}</p>
            <p className="text-gray-600">
              Employees: {seller.companyNumberOfEmployees}
            </p>
            <p className="text-gray-600">
              Location: {seller.companyCity}, {seller.companyState}
            </p>
            <p className="text-gray-600">Turnover: ${seller.companyTurnover}</p>
            <p className="mt-2 font-semibold text-gray-800">Identifiers</p>
            <p className="text-gray-600">
              GST: {seller.companyIdentifiers.gstNumber}
            </p>
            <p className="text-gray-600">
              Aadhar: {seller.companyIdentifiers.aadharNumber}
            </p>
            <p className="text-gray-600">
              PAN: {seller.companyIdentifiers.panNumber}
            </p>
            {seller.bankDetails && (
              <>
                <p className="mt-2 font-semibold text-gray-800">Bank Details</p>
                <p className="text-gray-600">
                  Holder: {seller.bankDetails.accountHolderName}
                </p>
                <p className="text-gray-600">
                  Account #: {seller.bankDetails.accountNumber}
                </p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellerList;
