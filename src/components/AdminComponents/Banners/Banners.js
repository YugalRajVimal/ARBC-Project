import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  addBanner,
  deleteBanner,
  getBanners,
} from "../../../api/AdminAPI/adminAPI";

const Banners = () => {
  const [banners, setBanners] = useState([]);
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [banner, setBanner] = useState(null);

  useEffect(() => {
    getBanners().then((response) => {
      if (response) {
        setBanners(response.banners);
      }
    });
  }, []);

  const fetchBanners = async () => {
    const response = await getBanners();
    if (response) {
      setBanners(response.banners);
    }
  };

  const handleAddBanner = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("link", link);
    formData.append("banner", banner);

    const response = await addBanner(formData);
    if (response === 201) {
      fetchBanners(); // Refresh the list of banners after adding
      setTitle("");
      setLink("");
      setBanner(null);
      alert("Banner added successfully!");
    }
  };

  const handleDeleteBanner = async (id) => {
    await deleteBanner(id).then((response) => {
      if (response === 200) {
        fetchBanners(); // Refresh the list of banners after deleting
        alert("Banner deleted successfully!");
      }
    });
  };

  const handleFileChange = (e) => {
    setBanner(e.target.files[0]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Manage Banners</h1>
      <form onSubmit={handleAddBanner} className="mb-8">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="link"
          >
            Link
          </label>
          <input
            id="link"
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="banner"
          >
            Upload Banner
          </label>
          <input
            id="banner"
            type="file"
            onChange={handleFileChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Banner
        </button>
      </form>

      <div>
        {banners.length === 0 ? (
          <h2 className="text-center text-xl">No Banners</h2>
        ) : (
          <ul className="space-y-4">
            {banners.map((banner) => (
              <li
                key={banner._id}
                className="border rounded-lg p-4 shadow-md flex justify-between items-center"
              >
                <div>
                  <strong>Title:</strong> {banner.title}
                  <br />
                  <strong>Link:</strong>{" "}
                  <a
                    href={banner.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {banner.link}
                  </a>
                  <br />
                  <img
                    src={`${process.env.REACT_APP_API_URL}/${banner.image}`}
                    alt={banner.title}
                    className="w-32 h-20 object-cover mt-2"
                  />
                </div>
                <button
                  onClick={() => handleDeleteBanner(banner._id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Banners;
