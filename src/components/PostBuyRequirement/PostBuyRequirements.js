import React, { useEffect } from "react";

const PostBuyRequirements = () => {
  const [processingState, setProcessingState] = React.useState(0);

  const handleProcessingState = (state, value) => {
    console.log("State: ", state, "Value: ", value);
    if(value === ""){
        setProcessingState(state - 1);
    }
    if (value !== "" && processingState === state - 1) {
      setProcessingState(state);
    }
  };

  useEffect(() => {}, [processingState]);

  return (
    <div className="h-[80%] w-full p-4 ">
      <div className="h-full bg-white p-8 bg-[#f9f7ee] flex ">
        <div className="h-[100%] w-[45%] bg-[#f9f7ee]">
          <img
            src="/postBuyRequirements.png"
            className="h-full w-full object-contain"
            alt="Post Buy Requirements"
          />
        </div>
        <div className="h-[100%] w-[55%] flex flex-col justify-center gap-2 bg-[#f9f7ee] p-4">
          <h3>Post Buy Requirement</h3>
          <p>Tell us what you need, and we'll help you get quotes</p>
          <span className="w-full border-[1px] h-[6px] rounded-full overflow-hidden ">
            <p
              className={`${processingState === 0 && "w-1/4"} 
                    ${processingState === 1 && "w-1/2"}
                    ${processingState === 2 && "w-3/4"}
                    ${processingState === 3 && "w-full"}
                    h-full bg-gradient-to-r from-[#fbd162] to-[#f2964e] rounded-r-full
                    transition-all ease-in-out delay-150`}
            ></p>
          </span>
          <div>
            Provide the below details to get quick quotes from sellers
            <span className="color-red">*</span>
            <input
              type="text"
              placeholder="Enter the product you are looking for"
              className="w-full p-2 border-[1px] border-gray-300 rounded-md"
              onChange={(e) => handleProcessingState(1, e.target.value)}
            />
          </div>
          {/* Phone no. input with COuntry Code  */}
          <div className="flex justify-between ">
            {/* Country Code  */}
            <div className="w-[12%]">
              <select
                type="text"
                className="w-full p-2 border-[1px] border-gray-300 rounded-md"
                onChange={(e) => handleProcessingState(2, e.target.value)}
              >
                Select
                <option value={null} default>
                  --
                </option>
                <option value="+91">+91</option>
                <option value="+99">+99</option>
              </select>
            </div>
            {/* Phone No. */}
            <div className="w-[87%]">
              <input
                type="text"
                placeholder="Enter Mobile Number"
                className="w-full p-2 border-[1px] border-gray-300 rounded-md"
                onChange={(e) => handleProcessingState(3, e.target.value)}
              />
            </div>
          </div>
          <div>
            <h4>Personalize your Inquiry</h4>
            <p className="text-sm pl-2">
              Now, record your requirement to communicate clearly and faster
              with seller than ever before.{" "}
            </p>
          </div>
          <div className="text-right">
            <button className="bg-gradient-to-r from-[#3d80a8] to-[#285f84] text-white px-4 py-1 rounded-md ">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostBuyRequirements;
