import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { getAsideListItems } from "../../../api/BuyerAPI/buyerAPI";

const ProductShowcase = () => {
  const [showcaseProducts, setShowcaseProducts] = useState([]);

  useEffect(() => {
    // Fetch top categories from API
    getAsideListItems(4).then((data) => {
      console.log(data[0].products);
      setShowcaseProducts(data[0].products);
    });
  }, []);

  return (
    <>
      <h2 className="p-2 text-lg h-[12%] flex items-center">
        Products Showcase
      </h2>
      <div className="h-[85%] flex w-full gap-4 overflow-x-auto mx-4 p-2">
        {showcaseProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductShowcase;
