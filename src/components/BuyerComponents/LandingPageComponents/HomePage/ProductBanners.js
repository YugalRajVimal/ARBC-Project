import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { getBanners } from "../../../../api/BuyerAPI/buyerAPI";

const ProductBanners = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [banners, setBanners] = useState([]);

  const handlePrevClick = () => {
    setCurrentIndex(currentIndex === 0 ? banners.length - 1 : currentIndex - 1);
  };

  const handleNextClick = () => {
    setCurrentIndex(currentIndex === banners.length - 1 ? 0 : currentIndex + 1);
  };

  useEffect(() => {
    getBanners().then((response) => {
      if (response) {
        setBanners(response.banners);
      }
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextClick();
    }, 3000); // 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [currentIndex, banners.length]);

  if (banners.length === 0) {
    return null;
  }

  return (
    <div className="productBanner w-full h-[70%] relative rounded-md">
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 px-1 py-5 shadow-[0px_0px_10px_2px_rgba(0,0,0,0.2)] rounded-r-md cursor-pointer"
        onClick={handlePrevClick}
      >
        <IoIosArrowBack className="text-xl" />
      </div>
      <img
        src={process.env.REACT_APP_API_URL + "/" + banners[currentIndex].image}
        alt="banner"
        className="w-full h-full rounded-md object-contain "
      />
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 px-1 py-5 shadow-[0px_0px_10px_2px_rgba(0,0,0,0.2)] rounded-l-md cursor-pointer"
        onClick={handleNextClick}
      >
        <IoIosArrowForward className="text-xl z-20" />
      </div>
    </div>
  );
};

export default ProductBanners;
