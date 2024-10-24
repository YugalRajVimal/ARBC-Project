import React from "react";

const categories = [
  {
    name: "Electronics",
    image:
      "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/2e30d5fac47eff64.jpg?q=100",
  },
  {
    name: "Fashion",
    image:
      "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/2e30d5fac47eff64.jpg?q=100",
  },
  {
    name: "Home",
    image:
      "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/2e30d5fac47eff64.jpg?q=100",
  },
  {
    name: "Beauty",
    image:
      "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/2e30d5fac47eff64.jpg?q=100",
  },
  {
    name: "Health",
    image:
      "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/2e30d5fac47eff64.jpg?q=100",
  },
  {
    name: "Sports",
    image:
      "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/2e30d5fac47eff64.jpg?q=100",
  },
  {
    name: "Toys",
    image:
      "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/2e30d5fac47eff64.jpg?q=100",
  },
  {
    name: "Books",
    image:
      "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/2e30d5fac47eff64.jpg?q=100",
  },
  {
    name: "Automobile",
    image:
      "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/2e30d5fac47eff64.jpg?q=100",
  },
  {
    name: "Grocery",
    image:
      "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/2e30d5fac47eff64.jpg?q=100",
  },
];

const CategoriesList = () => {
  return (
    <div className="h-[18%] flex justify-center">
      <div className="categoryCards h-full  flex gap-2 justify-start overflow-x-auto overflow-y-hidden p-4 space-x-4">
        {categories.map((category, index) => (
          <div key={index} className="h-full flex flex-col items-center">
            <div className="categoryCard h-[80%] bg-zinc-400 rounded-md flex justify-around items-center shrink-0 aspect-[1/1]">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <span className="h-[10%]">{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesList;
