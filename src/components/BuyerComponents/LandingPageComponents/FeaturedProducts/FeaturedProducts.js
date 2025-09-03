import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { getAsideListItems } from "../../../../api/BuyerAPI/buyerAPI";


const FeaturedProducts = () => {
  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const data = await getAsideListItems(1);
        // console.log(data[0].products); // Keep for debugging if needed
        if (data && data.length > 0 && data[0].products) {
          setProductDetails(data[0].products);
        } else {
          setProductDetails([]); // Ensure productDetails is an empty array if no products are found
        }
      } catch (error) {
        console.error("Error fetching featured products:", error);
        setProductDetails([]); // Set to empty array on error
      }
    };

    fetchFeaturedProducts();
  }, []);

  // Return null or a loading state if no products are available
  if (productDetails.length === 0) {
    return null;
  }

  return (
    <div className="p-2 flex flex-col justify-around items-start">
      <h2 className="p-2 text-xl font-bold h-[12%]">Featured Products</h2>
      <div className="h-[360px] flex w-full gap-4 overflow-x-auto mx-4">
        {productDetails.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
