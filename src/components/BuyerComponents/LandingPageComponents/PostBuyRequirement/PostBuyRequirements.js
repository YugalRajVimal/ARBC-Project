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
    // Fetch top categories from API
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

    //Validate email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      alert("Enter a valid Email");
      return;
    }

    console.log("Requirement Data", requirementData);

    try {
      const response = await postBuyRequirement(requirementData);
      if (response.status === 201) {
        // Add success notification or action here
        //Empty the fields
        setSelectedCategory("");
        setProductName("");
        setEmail("");
        setProcessingState(0);
        alert("Requirement posted successfully");
      }
    } catch (error) {
      console.error("Error posting buy requirement", error);
      alert("Error posting buy requirement");
      // Add error notification or action here
    }
  };

  return (
    <div id="postBuyRequirements" className="h-[80%] w-full p-4">
      <div className="h-full bg-white p-8 bg-[#f9f7ee] flex flex-col min-[800px]:flex-row">
        <div className="h-1/2 min-[800px]:h-[100%] min-[800px]:w-[45%] bg-[#f9f7ee]">
          <img
            src="/postBuyRequirements.png"
            className="h-full w-full object-contain"
            alt="Post Buy Requirements"
          />
        </div>
        <div className="h-1/2 min-[800px]:h-[100%] min-[800px]:w-[55%] flex flex-col justify-center gap-2 bg-[#f9f7ee] p-4">
          <h3>Post Buy Requirement</h3>
          <p>Tell us what you need, and we'll help you get quotes</p>
          <span className="w-full border-[1px] h-[6px] rounded-full overflow-hidden">
            <p
              className={`${processingState === 0 && "w-1/4"} ${
                processingState === 1 && "w-1/2"
              } ${processingState === 2 && "w-3/4"} ${
                processingState === 3 && "w-full"
              } h-full bg-gradient-to-r from-[#fbd162] to-[#f2964e] rounded-r-full transition-all ease-in-out delay-150`}
            ></p>
          </span>

          <div>
            {/* <span className="color-red">*</span> */}
            <select
              className="w-full p-2 border-[1px] border-gray-300 rounded-md"
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
          </div>

          <div>
            <input
              type="text"
              placeholder="Enter the product you are looking for"
              className="w-full p-2 border-[1px] border-gray-300 rounded-md"
              value={productName}
              onChange={(e) => {
                setProductName(e.target.value);
                handleProcessingState(2, e.target.value);
              }}
            />
          </div>

          <div className="w-full">
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full p-2 border-[1px] border-gray-300 rounded-md"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                handleProcessingState(3, e.target.value);
              }}
            />
          </div>

          <div className="text-right">
            <button
              className="bg-gradient-to-r from-[#3d80a8] to-[#285f84] text-white px-4 py-1 rounded-md"
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
