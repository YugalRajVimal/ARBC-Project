// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const MyProducts = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch products from the server
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get(
//           `${process.env.REACT_APP_API_URL}/product/get-seller-products`,
//           {
//             headers: {
//               Authorization: `${localStorage.getItem("token")}`,
//             },
//           }
//         );
//         setProducts(response.data); // Assuming response.data is the array of products
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//         setError("Failed to load products");
//         setLoading(false);
//       }
//     };
//     fetchProducts();
//   }, []);

//   const handleDeleteProduct = async (productId) => {
//     try {
//       const response = await axios.delete(
//         `${process.env.REACT_APP_API_URL}/product/delete-product/${productId}`,
//         {
//           headers: {
//             Authorization: `${localStorage.getItem("token")}`,
//           },
//         }
//       );
//       alert("Product deleted successfully");
//       // Remove the deleted product from the state
//       setProducts((prevProducts) =>
//         prevProducts.filter((product) => product._id !== productId)
//       );
//     } catch (error) {
//       console.error("Error deleting product:", error);
//     }
//   };

//   if (loading) {
//     return <div className="text-center text-2xl p-6">Loading...</div>;
//   }

//   if (error) {
//     return <div className="text-center text-red-500 text-2xl p-6">{error}</div>;
//   }

//   return (
//     <div className="container mx-auto p-6 h-full overflow-y-auto">
//       <h1 className="text-3xl font-semibold text-center mb-6">My Products</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {products.map((product, index) => (
//           <div
//             key={index}
//             className="bg-white p-4 rounded-lg shadow-md border border-gray-300 flex flex-col justify-between"
//           >
//             {/* Product Name */}
//             <h2 className="text-xl font-semibold text-gray-800 mb-2">
//               {product.productName}
//             </h2>

//             {/* Product Images */}
//             <div className="mb-3">
//               <div className="flex space-x-2">
//                 {product.productImages.slice(0, 3).map((image, idx) => (
//                   <img
//                     key={idx}
//                     src={image}
//                     alt={`Product ${product.productName}`}
//                     className="w-16 h-16 object-cover rounded-lg"
//                   />
//                 ))}
//               </div>
//             </div>

//             {/* Product Overview */}
//             <p className="text-gray-600 mb-3 text-sm line-clamp-2">
//               {product.productOverview}
//             </p>

//             {/* Product Specifications (Compact View) */}
//             <div className="mb-3">
//               <h3 className="text-md font-medium text-gray-800 mb-1">
//                 Specifications
//               </h3>
//               <div className="flex flex-wrap text-gray-600 text-sm">
//                 {product.productSpecifications.map((spec, idx) => (
//                   <span key={idx} className="mr-2">
//                     <strong>{spec.name}:</strong> {spec.value}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             {/* Product Price & Quantity */}
//             <div className="flex justify-between items-center mb-3">
//               <span className="text-lg font-semibold text-green-600">
//                 ₹{product.productPrice} per {product.productUnitType}
//               </span>
//               <span className="text-sm text-gray-600">
//                 Qty: {product.productQuantity}
//               </span>
//             </div>

//             {/* Edit & Delete Buttons */}
//             <div className="flex justify-around space-x-2">
//               <button className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 w-full text-sm">
//                 Edit
//               </button>
//               <button
//                 onClick={() => handleDeleteProduct(product._id)}
//                 className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-700 w-full text-sm"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MyProducts;

import React, { useEffect, useState } from "react";
import axios from "axios";

const MyProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  // Fetch products from the server
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/product/get-seller-products`,
          {
            headers: {
              Authorization: `${localStorage.getItem("token")}`,
            },
          }
        );
        setProducts(response.data); // Assuming response.data is the array of products
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Failed to load products");
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleDeleteProduct = async (productId) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_API_URL}/product/delete-product/${productId}`,
        {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
        }
      );
      alert("Product deleted successfully");
      // Remove the deleted product from the state
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product._id !== productId)
      );
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleEditProduct = (product) => {
    setCurrentProduct(product);
    setIsEditMode(true);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/product/update-product/${currentProduct._id}`,
        currentProduct,
        {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
        }
      );
      alert("Product updated successfully");

      // Update the product in the state
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product._id === currentProduct._id ? response.data : product
        )
      );
      setIsEditMode(false); // Close the form
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const handleAddSpecification = () => {
    setCurrentProduct({
      ...currentProduct,
      productSpecifications: [
        ...currentProduct.productSpecifications,
        { name: "", value: "" },
      ],
    });
  };

  const handleRemoveSpecification = (index) => {
    setCurrentProduct({
      ...currentProduct,
      productSpecifications: currentProduct.productSpecifications.filter(
        (_, idx) => idx !== index
      ),
    });
  };

  if (loading) {
    return <div className="text-center text-2xl p-6">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 text-2xl p-6">{error}</div>;
  }

  return (
    <div className="container mx-auto p-6 h-full overflow-y-auto">
      <h1 className="text-3xl font-semibold text-center mb-6">My Products</h1>
      {isEditMode ? (
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Edit Product</h2>
          <form onSubmit={handleFormSubmit}>
            {/* Product Name */}
            <div className="mb-4">
              <label className="block text-gray-700">Product Name</label>
              <input
                type="text"
                value={currentProduct.productName}
                onChange={(e) =>
                  setCurrentProduct({
                    ...currentProduct,
                    productName: e.target.value,
                  })
                }
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            {/* Product Unit Type */}
            <div className="mb-4">
              <label className="block text-gray-700">Unit Type</label>
              <input
                type="text"
                value={currentProduct.productUnitType}
                onChange={(e) =>
                  setCurrentProduct({
                    ...currentProduct,
                    productUnitType: e.target.value,
                  })
                }
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            {/* Product Overview */}
            <div className="mb-4">
              <label className="block text-gray-700">Overview</label>
              <textarea
                value={currentProduct.productOverview}
                onChange={(e) =>
                  setCurrentProduct({
                    ...currentProduct,
                    productOverview: e.target.value,
                  })
                }
                className="w-full p-2 border border-gray-300 rounded"
                rows="4"
                required
              />
            </div>

            {/* Product Price */}
            <div className="mb-4">
              <label className="block text-gray-700">Price</label>
              <input
                type="number"
                value={currentProduct.productPrice}
                onChange={(e) =>
                  setCurrentProduct({
                    ...currentProduct,
                    productPrice: e.target.value,
                  })
                }
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            {/* Product Quantity */}
            <div className="mb-4">
              <label className="block text-gray-700">Quantity</label>
              <input
                type="number"
                value={currentProduct.productQuantity}
                onChange={(e) =>
                  setCurrentProduct({
                    ...currentProduct,
                    productQuantity: e.target.value,
                  })
                }
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            {/* Product Specifications */}
            <div className="mb-4">
              <label className="block text-gray-700">Specifications</label>
              {currentProduct.productSpecifications.map((spec, idx) => (
                <div key={idx} className="flex space-x-4 mb-2">
                  <input
                    type="text"
                    value={spec.name}
                    onChange={(e) =>
                      setCurrentProduct({
                        ...currentProduct,
                        productSpecifications:
                          currentProduct.productSpecifications.map((s, i) =>
                            i === idx ? { ...s, name: e.target.value } : s
                          ),
                      })
                    }
                    className="w-1/2 p-2 border border-gray-300 rounded"
                    placeholder="Specification Name"
                  />
                  <input
                    type="text"
                    value={spec.value}
                    onChange={(e) =>
                      setCurrentProduct({
                        ...currentProduct,
                        productSpecifications:
                          currentProduct.productSpecifications.map((s, i) =>
                            i === idx ? { ...s, value: e.target.value } : s
                          ),
                      })
                    }
                    className="w-1/2 p-2 border border-gray-300 rounded"
                    placeholder="Specification Value"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveSpecification(idx)}
                    className="p-2 bg-red-500 text-white rounded"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={handleAddSpecification}
                className="p-2 bg-green-500 text-white rounded mt-2"
              >
                Add Specification
              </button>
            </div>

            <button
              type="submit"
              className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
            >
              Save Changes
            </button>
          </form>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md border border-gray-300 flex flex-col justify-between "
            >
              {/* Product Name */}
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {product.productName}
              </h2>

              {/* Product Images */}
              <div className="flex space-x-2 mb-3 overflow-x-auto">
                {product.productImages?.slice(0, 3).map((image, idx) => (
                  <img
                    key={idx}
                    src={process.env.REACT_APP_API_URL + "/" + image}
                    alt={`Product ${product.productName}`}
                    className="w-30 h-40 object-cover rounded-lg"
                  />
                ))}
              </div>

              {/* Product Overview */}
              <p className="text-gray-600 mb-3 text-sm line-clamp-2">
                {product.productOverview}
              </p>

              {/* Product Specifications */}
              <div className="mb-3">
                <p className="text-md font-medium text-gray-700">
                  Specifications:
                </p>
                {product.productSpecifications &&
                product.productSpecifications.length > 0 ? (
                  <ul className="list-disc pl-5 text-sm">
                    {product.productSpecifications.map((spec, idx) => (
                      <li key={idx} className="text-gray-600">
                        {spec.name}: {spec.value}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-600">No specifications available.</p>
                )}
              </div>

              {/* Product Price and Quantity */}
              <div className="mb-3">
                <h3 className="text-md font-medium text-gray-700">
                  Price: ${product.productPrice} / {product.productUnitType}
                </h3>
                <p className="text-md font-medium text-gray-700">
                  Quantity: {product.productQuantity} (Total Quantity:{" "}
                  {product.totalQuantity})
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 justify-end">
                <button
                  onClick={() => handleEditProduct(product)}
                  className="p-2 bg-yellow-500 text-white rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteProduct(product._id)}
                  className="p-2 bg-red-500 text-white rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyProducts;
