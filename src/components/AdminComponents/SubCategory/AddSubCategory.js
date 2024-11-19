import React, { useState, useEffect } from "react";
import {
  addSubCategory,
  updateSubCategory,
  getAllSubCategories,
  deleteSubCategory,
} from "../../../api/AdminAPI/adminAPI";
import { getAllCategories } from "../../../api/BuyerAPI/buyerAPI";
import { useNavigate } from "react-router-dom";

const AddSubCategory = () => {
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [subCategoryName, setSubCategoryName] = useState("");
  const [subCategoryDescription, setSubCategoryDescription] = useState("");
  const [subCategoryImage, setSubCategoryImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [subCategories, setSubCategories] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editSubCategoryId, setEditSubCategoryId] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getAllCategories();
        setCategories(data || []);
      } catch (error) {
        console.error("Failed to fetch categories");
      }
    };
    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = new FormData();
    formData.append("categoryId", categoryId);
    formData.append("subCategoryName", subCategoryName);
    formData.append("subCategoryDescription", subCategoryDescription);
    if (subCategoryImage) {
      formData.append("subCategoryImage", subCategoryImage);
    }

    try {
      const response = editMode
        ? await updateSubCategory(editSubCategoryId, formData)
        : await addSubCategory(formData);
      if (response.status === 201 || response.status === 200) {
        setMessage(
          editMode
            ? "Subcategory updated successfully!"
            : "Subcategory added successfully!"
        );
        setCategoryId("");
        setSubCategoryName("");
        setSubCategoryDescription("");
        setSubCategoryImage(null);
        setEditMode(false);
        setEditSubCategoryId(null);
        getAllSubCategories(categoryId).then((data) => {
          setSubCategories(data.data.subCategories || []);
        });
      }
    } catch (error) {
      setMessage("Failed to submit subcategory. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryChange = async (e) => {
    const selectedCategoryId = e.target.value;
    setSelectedCategoryId(selectedCategoryId);

    if (selectedCategoryId) {
      try {
        const data = await getAllSubCategories(selectedCategoryId);
        setSubCategories(data.data.subCategories || []);
      } catch (error) {
        console.error("Failed to fetch subcategories");
      }
    } else {
      setSubCategories([]);
    }
  };

  const handleEdit = (subCategory) => {
    setEditMode(true);
    setEditSubCategoryId(subCategory._id);
    setCategoryId(subCategory.categoryId);
    setSubCategoryName(subCategory.name);
    setSubCategoryDescription(subCategory.description);
    setSubCategoryImage(null); // Image upload is optional during edit
  };

  const handleDelete = async (subCategoryId, categoryId) => {
    try {
      const response = await deleteSubCategory(subCategoryId);
      if (response.status === 200) {
        setMessage("Subcategory deleted successfully!");
        alert("Subcategory deleted successfully!");
        //Refresh the Page
        navigate("/admin");
      }
    } catch (error) {
      setMessage("Failed to delete subcategory. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="h-full overflow-y-auto">
      <div className="p-4 max-w-md mx-auto bg-white shadow-md rounded ">
        <h2
          className="text-2xl font-bold mb-4"
          onClick={() => {
            setEditMode(false);
            setCategoryId("");
            setSubCategoryName("");
            setSubCategoryDescription("");
            setSubCategoryImage(null);
          }}
        >
          {editMode ? "Edit Subcategory" : "Add Subcategory"}
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div>
            <label className="block font-medium mb-1" htmlFor="categoryId">
              Category
            </label>
            <select
              id="categoryId"
              className="w-full border px-2 py-1 rounded"
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
              required
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-medium mb-1" htmlFor="subCategoryName">
              Subcategory Name
            </label>
            <input
              type="text"
              id="subCategoryName"
              className="w-full border px-2 py-1 rounded"
              value={subCategoryName}
              onChange={(e) => setSubCategoryName(e.target.value)}
              required
              name="subCategoryName"
            />
          </div>

          <div>
            <label
              className="block font-medium mb-1"
              htmlFor="subCategoryDescription"
            >
              Subcategory Description
            </label>
            <textarea
              id="subCategoryDescription"
              className="w-full border px-2 py-1 rounded"
              value={subCategoryDescription}
              onChange={(e) => setSubCategoryDescription(e.target.value)}
              required
              name="subCategoryDescription"
            ></textarea>
          </div>

          <div>
            <label
              className="block font-medium mb-1"
              htmlFor="subCategoryImage"
            >
              Subcategory Image
            </label>
            <input
              type="file"
              name="subCategoryImage"
              id="subCategoryImage"
              accept="image/*"
              className="w-full border px-2 py-1 rounded"
              onChange={(e) => setSubCategoryImage(e.target.files[0])}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            {loading
              ? "Submitting..."
              : editMode
              ? "Update Subcategory"
              : "Add Subcategory"}
          </button>
        </form>

        {message && <p className="mt-4 text-center">{message}</p>}
      </div>
      {/* Additional Category and Subcategory Dropdown */}
      <div className="p-4 mt-4 max-w-md mx-auto bg-white shadow-md rounded">
        <label className="block font-medium mb-1" htmlFor="selectedCategory">
          Select Category to View Subcategories
        </label>
        <select
          id="selectedCategory"
          className="w-full border px-2 py-1 rounded"
          value={selectedCategoryId}
          onChange={handleCategoryChange}
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
        </select>

        {selectedCategoryId && (
          <div className="mt-4">
            <h3 className="font-medium">Subcategories:</h3>
            <ul className="list-disc pl-5">
              {subCategories.length > 0 ? (
                subCategories.map((subCategory) => (
                  <li key={subCategory._id} className="flex justify-between">
                    {subCategory.name}{" "}
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(subCategory)}
                        className="ml-2 bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() =>
                          handleDelete(subCategory._id, categoryId)
                        }
                        className="ml-2 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                ))
              ) : (
                <li>No subcategories available for this category.</li>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddSubCategory;
