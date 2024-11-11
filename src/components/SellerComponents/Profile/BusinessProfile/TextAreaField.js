import React from "react";

const TextAreaField = ({ label, name, value, onChange, required = false }) => (
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-3 py-2 border rounded-md"
      required={required}
    ></textarea>
  </div>
);

export default TextAreaField;
