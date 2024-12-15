// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const MyProducts = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isEditMode, setIsEditMode] = useState(false);
//   const [currentProduct, setCurrentProduct] = useState(null);
//   const [status, setStatus] = useState("");

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
//       await axios.delete(
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

//   const handleEditProduct = (product) => {
//     setCurrentProduct(product);
//     setIsEditMode(true);
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.put(
//         `${process.env.REACT_APP_API_URL}/product/update-product/${currentProduct._id}`,
//         {
//           ...currentProduct,
//           status, // include status in the update request
//         },
//         {
//           headers: {
//             Authorization: `${localStorage.getItem("token")}`,
//           },
//         }
//       );
//       alert("Product updated successfully");

//       setProducts((prevProducts) =>
//         prevProducts.map((product) =>
//           product._id === currentProduct._id ? response.data.product : product
//         )
//       );
//       setIsEditMode(false); // Close the form
//     } catch (error) {
//       console.error("Error updating product:", error);
//     }
//   };

//   const handleAddSpecification = () => {
//     setCurrentProduct({
//       ...currentProduct,
//       productSpecifications: [
//         ...currentProduct.productSpecifications,
//         { name: "", value: "" },
//       ],
//     });
//   };

//   const handleRemoveSpecification = (index) => {
//     setCurrentProduct({
//       ...currentProduct,
//       productSpecifications: currentProduct.productSpecifications.filter(
//         (_, idx) => idx !== index
//       ),
//     });
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
//       {isEditMode ? (
//         <div className="p-6 bg-white rounded-lg shadow-lg">
//           <h2 className="text-2xl font-semibold mb-4">Edit Product</h2>
//           <form onSubmit={handleFormSubmit}>
//             {/* Product Name */}
//             <div className="mb-4">
//               <label className="block text-gray-700">Product Name</label>
//               <input
//                 type="text"
//                 value={currentProduct.productName}
//                 onChange={(e) =>
//                   setCurrentProduct({
//                     ...currentProduct,
//                     productName: e.target.value,
//                   })
//                 }
//                 className="w-full p-2 border border-gray-300 rounded"
//                 required
//               />
//             </div>

//             {/* Product Unit Type */}
//             <div className="mb-4">
//               <label className="block text-gray-700">Unit Type</label>
//               <input
//                 type="text"
//                 value={currentProduct.productUnitType}
//                 onChange={(e) =>
//                   setCurrentProduct({
//                     ...currentProduct,
//                     productUnitType: e.target.value,
//                   })
//                 }
//                 className="w-full p-2 border border-gray-300 rounded"
//                 required
//               />
//             </div>

//             {/* Product Overview */}
//             <div className="mb-4">
//               <label className="block text-gray-700">Overview</label>
//               <textarea
//                 value={currentProduct.productOverview}
//                 onChange={(e) =>
//                   setCurrentProduct({
//                     ...currentProduct,
//                     productOverview: e.target.value,
//                   })
//                 }
//                 className="w-full p-2 border border-gray-300 rounded"
//                 rows="4"
//                 required
//               />
//             </div>

//             {/* Product Price */}
//             <div className="mb-4">
//               <label className="block text-gray-700">Price</label>
//               <input
//                 type="number"
//                 value={currentProduct.productPrice}
//                 onChange={(e) =>
//                   setCurrentProduct({
//                     ...currentProduct,
//                     productPrice: e.target.value,
//                   })
//                 }
//                 className="w-full p-2 border border-gray-300 rounded"
//                 required
//               />
//             </div>

//             {/* Product Quantity */}
//             <div className="mb-4">
//               <label className="block text-gray-700">Quantity</label>
//               <input
//                 type="number"
//                 value={currentProduct.productQuantity}
//                 onChange={(e) =>
//                   setCurrentProduct({
//                     ...currentProduct,
//                     productQuantity: e.target.value,
//                   })
//                 }
//                 className="w-full p-2 border border-gray-300 rounded"
//                 required
//               />
//             </div>

//             {/* Product Status Dropdown */}
//             <div className="mb-4">
//               <label className="block text-gray-700">Status</label>
//               <select
//                 value={status}
//                 onChange={(e) => setStatus(e.target.value)}
//                 className="w-full p-2 border border-gray-300 rounded"
//                 required
//               >
//                 <option value="">Select Status</option>
//                 <option value="available">Available</option>
//                 <option value="comingsoon">Coming Soon</option>
//                 <option value="outofstock">Out of Stock</option>
//               </select>
//             </div>

//             {/* Product Specifications */}
//             <div className="mb-4">
//               <label className="block text-gray-700">Specifications</label>
//               {currentProduct.productSpecifications.map((spec, idx) => (
//                 <div key={idx} className="flex space-x-4 mb-2">
//                   <input
//                     type="text"
//                     value={spec.name}
//                     onChange={(e) =>
//                       setCurrentProduct({
//                         ...currentProduct,
//                         productSpecifications:
//                           currentProduct.productSpecifications.map((s, i) =>
//                             i === idx ? { ...s, name: e.target.value } : s
//                           ),
//                       })
//                     }
//                     className="w-1/2 p-2 border border-gray-300 rounded"
//                     placeholder="Specification Name"
//                   />
//                   <input
//                     type="text"
//                     value={spec.value}
//                     onChange={(e) =>
//                       setCurrentProduct({
//                         ...currentProduct,
//                         productSpecifications:
//                           currentProduct.productSpecifications.map((s, i) =>
//                             i === idx ? { ...s, value: e.target.value } : s
//                           ),
//                       })
//                     }
//                     className="w-1/2 p-2 border border-gray-300 rounded"
//                     placeholder="Specification Value"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => handleRemoveSpecification(idx)}
//                     className="p-2 bg-red-500 text-white rounded"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               ))}
//               <button
//                 type="button"
//                 onClick={handleAddSpecification}
//                 className="p-2 bg-green-500 text-white rounded mt-2"
//               >
//                 Add Specification
//               </button>
//             </div>

//             <button
//               type="submit"
//               className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
//             >
//               Save Changes
//             </button>
//           </form>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {products.map((product, index) => (
//             <div
//               key={index}
//               className="bg-white p-4 rounded-lg shadow-md border border-gray-300 flex flex-col justify-between "
//             >
//               {/* Product Name */}
//               <h2 className="text-xl font-semibold text-gray-800 mb-2">
//                 {product.productName}
//               </h2>

//               {/* Product Images */}
//               <div className="flex space-x-2 mb-3 overflow-x-auto">
//                 {product.productImages?.slice(0, 3).map((image, idx) => (
//                   <img
//                     key={idx}
//                     src={process.env.REACT_APP_API_URL + "/" + image}
//                     alt={`Product ${product.productName}`}
//                     className="w-30 h-40 object-cover rounded-lg"
//                   />
//                 ))}
//               </div>

//               {/* Product Overview */}
//               <p className="text-gray-600 mb-3 text-sm line-clamp-2">
//                 {product.productOverview}
//               </p>

//               {/* Product Specifications */}
//               <div className="mb-3">
//                 <p className="text-md font-medium text-gray-700">
//                   Specifications:
//                 </p>
//                 {product.productSpecifications &&
//                 product.productSpecifications.length > 0 ? (
//                   <ul className="list-disc pl-5 text-sm">
//                     {product.productSpecifications.map((spec, idx) => (
//                       <li key={idx} className="text-gray-600">
//                         {spec.name}: {spec.value}
//                       </li>
//                     ))}
//                   </ul>
//                 ) : (
//                   <p className="text-gray-600">No specifications available.</p>
//                 )}
//               </div>

//               {/* Product Price and Quantity */}
//               <div className="mb-3">
//                 <h3 className="text-md font-medium text-gray-700">
//                   Price: ${product.productPrice} / {product.productUnitType}
//                 </h3>
//                 <p className="text-md font-medium text-gray-700">
//                   Quantity: {product.productQuantity} (Total Quantity:{" "}
//                   {product.totalQuantity})
//                 </p>
//                 <p>
//                   Status:{product.status === "available" && "Available" }
//                   {product.status === "comingsoon" && "Coming Soon" }
//                   {product.status === "outofstock" && "Out of Stock" }

//                 </p>
//               </div>

//               {/* Action Buttons */}
//               <div className="flex gap-2 justify-end">
//                 <button
//                   onClick={() => handleEditProduct(product)}
//                   className="p-2 bg-yellow-500 text-white rounded"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => handleDeleteProduct(product._id)}
//                   className="p-2 bg-red-500 text-white rounded"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
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
  const [status, setStatus] = useState("");

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
        {
          ...currentProduct,
          status, // include status in the update request
        },
        {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
        }
      );
      alert("Product updated successfully");

      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product._id === currentProduct._id ? response.data.product : product
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

            {/* Min Order Quantity */}
            <div className="mb-4">
              <label className="block text-gray-700">Minimum Order Quantity</label>
              <input
                type="number"
                value={currentProduct.minOrderQuantity}
                onChange={(e) =>
                  setCurrentProduct({
                    ...currentProduct,
                    minOrderQuantity: e.target.value,
                  })
                }
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            {/* Youtube Link */}
            <div className="mb-4">
              <label className="block text-gray-700">YouTube Link</label>
              <input
                type="url"
                value={currentProduct.youtubeLink || ""}
                onChange={(e) =>
                  setCurrentProduct({
                    ...currentProduct,
                    youtubeLink: e.target.value,
                  })
                }
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            {/* Product Status Dropdown */}
            <div className="mb-4">
              <label className="block text-gray-700">Status</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                required
              >
                <option value="">Select Status</option>
                <option value="available">Available</option>
                <option value="comingsoon">Coming Soon</option>
                <option value="outofstock">Out of Stock</option>
              </select>
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
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold">{product.productName}</h3>
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
              <p className="text-gray-700">{product.productOverview}</p>
              <p className="font-semibold">Price: ₹{product.productPrice} / {product.productUnitType}</p>
              <p className="font-semibold">
                Total Available Quantity: {product.productQuantity} {product.productUnitType}
              </p>
              <p className="font-semibold">
                Minimum OrderQuantity: {product.minOrderQuantity} {product.productUnitType}
              </p>
              <div className="flex space-x-4 mt-4">
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
