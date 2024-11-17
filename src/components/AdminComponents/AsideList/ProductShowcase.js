import React, { useEffect, useState } from "react";
import {
  addAsideListItem,
  deleteAsideListItems,
  getAsideListItems,
  getAllPopulatedCategories,
} from "../../../api/AdminAPI/adminAPI";

const ProductShowcase = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  const [allCategories, setAllCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);

  const handleCategoryChange = (e) => {
    const categoryId = e.target.value;
    const category = allCategories.find((cat) => cat._id === categoryId);
    setSelectedCategory(category);
    setSelectedSubCategory(null); // Reset subcategory selection
  };

  const handleSubCategoryChange = (e) => {
    const subCategoryId = e.target.value;
    const subCategory = selectedCategory.subCategories.find(
      (sub) => sub._id === subCategoryId
    );
    setSelectedSubCategory(subCategory);
  };

  useEffect(() => {
    fetchFeaturedProducts();
    fetchPopulatedCategories();
  }, []);

  const fetchPopulatedCategories = async () => {
    const data = await getAllPopulatedCategories();
    if (data) setAllCategories(data);
  };

  const fetchFeaturedProducts = async () => {
    const data = await getAsideListItems(4); // ID 0 for top categories
    console.log("===", data);
    if (data) setFeaturedProducts(data[0].products);
    console.log(featuredProducts);
  };

  const addFeaturedProducts = async (productId) => {
    console.log("add", productId);
    const data = { id: 4, categoryId: null, productId: productId };
    const result = await addAsideListItem(data);
    if (result && result.status === 200) {
      fetchFeaturedProducts();
    }
  };

  const deleteFeaturedProducts = async (productId) => {
    console.log("delete", productId);
    const data = { id: 4, categoryId: null, productId: productId };
    const result = await deleteAsideListItems(data);
    if (result && result.status === 200) {
      fetchFeaturedProducts();
    }
  };

  return (
    <div className="h-full overflow-y-auto">
      <div className="container mx-auto p-6">
        <div className="mb-10">
          {/* Featured Products Title */}
          <h2 className="text-2xl font-bold mb-4">Products Showcase</h2>

          {/* Product List */}
          <div className="flex w-full overflow-x-auto gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product._id}
                className="w-[200px] bg-white shadow-lg border rounded-md p-4 relative pb-[68px]"
              >
                {/* Product Image */}
                <img
                  src={
                    process.env.REACT_APP_API_URL +
                    "/" +
                    product.productImages[0]
                  }
                  alt={product.productName}
                  className="w-full h-40 object-cover rounded-md"
                />

                {/* Product Details */}
                <h3 className="text-lg font-medium mt-2">
                  {product.productName}
                </h3>
                <p className="text-sm text-gray-600">
                  {product.productOverview}
                </p>

                {/* Price and Status */}
                <div className="mt-2 flex justify-between items-center">
                  <p className="text-sm font-bold text-blue-500">
                    ₹{product.productPrice}
                  </p>
                  <span
                    className={`text-xs font-semibold py-1 px-2 rounded-md ${
                      product.status === "available"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {product.status}
                  </span>
                </div>

                {/* Specifications */}
                <div className="mt-3">
                  <h4 className="text-sm font-semibold mb-1">
                    Specifications:
                  </h4>
                  <ul className="text-xs text-gray-600 list-disc list-inside">
                    {product.productSpecifications.map((spec) => (
                      <li key={spec._id}>
                        {spec.name}: {spec.value}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="mt-4 flex gap-4 absolute bottom-[4px] left-0 w-full justify-center  h-[60px]">
                  <button
                    onClick={() => deleteFeaturedProducts(product._id)}
                    className="bg-red-500 text-white px-2 py-1 rounded-md"
                  >
                    Remove from Featured
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto p-4">
        <h1 className="text-xl font-bold mb-4">Product Selector</h1>
        {/* Category Dropdown */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Select Category
          </label>
          <select
            className="block w-full border border-gray-300 rounded-md shadow-sm p-2"
            onChange={handleCategoryChange}
          >
            <option value="">Select a Category</option>
            {allCategories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* Subcategory Dropdown */}
        {selectedCategory && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Subcategory
            </label>
            <select
              className="block w-full border border-gray-300 rounded-md shadow-sm p-2"
              onChange={handleSubCategoryChange}
            >
              <option value="">Select a Subcategory</option>
              {selectedCategory.subCategories.map((subCategory) => (
                <option key={subCategory._id} value={subCategory._id}>
                  {subCategory.name}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Products Display */}
        {selectedSubCategory && (
          <div className="flex gap-4 overflow-x-auto w-full">
            {selectedSubCategory.products.map((product) => (
              <div
                key={product._id}
                className="bg-white w-[200px] border border-gray-200 rounded-md shadow-sm p-4"
              >
                <img
                  src={
                    process.env.REACT_APP_API_URL +
                    "/" +
                    product.productImages[0]
                  }
                  alt={product.productName}
                  className="w-full h-32 object-contain rounded-md"
                />
                <h3 className="text-sm font-medium mt-2">
                  {product.productName}
                </h3>
                <p className="text-sm text-gray-500">₹{product.productPrice}</p>
                <span
                  className={`text-xs font-semibold ${
                    product.status === "available"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {product.status}
                </span>
                <button
                  onClick={() => addFeaturedProducts(product._id)}
                  className="bg-blue-500 text-white px-2 py-1 rounded-md mt-2"
                >
                  Add to Featured Products
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductShowcase;
