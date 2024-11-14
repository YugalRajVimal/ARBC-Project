import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getNewArrivals } from "../../../api/BuyerAPI/buyerAPI";

const productsNames = [
  "Human Hair",
  "Forklift Trucks",
  "Servo Voltage Stabilizer",
  "Basmati Rice",
  "Backhoe Loader",
  "Carry Bag Making Machine",
  "Drum Lifter",
  "Electric Stacker",
  "Scissor Lifts",
  "Industrial Vibrating Screen",
  // Add more products here...
];

const RecentlyAddedProdcuts = () => {
  const navigate = useNavigate();
  const [recentlyAddedProducts, setRecentlyAddedProducts] = useState([]);

  useEffect(() => {
    // Fetch top categories from API
    getNewArrivals().then((data) => {
      console.log(data);
      setRecentlyAddedProducts(data);
    });
  }, []);

  const navigateToProduct = (productId) => {
    // Navigate to sub categories page
    navigate(`/product/${productId}`);
  };
  return (
    <>
      <h3 className="text-xl font-semibold mb-4">RecentlyAddedProdcuts</h3>
      <div className="flex gap-2  px-4 justify-start overflow-x-auto">
        {recentlyAddedProducts.map((product, index) => (
          <div
            key={index}
            onClick={() => navigateToProduct(product._id)}
            className="bg-gray-100 rounded-md px-16 py-8 text-xs font-medium text-gray-800 hover:bg-gray-300 whitespace-nowrap"
          >
            {product.productName}
          </div>
        ))}
      </div>
    </>
  );
};

export default RecentlyAddedProdcuts;
