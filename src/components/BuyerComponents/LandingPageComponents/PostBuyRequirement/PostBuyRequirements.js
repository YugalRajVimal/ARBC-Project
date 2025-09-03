import React, { useEffect, useState } from "react";
import {
  getAllCategories,
  postBuyRequirement,
} from "../../../../api/BuyerAPI/buyerAPI";

const PostBuyRequirements = () => {
  const [processingState, setProcessingState] = useState(0);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [productName, setProductName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    getAllCategories().then((data) => {
      setCategories(data);
    });
  }, []);

  const handleProcessingState = (state, value) => {
    if (value === "") {
      setProcessingState(state - 1);
    }
    if (value !== "" && processingState === state - 1) {
      setProcessingState(state);
    }
  };

  const handleSubmit = async () => {
    const requirementData = {
      category:
        selectedCategory === "00000000000000000" ? "Others" : selectedCategory,
      lookingFor: productName,
      email,
    };

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      alert("Enter a valid Email");
      return;
    }

    try {
      const response = await postBuyRequirement(requirementData);
      if (response.status === 201) {
        setSelectedCategory("");
        setProductName("");
        setEmail("");
        setProcessingState(0);
        alert("Requirement posted successfully");
      }
    } catch (error) {
      console.error("Error posting buy requirement", error);
      alert("Error posting buy requirement");
    }
  };

  return (
    <div
      id="postBuyRequirements"
      className="h-auto md:h-[75%] w-full p-4 flex justify-center items-center "
    >
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-md shadow-black flex flex-col md:flex-row overflow-hidden">
        {/* Left Side Image */}
        <div className="w-full md:w-[45%] bg-gray-100 flex justify-center items-center p-6">
          <img
            src="/postBuyRequirements.jpeg"
            className="w-[80%] h-auto object-contain rounded-lg"
            alt="Post Buy Requirements"
          />
        </div>

        {/* Right Side Form */}
        <div className="w-full md:w-[55%] p-6 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-gray-900">
            Post Buy Requirement
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Tell us what you need, and we’ll connect you with suppliers
          </p>

          {/* Progress bar */}
          <div className="w-full bg-gray-200 h-2 rounded-full mb-6">
            <div
              className={`h-full rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-500`}
              style={{
                width:
                  processingState === 0
                    ? "25%"
                    : processingState === 1
                    ? "50%"
                    : processingState === 2
                    ? "75%"
                    : "100%",
              }}
            ></div>
          </div>

          {/* Form */}
          <div className="flex flex-col gap-4">
            <select
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                handleProcessingState(1, e.target.value);
              }}
            >
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
              <option value="00000000000000000">Others</option>
            </select>

            <input
              type="text"
              placeholder="Enter the product you are looking for"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={productName}
              onChange={(e) => {
                setProductName(e.target.value);
                handleProcessingState(2, e.target.value);
              }}
            />

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                handleProcessingState(3, e.target.value);
              }}
            />

            <button
              className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 rounded-lg font-semibold shadow hover:scale-[1.02] transition"
              onClick={handleSubmit}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostBuyRequirements;
