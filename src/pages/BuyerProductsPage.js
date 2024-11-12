import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import RecentlyAddedProdcuts from "../components/BuyerComponents/ProductsPageComponents/RecentlyAddedProducts";
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

const products = [
  {
    id: 1,
    productName: "Wireless Bluetooth Headphones",
    productImages: [
      "https://example.com/images/headphone1.jpg",
      "https://example.com/images/headphone2.jpg",
    ],
    productPrice: 79.99,
    productQuantity: 150,
    productUnitType: "piece",
    productOverview:
      "High-quality wireless headphones with noise cancellation and long battery life.",
    productSpecifications: [
      {
        name: "Battery Life",
        value: "30 hours",
      },
      {
        name: "Noise Cancellation",
        value: "Active",
      },
      {
        name: "Bluetooth Version",
        value: "5.0",
      },
    ],
    user: "60c72b2f9e1e8c3b8c9c8f3d", // Sample User ObjectId
    categoryId: "60c72b2f9e1e8c3b8c9c8f4a", // Sample Category ObjectId
    subCategoryId: "60c72b2f9e1e8c3b8c9c8f5b", // Sample SubCategory ObjectId
  },
  {
    id: 2,
    productName: "Smart LED TV 55 Inch",
    productImages: [
      "https://example.com/images/tv1.jpg",
      "https://example.com/images/tv2.jpg",
    ],
    productPrice: 499.99,
    productQuantity: 50,
    productUnitType: "piece",
    productOverview:
      "Smart 4K LED TV with HDR support and multiple streaming apps pre-installed.",
    productSpecifications: [
      {
        name: "Resolution",
        value: "4K UHD",
      },
      {
        name: "Screen Size",
        value: "55 inches",
      },
      {
        name: "Smart OS",
        value: "WebOS",
      },
    ],
    user: "60c72b2f9e1e8c3b8c9c8f3d", // Sample User ObjectId
    categoryId: "60c72b2f9e1e8c3b8c9c8f4a", // Sample Category ObjectId
    subCategoryId: "60c72b2f9e1e8c3b8c9c8f5b", // Sample SubCategory ObjectId
  },
  {
    id: 3,
    productName: "Electric Kettle",
    productImages: [
      "https://example.com/images/kettle1.jpg",
      "https://example.com/images/kettle2.jpg",
    ],
    productPrice: 29.99,
    productQuantity: 200,
    productUnitType: "piece",
    productOverview:
      "Electric kettle with 1.5L capacity and automatic shut-off feature.",
    productSpecifications: [
      {
        name: "Capacity",
        value: "1.5 liters",
      },
      {
        name: "Power",
        value: "1500 watts",
      },
      {
        name: "Material",
        value: "Stainless Steel",
      },
    ],
    user: "60c72b2f9e1e8c3b8c9c8f3d", // Sample User ObjectId
    categoryId: "60c72b2f9e1e8c3b8c9c8f4a", // Sample Category ObjectId
    subCategoryId: "60c72b2f9e1e8c3b8c9c8f5b", // Sample SubCategory ObjectId
  },
];

const BuyerProductsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const categoryId = searchParams.get("categoryId");
  const subCategoryId = searchParams.get("subCategoryId");

  const subCategoryName = sampleData
    .find((category) => category.id === Number(categoryId))
    .subCategories.find(
      (subCategory) => subCategory.subCategoryId === Number(subCategoryId)
    ).subCategoryName;

  // const products = sampleData
  //   .find((category) => category.id === Number(categoryId))
  //   .subCategories.find(
  //     (subCategory) => subCategory.subCategoryId === Number(subCategoryId)
  //   ).products;

  const navigateToDetailedProduct = (productId) => {
    navigate(`/product/${productId}`);
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold">{subCategoryName}</h2>
      <div>
        {products.map((product) => (
          <div className="flex border border-gray-200 rounded-lg shadow-lg w-full max-w-4xl mx-auto my-4">
          {/* Product Image on the Left */}
          <div className="w-1/3 h-64 overflow-hidden rounded-l-lg">
            <img
              src={product.productImages[0]}
              alt={product.productName}
              className="w-full h-full object-cover"
            />
          </div>
    
          {/* Product Details on the Right */}
          <div className="w-2/3 p-6 flex flex-col justify-between">
            {/* Product Name and Overview */}
            <div>
              <h2 onClick={()=>navigateToDetailedProduct(product.id)} className="text-2xl font-semibold text-gray-800">{product.productName}</h2>
              <p className="text-sm text-gray-600 mt-2">{product.productOverview}</p>
            </div>
    
            {/* Product Price and Availability */}
            <div className="mt-4">
              <p className="text-xl font-bold text-blue-600">${product.productPrice.toFixed(2)}</p>
              <p className="text-sm text-gray-500 mt-1">
                Available: {product.productQuantity} {product.productUnitType}(s)
              </p>
            </div>
    
            {/* Product Specifications */}
            <ul className="text-sm text-gray-700 mt-4 space-y-1">
              {product.productSpecifications.map((spec, index) => (
                <li key={index} className="flex">
                  <strong className="mr-2">{spec.name}:</strong>
                  <span>{spec.value}</span>
                </li>
              ))}
            </ul>
    
            {/* Send Inquiry Button */}
            <button className="mt-6 bg-blue-600 text-white py-2 px-4 rounded font-semibold hover:bg-blue-700 self-start">
              Send Inquiry
            </button>
          </div>
        </div>
        ))}
      </div>
      <div className="p-4">
        <RecentlyAddedProdcuts />
      </div>
      <div className="flex justify-center">
        <PopularProducts />
      </div>
    </div>
  );
};

export default BuyerProductsPage;
