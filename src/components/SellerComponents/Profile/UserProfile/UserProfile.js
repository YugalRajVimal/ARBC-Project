// src/components/SellerComponents/Profile/UserProfile/UserProfile.js

import axios from "axios";
import React, { useEffect, useState } from "react";

const UserProfile = () => {
  const [error, setError] = useState("");
  const [user, setUser] = useState({});
  // Replace these values with dynamic data as needed
  // const user = {
  //   name: "John Doe",
  //   email: "johndoe@example.com",
  //   contact: "+1234567890",
  //   designation: "Senior Developer",
  // };

  const getProfileDetails = async () => {
    try {
      // Make GET request to the user profile API using axios
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/user/get-user-profile-details`,
        {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
        }
      );

      const data = await response.data;
      console.log(data.user);
      setUser(data.user);
    } catch (error) {
      console.log(error);
      setError("Something went wrong. Please try again later.");
    }
  };

  useEffect(() => {
    getProfileDetails();
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center bg-[#fdfef4] p-4 overflow-y-auto">
      {/* Error */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative w-full mb-4">
          {error}
        </div>
      )}
      <div className="w-full h-full bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <div className="">
          <div className="flex gap-2 items-center">
            <img
              src=""
              className="rounded-full h-[80px] w-[80px] bg-black"
            ></img>
            <h5 className="text-xl">John Doe</h5>
            <p></p>
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Personal Details
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              value={user.name}
              readOnly
              className="mt-1 block w-full bg-gray-50 border border-gray-300 rounded-md shadow-sm p-2 text-gray-900"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={user.email}
              readOnly
              className="mt-1 block w-full bg-gray-50 border border-gray-300 rounded-md shadow-sm p-2 text-gray-900"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Contact No.
            </label>
            <input
              type="text"
              value={user.phoneNo}
              readOnly
              className="mt-1 block w-full bg-gray-50 border border-gray-300 rounded-md shadow-sm p-2 text-gray-900"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Designation
            </label>
            <input
              type="text"
              value={user.role}
              readOnly
              className="mt-1 block w-full bg-gray-50 border border-gray-300 rounded-md shadow-sm p-2 text-gray-900 capitalize"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
