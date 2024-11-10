import React from "react";

const MyProducts = () => {
  // Sample products data
  const products = [
    {
      productName: "Product 1",
      productImages: ["/images/product1.jpg", "/images/product2.jpg"],
      productPrice: 100,
      productQuantity: 10,
      productUnitType: "kg",
      productOverview: "This is a great product for all your needs.",
      productSpecifications: [
        { name: "Color", value: "Red" },
        { name: "Size", value: "Medium" },
      ],
    },
    {
      productName: "Product 2",
      productImages: ["/images/product3.jpg", "/images/product4.jpg"],
      productPrice: 200,
      productQuantity: 5,
      productUnitType: "ltr",
      productOverview: "A top-quality product for your satisfaction.",
      productSpecifications: [
        { name: "Material", value: "Plastic" },
        { name: "Color", value: "Blue" },
      ],
    },
    {
      productName: "Product 3",
      productImages: ["/images/product5.jpg", "/images/product6.jpg"],
      productPrice: 350,
      productQuantity: 15,
      productUnitType: "pcs",
      productOverview: "Durable and reliable for everyday use.",
      productSpecifications: [
        { name: "Material", value: "Steel" },
        { name: "Weight", value: "500g" },
      ],
    },
    {
      productName: "Product 4",
      productImages: ["/images/product7.jpg", "/images/product8.jpg"],
      productPrice: 80,
      productQuantity: 30,
      productUnitType: "kg",
      productOverview: "Affordable product for bulk purchases.",
      productSpecifications: [
        { name: "Flavour", value: "Vanilla" },
        { name: "Shelf Life", value: "12 months" },
      ],
    },
    {
      productName: "Product 5",
      productImages: ["/images/product9.jpg", "/images/product10.jpg"],
      productPrice: 450,
      productQuantity: 20,
      productUnitType: "ltr",
      productOverview: "Premium quality product with eco-friendly packaging.",
      productSpecifications: [
        { name: "Eco-friendly", value: "Yes" },
        { name: "Ingredients", value: "Natural" },
      ],
    },
    {
      productName: "Product 6",
      productImages: ["/images/product11.jpg", "/images/product12.jpg"],
      productPrice: 120,
      productQuantity: 25,
      productUnitType: "g",
      productOverview: "A perfect blend of taste and nutrition.",
      productSpecifications: [
        { name: "Taste", value: "Sweet" },
        { name: "Packaging", value: "Resealable Bag" },
      ],
    },
    {
      productName: "Product 7",
      productImages: ["/images/product13.jpg", "/images/product14.jpg"],
      productPrice: 250,
      productQuantity: 12,
      productUnitType: "kg",
      productOverview: "High quality for professional use.",
      productSpecifications: [
        { name: "Model", value: "ProX" },
        { name: "Power", value: "1500W" },
      ],
    },
    {
      productName: "Product 8",
      productImages: ["/images/product15.jpg", "/images/product16.jpg"],
      productPrice: 500,
      productQuantity: 8,
      productUnitType: "pcs",
      productOverview: "Luxury product with premium materials.",
      productSpecifications: [
        { name: "Material", value: "Gold Plated" },
        { name: "Size", value: "Large" },
      ],
    },
  ];

  return (
    <div className="container mx-auto p-6 h-full overflow-y-auto">
      <h1 className="text-3xl font-semibold text-center mb-6">My Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg border border-gray-300"
          >
            {/* Product Name */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {product.productName}
            </h2>

            {/* Product Images */}
            <div className="mb-4">
              <div className="flex space-x-4">
                {product.productImages.map((image, idx) => (
                  <img
                    key={idx}
                    src={image}
                    alt={`Product ${product.productName}`}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                ))}
              </div>
            </div>

            {/* Product Overview */}
            <p className="text-gray-600 mb-4">{product.productOverview}</p>

            {/* Product Specifications */}
            <div className="mb-4">
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                Specifications
              </h3>
              <ul className="list-disc pl-5 text-gray-600">
                {product.productSpecifications.map((spec, idx) => (
                  <li key={idx} className="mb-1">
                    <strong>{spec.name}:</strong> {spec.value}
                  </li>
                ))}
              </ul>
            </div>

            {/* Product Price & Quantity */}
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold text-green-600">
                ₹{product.productPrice} per {product.productUnitType}
              </span>
              <span className="text-sm text-gray-600">
                Quantity: {product.productQuantity}
              </span>
            </div>

            {/* Edit & Delete Buttons */}
            <div className="flex space-x-4">
              <button className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 w-full">
                Edit Product
              </button>
              <button className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-700 w-full">
                Delete Product
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProducts;
