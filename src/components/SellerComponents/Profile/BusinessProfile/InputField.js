import React from "react";

const InputField = ({ label, type = "text", name, value, onChange, required = false }) => (
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-3 py-2 border rounded-md"
      required={required}
    />
  </div>
);

export default InputField;
