import React from "react";
import { FiSend } from "react-icons/fi";
import { postInquiry } from "../../../api/BuyerAPI/buyerAPI";
import { useNavigate } from "react-router-dom";

const ProductCard = (props) => {
  const navigate = useNavigate();
  const { product, index } = props;
  const { productName, productPrice, productUnitType,productQuantity, productImages, seller } = product;

  const handleSendInquiry =async (productId, productName) => {
    try {
      const response = await postInquiry(productId);
      if(response.status===201){
        alert("Inquiry sent successfully for product "+productName);
      }else{
        alert("Failed to send inquiry for product "+productName);
      }
    } catch (error) {
      console.log(error);
      alert("Failed to send inquiry for product "+productName);
    }
  };

  const navigateToDetailedProduct = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div
      key={index}
      onClick={(e)=>(e.stopPropagation(),navigateToDetailedProduct(product._id))}
      className="p-2 h-full w-[180px]  flex flex-col justify-around items-start border border-black rounded-md shrink-0 p-4"
    >
      <img
        src={process.env.REACT_APP_API_URL+"/"+productImages[0]}
        alt={productName}
        className="h-[90px] aspect-[1/1] object-cover mx-auto border-black border-[1px] rounded-sm"
      />
      <h3 className="text-[15px] font-semibold whitespace-nowrap">{productName}</h3>
      <p className="text-sm">Rs. {productPrice} / {productUnitType}</p>
      <p className="text-sm">{productQuantity} {productUnitType}  available</p>
      <br />
      <p className="text-sm">{seller}</p>
      <button
      onClick={(e)=>(e.stopPropagation(),handleSendInquiry(product._id,productName))}
      className="bg-gradient-to-r from-[#3d80a8] to-[#285f84] text-black px-2 py-1 rounded-md w-full flex justify-center items-center">
        Send Inquiry <FiSend />
      </button>
    </div>
  );
};

export default ProductCard;
