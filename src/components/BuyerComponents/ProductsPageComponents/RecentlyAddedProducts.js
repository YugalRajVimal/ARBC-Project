import React from "react";

const productsNames = [
  "Human Hair",
  "Forklift Trucks",
  "Servo Voltage Stabilizer",
  "Basmati Rice",
  "Backhoe Loader",
  "Carry Bag Making Machine",
  "Drum Lifter",
  "Electric Stacker",
  "Scissor Lifts",
  "Industrial Vibrating Screen",
  // Add more products here...
];

const RecentlyAddedProdcuts = () => {
  return (
    <>
      <h3 className="text-xl font-semibold mb-4">RecentlyAddedProdcuts</h3>
      <div className="flex gap-2  px-4 justify-start overflow-x-auto">
        {productsNames.map((product, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-md px-16 py-8 text-xs font-medium text-gray-800 hover:bg-gray-300 whitespace-nowrap"
          >
            {product}
          </div>
        ))}
      </div>
    </>
  );
};

export default RecentlyAddedProdcuts;
