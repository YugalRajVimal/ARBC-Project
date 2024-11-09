import React, { useState } from "react";

const AddNewProduct = () => {
  const [productDetails, setProductDetails] = useState({
    productName: "",
    productImages: [],
    productPrice: "",
    productQuantity: "",
    productUnitType: "",
    productOverview: "",
    productSpecifications: [{ name: "", value: "" }],
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductDetails({
      ...productDetails,
      [name]: value,
    });
  };

  // Handle specification change (name, value)
  const handleSpecificationChange = (index, e) => {
    const { name, value } = e.target;
    const newSpecifications = [...productDetails.productSpecifications];
    newSpecifications[index][name] = value;
    setProductDetails({
      ...productDetails,
      productSpecifications: newSpecifications,
    });
  };

  // Add more specification fields
  const addSpecificationField = () => {
    setProductDetails({
      ...productDetails,
      productSpecifications: [
        ...productDetails.productSpecifications,
        { name: "", value: "" },
      ],
    });
  };

  // Remove specification field
  const removeSpecificationField = (index) => {
    const newSpecifications = productDetails.productSpecifications.filter(
      (_, i) => i !== index
    );
    setProductDetails({
      ...productDetails,
      productSpecifications: newSpecifications,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission (e.g., API call to save product details)
    console.log(productDetails);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold text-center mb-6">Add Product</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg border border-gray-300"
      >
        {/* Product Name */}
        <div className="mb-4">
          <label
            htmlFor="productName"
            className="block text-lg font-medium text-gray-700"
          >
            Product Name
          </label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={productDetails.productName}
            onChange={handleChange}
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
            required
          />
        </div>

        {/* Product Images */}
        <div className="mb-4">
          <label
            htmlFor="productImages"
            className="block text-lg font-medium text-gray-700"
          >
            Product Images
          </label>
          <input
            type="file"
            id="productImages"
            name="productImages"
            accept="image/*"
            onChange={(e) =>
              setProductDetails({
                ...productDetails,
                productImages: e.target.files,
              })
            }
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
            multiple
          />
        </div>

        {/* Product Price per Unit */}
        <div className="mb-4">
          <label
            htmlFor="productPrice"
            className="block text-lg font-medium text-gray-700"
          >
            Product Price per Unit
          </label>
          <input
            type="number"
            id="productPrice"
            name="productPrice"
            value={productDetails.productPrice}
            onChange={handleChange}
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
            required
          />
        </div>

        {/* Product Quantity */}
        <div className="mb-4">
          <label
            htmlFor="productQuantity"
            className="block text-lg font-medium text-gray-700"
          >
            Product Quantity
          </label>
          <input
            type="number"
            id="productQuantity"
            name="productQuantity"
            value={productDetails.productQuantity}
            onChange={handleChange}
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
            required
          />
        </div>

        {/* Product Unit Type */}
        <div className="mb-4">
          <label
            htmlFor="productUnitType"
            className="block text-lg font-medium text-gray-700"
          >
            Product Unit Type
          </label>
          <input
            type="text"
            id="productUnitType"
            name="productUnitType"
            value={productDetails.productUnitType}
            onChange={handleChange}
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
            required
          />
        </div>

        {/* Product Overview */}
        <div className="mb-4">
          <label
            htmlFor="productOverview"
            className="block text-lg font-medium text-gray-700"
          >
            Product Overview
          </label>
          <textarea
            id="productOverview"
            name="productOverview"
            value={productDetails.productOverview}
            onChange={handleChange}
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
            required
          />
        </div>

        {/* Product Specifications */}
        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-700">
            Product Specifications
          </label>
          {productDetails.productSpecifications.map((specification, index) => (
            <div key={index} className="flex space-x-4 mb-4">
              <input
                type="text"
                name="name"
                value={specification.name}
                onChange={(e) => handleSpecificationChange(index, e)}
                placeholder="Specification Name"
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
              <input
                type="text"
                name="value"
                value={specification.value}
                onChange={(e) => handleSpecificationChange(index, e)}
                placeholder="Specification Value"
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
              <button
                type="button"
                onClick={() => removeSpecificationField(index)}
                className="p-3 bg-red-500 text-white rounded-lg hover:bg-red-700"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addSpecificationField}
            className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 mb-4"
          >
            Add Specification
          </button>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-3 bg-green-500 text-white rounded-lg hover:bg-green-700"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddNewProduct;
