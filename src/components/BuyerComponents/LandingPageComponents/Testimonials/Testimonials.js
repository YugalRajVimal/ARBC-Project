import React, { useEffect, useState } from "react";
import { FaStar, FaStarHalfStroke } from "react-icons/fa6";
import {
  BiSolidQuoteSingleLeft,
  BiSolidQuoteSingleRight,
} from "react-icons/bi";
import { getAllTestimonials } from "../../../../api/BuyerAPI/buyerAPI";

const randomDots = Array.from(
  { length: Math.floor(Math.random() * 8) + 7 },
  () => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    color: ["yellow", "orange", "red"][Math.floor(Math.random() * 3)],
  })
);

const Testimonials = () => {
  const [prevTestimonial, setPrevTestimonial] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(1);
  const [nextTestimonial, setNextTestimonial] = useState(2);
  const [totalTestimonials, setTotalTestimonials] = useState(0);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    getAllTestimonials().then((data) => {
      console.log("--", data);
      setTestimonials(data.testimonials);
      setTotalTestimonials(data.testimonials.length);
    });
  }, []);

  const handleNextClick = () => {
    setPrevTestimonial((prev) => (prev + 1) % totalTestimonials);
    setCurrentTestimonial((current) => (current + 1) % totalTestimonials);
    setNextTestimonial((next) => (next + 1) % totalTestimonials);
  };

  const handlePrevClick = () => {
    setPrevTestimonial(
      (prev) => (prev - 1 + totalTestimonials) % totalTestimonials
    );
    setCurrentTestimonial(
      (current) => (current - 1 + totalTestimonials) % totalTestimonials
    );
    setNextTestimonial(
      (next) => (next - 1 + totalTestimonials) % totalTestimonials
    );
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={i} className="text-yellow-500" />
        ))}
        {halfStar && <FaStarHalfStroke className="text-yellow-500" />}
      </>
    );
  };

  return (
    <div className="h-[70%] w-full p-8 flex flex-col justify-around items-center relative">
      {randomDots.map((dot, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            left: dot.left,
            top: dot.top,
            backgroundColor: dot.color,
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            zIndex: "-1",
          }}
        />
      ))}
      <div className="h-[10%] text-center">
        <h2 className="font-bold">What Our Customers Say About Us</h2>
        <p className="text-sm">
          Don't just take our word for it. Our customers say it best.
        </p>
      </div>
      <div className="w-full h-full p-4 flex justify-around items-center">
        {/* Check if testimonials have loaded */}
        {testimonials.length > 0 && (
          <>
            {/* Previous Testimonial Image */}
            <div
              className="w-[20%] flex justify-center items-center cursor-pointer"
              onClick={handlePrevClick}
            >
              <img
                src={
                  process.env.REACT_APP_API_URL +
                  "/" +
                  testimonials[prevTestimonial].image
                }
                alt="Previous Profile"
                className="h-[70px] w-[70px] rounded-full bg-slate-400 object-cover"
              />
            </div>

            {/* Current Testimonial */}
            <div className="w-[70%] h-full currentTestimonial flex flex-col justify-center items-center text-center">
              <div className="h-[150px] w-[150px]">
                <img
                  src={
                    process.env.REACT_APP_API_URL +
                    "/" +
                    testimonials[currentTestimonial].image
                  }
                  alt="Current Profile"
                  className="h-full aspect-[1/1] rounded-full bg-slate-400 object-cover"
                />
              </div>

              <h3 className="font-semibold mt-2">
                {testimonials[currentTestimonial].name}
              </h3>
              <p className="text-sm text-gray-500">
                {testimonials[currentTestimonial].designation}
              </p>
              <div className="flex mt-2">
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>
              <div className="flex h-full items-center">
                <div className="h-full flex justify-center items-start">
                  <BiSolidQuoteSingleLeft className="text-6xl text-gray-500 mr-[-30px]" />
                  <BiSolidQuoteSingleLeft className="text-6xl text-gray-500" />
                </div>
                <p className="mt-4 px-6 text-sm">
                  {testimonials[currentTestimonial].review}
                </p>
                <div className="h-full flex justify-center items-end">
                  <BiSolidQuoteSingleRight className="text-6xl text-gray-500" />
                  <BiSolidQuoteSingleRight className="text-6xl text-gray-500 ml-[-30px]" />
                </div>
              </div>
            </div>

            {/* Next Testimonial Image */}
            <div
              className="w-[20%] flex justify-center items-center cursor-pointer"
              onClick={handleNextClick}
            >
              <img
                src={
                  process.env.REACT_APP_API_URL +
                  "/" +
                  testimonials[nextTestimonial].image
                }
                alt="Next Profile"
                className="h-[70px] w-[70px] rounded-full bg-slate-400 object-cover"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Testimonials;
