// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const AddNewProduct = () => {
//   const [productDetails, setProductDetails] = useState({
//     categoryId: "",
//     subcategoryId: "",
//     productName: "",
//     productImages: [],
//     productPrice: "",
//     productQuantity: "",
//     productUnitType: "",
//     productOverview: "",
//     productSpecifications: [{ name: "", value: "" }],
//   });

//   const [categories, setCategories] = useState([]);
//   const [subcategories, setSubcategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [selectedSubcategory, setSelectedSubcategory] = useState("");

//   useEffect(() => {
//     // Fetch categories
//     axios
//       .get(`${process.env.REACT_APP_API_URL}/category/get-all-categories`)
//       .then((response) => {
//         setCategories(response.data);
//         if (response.data.length > 0) {
//           console.log("Default Category:", response);
//           const defaultCategory = response.data[0]._id;
//           const defaultSubcategory = response.data[0].subCategories[0];

//           setSelectedCategory(defaultCategory);
//           setSelectedSubcategory(defaultSubcategory._id);
//           console.log("Default Subcategory:", selectedSubcategory);
//           console.log("Default Category:", selectedCategory);
//         }
//       })
//       .catch((error) => console.error("Error fetching categories:", error));
//   }, []);

//   useEffect(() => {
//     if (selectedCategory) {
//       axios
//         .get(
//           `${process.env.REACT_APP_API_URL}/category/get-all-sub-categories/${selectedCategory}`
//         )
//         .then((response) => {
//           setSubcategories(response.data.subCategories);
//           if (response.data.subCategories.length > 0) {
//             setSelectedSubcategory(response.data.subCategories[0]._id);
//           }
//         })
//         .catch((error) =>
//           console.error("Error fetching subcategories:", error)
//         );
//     }
//   }, [selectedCategory]);

//   const handleCategoryChange = (categoryId) => {
//     setSelectedCategory(categoryId);
//     console.log("Category changed:", selectedCategory);
//     // FInd Subcategory and set defaultmsubcategory for category

//     const defaultSubcategory = categories.find(
//       (category) => category._id === categoryId
//     ).subCategories[0];

//     if (!defaultSubcategory) return;

//     setSelectedSubcategory(defaultSubcategory._id);
//     console.log("Default Subcategory:", selectedSubcategory);
//   };

//   const handleSubcategoryChange = (subcategoryId) => {
//     setSelectedSubcategory(subcategoryId);
//     console.log("Subcategory changed:", selectedSubcategory);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProductDetails({
//       ...productDetails,
//       [name]: value,
//     });
//   };

//   const handleImageChange = (e) => {
//     setProductDetails({
//       ...productDetails,
//       productImages: Array.from(e.target.files), // Store array of files
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("categoryId", selectedCategory);
//     formData.append("subcategoryId", selectedSubcategory);
//     formData.append("productName", productDetails.productName);
//     formData.append("productPrice", productDetails.productPrice);
//     formData.append("productQuantity", productDetails.productQuantity);
//     formData.append("productUnitType", productDetails.productUnitType);
//     formData.append("productOverview", productDetails.productOverview);

//     // Append each image file to FormData
//     productDetails.productImages.forEach((image) => {
//       formData.append("productImages", image);
//     });

//     // Append specifications
//     productDetails.productSpecifications.forEach((spec, index) => {
//       formData.append(`productSpecifications[${index}][name]`, spec.name);
//       formData.append(`productSpecifications[${index}][value]`, spec.value);
//     });

//     try {
//       await axios.post(
//         `${process.env.REACT_APP_API_URL}/product/add-product`,
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//             Authorization: `${localStorage.getItem("token")}`,
//           },
//         }
//       );
//       alert("Product added successfully");
//     } catch (error) {
//       console.error("Error adding product:", error);
//     }
//   };

//   const handleSpecificationChange = (index, e) => {
//     const { name, value } = e.target;
//     const newSpecifications = [...productDetails.productSpecifications];
//     newSpecifications[index][name] = value;
//     setProductDetails({
//       ...productDetails,
//       productSpecifications: newSpecifications,
//     });
//   };

//   const removeSpecificationField = (index) => {
//     const newSpecifications = productDetails.productSpecifications.filter(
//       (_, i) => i !== index
//     );
//     setProductDetails({
//       ...productDetails,
//       productSpecifications: newSpecifications,
//     });
//   };

//   const addSpecificationField = () => {
//     setProductDetails({
//       ...productDetails,
//       productSpecifications: [
//         ...productDetails.productSpecifications,
//         { name: "", value: "" },
//       ],
//     });
//   };

//   return (
//     <div className="container mx-auto p-6 h-full overflow-y-auto">
//       <h1 className="text-3xl font-semibold text-center mb-6">Add Product</h1>
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-8 rounded-lg shadow-lg border border-gray-300"
//       >
//         {/* Category, Subcategory, Name, Price, Quantity, Unit, Overview */}
//         {/* <div className="container mx-auto p-6 h-full overflow-y-auto"> */}
//         {/* <h1 className="text-3xl font-semibold text-center mb-6">Add Product</h1> */}

//         {/* Category Dropdown */}
//         <div className="mb-4">
//           <label
//             htmlFor="category"
//             className="block text-lg font-medium text-gray-700"
//           >
//             Category
//           </label>
//           <select
//             id="category"
//             name="category"
//             value={selectedCategory}
//             onChange={(e) => handleCategoryChange(e.target.value)}
//             className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
//             required
//           >
//             {categories.map((category) => (
//               <option key={category._id} value={category._id}>
//                 {category.name}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Subcategory Dropdown */}
//         <div className="mb-4">
//           <label
//             htmlFor="subcategory"
//             className="block text-lg font-medium text-gray-700"
//           >
//             Subcategory
//           </label>
//           <select
//             id="subcategory"
//             name="subcategory"
//             value={selectedSubcategory}
//             onChange={(e) => handleSubcategoryChange(e.target.value)}
//             className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
//             required
//           >
//             {subcategories?.map((subcategory) => (
//               <option key={subcategory._id} value={subcategory._id}>
//                 {subcategory.name}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Other Product Fields */}
//         <div className="mb-4">
//           <label
//             htmlFor="productName"
//             className="block text-lg font-medium text-gray-700"
//           >
//             Product Name
//           </label>
//           <input
//             type="text"
//             id="productName"
//             name="productName"
//             value={productDetails.productName}
//             onChange={handleChange}
//             className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
//             required
//           />
//         </div>

//         {/* Product Price per Unit */}
//         <div className="mb-4">
//           <label
//             htmlFor="productPrice"
//             className="block text-lg font-medium text-gray-700"
//           >
//             Product Price per Unit
//           </label>
//           <input
//             type="number"
//             id="productPrice"
//             name="productPrice"
//             value={productDetails.productPrice}
//             onChange={handleChange}
//             className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
//             required
//           />
//         </div>

//         {/* Product Quantity */}
//         <div className="mb-4">
//           <label
//             htmlFor="productQuantity"
//             className="block text-lg font-medium text-gray-700"
//           >
//             Product Quantity
//           </label>
//           <input
//             type="number"
//             id="productQuantity"
//             name="productQuantity"
//             value={productDetails.productQuantity}
//             onChange={handleChange}
//             className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
//             required
//           />
//         </div>

//         {/* Product Unit Type */}
//         <div className="mb-4">
//           <label
//             htmlFor="productUnitType"
//             className="block text-lg font-medium text-gray-700"
//           >
//             Product Unit Type
//           </label>
//           <input
//             type="text"
//             id="productUnitType"
//             name="productUnitType"
//             value={productDetails.productUnitType}
//             onChange={handleChange}
//             className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
//             required
//           />
//         </div>

//         {/* Product Overview */}
//         <div className="mb-4">
//           <label
//             htmlFor="productOverview"
//             className="block text-lg font-medium text-gray-700"
//           >
//             Product Overview
//           </label>
//           <textarea
//             id="productOverview"
//             name="productOverview"
//             value={productDetails.productOverview}
//             onChange={handleChange}
//             className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
//             required
//           />
//         </div>
//         {/* Add Image Upload Field */}
//         <div className="mb-4">
//           <label className="block text-lg font-medium text-gray-700">
//             Product Images
//           </label>
//           <input
//             type="file"
//             multiple
//             onChange={handleImageChange}
//             className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
//             required
//           />
//           <div className="flex mt-4 space-x-4">
//             {productDetails.productImages.map((image, index) => (
//               <img
//                 key={index}
//                 src={URL.createObjectURL(image)}
//                 alt="Preview"
//                 className="w-24 h-24 object-cover rounded"
//               />
//             ))}
//           </div>
//         </div>

//         {/* Specifications, Submit Button */}
//         {/* Product Specifications */}
//         <div className="mb-4">
//           <label className="block text-lg font-medium text-gray-700">
//             Product Specifications
//           </label>
//           {productDetails.productSpecifications.map((specification, index) => (
//             <div key={index} className="flex space-x-4 mb-4">
//               <input
//                 type="text"
//                 name="name"
//                 value={specification.name}
//                 onChange={(e) => handleSpecificationChange(index, e)}
//                 placeholder="Specification Name"
//                 className="w-full p-3 border border-gray-300 rounded-lg"
//                 required
//               />
//               <input
//                 type="text"
//                 name="value"
//                 value={specification.value}
//                 onChange={(e) => handleSpecificationChange(index, e)}
//                 placeholder="Specification Value"
//                 className="w-full p-3 border border-gray-300 rounded-lg"
//                 required
//               />
//               <button
//                 type="button"
//                 onClick={() => removeSpecificationField(index)}
//                 className="p-3 bg-red-500 text-white rounded-lg hover:bg-red-700"
//               >
//                 Remove
//               </button>
//             </div>
//           ))}
//           <button
//             type="button"
//             onClick={addSpecificationField}
//             className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 mb-4"
//           >
//             Add Specification
//           </button>
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full p-3 bg-green-500 text-white rounded-lg hover:bg-green-700"
//         >
//           Add Product
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddNewProduct;

import React, { useState, useEffect } from "react";
import axios from "axios";

const AddNewProduct = () => {
  const [productDetails, setProductDetails] = useState({
    categoryId: "",
    subcategoryId: "",
    productName: "",
    productImages: [],
    productPrice: "",
    productQuantity: "",
    productUnitType: "",
    productOverview: "",
    productSpecifications: [{ name: "", value: "" }],
    youtubeLink: "", // Added youtubeLink field
  });

  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");

  useEffect(() => {
    // Fetch categories
    axios
      .get(`${process.env.REACT_APP_API_URL}/category/get-all-categories`)
      .then((response) => {
        setCategories(response.data);
        if (response.data.length > 0) {
          const defaultCategory = response.data[0]._id;
          const defaultSubcategory = response.data[0].subCategories[0];

          setSelectedCategory(defaultCategory);
          setSelectedSubcategory(defaultSubcategory._id);
        }
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      axios
        .get(
          `${process.env.REACT_APP_API_URL}/category/get-all-sub-categories/${selectedCategory}`
        )
        .then((response) => {
          setSubcategories(response.data.subCategories);
          if (response.data.subCategories.length > 0) {
            setSelectedSubcategory(response.data.subCategories[0]._id);
          }
        })
        .catch((error) =>
          console.error("Error fetching subcategories:", error)
        );
    }
  }, [selectedCategory]);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);

    const defaultSubcategory = categories.find(
      (category) => category._id === categoryId
    ).subCategories[0];

    if (!defaultSubcategory) return;

    setSelectedSubcategory(defaultSubcategory._id);
  };

  const handleSubcategoryChange = (subcategoryId) => {
    setSelectedSubcategory(subcategoryId);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductDetails({
      ...productDetails,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setProductDetails({
      ...productDetails,
      productImages: Array.from(e.target.files), // Store array of files
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("categoryId", selectedCategory);
    formData.append("subcategoryId", selectedSubcategory);
    formData.append("productName", productDetails.productName);
    formData.append("productPrice", productDetails.productPrice);
    formData.append("productQuantity", productDetails.productQuantity);
    formData.append("productUnitType", productDetails.productUnitType);
    formData.append("productOverview", productDetails.productOverview);
    formData.append("youtubeLink", productDetails.youtubeLink); // Append youtubeLink

    // Append each image file to FormData
    productDetails.productImages.forEach((image) => {
      formData.append("productImages", image);
    });

    // Append specifications
    productDetails.productSpecifications.forEach((spec, index) => {
      formData.append(`productSpecifications[${index}][name]`, spec.name);
      formData.append(`productSpecifications[${index}][value]`, spec.value);
    });

    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/product/add-product`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `${localStorage.getItem("token")}`,
          },
        }
      );
      alert("Product added successfully");
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handleSpecificationChange = (index, e) => {
    const { name, value } = e.target;
    const newSpecifications = [...productDetails.productSpecifications];
    newSpecifications[index][name] = value;
    setProductDetails({
      ...productDetails,
      productSpecifications: newSpecifications,
    });
  };

  const removeSpecificationField = (index) => {
    const newSpecifications = productDetails.productSpecifications.filter(
      (_, i) => i !== index
    );
    setProductDetails({
      ...productDetails,
      productSpecifications: newSpecifications,
    });
  };

  const addSpecificationField = () => {
    setProductDetails({
      ...productDetails,
      productSpecifications: [
        ...productDetails.productSpecifications,
        { name: "", value: "" },
      ],
    });
  };

  return (
    <div className="container mx-auto p-6 h-full overflow-y-auto">
      <h1 className="text-3xl font-semibold text-center mb-6">Add Product</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg border border-gray-300"
      >
        {/* Category, Subcategory, Name, Price, Quantity, Unit, Overview */}
        {/* Category Dropdown */}
        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-lg font-medium text-gray-700"
          >
            Category
          </label>
          <select
            id="category"
            name="category"
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
            required
          >
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* Subcategory Dropdown */}
        <div className="mb-4">
          <label
            htmlFor="subcategory"
            className="block text-lg font-medium text-gray-700"
          >
            Subcategory
          </label>
          <select
            id="subcategory"
            name="subcategory"
            value={selectedSubcategory}
            onChange={(e) => handleSubcategoryChange(e.target.value)}
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
            required
          >
            {subcategories?.map((subcategory) => (
              <option key={subcategory._id} value={subcategory._id}>
                {subcategory.name}
              </option>
            ))}
          </select>
        </div>

        {/* Other Product Fields */}
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
            rows="4"
            required
          />
        </div>

        {/* YouTube Link */}
        <div className="mb-4">
          <label
            htmlFor="youtubeLink"
            className="block text-lg font-medium text-gray-700"
          >
            YouTube Link
          </label>
          <input
            type="url"
            id="youtubeLink"
            name="youtubeLink"
            value={productDetails.youtubeLink}
            onChange={handleChange}
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
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
            multiple
            onChange={handleImageChange}
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
            required
          />
        </div>

        {/* Product Specifications */}
        <div className="mb-4">
          <label
            htmlFor="productSpecifications"
            className="block text-lg font-medium text-gray-700"
          >
            Product Specifications
          </label>
          {productDetails.productSpecifications.map((spec, index) => (
            <div key={index} className="mb-2">
              <div className="flex">
                <input
                  type="text"
                  name="name"
                  value={spec.name}
                  onChange={(e) => handleSpecificationChange(index, e)}
                  placeholder="Specification Name"
                  className="flex-1 p-3 mt-2 mr-2 border border-gray-300 rounded-lg"
                  required
                />
                <input
                  type="text"
                  name="value"
                  value={spec.value}
                  onChange={(e) => handleSpecificationChange(index, e)}
                  placeholder="Specification Value"
                  className="flex-1 p-3 mt-2 border border-gray-300 rounded-lg"
                  required
                />
                <button
                  type="button"
                  onClick={() => removeSpecificationField(index)}
                  className="p-3 mt-2 ml-2 bg-red-500 text-white rounded-lg"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={addSpecificationField}
            className="w-full p-3 mt-4 bg-blue-500 text-white rounded-lg"
          >
            Add Specification
          </button>
        </div>

        <button
          type="submit"
          className="w-full p-3 mt-4 bg-green-500 text-white rounded-lg"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddNewProduct;

