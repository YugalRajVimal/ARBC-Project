import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { getBanners } from "../../../../api/BuyerAPI/buyerAPI";

const ProductBanners = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [banners, setBanners] = useState([]);

  const handlePrevClick = () => {
    setCurrentIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
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
    }, 5000); // Auto-slide every 5s

    return () => clearInterval(interval);
  }, [banners.length]);

  if (banners.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-lg">
      {/* Banner Image */}
      <img
        src={process.env.REACT_APP_API_URL + "/" + banners[currentIndex].image}
        alt={banners[currentIndex].image}
        className="w-full h-full object-cover transition-all duration-700 ease-in-out"
      />

      {/* Prev Button */}
      <button
        onClick={handlePrevClick}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 rounded-full p-2 shadow-md transition"
      >
        <IoIosArrowBack className="text-2xl" />
      </button>

      {/* Next Button */}
      <button
        onClick={handleNextClick}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 rounded-full p-2 shadow-md transition"
      >
        <IoIosArrowForward className="text-2xl" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {banners.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              index === currentIndex ? "bg-white shadow-md" : "bg-white/50"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ProductBanners;
