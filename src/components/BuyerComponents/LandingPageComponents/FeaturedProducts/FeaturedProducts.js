import React from "react";
import ProductCard from "./ProductCard";

const productDetails = [
  {
    name: "Wireless Headphones",
    price: "$79.99",
    units: "1",
    image:
      "https://productregistration.sony.com/static/media/bgImage.93085db3a57535f19854.png",
    seller: "AudioTech Store",
  },
  {
    name: "Smartphone XYZ",
    price: "$699.99",
    units: "1",
    image:
      "https://productregistration.sony.com/static/media/bgImage.93085db3a57535f19854.png",
    seller: "Mobile Hub",
  },
  {
    name: "Gaming Laptop",
    price: "$1,299.99",
    units: "1",
    image:
      "https://productregistration.sony.com/static/media/bgImage.93085db3a57535f19854.png",
    seller: "Tech World",
  },
  {
    name: "Bluetooth Speaker",
    price: "$49.99",
    units: "1",
    image:
      "https://productregistration.sony.com/static/media/bgImage.93085db3a57535f19854.png",
    seller: "SoundWave",
  },
  {
    name: "4K Smart TV",
    price: "$899.99",
    units: "1",
    image:
      "https://productregistration.sony.com/static/media/bgImage.93085db3a57535f19854.png",
    seller: "Home Electronics",
  },
  {
    name: "Fitness Tracker",
    price: "$29.99",
    units: "1",
    image:
      "https://productregistration.sony.com/static/media/bgImage.93085db3a57535f19854.png",
    seller: "FitLife",
  },
  {
    name: "Digital Camera",
    price: "$499.99",
    units: "1",
    image:
      "https://productregistration.sony.com/static/media/bgImage.93085db3a57535f19854.png",
    seller: "PhotoPro",
  },
  {
    name: "Wireless Charger",
    price: "$19.99",
    units: "1",
    image:
      "https://productregistration.sony.com/static/media/bgImage.93085db3a57535f19854.png",
    seller: "Gadgets Plus",
  },
  {
    name: "Smart Watch",
    price: "$199.99",
    units: "1",
    image:
      "https://productregistration.sony.com/static/media/bgImage.93085db3a57535f19854.png",
    seller: "Wearable Tech",
  },
  {
    name: "Portable SSD",
    price: "$89.99",
    units: "1",
    image:
      "https://productregistration.sony.com/static/media/bgImage.93085db3a57535f19854.png",
    seller: "Storage Solutions",
  },
];

const FeaturedProducts = () => {
  return (
    <div className="p-2 flex flex-col justify-around items-start">
      <h2 className="p-2 text-xl font-bold h-[12%]">Featured Products</h2>
      <div className="h-[360px] flex w-full gap-4 overflow-x-auto mx-4">
        {productDetails.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
