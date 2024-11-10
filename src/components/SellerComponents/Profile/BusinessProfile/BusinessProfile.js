import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

// const sellerData = {
//   companyName: "ARBC",
//   companyPhoneNumber: "123-456-7890",
//   companyOwnershipType: "Private Limited",
//   companyTurnover: 5000000,
//   companyYearOfEstablishment: 2010,
//   companyNumberOfEmployees: 200,
//   companyFaxNumber: "123-456-7891",
//   companyAddress: "1234 Tech Street",
//   companyPincode: "110001",
//   companyCity: "New Delhi",
//   companyState: "Delhi",
//   companyIdentifiers: {
//     gstNumber: "GST123456",
//     aadharNumber: "AADHAR1234",
//     panNumber: "PAN1234",
//     tanNumber: "TAN1234",
//     images: ["image1.jpg", "image2.jpg"],
//   },
//   companyLogo: "logo.jpg",
//   companyPhotos: ["photo1.jpg", "photo2.jpg"],
//   companyDescription:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi impedit ab at, beatae dolores perferendis!",
//   modeOfPayment: ["Cash", "Bank Transfer", "UPI"],
//   companyWorkingDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
// };

const BusinessProfile = () => {
  const [error, setError] = useState("");
  const [businessProfileDetails, setBusinessProfileDetails] = useState({});

  const getBusinessProfileDetails = async () => {
    try {
      //Fetch business profile details using axios
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/user/get-business-profile-details`,
        {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
        }
      );
      const data = await response.data;
      console.log(data.seller);
      setBusinessProfileDetails(data.seller);
      setEditableData({ ...businessProfileDetails });
      setInitialData({ ...businessProfileDetails });
    } catch (error) {
      console.log(error);
      setError("Something went wrong. Please try again later.");
    }
  };

  const [editableData, setEditableData] = useState({
    ...businessProfileDetails,
  });
  const [initialData, setInitialData] = useState({
    ...businessProfileDetails,
  });

  const [isEditing, setIsEditing] = useState({
    companyDetails: false,
    addressDetails: false,
    taxationDetails: false,
    paymentMethods: false,
    workingDays: false,
    companyPhotos: false,
  });

  const [isCollapsed, setIsCollapsed] = useState({
    companyDetails: true,
    addressDetails: true,
    taxationDetails: true,
    paymentMethods: true,
    workingDays: true,
    companyPhotos: true,
  });

  useEffect(() => {
    getBusinessProfileDetails();
  }, [isCollapsed]);

  const handleEditToggle = (section) => {
    setIsEditing((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleChange = (e, section) => {
    const { name, value } = e.target;
    setEditableData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [name]: value,
      },
    }));
  };

  const handleUpdate = (section) => {
    console.log("Updated Data:", editableData[section]);
    setIsEditing((prev) => ({ ...prev, [section]: false }));
    setInitialData({ ...editableData });
  };

  const handleCancel = (section) => {
    setEditableData({ ...initialData });
    setIsEditing((prev) => ({ ...prev, [section]: false }));
  };

  const handleCollapseToggle = (section) => {
    setIsCollapsed((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Preventing collapse toggle when clicking on buttons inside the section
  const handleButtonClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="container h-full w-full overflow-y-auto mx-auto p-6 space-y-8">
      {/* Header Section */}
      <header className="bg-[#e2a940] text-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold">{editableData.companyName}</h1>
        <p className="text-xl">{editableData.companyDescription}</p>
      </header>

      {/* Company Details Section */}
      <section className="bg-white p-6 rounded-lg shadow-md border border-gray-300">
        <h2
          className="text-2xl font-bold  text-[#e2a940] cursor-pointer flex justify-between items-center"
          onClick={(e) => {
            handleCollapseToggle("companyDetails");
          }}
        >
          Company Details
          <IoIosArrowDown />
        </h2>
        {!isCollapsed.companyDetails && (
          <div>
            {isEditing.companyDetails ? (
              <div className="space-y-4">
                <input
                  type="text"
                  name="companyPhoneNumber"
                  value={editableData.companyPhoneNumber}
                  onChange={(e) => handleChange(e, "companyDetails")}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  name="companyOwnershipType"
                  value={editableData.companyOwnershipType}
                  onChange={(e) => handleChange(e, "companyDetails")}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                  type="number"
                  name="companyTurnover"
                  value={editableData.companyTurnover}
                  onChange={(e) => handleChange(e, "companyDetails")}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                  type="number"
                  name="companyYearOfEstablishment"
                  value={editableData.companyYearOfEstablishment}
                  onChange={(e) => handleChange(e, "companyDetails")}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                  type="number"
                  name="companyNumberOfEmployees"
                  value={editableData.companyNumberOfEmployees}
                  onChange={(e) => handleChange(e, "companyDetails")}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  name="companyFaxNumber"
                  value={editableData.companyFaxNumber}
                  onChange={(e) => handleChange(e, "companyDetails")}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <button
                  onClick={(e) => {
                    handleButtonClick(e);
                    handleUpdate("companyDetails");
                  }}
                  className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                >
                  Update
                </button>
                <button
                  onClick={(e) => {
                    handleButtonClick(e);
                    handleCancel("companyDetails");
                  }}
                  className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <p>
                  <strong>Phone Number:</strong>{" "}
                  {editableData.companyPhoneNumber}
                </p>
                <p>
                  <strong>Ownership Type:</strong>{" "}
                  {editableData.companyOwnershipType}
                </p>
                <p>
                  <strong>Turnover:</strong> ₹{editableData.companyTurnover}
                </p>
                <p>
                  <strong>Year of Establishment:</strong>{" "}
                  {editableData.companyYearOfEstablishment}
                </p>
                <p>
                  <strong>Number of Employees:</strong>{" "}
                  {editableData.companyNumberOfEmployees}
                </p>
                <p>
                  <strong>Fax Number:</strong>{" "}
                  {editableData.companyFaxNumber || "N/A"}
                </p>
                <button
                  onClick={(e) => {
                    handleButtonClick(e);
                    handleEditToggle("companyDetails");
                  }}
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  Edit
                </button>
              </div>
            )}
          </div>
        )}
      </section>
      {/* Address Details Section */}
      <section
        className="bg-white p-6 rounded-lg shadow-md border border-gray-300"
        onClick={(e) => {
          handleCollapseToggle("addressDetails");
        }}
      >
        <h2 className="text-2xl font-bold  text-[#e2a940] flex justify-between items-center">
          Address Details
          <IoIosArrowDown />
        </h2>
        {!isCollapsed.addressDetails && (
          <div>
            {isEditing.addressDetails ? (
              <div className="space-y-4">
                <input
                  type="text"
                  name="companyAddress"
                  value={editableData.companyAddress}
                  onChange={(e) => handleChange(e, "addressDetails")}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  name="companyPincode"
                  value={editableData.companyPincode}
                  onChange={(e) => handleChange(e, "addressDetails")}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  name="companyCity"
                  value={editableData.companyCity}
                  onChange={(e) => handleChange(e, "addressDetails")}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  name="companyState"
                  value={editableData.companyState}
                  onChange={(e) => handleChange(e, "addressDetails")}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <button
                  onClick={(e) => {
                    handleButtonClick(e);
                    handleUpdate("addressDetails");
                  }}
                  className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                >
                  Update
                </button>
                <button
                  onClick={(e) => {
                    handleButtonClick(e);
                    handleCancel("addressDetails");
                  }}
                  className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <p>
                  <strong>Address:</strong> {editableData.companyAddress}
                </p>
                <p>
                  <strong>Pincode:</strong> {editableData.companyPincode}
                </p>
                <p>
                  <strong>City:</strong> {editableData.companyCity}
                </p>
                <p>
                  <strong>State:</strong> {editableData.companyState}
                </p>
                <button
                  onClick={(e) => {
                    handleButtonClick(e);
                    handleEditToggle("addressDetails");
                  }}
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  Edit
                </button>
              </div>
            )}
          </div>
        )}
      </section>

      {/* Taxation Details Section */}
      <section
        className="bg-white p-6 rounded-lg shadow-md border border-gray-300 "
        onClick={(e) => {
          handleCollapseToggle("taxationDetails");
        }}
      >
        <h2 className="text-2xl font-bold  text-[#e2a940] flex justify-between items-center">
          Taxation Details
          <IoIosArrowDown />
        </h2>
        {!isCollapsed.taxationDetails && (
          <div>
            {isEditing.taxationDetails ? (
              <div className="space-y-4">
                <input
                  type="text"
                  name="gstNumber"
                  value={editableData.companyIdentifiers.gstNumber}
                  onChange={(e) => handleChange(e, "taxationDetails")}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  name="aadharNumber"
                  value={editableData.companyIdentifiers.aadharNumber}
                  onChange={(e) => handleChange(e, "taxationDetails")}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  name="panNumber"
                  value={editableData.companyIdentifiers.panNumber}
                  onChange={(e) => handleChange(e, "taxationDetails")}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  name="tanNumber"
                  value={editableData.companyIdentifiers.tanNumber}
                  onChange={(e) => handleChange(e, "taxationDetails")}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <button
                  onClick={(e) => {
                    handleButtonClick(e);
                    handleUpdate("taxationDetails");
                  }}
                  className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                >
                  Update
                </button>
                <button
                  onClick={(e) => {
                    handleButtonClick(e);
                    handleCancel("taxationDetails");
                  }}
                  className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <p>
                  <strong>GST Number:</strong>{" "}
                  {editableData.companyIdentifiers.gstNumber}
                </p>
                <p>
                  <strong>Aadhar Number:</strong>{" "}
                  {editableData.companyIdentifiers.aadharNumber}
                </p>
                <p>
                  <strong>PAN Number:</strong>{" "}
                  {editableData.companyIdentifiers.panNumber}
                </p>
                <p>
                  <strong>TAN Number:</strong>{" "}
                  {editableData.companyIdentifiers.tanNumber}
                </p>
                <button
                  onClick={(e) => {
                    handleButtonClick(e);
                    handleEditToggle("taxationDetails");
                  }}
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  Edit
                </button>
              </div>
            )}
          </div>
        )}
      </section>

      {/* Repeat for other sections (Payment Methods, Working Days, Company Photos) */}

      {/* Payment Methods Section */}
      <section
        className="bg-white p-6 rounded-lg shadow-md border border-gray-300"
        onClick={(e) => {
          handleCollapseToggle("paymentMethods");
        }}
      >
        <h2 className="text-2xl font-bold  text-[#e2a940] flex justify-between items-center">
          Payment Methods
          <IoIosArrowDown />
        </h2>
        {!isCollapsed.paymentMethods && (
          <div>
            {isEditing.paymentMethods ? (
              <div className="space-y-4">
                <input
                  type="text"
                  name="modeOfPayment"
                  value={editableData.modeOfPayment.join(", ")}
                  onChange={(e) => handleChange(e, "paymentMethods")}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <button
                  onClick={(e) => {
                    handleButtonClick(e);
                    handleUpdate("paymentMethods");
                  }}
                  className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                >
                  Update
                </button>
                <button
                  onClick={(e) => {
                    handleButtonClick(e);
                    handleCancel("paymentMethods");
                  }}
                  className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <p>
                  <strong>Payment Methods:</strong>{" "}
                  {editableData.modeOfPayment.join(", ")}
                </p>
                <button
                  onClick={(e) => {
                    handleButtonClick(e);
                    handleEditToggle("paymentMethods");
                  }}
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  Edit
                </button>
              </div>
            )}
          </div>
        )}
      </section>

      {/* Working Days Section */}
      <section
        className="bg-white p-6 rounded-lg shadow-md border border-gray-300"
        onClick={(e) => {
          handleCollapseToggle("workingDays");
        }}
      >
        <h2 className="text-2xl font-bold  text-[#e2a940] flex justify-between items-center">
          Working Days
          <IoIosArrowDown />
        </h2>
        {!isCollapsed.workingDays && (
          <div>
            {isEditing.workingDays ? (
              <div className="space-y-4">
                <input
                  type="text"
                  name="companyWorkingDays"
                  value={editableData.companyWorkingDays.join(", ")}
                  onChange={(e) => handleChange(e, "workingDays")}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <button
                  onClick={(e) => {
                    handleButtonClick(e);
                    handleUpdate("workingDays");
                  }}
                  className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                >
                  Update
                </button>
                <button
                  onClick={(e) => {
                    handleButtonClick(e);
                    handleCancel("workingDays");
                  }}
                  className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <p>
                  <strong>Working Days:</strong>{" "}
                  {editableData.companyWorkingDays.join(", ")}
                </p>
                <button
                  onClick={(e) => {
                    handleButtonClick(e);
                    handleEditToggle("workingDays");
                  }}
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  Edit
                </button>
              </div>
            )}
          </div>
        )}
      </section>

      {/* Company Photos Section */}
      {/* <section
        className="bg-white p-6 rounded-lg shadow-md border border-gray-300"
        onClick={(e) => {
          handleCollapseToggle("companyPhotos");
        }}
      >
        <h2 className="text-2xl font-bold  text-[#e2a940] flex justify-between">
          Company Photos
        </h2>
        {!isCollapsed.companyPhotos && (
          <div>
            {isEditing.companyPhotos ? (
              <div className="space-y-4">
                <input
                  type="text"
                  name="companyPhotos"
                  value={editableData.companyPhotos.join(", ")}
                  onChange={(e) => handleChange(e, "companyPhotos")}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <button
                  onClick={(e) => {
                    handleButtonClick(e);
                    handleUpdate("companyPhotos");
                  }}
                  className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                >
                  Update
                </button>
                <button
                  onClick={(e) => {
                    handleButtonClick(e);
                    handleCancel("companyPhotos");
                  }}
                  className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <p>
                  <strong>Photos:</strong>{" "}
                  {editableData.companyPhotos.join(", ")}
                </p>
                <button
                  onClick={(e) => {
                    handleButtonClick(e);
                    handleEditToggle("companyPhotos");
                  }}
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  Edit
                </button>
              </div>
            )}
          </div>
        )}
      </section> */}
    </div>
  );
};

export default BusinessProfile;
