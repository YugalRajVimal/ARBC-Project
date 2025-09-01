import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const OnboardSeller = (props) => {
  const { setIsAuthenticatedSeller } = props;
  const navigate = useNavigate();

  // State to manage input fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [password, setPassword] = useState(""); // Added password state
  const [isSeller, setIsSeller] = useState(true);
  const [error, setError] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log("Signing up");
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/admin/onboard-seller`,
        { name, email, phoneNo, password, role: isSeller ? "seller" : "customer" } // Included password in the payload
      );
      if (response.data.error) {
        return setError(response.data.error);
      }
      // Check status and store token in local storage
      if (response.status === 201) {
        // if (isSeller) {
        //   localStorage.setItem("sellerToken", response.data.token);
        //   localStorage.setItem("role", "seller");
        // } else {
        //   localStorage.setItem("buyerToken", response.data.token);
        //   localStorage.setItem("role", "buyer");
        // }
        // setIsAuthenticatedSeller(true);
        alert("Seller onboarded successfully");
        // navigate to OTP verification page
      }
      if (response.status === 209) {
        // If user already exists, redirect to login page
        alert("Seller already onboarded");
      }
      console.log(response);
      // The original code had a generic error here even on success.
      // This should only be set if there's an actual error not caught by specific status codes.
      // For now, commenting it out as it might override success messages.
      // setError("Something went wrong. Please try again later.");
    } catch (error) {
      console.error("Error signing up", error);
      // Check for specific error messages from the backend if available
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("An error occurred during sign up");
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-full ">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow-lg">
        <div className="flex justify-between items-center ">
          <p className="text-center text-xl font-semibold text-gray-600">
            Onboard Seller
          </p>
          {/* The checkbox for "Sign up as Seller" is redundant here as this component is specifically for Onboarding Sellers */}
          {/* <div className="flex items-center justify-center">
            <label htmlFor="isSeller" className="mr-2 text-xs text-gray-600">
              Sign up as Seller
            </label>
            <input
              id="isSeller"
              name="isSeller"
              type="checkbox"
              className="w-4 h-4 text-xs text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              checked={isSeller}
              onChange={(e) => setIsSeller(e.target.checked)}
            />
          </div> */}
        </div>

        {/* Error message */}
        {error && <p className="text-red-500 text-center">{error}</p>}

        <form className="space-y-6" onSubmit={handleSignUp}>
          <div className="rounded-md shadow-sm -space-y-px flex flex-col gap-2">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="phoneNo" className="sr-only">
                Phone Number
              </label>
              <input
                id="phoneNo"
                name="phoneNo"
                type="text"
                autoComplete="tel"
                required
                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Phone Number"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
              />
            </div>
            {/* Added password input field */}
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {/* These links are typically for user sign-up/login, not admin onboarding */}
          {/* <div className="flex items-center justify-between">
            <div className="text-sm">
              <a
                href="/reset-password"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
            <div className="text-sm">
              <a
                href="/signin"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Log In
              </a>
            </div>
          </div> */}

          <div>
            <button
              type="submit"
              className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Onboard Seller
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OnboardSeller;
