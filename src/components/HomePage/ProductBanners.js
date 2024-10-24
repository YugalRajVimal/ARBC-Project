import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const banners = [
  {
    id: 0,
    img: "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/d0e281a0cfa9c139.jpg?q=20",
    link:"/"
  },
  {
    id: 1,
    img: "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/1d8f792d59e1f0b9.jpeg?q=20",
    link:"/"
  },
  {
    id:2,
    img:"https://i.pinimg.com/736x/37/40/18/37401850c97351136140f76aa640cbf6.jpg",
    link:"/"
  }
];

const ProductBanners = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex(currentIndex === 0 ? banners.length - 1 : currentIndex - 1);
  };

  const handleNextClick = () => {
    setCurrentIndex(currentIndex === banners.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="productBanner h-[45%] relative rounded-md">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 px-1 py-5 shadow-[0px_0px_10px_2px_rgba(0,0,0,0.2)] rounded-r-md cursor-pointer" onClick={handlePrevClick}>
        <IoIosArrowBack className="text-xl" />
      </div>
      <img src={banners[currentIndex].img} alt="banner" className="w-full h-full rounded-md object-contain " />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 px-1 py-5 shadow-[0px_0px_10px_2px_rgba(0,0,0,0.2)] rounded-l-md cursor-pointer" onClick={handleNextClick}>
        <IoIosArrowForward className="text-xl" />
      </div>
    </div>
  );
};

export default ProductBanners;
