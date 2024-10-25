import React from "react";

const popularProducts = [
  { name: "Human Hair", url: "/human-hair" },
  { name: "Forklift Trucks", url: "/forklift-trucks" },
  { name: "Servo Voltage Stabilizer", url: "/servo-voltage-stabilizer" },
  { name: "Basmati Rice", url: "/basmati-rice" },
  { name: "Backhoe Loader", url: "/backhoe-loader" },
  { name: "Carry Bag Making Machine", url: "/carry-bag-making-machine" },
  { name: "Drum Lifter", url: "/drum-lifter" },
  { name: "Electric Stacker", url: "/electric-stacker" },
  { name: "Scissor Lifts", url: "/scissor-lifts" },
  { name: "Industrial Vibrating Screen", url: "/industrial-vibrating-screen" },
  // Add more products here...
];

const PopularProducts = () => {
  return (
    <div className="p-8 w-[90%]">
      <h2 className="text-xl font-bold mb-4">Popular Products</h2>
      <div className="flex flex-wrap gap-2 pl-2">
        {popularProducts.map((product, index) => (
          <a 
            key={index} 
            href={product.url} 
            className="bg-gray-100 rounded-md px-3 py-1 text-xs font-medium text-gray-800 hover:bg-gray-300"
          >
            {product.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
