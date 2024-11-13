import React, { useEffect, useState } from "react";
import { getAllCategories } from "../../../../api/BuyerAPI/buyerAPI";
import { useNavigate } from "react-router-dom";

// const categories = [
//   {
//     name: "Electronics",
//     image:
//       "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/2e30d5fac47eff64.jpg?q=100",
//   },
//   {
//     name: "Fashion",
//     image:
//       "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/2e30d5fac47eff64.jpg?q=100",
//   },
//   {
//     name: "Home",
//     image:
//       "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/2e30d5fac47eff64.jpg?q=100",
//   },
//   {
//     name: "Beauty",
//     image:
//       "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/2e30d5fac47eff64.jpg?q=100",
//   },
//   {
//     name: "Health",
//     image:
//       "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/2e30d5fac47eff64.jpg?q=100",
//   },
//   {
//     name: "Sports",
//     image:
//       "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/2e30d5fac47eff64.jpg?q=100",
//   },
//   {
//     name: "Toys",
//     image:
//       "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/2e30d5fac47eff64.jpg?q=100",
//   },
//   {
//     name: "Books",
//     image:
//       "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/2e30d5fac47eff64.jpg?q=100",
//   },
//   {
//     name: "Automobile",
//     image:
//       "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/2e30d5fac47eff64.jpg?q=100",
//   },
//   {
//     name: "Grocery",
//     image:
//       "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/2e30d5fac47eff64.jpg?q=100",
//   },
// ];

const CategoriesList = () => {
  const navigate=useNavigate();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    // Fetch top categories from API
    getAllCategories().then((data) => {
      console.log(data);
      setCategories(data);
    });
  }, []);

  const navigateToSubCategories = (categoryId) => {
    // Navigate to sub categories page
    navigate(`/subcategories/${categoryId}`);
  }

  return (
    <div className="h-[25%] flex justify-center">
      <div className="categoryCards h-full flex gap-4 justify-start overflow-x-auto px-8 py-4 space-x-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="h-full flex flex-col items-center space-y-2 min-w-[150px]"
            onClick={()=>navigateToSubCategories(category._id)}
          >
            <div className="categoryCard h-[70%] rounded-md flex justify-center items-center shrink-0 aspect-square bg-gray-100 shadow-md">
              <img
                src={`${process.env.REACT_APP_API_URL}/${category.image}`}
                alt={category.name}
                className="w-[70%] h-[70%] object-cover rounded-md"
              />
            </div>
            <span className="h-[20%] text-center text-sm font-medium truncate w-full px-1">
              {category.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesList;
