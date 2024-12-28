// import { useState } from "react";
// import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

// const SidePanel = (props) => {
//   const { setSelectedPage, selectedPage, subscribedStatus, handleSubscribe} = props;

//   const [isProfileOpen, setIsProfileOpen] = useState(false);
//   const [isLeadsOpen, setIsLeadsOpen] = useState(false);
//   const [isProductsOpen, setIsProductsOpen] = useState(false);

//   const toggleProfile = () => setIsProfileOpen(!isProfileOpen);
//   const toggleLeads = () => setIsLeadsOpen(!isLeadsOpen);
//   const toggleProducts = () => setIsProductsOpen(!isProductsOpen);

//   return (
//     <div className="w-1/5 h-full p-4">
//       <ul className="space-y-4 flex flex-col justify-center ">
//         {!subscribedStatus ?(
//           <button onClick={()=>handleSubscribe(localStorage.getItem('userId'))} className="bg-red-500 hover:bg-red-700 text-white px-6 py-1 rounded-md">
//             Subscribe
//           </button>
//         ):(<h5 className="text-green-500">Subscribed Seller</h5>)}
//         <li
//           className={`p-2 rounded hover:bg-[#ffd383] shadow-lg ${selectedPage === "Dashboard" && "bg-[#ffd383]"}`}
//           onClick={() => setSelectedPage("Dashboard")}
//         >
//           <h4 className="flex gap-2 items-center">Dashboard</h4>
//         </li>
//         <li className={`p-2 rounded hover:bg-[#ffd383] shadow-lg`}>
//           <h4
//             className="flex gap-2 justify-between items-center cursor-pointer"
//             onClick={toggleProfile}
//           >
//             Profile {isProfileOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
//           </h4>
//           {isProfileOpen && (
//             <ul className="pl-4 mt-2 space-y-2">
//               <li
//                 className={`hover:bg-[#ffbe48] p-2 rounded shadow-lg ${selectedPage === "UserProfile" && "bg-[#ffbe48]"}`}
//                 onClick={() => setSelectedPage("UserProfile")}
//               >
//                 User Profile
//               </li>
//               <li
//                 className={`hover:bg-[#ffbe48] p-2 rounded shadow-lg ${selectedPage === "BusinessProfile" && "bg-[#ffbe48]"}`}
//                 onClick={() => setSelectedPage("BusinessProfile")}
//               >
//                 Business Profile
//               </li>
//               <li
//                 className={`hover:bg-[#ffbe48] p-2 rounded shadow-lg ${selectedPage === "BankDetails" && "bg-[#ffbe48]"}`}
//                 onClick={() => setSelectedPage("BankDetails")}
//               >
//                 Bank Details
//               </li>
//             </ul>
//           )}
//         </li>
//         <li className={`p-2 rounded hover:bg-[#ffd383] shadow-lg`}>
//           <h4
//             className="flex gap-2 justify-between items-center cursor-pointer"
//             onClick={toggleLeads}
//           >
//             Leads and Inquiries{" "}
//             {isLeadsOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
//           </h4>
//           {isLeadsOpen && (
//             <ul className="pl-4 mt-2 space-y-2">
//               <li
//                 className={`hover:bg-[#ffbe48] p-2 rounded shadow-lg ${selectedPage === "ReceivedInquiries" && "bg-[#ffbe48]"}`}
//                 onClick={() => setSelectedPage("ReceivedInquiries")}
//               >
//                 Received Inquiries
//               </li>
//               <li
//                 className={`hover:bg-[#ffbe48] p-2 rounded shadow-lg ${selectedPage === "ActiveInquiries" && "bg-[#ffbe48]"}`}
//                 onClick={() => setSelectedPage("ActiveInquiries")}
//               >
//                 Active Inquiries
//               </li>
//               <li
//                 className={`hover:bg-[#ffbe48] p-2 rounded shadow-lg ${selectedPage === "CompletedInquiries" && "bg-[#ffbe48]"}`}
//                 onClick={() => setSelectedPage("CompletedInquiries")}
//               >
//                 Completed Inquiries
//               </li>
//             </ul>
//           )}
//         </li>
//         <li className={`p-2 rounded hover:bg-[#ffd383] shadow-lg`}>
//           <h4
//             className="flex gap-2 justify-between items-center cursor-pointer"
//             onClick={toggleProducts}
//           >
//             Manage Products{" "}
//             {isProductsOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
//           </h4>
//           {isProductsOpen && (
//             <ul className="pl-4 mt-2 space-y-2">
//               <li
//                 className={`hover:bg-[#ffbe48] p-2 rounded shadow-lg ${selectedPage === "AddNewProduct" && "bg-[#ffbe48]"}`}
//                 onClick={() => setSelectedPage("AddNewProduct")}
//               >
//                 Add New Product
//               </li>
//               <li
//                 className={`hover:bg-[#ffbe48] p-2 rounded shadow-lg ${selectedPage === "MyProducts" && "bg-[#ffbe48]"}`}
//                 onClick={() => setSelectedPage("MyProducts")}
//               >
//                 My Products
//               </li>
//             </ul>
//           )}
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default SidePanel;

import { setEvaluated } from "ajv/dist/compile/util";
import { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";

const SidePanel = (props) => {
  const { setSelectedPage, selectedPage, subscribedStatus, handlePackage } =
    props;

  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isLeadsOpen, setIsLeadsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(false); // State to manage panel visibility

  const toggleProfile = () => setIsProfileOpen(!isProfileOpen);
  const toggleLeads = () => setIsLeadsOpen(!isLeadsOpen);
  const toggleProducts = () => setIsProductsOpen(!isProductsOpen);
  const togglePanel = () => setIsPanelOpen(!isPanelOpen);

  useEffect(() => {
    setIsPanelOpen(false);
  }, [selectedPage]);

  return (
    <div className="relative z-[100]">
      <button
        className="md:hidden p-2 bg-gray-700 text-white rounded-md m-2"
        onClick={togglePanel}
      >
        <IoIosMenu size={24} />
      </button>
      <div
        className={`fixed md:relative ${
          isPanelOpen ? "block" : "hidden"
        } md:block w-full h-full p-4 bg-white shadow-lg`}
      >
        <ul className="space-y-4 flex flex-col justify-center">
          {!subscribedStatus ? (
            <button
              
              onClick={()=>handlePackage(true)}
              className="bg-red-500 hover:bg-red-700 text-white px-6 py-1 rounded-md"
            >
              Subscribe
            </button>
          ) : (
            <h5 className="text-green-500">Subscribed Seller</h5>
          )}
          <li
            className={`p-2 rounded hover:bg-[#ffd383] shadow-lg ${
              selectedPage === "Dashboard" && "bg-[#ffd383]"
            }`}
            onClick={() => setSelectedPage("Dashboard")}
          >
            <h4 className="flex gap-2 items-center">Dashboard</h4>
          </li>
          <li className={`p-2 rounded hover:bg-[#ffd383] shadow-lg`}>
            <h4
              className="flex gap-2 justify-between items-center cursor-pointer"
              onClick={toggleProfile}
            >
              Profile {isProfileOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </h4>
            {isProfileOpen && (
              <ul className="pl-4 mt-2 space-y-2">
                <li
                  className={`hover:bg-[#ffbe48] p-2 rounded shadow-lg ${
                    selectedPage === "UserProfile" && "bg-[#ffbe48]"
                  }`}
                  onClick={() => setSelectedPage("UserProfile")}
                >
                  User Profile
                </li>
                <li
                  className={`hover:bg-[#ffbe48] p-2 rounded shadow-lg ${
                    selectedPage === "BusinessProfile" && "bg-[#ffbe48]"
                  }`}
                  onClick={() => setSelectedPage("BusinessProfile")}
                >
                  Business Profile
                </li>
                <li
                  className={`hover:bg-[#ffbe48] p-2 rounded shadow-lg ${
                    selectedPage === "BankDetails" && "bg-[#ffbe48]"
                  }`}
                  onClick={() => setSelectedPage("BankDetails")}
                >
                  Bank Details
                </li>
              </ul>
            )}
          </li>
          <li className={`p-2 rounded hover:bg-[#ffd383] shadow-lg`}>
            <h4
              className="flex gap-2 justify-between items-center cursor-pointer"
              onClick={toggleLeads}
            >
              Leads and Inquiries{" "}
              {isLeadsOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </h4>
            {isLeadsOpen && (
              <ul className="pl-4 mt-2 space-y-2">
                <li
                  className={`hover:bg-[#ffbe48] p-2 rounded shadow-lg ${
                    selectedPage === "ReceivedInquiries" && "bg-[#ffbe48]"
                  }`}
                  onClick={() => setSelectedPage("ReceivedInquiries")}
                >
                  Received Inquiries
                </li>
                <li
                  className={`hover:bg-[#ffbe48] p-2 rounded shadow-lg ${
                    selectedPage === "ActiveInquiries" && "bg-[#ffbe48]"
                  }`}
                  onClick={() => setSelectedPage("ActiveInquiries")}
                >
                  Active Inquiries
                </li>
                <li
                  className={`hover:bg-[#ffbe48] p-2 rounded shadow-lg ${
                    selectedPage === "CompletedInquiries" && "bg-[#ffbe48]"
                  }`}
                  onClick={() => setSelectedPage("CompletedInquiries")}
                >
                  Completed Inquiries
                </li>
              </ul>
            )}
          </li>
          <li className={`p-2 rounded hover:bg-[#ffd383] shadow-lg`}>
            <h4
              className="flex gap-2 justify-between items-center cursor-pointer"
              onClick={toggleProducts}
            >
              Manage Products{" "}
              {isProductsOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </h4>
            {isProductsOpen && (
              <ul className="pl-4 mt-2 space-y-2">
                <li
                  className={`hover:bg-[#ffbe48] p-2 rounded shadow-lg ${
                    selectedPage === "AddNewProduct" && "bg-[#ffbe48]"
                  }`}
                  onClick={() => setSelectedPage("AddNewProduct")}
                >
                  Add New Product
                </li>
                <li
                  className={`hover:bg-[#ffbe48] p-2 rounded shadow-lg ${
                    selectedPage === "MyProducts" && "bg-[#ffbe48]"
                  }`}
                  onClick={() => setSelectedPage("MyProducts")}
                >
                  My Products
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidePanel;
