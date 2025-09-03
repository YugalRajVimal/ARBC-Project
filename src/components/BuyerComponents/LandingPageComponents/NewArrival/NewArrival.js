// ✅ NewArrival.jsx
import React, { useEffect, useState } from "react";
import { getNewArrivals } from "../../../../api/BuyerAPI/buyerAPI";
import { useNavigate } from "react-router-dom";

const NewArrival = () => {
  const [newArrivals, setNewArrivals] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getNewArrivals().then((data) => {
      setNewArrivals(data);
    });
  }, []);

  const navigateToDetailedProduct = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="w-full h-full md:w-[48%] bg-white rounded-xl shadow-md shadow-black p-4 flex flex-col">
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-lg font-bold text-gray-900">New Arrivals</h3>
        <p className="text-sm text-gray-500">
          Explore our latest collection of fresh arrivals
        </p>
        <div className="h-[2px] w-12 bg-blue-600 mt-2"></div>
      </div>

      {/* Products scroll */}
      <div className="flex gap-4 overflow-x-auto pb-2">
        {newArrivals.map((product, index) => (
          <div
            key={index}
            onClick={() => navigateToDetailedProduct(product._id)}
            className="min-w-[160px] bg-gray-50 rounded-lg shadow-sm cursor-pointer transition hover:shadow-md hover:scale-105 p-3 flex flex-col"
          >
            <div className="h-28 w-full flex items-center justify-center bg-white rounded-md mb-2 overflow-hidden">
              <img
                src={process.env.REACT_APP_API_URL + "/" + product.productImages[0]}
                alt={product.productName}
                className="h-full w-full object-contain"
              />
            </div>
            <h3 className="text-sm font-semibold text-gray-800 truncate">
              {product.productName}
            </h3>
            <p className="text-xs text-gray-600">
              {product.productPrice} / {product.productUnitType}
            </p>
            <p className="text-xs text-green-600">
              {product.productQuantity} in Stock
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrival;
