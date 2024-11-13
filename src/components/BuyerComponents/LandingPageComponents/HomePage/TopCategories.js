import React, { useEffect, useState } from "react";
import { BiCategory } from "react-icons/bi";
import { getAsideListItems } from "../../../../api/BuyerAPI/buyerAPI";
import { useNavigate } from "react-router-dom";
// const topCategoriesItems = [
//   {
//     logo: <BiCategory />,
//     title: "Electronics",
//   },
//   {
//     logo: <BiCategory />,
//     title: "Fashion",
//   },
//   {
//     logo: <BiCategory />,
//     title: "Home & Kitchen",
//   },
//   {
//     logo: <BiCategory />,
//     title: "Books",
//   },
//   {
//     logo: <BiCategory />,
//     title: "Toys & Games",
//   },
//   {
//     logo: <BiCategory />,
//     title: "Health & Personal Care",
//   },
//   {
//     logo: <BiCategory />,
//     title: "Sports & Outdoors",
//   },
//   {
//     logo: <BiCategory />,
//     title: "Automotive",
//   },
//   {
//     logo: <BiCategory />,
//     title: "Beauty & Grooming",
//   },
//   {
//     logo: <BiCategory />,
//     title: "Computers",
//   },
//   {
//     logo: <BiCategory />,
//     title: "Music & Instruments",
//   },
//   {
//     logo: <BiCategory />,
//     title: "Garden & Outdoor",
//   },
//   {
//     logo: <BiCategory />,
//     title: "Grocery & Gourmet Food",
//   },
//   {
//     logo: <BiCategory />,
//     title: "Office Supplies",
//   },
// ];

const TopCategories = () => {
  const navigate = useNavigate();
  const [topCategories, setTopCategories] = useState([]);
  useEffect(() => {
    // Fetch top categories from API
    getAsideListItems(0).then((data) => {
      console.log(data[0].categories);
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
    <div className="w-[24%]   h-full shadow-[0px_0px_10px_2px_rgba(0,0,0,0.3)] p-2 rounded-md">
      <h3 onClick={navigateToCategories} className="text-lg font-bold pb-2">Top Categories</h3>
      <ul>
        {topCategories.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center py-2 pl-2"
          >
            <div
            onClick={(e)=>(e.stopPropagation(),navigateToSubCategories(item._id))}
            className="flex items-center">
              <img src={process.env.REACT_APP_API_URL+"/"+item.image} alt={item.name} className="w-8 h-8 bg-black rounded-full" />
              <span className="pl-2 text-md">{item.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopCategories;
