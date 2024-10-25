import React from "react";

const SubCategory = (props) => {
  const { subCategory, index } = props;
  const { name, image, products } = subCategory;
  return (
    <div
      key={index}
      className="p-2 h-full w-[170px]  flex flex-col justify-start items-center items-start border border-gray-200 rounded-md shrink-0 "
    >
      <img
        src={image}
        alt={name}
        className="h-1/3 aspect-[1/1] object-cover"
      />
      <div className="text-lg font-bold">{name}</div>

      <div className="w-full overflow-y-auto flex flex-col">
        {products.map((product, index) => (
          <div
            key={index}
            className="w-full text-sm border-t-[2px] border-zinc-400 py-1"
          >
            {product.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubCategory;
