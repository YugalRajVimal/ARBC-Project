import React, { useState } from 'react';
import axios from 'axios';

const LogoAndName = () => {
  const [name, setName] = useState('');
  const [logo, setLogo] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleLogoChange = (e) => {
    setLogo(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    if (name) formData.append('name', name);
    if (logo) formData.append('logo', logo);

    const response = await updateLogoAndName(formData);
    if (response === 200) {
      alert('Logo and Name updated successfully');
    } else {
      alert('Failed to update Logo and Name');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Update Logo and Name</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="logo" className="block text-sm font-medium text-gray-700">
            Logo:
          </label>
          <input
            type="file"
            id="logo"
            accept="image/*"
            onChange={handleLogoChange}
            className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Update
        </button>
      </form>
    </div>
  );
};

const updateLogoAndName = async (formData) => {
  try {
    const response = await axios.put(
      `${process.env.REACT_APP_API_URL}/admin/update-logo-name`,
      formData,
      {
        headers: { 'Content-Type': 'multipart/form-data' },
      }
    );
    if (response.status === 200) {
      return 200;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default LogoAndName;
