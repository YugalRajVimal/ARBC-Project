import React, { useEffect, useState } from "react";
import { getAllBuyers } from "../../../api/AdminAPI/adminAPI";

const BuyerList = () => {
  const [buyers, setBuyers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBuyers = async () => {
      try {
        const response = await getAllBuyers();
        setBuyers(response.data);
      } catch (err) {
        setError("Failed to fetch buyers.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBuyers();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-4 bg-gray-50 h-full overflow-y-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Buyer List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {buyers.map((buyer) => (
          <div key={buyer._id} className="border border-gray-200 rounded-lg p-6 bg-white shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <img
                src={`${process.env.REACT_APP_API_URL}/${buyer.profileImg}`}
                alt={buyer.name}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-700">{buyer.name}</h3>
                <p className="text-sm text-gray-500">{buyer.email}</p>
              </div>
            </div>
            <p className="text-gray-600 mb-2">Phone: {buyer.phoneNo}</p>
            <p className="text-gray-600 mb-2">Roles: {buyer.role.join(', ')}</p>
            <p className="text-gray-600 mb-2">Verified Buyer: {buyer.verifiedBuyer ? 'Yes' : 'No'}</p>
            <p className="text-gray-600 mb-2">Verified Seller: {buyer.verifiedSeller ? 'Yes' : 'No'}</p>
            <p className="text-gray-600">Seller Details Completed: {buyer.isSellerDetailsCompleted ? 'Yes' : 'No'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyerList;
