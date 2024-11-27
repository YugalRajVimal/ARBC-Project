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
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    // Fetch top categories from API
    getAsideListItems(0).then((data) => {
      console.log(data[0].categories);
      setTopCategories(data[0].categories);
    });
  }, []);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const navigateToCategories = () => {
    // Navigate to categories page
    navigate("/categories");
  };

  const navigateToSubCategories = (categoryId) => {
    // Navigate to sub categories page
    navigate(`/subcategories/${categoryId}`);
  };

  return (
    <>
      <div className="w-[0px] min-[800px]:w-[24%] hidden min-[800px]:block h-full shadow-[0px_0px_10px_2px_rgba(0,0,0,0.3)] p-2 rounded-md flex flex-col justify-around ">
        <div className="h-[90%]">
          <h3
            onClick={navigateToCategories}
            className="h-[5%] text-lg font-bold pb-2"
          >
            Top Categories
          </h3>
          <ul className="h-full overflow-y-auto h-[95%]">
            {topCategories.map((item, index) => (
              <li
                key={index}
                className=" flex justify-between items-center py-2 pl-2"
              >
                <div
                  onClick={(e) => (
                    e.stopPropagation(), navigateToSubCategories(item._id)
                  )}
                  className="flex items-center h-"
                >
                  <img
                    src={process.env.REACT_APP_API_URL + "/" + item.image}
                    alt={item.name}
                    className="w-8 h-8 bg-black rounded-full"
                  />
                  <span className="pl-2 text-md">{item.name}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="h-[5%]">
          <button
            onClick={navigateToCategories}
            className="w-full px-4 py-2 text-blue-900 rounded"
          >
            View All Categories
          </button>
        </div>
      </div>
      <div className="relative block min-[800px]:hidden">
        <button
          onClick={toggleVisibility}
          className="absolute transform top-[7vh] left-[-27px] -translate-y-1/2 -rotate-90  p-2 bg-[#ebedfd] text-black rounded-b-md z-50"
        >
          {isVisible ? "Close" : "Categories"}
        </button>
        <div
          className={`absolute  left-0 h-full w-[300px] bg-white shadow-lg transform transition-transform duration-300 ${
            isVisible ? "translate-x-0" : "-translate-x-full"
          } z-40`}
        >
          <div className="p-8 w-full">
            <h2
              onClick={navigateToCategories}
              className="text-xl font-bold mb-4"
            >
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
        </div>
      </div>
    </>
  );
};

export default TopCategories;
