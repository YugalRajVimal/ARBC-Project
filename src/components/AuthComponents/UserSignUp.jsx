import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserSignUp = (props) => {
  const { setIsAuthenticatedSeller } = props;
  const navigate = useNavigate();

  // State to manage input fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [isSeller, setIsSeller] = useState(false);
  const [error, setError] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log("Signing up");
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/user/signup`,
        { name, email, phoneNo, role: isSeller ? "seller" : "customer" }
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
        alert("Verify your email to complete sign up");
        navigate("/verify-account", {
          state: { email: email, role: isSeller ? "seller" : "customer" },
        }); // navigate to OTP verification page
      }
      if (response.status === 209) {
        // If user already exists, redirect to login page
        navigate("/verify-account", {
          state: { email: email, role: isSeller ? "seller" : "customer" },
        });
      }
      console.log(response);
      setError("Something went wrong. Please try again later.");
    } catch (error) {
      console.error("Error signing up", error);
      setError("An error occurred during sign up");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow-lg">
        <div className="flex justify-between items-center ">
          <p className="text-center text-xl font-semibold text-gray-600">
            Sign up for an account
          </p>
          <div className="flex items-center justify-center">
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
          </div>
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
                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Phone Number"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
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
          </div>

          <div>
            <button
              type="submit"
              className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserSignUp;
