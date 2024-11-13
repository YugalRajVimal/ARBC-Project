import React, { useEffect, useState } from "react";
import { getAsideListItems } from "../../../../api/BuyerAPI/buyerAPI";
import { useNavigate } from "react-router-dom";

// const topCategories = [
//   { name: "Earthing Electrode", url: "/earthing-electrode" },
//   { name: "Jackets", url: "/jackets" },
//   { name: "Personal Care Products", url: "/personal-care-products" },
//   { name: "Rolling Mill Machinery", url: "/rolling-mill-machinery" },
//   { name: "ICU Equipment", url: "/icu-equipment" },
//   {
//     name: "Medical, Diagnostic & Hospital Supplies",
//     url: "/medical-diagnostic-hospital-supplies",
//   },
//   { name: "Temperature Instruments", url: "/temperature-instruments" },
//   { name: "Disposable Gloves", url: "/disposable-gloves" },
//   {
//     name: "Healthcare & Hygiene Products",
//     url: "/healthcare-hygiene-products",
//   },
//   {
//     name: "Immunization & Vaccination Drugs",
//     url: "/immunization-vaccination-drugs",
//   },
//   { name: "ENT Equipment & Supplies", url: "/ent-equipment-supplies" },
//   // Add more categories here...
// ];

const TopCategories = () => {
  const navigate = useNavigate();
  const [topCategories, setTopCategories] = useState([]);
  useEffect(() => {
    // Fetch top categories from API
    getAsideListItems(0).then((data) => {
      setTopCategories(data[0].categories);
    });
  }, []);

  const navigateToCategories = () => {
    // Navigate to categories page
    navigate("/categories");
  };

  const navigateToSubCategories = (categoryId) => {
    // Navigate to sub categories page
    navigate(`/subcategories/${categoryId}`);
  }
  return (
    <div className="p-8 w-[100%]">
      <h2 onClick={navigateToCategories} className="text-xl font-bold mb-4">
        Top Categories
      </h2>
      <div className="flex flex-wrap gap-2 pl-2">
        {topCategories.map((category, index) => (
          <p
            onClick={() => navigateToSubCategories(category._id)}
            key={index}
            className="bg-gray-100 rounded-md px-3 py-1 text-xs font-medium text-gray-800 hover:bg-gray-300"
          >
            {category.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default TopCategories;
