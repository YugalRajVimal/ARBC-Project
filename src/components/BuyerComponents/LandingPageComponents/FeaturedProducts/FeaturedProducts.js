import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { getAsideListItems } from "../../../../api/BuyerAPI/buyerAPI";


const FeaturedProducts = () => {
  const [productDetails, setProductDetails] = useState([]);
  useEffect(() => {
    // Fetch top categories from API
    getAsideListItems(1).then((data) => {
      console.log(data[0].products);
      setProductDetails(data[0].products);
    });
  }, []);
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
