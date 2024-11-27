import React from "react";
import { FiSend } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { postInquiry } from "../../../../api/BuyerAPI/buyerAPI";

const ProductCard = (props) => {
  const navigate = useNavigate();
  const { product, index } = props;
  const {
    productName,
    productPrice,
    productImages,
    productUnitType,
    productQuantity,
    productOverview,
    seller,
  } = product;

  const navigateToProductPage = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handleSendInquiry = async (productId) => {
    if (!localStorage.getItem("token")) {
      alert("Login to send inquiry");
      return null;
    }
    if (!localStorage.getItem("isAuthenticatedBuyer")) {
      alert("Login to send inquiry");
      return null;
    }
    try {
      const response = await postInquiry(productId);
      if (response.status === 201) {
        alert("Inquiry sent successfully for product " + productName);
      } else {
        alert("LogIn first to send Inquiry " + productName);
      }
    } catch (error) {
      console.log(error);
      alert("LogIn first to send Inquiry " + productName);
    }
  };
  return (
    <div
      key={index}
      className="p-2 h-full w-[180px] flex flex-col justify-around items-start border border-gray-200 rounded-md shrink-0"
      onClick={() => navigateToProductPage(product._id)}
    >
      <img
        src={process.env.REACT_APP_API_URL + "/" + productImages[0]} // Using the first image in the array
        alt={productName}
        className="h-1/2 aspect-[1/1] object-cover mx-auto"
      />
      <h3 className="text-[15px] font-semibold">{productName}</h3>
      <p className="text-sm font-semibold">Price: ₹{productPrice}</p>
      <p className="text-sm">Unit Type: {productUnitType}</p>
      <p className="text-sm">Quantity: {productQuantity}</p>
      <p className="text-sm">Seller: {seller || "Example Seller"}</p>{" "}
      {/* Replace "Example Seller" with actual seller info if available */}
      <button
        onClick={(e) => (e.stopPropagation(), handleSendInquiry(product._id))}
        className="bg-gradient-to-r from-[#3d80a8] to-[#285f84] text-white px-2 py-1 rounded-md w-full flex justify-center items-center"
      >
        Send Inquiry <FiSend />
      </button>
    </div>
  );
};

export default ProductCard;
