import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  deleteTestimonial,
  getTestimonials,
  postTestimonials,
} from "../../../api/AdminAPI/adminAPI";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    rating: "",
    review: "",
  });

  // Fetch testimonials when the component mounts
  useEffect(() => {
    const fetchTestimonials = async () => {
      const data = await getTestimonials();
      if (data) {
        setTestimonials(data.testimonials);
      }
    };
    fetchTestimonials();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const status = await postTestimonials(formData);

    if (status === 201) {
      const data = await getTestimonials();
      if (data) {
        setTestimonials(data.testimonials);
      }
      setFormData({
        name: "",
        designation: "",
        rating: "",
        review: "",
      });
    }
  };

  const handleDelete = async (id) => {
    const status = await deleteTestimonial(id);
    if (status === 200) {
      const data = await getTestimonials();
      if (data) {
        setTestimonials(data.testimonials);
      }
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Testimonials</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="designation"
          >
            Designation
          </label>
          <input
            type="text"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            placeholder="Designation"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="rating"
          >
            Rating
          </label>
          <input
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            placeholder="Rating"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="review"
          >
            Review
          </label>
          <textarea
            name="review"
            value={formData.review}
            onChange={handleChange}
            placeholder="Review"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Testimonial
          </button>
        </div>
      </form>
      <ul className="grid gap-4">
        {testimonials.map((testimonial) => (
          <li key={testimonial._id} className="bg-white shadow-md rounded p-4">
            <img
              src={`${process.env.REACT_APP_API_URL}/${testimonial.image}`}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <p className="text-center font-bold">{testimonial.name}</p>
            <p className="text-center text-gray-600">
              {testimonial.designation}
            </p>
            <p className="text-center">Rating: {testimonial.rating}</p>
            <p className="text-center mb-4">{testimonial.review}</p>
            <div className="flex justify-center">
              <button
                onClick={() => handleDelete(testimonial._id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Testimonials;
