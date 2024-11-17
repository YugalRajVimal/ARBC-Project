import React, { useEffect, useState } from "react";
import {
  addAsideListItem,
  deleteAsideListItems,
  getAllCategories,
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
    <div className="container mx-auto p-4 h-full overflow-y-auto">
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

export default TopCategories;
