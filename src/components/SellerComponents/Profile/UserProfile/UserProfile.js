import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsPencil } from "react-icons/bs"; // Using react-icons for the pencil icon

const UserProfile = () => {
  const [error, setError] = useState("");
  const [user, setUser] = useState({});
  const [newName, setNewName] = useState(""); // For editing the name
  const [newImage, setNewImage] = useState(null); // For the new profile image
  const [isNameEditing, setIsNameEditing] = useState(false); // Toggle for name editing
  const [isImageEditing, setIsImageEditing] = useState(false); // Toggle for image editing

  const getProfileDetails = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/user/get-user-profile-details`,
        {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
        }
      );

      const data = await response.data;
      setUser(data.user);
      setNewName(data.user.name); // Set the current name for editing
    } catch (error) {
      setError("Something went wrong. Please try again later.");
    }
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value); // Update the name as the user types
  };

  const handleImageChange = (e) => {
    setNewImage(e.target.files[0]); // Set the new image file
  };

  const handleNameEdit = () => {
    setIsNameEditing(true); // Enable name editing mode
  };

  const handleImageEdit = () => {
    setIsImageEditing(true); // Enable image editing mode
  };

  const handleProfileUpdate = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", newName);

      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/user/update-profile`,
        formData,
        {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data", // Set the content type for FormData
          },
        }
      );

      const data = response.data;
      setUser(data.user); // Update the user data after successful profile update
      setError(""); // Clear any previous errors
      setIsNameEditing(false); // Disable name editing mode
      setIsImageEditing(false); // Disable image editing mode
    } catch (error) {
      setError("Something went wrong. Please try again later.");
    }
  };

  const handleProfileImageUpdate = async () => {
    try {
      if (!newImage) {
        setError("Please select an image to upload.");
        return;
      }
      const formData = new FormData();
      formData.append("profileImg", newImage);

      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/user/update-user-profile-image`,
        formData,
        {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data", // Set the content type for FormData
          },
        }
      );

      const data = response.data;
      if (response.status === 200) {
        console.log("Profile image updated successfully");
        getProfileDetails(); // Fetch the updated user data
        alert("Profile image updated successfully");
      } // Update the user data after successful profile image update
      setError(""); // Clear any previous errors
      setIsImageEditing(false); // Disable image editing mode
    } catch (error) {
      setError("Something went wrong. Please try again later.");
    }
  };

  const handleCancelNameEdit = () => {
    setNewName(user.name); // Reset name to original value
    setIsNameEditing(false); // Cancel editing mode
  };

  const handleCancelImageEdit = () => {
    setNewImage(null); // Reset image to original value
    setIsImageEditing(false); // Cancel image editing mode
  };

  useEffect(() => {
    getProfileDetails();
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#fdfef4] p-4 overflow-y-auto">
      {/* Error */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative w-full mb-4">
          {error}
        </div>
      )}
      <div className="w-full h-full bg-white p-6 rounded-lg shadow-md border border-gray-200">
        {/* Profile Image Section */}
        <div className="flex gap-2 items-center mb-6 relative">
          <img
            src={
              process.env.REACT_APP_API_URL + "/" + user.profileImg ||
              "/default-avatar.png"
            } // Display default image if no profile image
            alt="Profile"
            className="rounded-full h-[80px] w-[80px] bg-black object-cover"
          />
          <button
            onClick={handleImageEdit}
            className="absolute bottom-0 left-14 bg-transparent text-black bg-slate-100 p-1 rounded-full"
            title="Edit Profile Image"
          >
            <BsPencil className="text-black font-bold text-sm" />{" "}
            {/* Pencil icon */}
          </button>
          {/* Edit Image Mode */}
          {isImageEditing && (
            <div className="absolute bottom-0 right-0 w-2/3 p-2 bg-white shadow-lg rounded-md">
              <input
                type="file"
                onChange={handleImageChange}
                className="text-sm text-gray-900 border border-gray-300 rounded-md shadow-sm"
              />
              <div className="flex gap-2 mt-2">
                <button
                  onClick={handleProfileImageUpdate}
                  className="p-2 bg-blue-600 text-white rounded"
                >
                  Upload
                </button>
                <button
                  onClick={handleCancelImageEdit}
                  className="p-2 bg-gray-600 text-white rounded"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Name Section */}
        <div className="flex items-center justify-between mb-6">
          <div>
            {isNameEditing ? (
              <input
                type="text"
                value={newName}
                onChange={handleNameChange}
                className="mt-1 block w-full bg-gray-50 border border-gray-300 rounded-md shadow-sm p-2 text-gray-900"
              />
            ) : (
              <h5 className="text-xl">{user.name || "John Doe"}</h5>
            )}
          </div>
          {!isNameEditing && (
            <button
              onClick={handleNameEdit}
              className="p-2 bg-yellow-500 text-white rounded"
            >
              Edit
            </button>
          )}
          {isNameEditing && (
            <div className="flex gap-2">
              <button
                onClick={handleProfileUpdate}
                className="p-2 bg-blue-600 text-white rounded"
              >
                Save
              </button>
              <button
                onClick={handleCancelNameEdit}
                className="p-2 bg-gray-600 text-white rounded"
              >
                Cancel
              </button>
            </div>
          )}
        </div>

        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Personal Details
        </h2>

        <form className="space-y-4" onSubmit={handleProfileUpdate}>
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

          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-md"
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
