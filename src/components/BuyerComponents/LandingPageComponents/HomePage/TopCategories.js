import React, { useEffect, useState } from "react";
import { getAsideListItems } from "../../../../api/BuyerAPI/buyerAPI";
import { useNavigate } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai"; // Plus icon

const TopCategories = () => {
  const navigate = useNavigate();
  const [topCategories, setTopCategories] = useState([]);

  useEffect(() => {
    getAsideListItems(0).then((data) => {
      setTopCategories(data[0]?.categories || []);
    });
  }, []);

  const navigateToCategories = () => {
    navigate("/categories");
  };

  const navigateToSubCategories = (categoryId) => {
    navigate(`/subcategories/${categoryId}`);
  };

  return (
    <div className="border p-4 bg-white md:h-full w-full rounded-md overflow-y-auto">
      {/* Title */}
      <h3
        onClick={navigateToCategories}
        className="text-lg font-semibold text-black cursor-pointer"
      >
        Top Categories
      </h3>

      {/* Green underline */}
      <div className="h-[2px] w-12 bg-green-500 mt-2 mb-4"></div>

      {/* Category list */}
      <ul className="space-y-3 ">
        {topCategories.map((item) => (
          <li
            key={item._id}
            className="flex justify-between items-center gap-4 py-2 border-b border-dashed last:border-b-0 cursor-pointer"
            onClick={() => navigateToSubCategories(item._id)}
          >
            {/* Left side with dot + name */}
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span className="text-black">{item.name}</span>
            </div>

            {/* Plus icon */}
            <AiOutlinePlus className="text-black" size={16} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopCategories;
