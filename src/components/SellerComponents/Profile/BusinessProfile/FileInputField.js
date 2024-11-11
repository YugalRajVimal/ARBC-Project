import React from "react";

const FileInputField = ({ label, name, onChange, multiple = false, required = false }) => (
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type="file"
      name={name}
      onChange={onChange}
      multiple={multiple}
      className="w-full px-3 py-2 border rounded-md"
      required={required}
    />
  </div>
);

export default FileInputField;
