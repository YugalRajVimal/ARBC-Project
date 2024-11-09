import React from 'react'
import { BiCategory } from "react-icons/bi";
const topCategoriesItems = [
  {
    logo: <BiCategory />,
    title: "Electronics",
  },
  {
    logo: <BiCategory />,
    title: "Fashion",
  },
  {
    logo: <BiCategory />,
    title: "Home & Kitchen",
  },
  {
    logo: <BiCategory />,
    title: "Books",
  },
  {
    logo: <BiCategory />,
    title: "Toys & Games",
  },
  {
    logo: <BiCategory />,
    title: "Health & Personal Care",
  },
  {
    logo: <BiCategory />,
    title: "Sports & Outdoors",
  },
  {
    logo: <BiCategory />,
    title: "Automotive",
  },
  {
    logo: <BiCategory />,
    title: "Beauty & Grooming",
  },
  {
    logo: <BiCategory />,
    title: "Computers",
  },
  {
    logo: <BiCategory />,
    title: "Music & Instruments",
  },
  {
    logo: <BiCategory />,
    title: "Garden & Outdoor",
  },
  {
    logo: <BiCategory />,
    title: "Grocery & Gourmet Food",
  },
  {
    logo: <BiCategory />,
    title: "Office Supplies",
  }
];

const TopCategories = () => {
  return (
    <div className="w-[24%]  max-w-[300px] h-full shadow-[0px_0px_10px_2px_rgba(0,0,0,0.3)] p-2 rounded-md">
        <h3 className="text-lg font-bold pb-2">Top Categories</h3>
        <ul>
          {topCategoriesItems.map((item, index) => (
            <li key={index} className="flex justify-between items-center py-2 pl-2">
              <div className="flex items-center">
                {item.logo}
                <span className="pl-2 text-sm">{item.title}</span>
              </div>
            </li>  
          ))}
        </ul>
      </div>
  )
}

export default TopCategories