import React from "react";
import { FiSend } from "react-icons/fi";


const ProductCard = (props) => {
    const { product, index } = props;
    const { name, price, units, image, seller } = product;
  return (
    <div
      key={index}
      className="p-2 h-full w-[180px]  flex flex-col justify-around items-start border border-gray-200 rounded-md shrink-0 "
    >
      <img
        src={image}
        alt={name}
        className="h-1/2 aspect-[1/1] object-cover mx-auto"
      />
      <h3 className="text-[15px] font-semibold">{name}</h3>
      <p className="text-sm">{price}</p>
      <p className="text-sm">{units}</p>
      <br />
      <p className="text-sm">{seller}</p>
      <button className="bg-gradient-to-r from-[#3d80a8] to-[#285f84] text-black px-2 py-1 rounded-md w-full flex justify-center items-center">
        Send Inquiry <FiSend />
      </button>
    </div>
  );
};

export default ProductCard;
