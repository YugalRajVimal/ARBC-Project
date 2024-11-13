import React, { useEffect, useState } from "react";
import { getNewArrivals } from "../../../../api/BuyerAPI/buyerAPI";
import { useNavigate } from "react-router-dom";

const NewArrival = () => {
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

  // get-new-arrivals

  const [newArrivals, setNewArrivals] = useState([]);
  useEffect(() => {
    // Fetch top categories from API
    getNewArrivals().then((data) => {
      console.log(data);
      setNewArrivals(data);
    });
  }, []);

  const navigate = useNavigate();

  const navigateToDetailedProduct = (productId) => {
    navigate(`/product/${productId}`);
  };


  return (
    <div className="w-[45%] h-[75%] rounded-md p-2 shadow-[0px_0px_10px_2px_rgba(0,0,0,0.2)]">
      <div className="h-[15%]">
        <h3 className="mb-[-8px] font-bold">NewArrival</h3>
        <span className="text-xs pl-2">
          Buy from an exciting collection of our newly added products
        </span>
      </div>

      <div className="h-[85%] flex justify-center pl-2">
        <div className=" h-[100%] flex justify-start items-center gap-2 overflow-x-auto overflow-y-hidden">
          {newArrivals.map((product, index) => (
            <div
            onClick={()=>navigateToDetailedProduct(product._id)}
            className="h-[90%] aspect-[6/5]  border rounded-md p-1">
              <img
                src={
                  process.env.REACT_APP_API_URL + "/" + product.productImages[0]
                }
                alt={product.productName}
                className="h-1/2 aspect-[1/1] object-cover m-auto rounded-sm p-1"
              />
              <h3 className="text-md font-semibold border-t-[1px]">
                {product.productName}
              </h3>
              <p className="text-sm">{product.productPrice} / {product.productUnitType}</p>
              <p className="text-sm">{product.productQuantity} in Stock</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
