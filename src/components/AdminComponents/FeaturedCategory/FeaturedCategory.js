import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  addFeaturedCategoryDetails,
  getAllCategories,
  getAllSubCategories,
} from "../../../api/AdminAPI/adminAPI";

const FeaturedCategory = () => {
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);

  const [selectedCategoryDetails, setSelectedCategoryDetails] = useState({
    categoryId: "",
    text: "",
  });

  const [subCategoryDetails, setSubCategoryDetails] = useState({});

  useEffect(() => {
    getAllCategories().then((data) => {
      setCategories(data);
    });
  }, []);

  const handleCategoryChange = async (e) => {
    const categoryId = e.target.value;
    setSelectedCategory(categoryId);
    setSelectedCategoryDetails({ ...selectedCategoryDetails, categoryId });

    try {
      const data = await getAllSubCategories(categoryId);
      setSubcategories(data.data.subCategories || []);
    } catch (error) {
      console.error("Error fetching subcategories:", error);
    }
  };

  const handleSubcategoryChange = (e, index) => {
    const subCategoryId = e.target.value;
    const updatedSubcategories = [...selectedSubcategories];

    if (e.target.checked) {
      if (selectedSubcategories.length >= 2) {
        alert("You can only select up to 2 subcategories.");
        e.target.checked = false;
        return;
      }
      updatedSubcategories.push(subCategoryId);
    } else {
      const subcategoryIndex = updatedSubcategories.indexOf(subCategoryId);
      if (subcategoryIndex > -1) {
        updatedSubcategories.splice(subcategoryIndex, 1);
      }
    }

    setSelectedSubcategories(updatedSubcategories);
    console.log("Selected Category ID:", selectedCategory);
    console.log("Selected Subcategory IDs:", updatedSubcategories);
  };

  const handleTextChange = (index, text) => {
    if (index === "category") {
      setSelectedCategoryDetails({ ...selectedCategoryDetails, text });
    } else {
      setSubCategoryDetails({
        ...subCategoryDetails,
        [index]: { ...subCategoryDetails[index], text },
      });
    }
  };

  const handleImageChange = (index, image) => {
    if (index === "category") {
      setSelectedCategoryDetails({ ...selectedCategoryDetails, image });
    } else {
      setSubCategoryDetails({
        ...subCategoryDetails,
        [index]: { ...subCategoryDetails[index], image },
      });
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("categoryId", selectedCategoryDetails.categoryId);
    formDataToSend.append("categoryText", selectedCategoryDetails.text);

    selectedSubcategories.forEach((subCategoryId, index) => {
        console.log(index);
      formDataToSend.append(
        `subCategoryId${index+1}`,
        subCategoryId
      );
      formDataToSend.append(
        `subCategoryText${index+1}`,
        subCategoryDetails[index]?.text || ""
      );
      formDataToSend.append(
        `subCategoryImage${index+1}`,
        subCategoryDetails[index]?.image || null
      );
    });

    try {
      const response = await addFeaturedCategoryDetails(formDataToSend);
      if (response.status === 200) {
        alert("Featured Category updated successfully");
      }
      if (response == null) {
        alert("Featured Category updated failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="p-4 space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Select Category
        </label>
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      {selectedCategory && (
        <>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              {categories.find((c) => c._id === selectedCategory)?.name} Text
            </label>
            <input
              type="text"
              value={selectedCategoryDetails.text}
              onChange={(e) => handleTextChange("category", e.target.value)}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            />
          </div>
        </>
      )}

      {subcategories.length > 0 && (
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Select Subcategories (Select up to 2)
          </label>
          {subcategories.map((subcategory, index) => (
            <div key={subcategory._id} className="flex items-center space-x-2">
              <input
                type="checkbox"
                value={subcategory._id}
                onChange={(e) => handleSubcategoryChange(e, index)}
                checked={selectedSubcategories.includes(subcategory._id)}
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
              <span>{subcategory.name}</span>
            </div>
          ))}
        </div>
      )}

      {selectedSubcategories.length > 0 &&
        selectedSubcategories.map((subCategoryId, index) => (
          <div key={subCategoryId}>
            <label className="block text-sm font-medium text-gray-700">
              {subcategories.find((s) => s._id === subCategoryId)?.name} Text
            </label>
            <input
              type="text"
              value={subCategoryDetails[index]?.text || ""}
              onChange={(e) => handleTextChange(index, e.target.value)}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            />
            <div>
              <label className="block text-sm font-medium text-gray-700">
                {subcategories.find((s) => s._id === subCategoryId)?.name} Image
              </label>
              <input
                type="file"
                onChange={(e) => handleImageChange(index, e.target.files[0])}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              />
            </div>
          </div>
        ))}

      <button
        type="submit"
        className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md"
      >
        Submit
      </button>
    </form>
  );
};

export default FeaturedCategory;
