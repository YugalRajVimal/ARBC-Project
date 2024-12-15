import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SetInquiryCount = () => {
  const [inquiryCount, setInquiryCount] = useState('');
  const [message, setMessage] = useState('');

  const getInquiryCount = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/admin/inquiry-count`);
      setInquiryCount(response.data.inquiryCount);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Server error');
      console.error(error);
    }
  };

  useEffect(() => {
    getInquiryCount();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(`${process.env.REACT_APP_API_URL}/admin/update-inquiry-count`, { inquiryCount });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Server error');
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">Set Inquiry Count</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="inquiryCount" className="block text-sm font-medium text-gray-700">Inquiry Count:</label>
            <input
              type="number"
              id="inquiryCount"
              value={inquiryCount}
              onChange={(e) => setInquiryCount(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Update Inquiry Count
          </button>
        </form>
        {message && <p className="mt-4 text-center text-sm text-gray-600">{message}</p>}
      </div>
    </div>
  );
};

export default SetInquiryCount;
