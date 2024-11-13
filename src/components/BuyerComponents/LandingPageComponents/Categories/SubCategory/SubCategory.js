import React from "react";
import { useNavigate } from "react-router-dom";

const SubCategory = (props) => {
  const navigate = useNavigate();
  const { subCategory, index } = props;
  const { name, image, products } = subCategory;

  const navigateToProductsPage = (populatedCategory) => {
    navigate(`/products/${populatedCategory._id}`);
  };

  const navigateToDetailedProduct = (productId) => {
    navigate(`/product/${productId}`);
  };
  return (
    <div
    onClick={(e)=>(e.stopPropagation(),navigateToProductsPage(subCategory))}
      key={index}
      className="p-2 h-full w-[170px]  flex flex-col justify-start items-center items-start border border-gray-200 rounded-md shrink-0 "
    >
      <img
        src={process.env.REACT_APP_API_URL + "/" + image}
        alt={name}
        className="h-1/3 aspect-[1/1] object-cover"
      />
      <div className="text-lg font-bold">{name}</div>

      <div className="w-full overflow-y-auto flex flex-col">
        {products.map((product, index) => (
          <div
            onClick={(e) => (
              e.stopPropagation(), navigateToDetailedProduct(product._id)
            )}
            key={index}
            className="w-full text-sm border-t-[2px] border-zinc-400 py-1"
          >
            {product.productName}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubCategory;
