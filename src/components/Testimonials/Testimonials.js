import React from "react";
import { FaStar, FaStarHalfStroke } from "react-icons/fa6";
import {
  BiSolidQuoteSingleLeft,
  BiSolidQuoteSingleRight,
} from "react-icons/bi";

const testimonials = [
  {
    profileImg:
      "https://w7.pngwing.com/pngs/247/564/png-transparent-computer-icons-user-profile-user-avatar-blue-heroes-electric-blue.png",
    name: "John Doe",
    company: "Tech Solutions Inc.",
    rating: 2,
    statement:
      "The service provided was exceptional, and the team was incredibly professional and responsive. Highly recommended!",
  },
  {
    profileImg:
      "https://w7.pngwing.com/pngs/247/564/png-transparent-computer-icons-user-profile-user-avatar-blue-heroes-electric-blue.png",
    name: "Sarah Lee",
    company: "Innovatech",
    rating: 4.5,
    statement:
      "Great experience from start to finish! The attention to detail and commitment to quality really stood out.",
  },
  {
    profileImg:
      "https://w7.pngwing.com/pngs/247/564/png-transparent-computer-icons-user-profile-user-avatar-blue-heroes-electric-blue.png",
    name: "Michael Smith",
    company: "Smith & Co.",
    rating: 5.0,
    statement:
      "Absolutely fantastic work! The project was completed on time and exceeded our expectations. Will definitely work with them again.",
  },
  {
    profileImg:
      "https://w7.pngwing.com/pngs/247/564/png-transparent-computer-icons-user-profile-user-avatar-blue-heroes-electric-blue.png",
    name: "Anna Johnson",
    company: "Creative Minds Ltd.",
    rating: 4.7,
    statement:
      "The team went above and beyond to make sure every detail was perfect. We couldn't be happier with the results.",
  },
  {
    profileImg:
      "https://w7.pngwing.com/pngs/247/564/png-transparent-computer-icons-user-profile-user-avatar-blue-heroes-electric-blue.png",
    name: "David Brown",
    company: "Brown Enterprises",
    rating: 4.9,
    statement:
      "Truly outstanding service! The team was skilled, dedicated, and committed to delivering quality results.",
  },
];

const randomDots = Array.from(
  { length: Math.floor(Math.random() * 8) + 7 },
  () => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    color: ["yellow", "orange", "red"][Math.floor(Math.random() * 3)],
  })
);

const Testimonials = () => {
  const [prevTestimonial, setPrevTestimonial] = React.useState(0);
  const [currentTestimonial, setCurrentTestimonial] = React.useState(1);
  const [nextTestimonial, setNextTestimonial] = React.useState(2);

  const totalTestimonials = testimonials.length;

  // Handle next click
  const handleNextClick = () => {
    setPrevTestimonial((prev) => (prev + 1) % totalTestimonials);
    setCurrentTestimonial((current) => (current + 1) % totalTestimonials);
    setNextTestimonial((next) => (next + 1) % totalTestimonials);
  };

  // Handle prev click
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
          }}
          className="z-[-1]"
        />
      ))}
      <div className="h-[10%] text-center">
        <h2 className="font-bold">What Our Customers Say About Us</h2>
        <p className="text-sm">
          Don't just take our word for it. Our customers say it best.
        </p>
      </div>
      <div className="w-full h-full p-4 flex justify-around items-center">
        {/* Previous Testimonial Image */}
        <div
          className="w-[20%] flex justify-center items-center cursor-pointer"
          onClick={handlePrevClick}
        >
          <img
            src={testimonials[prevTestimonial].profileImg}
            alt="Previous Profile"
            className="h-[70px] w-[70px] rounded-full"
          />
        </div>

        {/* Current Testimonial */}
        <div className="w-[70%] h-full currentTestimonial flex flex-col justify-center items-center text-center">
          <img
            src={testimonials[currentTestimonial].profileImg}
            alt="Current Profile"
            className="h-[150px] w-[150px] rounded-full"
          />
          <h3 className="font-semibold mt-2">
            {testimonials[currentTestimonial].name}
          </h3>
          <p className="text-sm text-gray-500">
            {testimonials[currentTestimonial].company}
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
              {testimonials[currentTestimonial].statement}
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
            src={testimonials[nextTestimonial].profileImg}
            alt="Next Profile"
            className="h-[70px] w-[70px] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
