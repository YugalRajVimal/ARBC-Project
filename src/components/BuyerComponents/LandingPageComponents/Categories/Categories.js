import React from "react";
import SubCategory from "./SubCategory/SubCategory";

const categories = [
  {
    name: "Electronics",
    subCategories: [
      {
        name: "Smartphones",
        image:
          "https://productregistration.sony.com/static/media/bgImage.93085db3a57535f19854.png",
        products: [
          {
            name: "Smartphone XYZ",
            price: "$699.99",
            units: "1",
            image:
              "https://productregistration.sony.com/static/media/bgImage.93085db3a57535f19854.png",
            seller: "Mobile Hub",
          },
          {
            name: "Smartphone ABC",
            price: "$799.99",
            units: "1",
            image:
              "https://productregistration.sony.com/static/media/bgImage.93085db3a57535f19854.png",
            seller: "Mobile Hub",
          },
          {
            name: "Smartphone DEF",
            price: "$899.99",
            units: "1",
            image:
              "https://productregistration.sony.com/static/media/bgImage.93085db3a57535f19854.png",
            seller: "Mobile Hub",
          },
        ],
      },
      {
        name: "Laptops",
        image:
          "https://productregistration.sony.com/static/media/bgImage.93085db3a57535f19854.png",
        products: [
          {
            name: "Laptop GHI",
            price: "$1099.99",
            units: "1",
            image:
              "https://productregistration.sony.com/static/media/bgImage.93085db3a57535f19854.png",
            seller: "Tech World",
          },
          {
            name: "Laptop JKL",
            price: "$1299.99",
            units: "1",
            image:
              "https://productregistration.sony.com/static/media/bgImage.93085db3a57535f19854.png",
            seller: "Tech World",
          },
        ],
      },
      {
        name: "Smartphones",
        image:
          "https://productregistration.sony.com/static/media/bgImage.93085db3a57535f19854.png",
        products: [
          {
            name: "Smartphone XYZ",
            price: "$699.99",
            units: "1",
            image:
              "https://productregistration.sony.com/static/media/bgImage.93085db3a57535f19854.png",
            seller: "Mobile Hub",
          },
          {
            name: "Smartphone ABC",
            price: "$799.99",
            units: "1",
            image:
              "https://productregistration.sony.com/static/media/bgImage.93085db3a57535f19854.png",
            seller: "Mobile Hub",
          },
          {
            name: "Smartphone DEF",
            price: "$899.99",
            units: "1",
            image:
              "https://productregistration.sony.com/static/media/bgImage.93085db3a57535f19854.png",
            seller: "Mobile Hub",
          },
        ],
      },
      {
        name: "Laptops",
        image:
          "https://productregistration.sony.com/static/media/bgImage.93085db3a57535f19854.png",
        products: [
          {
            name: "Laptop GHI",
            price: "$1099.99",
            units: "1",
            image:
              "https://productregistration.sony.com/static/media/bgImage.93085db3a57535f19854.png",
            seller: "Tech World",
          },
          {
            name: "Laptop JKL",
            price: "$1299.99",
            units: "1",
            image:
              "https://productregistration.sony.com/static/media/bgImage.93085db3a57535f19854.png",
            seller: "Tech World",
          },
        ],
      },
      {
        name: "Smartphones",
        image:
          "https://productregistration.sony.com/static/media/bgImage.93085db3a57535f19854.png",
        products: [
          {
            name: "Smartphone XYZ",
            price: "$699.99",
            units: "1",
            image:
              "https://productregistration.sony.com/static/media/bgImage.93085db3a57535f19854.png",
            seller: "Mobile Hub",
          },
          {
            name: "Smartphone ABC",
            price: "$799.99",
            units: "1",
            image:
              "https://productregistration.sony.com/static/media/bgImage.93085db3a57535f19854.png",
            seller: "Mobile Hub",
          },
          {
            name: "Smartphone DEF",
            price: "$899.99",
            units: "1",
            image:
              "https://productregistration.sony.com/static/media/bgImage.93085db3a57535f19854.png",
            seller: "Mobile Hub",
          },
        ],
      },
      {
        name: "Laptops",
        image:
          "https://productregistration.sony.com/static/media/bgImage.93085db3a57535f19854.png",
        products: [
          {
            name: "Laptop GHI",
            price: "$1099.99",
            units: "1",
            image:
              "https://productregistration.sony.com/static/media/bgImage.93085db3a57535f19854.png",
            seller: "Tech World",
          },
          {
            name: "Laptop JKL",
            price: "$1299.99",
            units: "1",
            image:
              "https://productregistration.sony.com/static/media/bgImage.93085db3a57535f19854.png",
            seller: "Tech World",
          },
        ],
      },
    ],
  },
  {
    name: "Machinery",
    subCategories: [
      {
        name: "Heavy Equipment",
        image:
          "https://productregistration.sony.com/static/media/bgImage.93085db3a57535f19854.png",
        products: [
          {
            name: "Excavator MNO",
            price: "$200,000",
            units: "1",
            image:
              "https://productregistration.sony.com/static/media/bgImage.93085db3a57535f19854.png",
            seller: "Construction Equip",
          },
          {
            name: "Bulldozer PQR",
            price: "$150,000",
            units: "1",
            image:
              "https://productregistration.sony.com/static/media/bgImage.93085db3a57535f19854.png",
            seller: "Construction Equip",
          },
        ],
      },
      {
        name: "Agricultural Machinery",
        image:
          "https://productregistration.sony.com/static/media/bgImage.93085db3a57535f19854.png",
        products: [
          {
            name: "Tractor STU",
            price: "$75,000",
            units: "1",
            image:
              "https://productregistration.sony.com/static/media/bgImage.93085db3a57535f19854.png",
            seller: "Farm Tech",
          },
          {
            name: "Combine Harvester VWX",
            price: "$120,000",
            units: "1",
            image:
              "https://productregistration.sony.com/static/media/bgImage.93085db3a57535f19854.png",
            seller: "Farm Tech",
          },
        ],
      },
      {
        name: "Heavy Equipment",
        image:
          "https://productregistration.sony.com/static/media/bgImage.93085db3a57535f19854.png",
        products: [
          {
            name: "Excavator MNO",
            price: "$200,000",
            units: "1",
            image:
              "https://productregistration.sony.com/static/media/bgImage.93085db3a57535f19854.png",
            seller: "Construction Equip",
          },
          {
            name: "Bulldozer PQR",
            price: "$150,000",
            units: "1",
            image:
              "https://productregistration.sony.com/static/media/bgImage.93085db3a57535f19854.png",
            seller: "Construction Equip",
          },
        ],
      },
      {
        name: "Agricultural Machinery",
        image:
          "https://productregistration.sony.com/static/media/bgImage.93085db3a57535f19854.png",
        products: [
          {
            name: "Tractor STU",
            price: "$75,000",
            units: "1",
            image:
              "https://productregistration.sony.com/static/media/bgImage.93085db3a57535f19854.png",
            seller: "Farm Tech",
          },
          {
            name: "Combine Harvester VWX",
            price: "$120,000",
            units: "1",
            image:
              "https://productregistration.sony.com/static/media/bgImage.93085db3a57535f19854.png",
            seller: "Farm Tech",
          },
        ],
      },
      {
        name: "Heavy Equipment",
        image:
          "https://productregistration.sony.com/static/media/bgImage.93085db3a57535f19854.png",
        products: [
          {
            name: "Excavator MNO",
            price: "$200,000",
            units: "1",
            image:
              "https://productregistration.sony.com/static/media/bgImage.93085db3a57535f19854.png",
            seller: "Construction Equip",
          },
          {
            name: "Bulldozer PQR",
            price: "$150,000",
            units: "1",
            image:
              "https://productregistration.sony.com/static/media/bgImage.93085db3a57535f19854.png",
            seller: "Construction Equip",
          },
        ],
      },
      {
        name: "Agricultural Machinery",
        image:
          "https://productregistration.sony.com/static/media/bgImage.93085db3a57535f19854.png",
        products: [
          {
            name: "Tractor STU",
            price: "$75,000",
            units: "1",
            image:
              "https://productregistration.sony.com/static/media/bgImage.93085db3a57535f19854.png",
            seller: "Farm Tech",
          },
          {
            name: "Combine Harvester VWX",
            price: "$120,000",
            units: "1",
            image:
              "https://productregistration.sony.com/static/media/bgImage.93085db3a57535f19854.png",
            seller: "Farm Tech",
          },
        ],
      },
    ],
  },
  {
    name: "Construction & Real Estate",
    subCategories: [
      {
        name: "Building Materials",
        image:
          "https://productregistration.sony.com/static/media/bgImage.93085db3a57535f19854.png",
        products: [
          {
            name: "Cement YZA",
            price: "$25.99 per bag",
            units: "100",
            image:
              "https://productregistration.sony.com/static/media/bgImage.93085db3a57535f19854.png",
            seller: "BuildCo",
          },
          {
            name: "Steel Bars BCD",
            price: "$300.00 per ton",
            units: "50",
            image:
              "https://productregistration.sony.com/static/media/bgImage.93085db3a57535f19854.png",
            seller: "BuildCo",
          },
        ],
      },
      {
        name: "Real Estate",
        image:
          "https://productregistration.sony.com/static/media/bgImage.93085db3a57535f19854.png",
        products: [
          {
            name: "Residential Plot EFG",
            price: "$250,000",
            units: "1",
            image:
              "https://productregistration.sony.com/static/media/bgImage.93085db3a57535f19854.png",
            seller: "RealtyHub",
          },
          {
            name: "Commercial Building HIJ",
            price: "$1,500,000",
            units: "1",
            image:
              "https://productregistration.sony.com/static/media/bgImage.93085db3a57535f19854.png",
            seller: "RealtyHub",
          },
        ],
      },
      {
        name: "Building Materials",
        image:
          "https://productregistration.sony.com/static/media/bgImage.93085db3a57535f19854.png",
        products: [
          {
            name: "Cement YZA",
            price: "$25.99 per bag",
            units: "100",
            image:
              "https://productregistration.sony.com/static/media/bgImage.93085db3a57535f19854.png",
            seller: "BuildCo",
          },
          {
            name: "Steel Bars BCD",
            price: "$300.00 per ton",
            units: "50",
            image:
              "https://productregistration.sony.com/static/media/bgImage.93085db3a57535f19854.png",
            seller: "BuildCo",
          },
        ],
      },
      {
        name: "Real Estate",
        image:
          "https://productregistration.sony.com/static/media/bgImage.93085db3a57535f19854.png",
        products: [
          {
            name: "Residential Plot EFG",
            price: "$250,000",
            units: "1",
            image:
              "https://productregistration.sony.com/static/media/bgImage.93085db3a57535f19854.png",
            seller: "RealtyHub",
          },
          {
            name: "Commercial Building HIJ",
            price: "$1,500,000",
            units: "1",
            image:
              "https://productregistration.sony.com/static/media/bgImage.93085db3a57535f19854.png",
            seller: "RealtyHub",
          },
        ],
      },
      {
        name: "Building Materials",
        image:
          "https://productregistration.sony.com/static/media/bgImage.93085db3a57535f19854.png",
        products: [
          {
            name: "Cement YZA",
            price: "$25.99 per bag",
            units: "100",
            image:
              "https://productregistration.sony.com/static/media/bgImage.93085db3a57535f19854.png",
            seller: "BuildCo",
          },
          {
            name: "Steel Bars BCD",
            price: "$300.00 per ton",
            units: "50",
            image:
              "https://productregistration.sony.com/static/media/bgImage.93085db3a57535f19854.png",
            seller: "BuildCo",
          },
        ],
      },
      {
        name: "Real Estate",
        image:
          "https://productregistration.sony.com/static/media/bgImage.93085db3a57535f19854.png",
        products: [
          {
            name: "Residential Plot EFG",
            price: "$250,000",
            units: "1",
            image:
              "https://productregistration.sony.com/static/media/bgImage.93085db3a57535f19854.png",
            seller: "RealtyHub",
          },
          {
            name: "Commercial Building HIJ",
            price: "$1,500,000",
            units: "1",
            image:
              "https://productregistration.sony.com/static/media/bgImage.93085db3a57535f19854.png",
            seller: "RealtyHub",
          },
        ],
      },
    ],
  },
];

const Categories = () => {
  return (
    <div className="h-[150%] w-full p-2 flex flex-col justify-between">
      {/* Top 3 Cateegories  */}
      {categories.map((category) => (
        <div className="h-1/3 w-full">
          <h2 className="p-2 text-xl font-bold h-[12%]">{category.name}</h2>
          <div className="h-[88%] flex justify-center overflow-x-auto mx-4">
            <div className=" flex justify-start overflow-x-auto gap-4">
              {category.subCategories.map((subCategory, index) => (
                <SubCategory key={index} subCategory={subCategory} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
