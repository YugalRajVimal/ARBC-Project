import React, { useEffect, useState } from "react";
import { addCategory } from "../../../api/AdminAPI/adminAPI";
import { getAllCategories } from "../../../api/BuyerAPI/buyerAPI";
import { useNavigate } from "react-router-dom";

const AddCategory = () => {
  const navigate = useNavigate();

  const [categoryName, setCategoryName] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");
  const [categoryImage, setCategoryImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [categories, setCategories] = useState([]);

  const navigateToSubCategory = (id) => {
    console.log(id);
    navigate(`/subcategories/${id}`);
  };

  useEffect(() => {
    // Fetch top categories from API
    getAllCategories().then((data) => {
      console.log(data);
      setCategories(data);
    });
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    // Create form data for submission
    const formData = new FormData();
    formData.append("categoryName", categoryName);
    formData.append("categoryDescription", categoryDescription);
    if (categoryImage) {
      formData.append("categoryImage", categoryImage);
    }

    try {
      const response = await addCategory(formData);
      if (response.status === 201) {
        console.log(response);
        setMessage("Category added successfully!");
        // Clear form fields after successful submission
        setCategoryName("");
        setCategoryDescription("");
        setCategoryImage(null);
        getAllCategories().then((data) => {
          console.log(data);
          setCategories(data);
        });
      }
    } catch (error) {
      setMessage("Failed to add category. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 h-full overflow-y-auto max-w-md mx-auto bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4">Add Category</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <div>
          <label className="block font-medium mb-1" htmlFor="categoryName">
            Category Name
          </label>
          <input
            type="text"
            id="categoryName"
            className="w-full border px-2 py-1 rounded"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            required
          />
        </div>

        <div>
          <label
            className="block font-medium mb-1"
            htmlFor="categoryDescription"
          >
            Category Description
          </label>
          <textarea
            id="categoryDescription"
            className="w-full border px-2 py-1 rounded"
            value={categoryDescription}
            onChange={(e) => setCategoryDescription(e.target.value)}
            required
          ></textarea>
        </div>

        <div>
          <label className="block font-medium mb-1" htmlFor="categoryImage">
            Category Image
          </label>
          <input
            type="file"
            id="categoryImage"
            accept="image/*"
            className="w-full border px-2 py-1 rounded"
            onChange={(e) => setCategoryImage(e.target.files[0])}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {loading ? "Submitting..." : "Add Category"}
        </button>
      </form>

      {message && <p className="mt-4 text-center">{message}</p>}
      <div className="p-4">
        <h2 className="text-xl font-semibold">All Categories</h2>
        <div className="h-full overflow-y-auto flex justify-around flex-wrap gap-2 p-4">
          {categories.map((category) => (
            <div
              onClick={() => navigateToSubCategory(category._id)}
              className=" h-[120px] w-[340px] bg-slate-100 flex justify-between items-center p-2"
            >
              <img
                src={process.env.REACT_APP_API_URL + "/" + category.image}
                className="h-full aspect-[1/1] bg-slate-200"
              ></img>
              <div className="w-full p-2 pt-0 h-full">
                <h3 className="text-lg font-semibold">{category.name}</h3>
                <p className="text-sm">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
