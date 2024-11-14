import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  addAsideListItem,
  deleteAllAsideListItems,
  deleteAsideListItems,
  getAllCategories,
  getAllSubCategories,
  getAsideListItems,
} from "../../../api/AdminAPI/adminAPI";

const TopCategories = () => {
  const [allCategories, setAllCategories] = useState([]);
  const [topCategories, setTopCategories] = useState([]);

  useEffect(() => {
    fetchAllCategories();
    fetchTopCategories();
  }, []);

  const fetchAllCategories = async () => {
    const data = await getAllCategories();
    console.log(data);
    if (data) setAllCategories(data);
  };

  const fetchTopCategories = async () => {
    const data = await getAsideListItems(0); // ID 0 for top categories
    if (data) setTopCategories(data[0].categories);
  };

  const addTopCategory = async (category) => {
    const data = { id: 0, categoryId: category._id, productId: null };
    const result = await addAsideListItem(data);
    if (result && result.status === 200) {
      fetchTopCategories();
    }
  };

  const deleteTopCategory = async (categoryId) => {
    const data = { id: 0, categoryId: categoryId, productId: null };
    const result = await deleteAsideListItems(data);
    if (result && result.status === 200) {
      fetchTopCategories();
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Top Categories</h2>

      {/* Top Categories Section */}
      <div className="mb-6">
        {topCategories?.length > 0 ? (
          topCategories?.map((category) => (
            <div
              key={category._id}
              className="flex items-center justify-between border p-2 mb-2 rounded"
            >
              <span>{category.name}</span>
              <button
                onClick={() => deleteTopCategory(category._id)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <p>No top categories available.</p>
        )}
      </div>

      {/* All Categories Section */}
      <h2 className="text-xl font-bold mb-4">All Categories</h2>
      <div>
        {allCategories?.map((category) => (
          <div
            key={category._id}
            className="flex items-center justify-between border p-2 mb-2 rounded"
          >
            <span>{category.name}</span>
            <button
              onClick={() => addTopCategory(category)}
              className="text-blue-500 hover:text-blue-700"
            >
              Add to Top Categories
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Helper functions
// const getAllCategories = async () => {
//   try {
//     const response = await axios.get(
//       `${process.env.REACT_APP_API_URL}/category/get-all-categories`
//     );
//     return response.status === 200 ? response.data : null;
//   } catch (error) {
//     console.error("Error fetching all categories:", error);
//     return null;
//   }
// };

// const getAsideListItems = async (id) => {
//   try {
//     const response = await axios.get(
//       `${process.env.REACT_APP_API_URL}/category/get-aside-list-items/${id}`
//     );
//     return response.status === 200 ? response.data : null;
//   } catch (error) {
//     console.error("Error fetching aside list items:", error);
//     return null;
//   }
// };

// const addAsideListItem = async (data) => {
//   if (data.id === null) {
//     return { status: 400, data: "Category ID/ProductId is required" };
//   }

//   if (data.id === 0) {
//     data.productId = null;
//   }
//   if (data.id > 0 || data.id < 0) {
//     data.categoryId = null;
//   }

//   try {
//     const response = await axios.post(
//       `${process.env.REACT_APP_API_URL}/category/add-aside-list-items/${data.id}`,
//       data
//     );
//     return response.status === 200 ? { status: response.status, data: response.data } : null;
//   } catch (error) {
//     console.error("Error adding aside list item:", error);
//     return null;
//   }
// };

// const deleteAllAsideListItems = async (data) => {
//   if (data.id === 0) {
//     data.productId = null;
//   }
//   if (data.id > 0 || data.id < 0) {
//     data.categoryId = null;
//   }

//   try {
//     const response = await axios.delete(
//       `${process.env.REACT_APP_API_URL}/category/delete-aside-list-items/${data.id}`,
//       { data }
//     );
//     return response.status === 200 ? { status: response.status, data: response.data } : null;
//   } catch (error) {
//     console.error("Error deleting aside list item:", error);
//     return null;
//   }
// };

export default TopCategories;
