import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const FeaturedCategory = () => {
  return (
    <div className="h-[34%]  flex flex-col justify-around items-center">
      <p className="p-2 w-full text-right">
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
        fugit non eos fugiat voluptatibus tenetur?"
      </p>
      <div className="w-[95%] h-[40%] bg-[#ebedfd] shadow-[0px_0px_10px_2px_rgba(0,0,0,0.2)] rounded-md p-2 flex justify-around items-center">
        <h3 className="flex flex-col font-bold">
          CORONA COVID-19 Prevention &<span>Care Supplies</span>
        </h3>
        <div className="w-[30%] h-[90%] bg-white rounded-sm flex justidy-around items-center p-2">
          <div className="h-[95%] aspect-[1/1]">
            <img
              src="https://png.pngtree.com/png-clipart/20200701/original/pngtree-vector-set-of-medical-devices-png-image_5424732.jpg"
              alt="covid"
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          <h5> Hospital Consumables & Diagnostic</h5>
          <span className="p-1 bg-[#ebedfd] rounded-full">
            <IoIosArrowForward />
          </span>
        </div>
        <div className="w-[30%] h-[90%] bg-white rounded-sm flex justidy-around items-center p-2">
          <div className="h-[95%] aspect-[1/1]">
            <img
              src="https://png.pngtree.com/png-clipart/20200701/original/pngtree-vector-set-of-medical-devices-png-image_5424732.jpg"
              alt="covid"
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          <h5> Mask, Sanitizer & Other Hygiene Supplies</h5>
          <span className="p-1 bg-[#ebedfd] rounded-full">
            <IoIosArrowForward />
          </span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategory;
