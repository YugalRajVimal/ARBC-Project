import React from "react";

const subCategoryNames = [
  "Men's Clothing",
  "Women's Clothing",
  "Kids' Toys",
  "Kitchen Appliances",
  "Electronics Accessories",
  "Mobile Phones",
  "Laptop Accessories",
  "Home Furniture",
  "Outdoor Equipment",
  "Sports Gear",
  "Beauty Products",
  "Books & Stationery",
  "Pet Supplies",
  "Gardening Tools",
  "Gaming Consoles",
  "Smart Home Devices",
  "Health Supplements",
  "Car Accessories",
  "Musical Instruments",
  "Office Supplies",
];

const RecentlyAddedSubCategories = () => {
  return (
    <>
      <h3 className="text-xl font-semibold mb-4">RecentlyAddedSubCategories</h3>
      <div className="flex gap-2  px-4 justify-start overflow-x-auto">
        {subCategoryNames.map((subCategory, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-md px-16 py-8 text-xs font-medium text-gray-800 hover:bg-gray-300 whitespace-nowrap"
          >
            {subCategory}
          </div>
        ))}
      </div>
    </>
  );
};

export default RecentlyAddedSubCategories;
