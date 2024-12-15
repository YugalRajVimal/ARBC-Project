import React, { useState } from "react";
import axios from "axios";
import InputField from "./InputField";
import FileInputField from "./FileInputField";
import TextAreaField from "./TextAreaField";
import { useNavigate } from "react-router-dom";

const AddBusinessDetails = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyName: "",
    companyPhoneNumber: "",
    companyOwnershipType: "",
    companyTurnover: "",
    companyYearOfEstablishment: "",
    companyNumberOfEmployees: "",
    companyFaxNumber: "",
    companyAddress: "",
    companyPincode: "",
    companyCity: "",
    companyState: "",
    gstNumber: "",
    aadharNumber: "",
    panNumber: "",
    tanNumber: "",
    companyLogo: "",
    companyPhotos: [],
    companyDescription: "",
    modeOfPayment: [],
    companyWorkingDays: [],
    bankAccountType: "",
    // bankLinkedPhoneNumber: "",
    accountHolderName: "",
    accountNumber: "",
    ifscCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    console.log(name, "-", files[0]);
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleMultiFileChange = (e) => {
    const { name, files } = e.target;
    console.log(name, "-", files);
    setFormData({ ...formData, [name]: files });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const token = localStorage.getItem("token");

  //   try {
  //     console.log(formData);
  //     const response = await axios.post(
  //       `${process.env.REACT_APP_API_URL}/user/update-user-profile`,
  //       formData,
  //       {
  //         headers: {
  //           Authorization: `${token}`,
  //           "Content-Type": "multipart/form-data",
  //         },
  //       }
  //     );
  //     console.log(response.data);
  //     if (response.status === 200) {
  //       // Redirect to the seller landing
  //       alert("Profile updated successfully");
  //       navigate("/seller");
  //       return;
  //     }
  //     alert("Error updating profile");
  //   } catch (error) {
  //     console.error(error);
  //     alert("Error updating profile");
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    // Create a new FormData instance
    const formDataToSend = new FormData();

    // Append each form data field
    Object.keys(formData).forEach((key) => {
      // Handle multiple file input for companyPhotos
      if (key === "companyPhotos" && formData[key].length > 0) {
        Array.from(formData[key]).forEach((file) =>
          formDataToSend.append(key, file)
        );
      }
      // Handle single file input for companyLogo
      else if (key === "companyLogo" && formData[key]) {
        formDataToSend.append(key, formData[key]);
      }
      // Append all other fields
      else {
        formDataToSend.append(key, formData[key]);
      }
    });

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/user/update-user-profile`,
        formDataToSend,
        {
          headers: {
            Authorization: `${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        alert("Profile updated successfully");
        navigate("/seller");
      } else {
        alert("Error updating profile");
      }
      navigate("/seller");
    } catch (error) {
      console.error(error);
      alert("Error updating profile");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto h-full overflow-y-auto"
    >
      <div className="mb-6 bg-white p-6 shadow-md shadow-black rounded-md">
        <h2 className="text-xl font-bold mb-4">Company Details</h2>
        <InputField
          label="Company Name"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          required
        />
        <InputField
          label="Company Phone Number"
          name="companyPhoneNumber"
          value={formData.companyPhoneNumber}
          onChange={handleChange}
          required
        />
        <InputField
          label="Company Ownership Type"
          name="companyOwnershipType"
          value={formData.companyOwnershipType}
          onChange={handleChange}
          required
        />
        <InputField
          label="Company Turnover"
          name="companyTurnover"
          value={formData.companyTurnover}
          onChange={handleChange}
          type="number"
          required
        />
        <InputField
          label="Company Year of Establishment"
          name="companyYearOfEstablishment"
          value={formData.companyYearOfEstablishment}
          onChange={handleChange}
          type="number"
          required
        />
        <InputField
          label="Company Number of Employees"
          name="companyNumberOfEmployees"
          value={formData.companyNumberOfEmployees}
          onChange={handleChange}
          type="number"
          required
        />
        <InputField
          label="Company Fax Number"
          name="companyFaxNumber"
          value={formData.companyFaxNumber}
          onChange={handleChange}
        />
      </div>

      <div className="mb-6 bg-white p-6 shadow-md shadow-black rounded-md">
        <h2 className="text-xl font-bold mb-4">Address Details</h2>
        <InputField
          label="Company Address"
          name="companyAddress"
          value={formData.companyAddress}
          onChange={handleChange}
          required
        />
        <InputField
          label="Pincode"
          name="companyPincode"
          value={formData.companyPincode}
          onChange={handleChange}
          required
        />
        <InputField
          label="City"
          name="companyCity"
          value={formData.companyCity}
          onChange={handleChange}
          required
        />
        <InputField
          label="State"
          name="companyState"
          value={formData.companyState}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-6 bg-white p-6 shadow-md shadow-black rounded-md">
        <h2 className="text-xl font-bold mb-4">Taxation Details</h2>
        <InputField
          label="GST Number"
          name="gstNumber"
          value={formData.gstNumber}
          onChange={handleChange}
          required
        />
        <InputField
          label="Aadhar Number"
          name="aadharNumber"
          value={formData.aadharNumber}
          onChange={handleChange}

        />
        <InputField
          label="PAN Number"
          name="panNumber"
          value={formData.panNumber}
          onChange={handleChange}

        />
        <InputField
          label="TAN Number"
          name="tanNumber"
          value={formData.tanNumber}
          onChange={handleChange}

        />
      </div>

      <div className="mb-6 bg-white p-6 shadow-md shadow-black rounded-md">
        <h2 className="text-xl font-bold mb-4">Payment Methods</h2>
        <InputField
          label="Mode of Payment"
          name="modeOfPayment"
          value={formData.modeOfPayment}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-6 bg-white p-6 shadow-md shadow-black rounded-md">
        <h2 className="text-xl font-bold mb-4">Working Days</h2>
        <InputField
          label="Company Working Days"
          name="companyWorkingDays"
          value={formData.companyWorkingDays}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-6 bg-white p-6 shadow-md shadow-black rounded-md">
        <h2 className="text-xl font-bold mb-4">Company Photos</h2>
        <FileInputField
          label="Company Logo"
          name="companyLogo"
          onChange={handleFileChange}
          required
        />
        <FileInputField
          label="Company Photos"
          name="companyPhotos"
          onChange={handleMultiFileChange}
          multiple
          required
        />
        <TextAreaField
          label="Company Description"
          name="companyDescription"
          value={formData.companyDescription}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-6 bg-white p-6 shadow-md shadow-black rounded-md">
        <h2 className="text-xl font-bold mb-4">Bank Details (Optional)</h2>
        <InputField
          label="Bank Account Type"
          name="bankAccountType"
          value={formData.bankAccountType}
          onChange={handleChange}
        />
        <InputField
          label="Account Holder Name"
          name="accountHolderName"
          value={formData.accountHolderName}
          onChange={handleChange}
        />
        <InputField
          label="Account Number"
          name="accountNumber"
          value={formData.accountNumber}
          onChange={handleChange}
        />
        <InputField
          label="IFSC Code"
          name="ifscCode"
          value={formData.ifscCode}
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-6 py-2 rounded-md"
      >
        Submit
      </button>
    </form>
  );
};

export default AddBusinessDetails;
