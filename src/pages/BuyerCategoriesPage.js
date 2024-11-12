import React from "react";
import { useNavigate } from "react-router-dom";
import PopularProducts from "../components/BuyerComponents/PopularProducts/PopularProducts";

const sampleData = [
  {
    id: 1,
    category: "Electronics",
    description: "Devices and gadgets for everyday use.",
    subCategories: [
      {
        subCategoryId: 1,
        subCategoryName: "Mobile Phones",
        products: [
          {
            productId: 1,
            productName: "iPhone 13",
            description: "Latest Apple smartphone.",
          },
          {
            productId: 2,
            productName: "Samsung Galaxy S21",
            description: "Flagship Samsung phone.",
          },
          {
            productId: 3,
            productName: "Google Pixel 6",
            description: "New Google phone with clean Android.",
          },
        ],
      },
      {
        subCategoryId: 2,
        subCategoryName: "Laptops",
        products: [
          {
            productId: 4,
            productName: "MacBook Pro",
            description: "High-performance laptop from Apple.",
          },
          {
            productId: 5,
            productName: "Dell XPS 13",
            description: "Ultra-thin laptop with a powerful processor.",
          },
          {
            productId: 6,
            productName: "HP Spectre x360",
            description: "Convertible laptop with touchscreen.",
          },
        ],
      },
      {
        subCategoryId: 3,
        subCategoryName: "Tablets",
        products: [
          {
            productId: 7,
            productName: "iPad Pro",
            description: "Powerful tablet with a large display.",
          },
          {
            productId: 8,
            productName: "Samsung Galaxy Tab S7",
            description: "Samsung's top Android tablet.",
          },
          {
            productId: 9,
            productName: "Amazon Fire HD 10",
            description: "Affordable tablet with Alexa.",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    category: "Furniture",
    description: "Home and office furniture solutions.",
    subCategories: [
      {
        subCategoryId: 4,
        subCategoryName: "Living Room",
        products: [
          {
            productId: 10,
            productName: "Sofa Set",
            description: "Comfortable 3-piece sofa set.",
          },
          {
            productId: 11,
            productName: "Coffee Table",
            description: "Wooden coffee table with storage.",
          },
          {
            productId: 12,
            productName: "TV Stand",
            description: "Modern TV stand with compartments.",
          },
        ],
      },
      {
        subCategoryId: 5,
        subCategoryName: "Bedroom",
        products: [
          {
            productId: 13,
            productName: "Queen Bed",
            description: "Spacious queen-size bed frame.",
          },
          {
            productId: 14,
            productName: "Dresser",
            description: "6-drawer dresser for storage.",
          },
          {
            productId: 15,
            productName: "Nightstand",
            description: "Bedside nightstand with drawer.",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    category: "Clothing",
    description: "Men's, women's, and children's apparel.",
    subCategories: [
      {
        subCategoryId: 6,
        subCategoryName: "Men's Clothing",
        products: [
          {
            productId: 16,
            productName: "T-Shirt",
            description: "Cotton T-shirt in various colors.",
          },
          {
            productId: 17,
            productName: "Jeans",
            description: "Slim-fit denim jeans.",
          },
          {
            productId: 18,
            productName: "Sweater",
            description: "Wool sweater for winter.",
          },
        ],
      },
      {
        subCategoryId: 7,
        subCategoryName: "Women's Clothing",
        products: [
          {
            productId: 19,
            productName: "Dress",
            description: "Elegant evening dress.",
          },
          {
            productId: 20,
            productName: "Blouse",
            description: "Casual blouse with floral print.",
          },
          {
            productId: 21,
            productName: "Skirt",
            description: "Knee-length skirt with pleats.",
          },
        ],
      },
      {
        subCategoryId: 8,
        subCategoryName: "Children's Clothing",
        products: [
          {
            productId: 22,
            productName: "Kids' T-Shirt",
            description: "Graphic T-shirt for kids.",
          },
          {
            productId: 23,
            productName: "Joggers",
            description: "Comfortable jogger pants for play.",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    category: "Books",
    description: "Fiction, non-fiction, and educational materials.",
    subCategories: [
      {
        subCategoryId: 9,
        subCategoryName: "Fiction",
        products: [
          {
            productId: 24,
            productName: "The Great Gatsby",
            description: "Classic American novel.",
          },
          {
            productId: 25,
            productName: "To Kill a Mockingbird",
            description: "Novel about social justice.",
          },
          {
            productId: 26,
            productName: "1984",
            description: "Dystopian novel by George Orwell.",
          },
        ],
      },
      {
        subCategoryId: 10,
        subCategoryName: "Non-Fiction",
        products: [
          {
            productId: 27,
            productName: "Sapiens",
            description: "A brief history of humankind.",
          },
          {
            productId: 28,
            productName: "Educated",
            description: "Memoir of a woman raised off the grid.",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    category: "Sports",
    description: "Equipment and apparel for various sports.",
    subCategories: [
      {
        subCategoryId: 11,
        subCategoryName: "Outdoor Sports",
        products: [
          {
            productId: 29,
            productName: "Football",
            description: "Standard size football.",
          },
          {
            productId: 30,
            productName: "Basketball",
            description: "Indoor/outdoor basketball.",
          },
        ],
      },
      {
        subCategoryId: 12,
        subCategoryName: "Gym Equipment",
        products: [
          {
            productId: 31,
            productName: "Dumbbell Set",
            description: "Adjustable dumbbell set.",
          },
          {
            productId: 32,
            productName: "Yoga Mat",
            description: "Non-slip yoga mat.",
          },
        ],
      },
    ],
  },
  {
    id: 1,
    category: "Electronics",
    description: "Devices and gadgets for everyday use.",
    subCategories: [
      {
        subCategoryId: 1,
        subCategoryName: "Mobile Phones",
        products: [
          {
            productId: 1,
            productName: "iPhone 13",
            description: "Latest Apple smartphone.",
          },
          {
            productId: 2,
            productName: "Samsung Galaxy S21",
            description: "Flagship Samsung phone.",
          },
          {
            productId: 3,
            productName: "Google Pixel 6",
            description: "New Google phone with clean Android.",
          },
        ],
      },
      {
        subCategoryId: 2,
        subCategoryName: "Laptops",
        products: [
          {
            productId: 4,
            productName: "MacBook Pro",
            description: "High-performance laptop from Apple.",
          },
          {
            productId: 5,
            productName: "Dell XPS 13",
            description: "Ultra-thin laptop with a powerful processor.",
          },
          {
            productId: 6,
            productName: "HP Spectre x360",
            description: "Convertible laptop with touchscreen.",
          },
        ],
      },
      {
        subCategoryId: 3,
        subCategoryName: "Tablets",
        products: [
          {
            productId: 7,
            productName: "iPad Pro",
            description: "Powerful tablet with a large display.",
          },
          {
            productId: 8,
            productName: "Samsung Galaxy Tab S7",
            description: "Samsung's top Android tablet.",
          },
          {
            productId: 9,
            productName: "Amazon Fire HD 10",
            description: "Affordable tablet with Alexa.",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    category: "Furniture",
    description: "Home and office furniture solutions.",
    subCategories: [
      {
        subCategoryId: 4,
        subCategoryName: "Living Room",
        products: [
          {
            productId: 10,
            productName: "Sofa Set",
            description: "Comfortable 3-piece sofa set.",
          },
          {
            productId: 11,
            productName: "Coffee Table",
            description: "Wooden coffee table with storage.",
          },
          {
            productId: 12,
            productName: "TV Stand",
            description: "Modern TV stand with compartments.",
          },
        ],
      },
      {
        subCategoryId: 5,
        subCategoryName: "Bedroom",
        products: [
          {
            productId: 13,
            productName: "Queen Bed",
            description: "Spacious queen-size bed frame.",
          },
          {
            productId: 14,
            productName: "Dresser",
            description: "6-drawer dresser for storage.",
          },
          {
            productId: 15,
            productName: "Nightstand",
            description: "Bedside nightstand with drawer.",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    category: "Clothing",
    description: "Men's, women's, and children's apparel.",
    subCategories: [
      {
        subCategoryId: 6,
        subCategoryName: "Men's Clothing",
        products: [
          {
            productId: 16,
            productName: "T-Shirt",
            description: "Cotton T-shirt in various colors.",
          },
          {
            productId: 17,
            productName: "Jeans",
            description: "Slim-fit denim jeans.",
          },
          {
            productId: 18,
            productName: "Sweater",
            description: "Wool sweater for winter.",
          },
        ],
      },
      {
        subCategoryId: 7,
        subCategoryName: "Women's Clothing",
        products: [
          {
            productId: 19,
            productName: "Dress",
            description: "Elegant evening dress.",
          },
          {
            productId: 20,
            productName: "Blouse",
            description: "Casual blouse with floral print.",
          },
          {
            productId: 21,
            productName: "Skirt",
            description: "Knee-length skirt with pleats.",
          },
        ],
      },
      {
        subCategoryId: 8,
        subCategoryName: "Children's Clothing",
        products: [
          {
            productId: 22,
            productName: "Kids' T-Shirt",
            description: "Graphic T-shirt for kids.",
          },
          {
            productId: 23,
            productName: "Joggers",
            description: "Comfortable jogger pants for play.",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    category: "Books",
    description: "Fiction, non-fiction, and educational materials.",
    subCategories: [
      {
        subCategoryId: 9,
        subCategoryName: "Fiction",
        products: [
          {
            productId: 24,
            productName: "The Great Gatsby",
            description: "Classic American novel.",
          },
          {
            productId: 25,
            productName: "To Kill a Mockingbird",
            description: "Novel about social justice.",
          },
          {
            productId: 26,
            productName: "1984",
            description: "Dystopian novel by George Orwell.",
          },
        ],
      },
      {
        subCategoryId: 10,
        subCategoryName: "Non-Fiction",
        products: [
          {
            productId: 27,
            productName: "Sapiens",
            description: "A brief history of humankind.",
          },
          {
            productId: 28,
            productName: "Educated",
            description: "Memoir of a woman raised off the grid.",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    category: "Sports",
    description: "Equipment and apparel for various sports.",
    subCategories: [
      {
        subCategoryId: 11,
        subCategoryName: "Outdoor Sports",
        products: [
          {
            productId: 29,
            productName: "Football",
            description: "Standard size football.",
          },
          {
            productId: 30,
            productName: "Basketball",
            description: "Indoor/outdoor basketball.",
          },
        ],
      },
      {
        subCategoryId: 12,
        subCategoryName: "Gym Equipment",
        products: [
          {
            productId: 31,
            productName: "Dumbbell Set",
            description: "Adjustable dumbbell set.",
          },
          {
            productId: 32,
            productName: "Yoga Mat",
            description: "Non-slip yoga mat.",
          },
        ],
      },
    ],
  },
  {
    id: 1,
    category: "Electronics",
    description: "Devices and gadgets for everyday use.",
    subCategories: [
      {
        subCategoryId: 1,
        subCategoryName: "Mobile Phones",
        products: [
          {
            productId: 1,
            productName: "iPhone 13",
            description: "Latest Apple smartphone.",
          },
          {
            productId: 2,
            productName: "Samsung Galaxy S21",
            description: "Flagship Samsung phone.",
          },
          {
            productId: 3,
            productName: "Google Pixel 6",
            description: "New Google phone with clean Android.",
          },
        ],
      },
      {
        subCategoryId: 2,
        subCategoryName: "Laptops",
        products: [
          {
            productId: 4,
            productName: "MacBook Pro",
            description: "High-performance laptop from Apple.",
          },
          {
            productId: 5,
            productName: "Dell XPS 13",
            description: "Ultra-thin laptop with a powerful processor.",
          },
          {
            productId: 6,
            productName: "HP Spectre x360",
            description: "Convertible laptop with touchscreen.",
          },
        ],
      },
      {
        subCategoryId: 3,
        subCategoryName: "Tablets",
        products: [
          {
            productId: 7,
            productName: "iPad Pro",
            description: "Powerful tablet with a large display.",
          },
          {
            productId: 8,
            productName: "Samsung Galaxy Tab S7",
            description: "Samsung's top Android tablet.",
          },
          {
            productId: 9,
            productName: "Amazon Fire HD 10",
            description: "Affordable tablet with Alexa.",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    category: "Furniture",
    description: "Home and office furniture solutions.",
    subCategories: [
      {
        subCategoryId: 4,
        subCategoryName: "Living Room",
        products: [
          {
            productId: 10,
            productName: "Sofa Set",
            description: "Comfortable 3-piece sofa set.",
          },
          {
            productId: 11,
            productName: "Coffee Table",
            description: "Wooden coffee table with storage.",
          },
          {
            productId: 12,
            productName: "TV Stand",
            description: "Modern TV stand with compartments.",
          },
        ],
      },
      {
        subCategoryId: 5,
        subCategoryName: "Bedroom",
        products: [
          {
            productId: 13,
            productName: "Queen Bed",
            description: "Spacious queen-size bed frame.",
          },
          {
            productId: 14,
            productName: "Dresser",
            description: "6-drawer dresser for storage.",
          },
          {
            productId: 15,
            productName: "Nightstand",
            description: "Bedside nightstand with drawer.",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    category: "Clothing",
    description: "Men's, women's, and children's apparel.",
    subCategories: [
      {
        subCategoryId: 6,
        subCategoryName: "Men's Clothing",
        products: [
          {
            productId: 16,
            productName: "T-Shirt",
            description: "Cotton T-shirt in various colors.",
          },
          {
            productId: 17,
            productName: "Jeans",
            description: "Slim-fit denim jeans.",
          },
          {
            productId: 18,
            productName: "Sweater",
            description: "Wool sweater for winter.",
          },
        ],
      },
      {
        subCategoryId: 7,
        subCategoryName: "Women's Clothing",
        products: [
          {
            productId: 19,
            productName: "Dress",
            description: "Elegant evening dress.",
          },
          {
            productId: 20,
            productName: "Blouse",
            description: "Casual blouse with floral print.",
          },
          {
            productId: 21,
            productName: "Skirt",
            description: "Knee-length skirt with pleats.",
          },
        ],
      },
      {
        subCategoryId: 8,
        subCategoryName: "Children's Clothing",
        products: [
          {
            productId: 22,
            productName: "Kids' T-Shirt",
            description: "Graphic T-shirt for kids.",
          },
          {
            productId: 23,
            productName: "Joggers",
            description: "Comfortable jogger pants for play.",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    category: "Books",
    description: "Fiction, non-fiction, and educational materials.",
    subCategories: [
      {
        subCategoryId: 9,
        subCategoryName: "Fiction",
        products: [
          {
            productId: 24,
            productName: "The Great Gatsby",
            description: "Classic American novel.",
          },
          {
            productId: 25,
            productName: "To Kill a Mockingbird",
            description: "Novel about social justice.",
          },
          {
            productId: 26,
            productName: "1984",
            description: "Dystopian novel by George Orwell.",
          },
        ],
      },
      {
        subCategoryId: 10,
        subCategoryName: "Non-Fiction",
        products: [
          {
            productId: 27,
            productName: "Sapiens",
            description: "A brief history of humankind.",
          },
          {
            productId: 28,
            productName: "Educated",
            description: "Memoir of a woman raised off the grid.",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    category: "Sports",
    description: "Equipment and apparel for various sports.",
    subCategories: [
      {
        subCategoryId: 11,
        subCategoryName: "Outdoor Sports",
        products: [
          {
            productId: 29,
            productName: "Football",
            description: "Standard size football.",
          },
          {
            productId: 30,
            productName: "Basketball",
            description: "Indoor/outdoor basketball.",
          },
        ],
      },
      {
        subCategoryId: 12,
        subCategoryName: "Gym Equipment",
        products: [
          {
            productId: 31,
            productName: "Dumbbell Set",
            description: "Adjustable dumbbell set.",
          },
          {
            productId: 32,
            productName: "Yoga Mat",
            description: "Non-slip yoga mat.",
          },
        ],
      },
    ],
  },
  //... continue adding up to 30 categories with similar structure
];

const BuyerCategoriesPage = () => {
  const navigate = useNavigate();

  const navigateToSubCategory = (id) => {
    navigate(`/subcategories/${id}`);
  };
  return (
    <>
      <div className="p-4">
        <h2 className="text-xl font-semibold">All Categories</h2>
        <div className="h-full overflow-y-auto flex justify-around flex-wrap gap-2 p-4">
          {sampleData.map((category) => (
            <div
              onClick={() => navigateToSubCategory(category.id)}
              className=" h-[120px] w-[340px] bg-slate-100 flex justify-between items-center p-2"
            >
              <img className="h-full aspect-[1/1] bg-slate-200"></img>
              <div className="w-full p-2 pt-0 h-full">
                <h3 className="text-lg font-semibold">{category.category}</h3>
                <p className="text-sm">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <PopularProducts />
      </div>
    </>
  );
};

export default BuyerCategoriesPage;
