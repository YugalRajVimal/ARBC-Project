import React from "react";

const topCategories = [
  { name: "Earthing Electrode", url: "/earthing-electrode" },
  { name: "Jackets", url: "/jackets" },
  { name: "Personal Care Products", url: "/personal-care-products" },
  { name: "Rolling Mill Machinery", url: "/rolling-mill-machinery" },
  { name: "ICU Equipment", url: "/icu-equipment" },
  { name: "Medical, Diagnostic & Hospital Supplies", url: "/medical-diagnostic-hospital-supplies" },
  { name: "Temperature Instruments", url: "/temperature-instruments" },
  { name: "Disposable Gloves", url: "/disposable-gloves" },
  { name: "Healthcare & Hygiene Products", url: "/healthcare-hygiene-products" },
  { name: "Immunization & Vaccination Drugs", url: "/immunization-vaccination-drugs" },
  { name: "ENT Equipment & Supplies", url: "/ent-equipment-supplies" },
  // Add more categories here...
];

const TopCategories = () => {
  return (
    <div className="p-8 w-[90%]">
      <h2 className="text-xl font-bold mb-4">Top Categories</h2>
      <div className="flex flex-wrap gap-2 pl-2">
        {topCategories.map((category, index) => (
          <a 
            key={index} 
            href={category.url} 
            className="bg-gray-100 rounded-md px-3 py-1 text-xs font-medium text-gray-800 hover:bg-gray-300"
          >
            {category.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default TopCategories;
