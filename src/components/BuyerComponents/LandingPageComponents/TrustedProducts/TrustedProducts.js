import React, { useEffect, useState } from "react";
import { getAsideListItems } from "../../../../api/BuyerAPI/buyerAPI";
import { useNavigate } from "react-router-dom";

const TrustedProducts = (props) => {
  const {name} = props;
 
const navigate = useNavigate();
  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    // Fetch top categories from API
    getAsideListItems(3).then((data) => {
      console.log(data[0].products);
      setProductDetails(data[0].products);
    });
  }, []);

  const navigateToDetailedProduct = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="w-[45%] h-[75%] rounded-md p-2 shadow-[0px_0px_10px_2px_rgba(0,0,0,0.2)]">
      <div className="h-[15%]">
        <h3 className="mb-[-8px] font-bold">Trusted Products</h3>
        <span className="text-xs pl-2">
          Buy products from 4.5 million verified and trusted by {name}
        </span>
      </div>

      <div className="h-[85%] flex justify-center pl-2">
        <div className=" h-[100%] flex justify-start items-center gap-2 overflow-x-auto overflow-y-hidden">
          {productDetails.map((product, index) => (
            <div
            onClick={() => (navigateToDetailedProduct(product._id))}
            className="h-[90%] aspect-[6/5]  border rounded-md p-1">
              <img
                src={process.env.REACT_APP_API_URL+"/"+product.productImages[0]}
                alt={product.productName}
                className="h-1/2 aspect-[1/1] object-cover m-auto rounded-sm p-1"
              />
              <h3 className="text-md font-semibold border-t-[1px]">{product.productName}</h3>
              <p className="text-sm">{product.productPrice} / {product.productUnitType}</p>
              <p className="text-sm">{product.productQuantity} in Stock</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedProducts;
