import { useEffect, useState } from "react";
import AdminSidePanel from "../components/AdminComponents/SidePanel/AdminSidePanel";
import AddCategory from "../components/AdminComponents/Category/AddCategory";
import AddSubCategory from "../components/AdminComponents/SubCategory/AddSubCategory";
import BuyerList from "../components/AdminComponents/Profile/BuyerList";
import SellerList from "../components/AdminComponents/Profile/SellerList";

const AdminLandingPage = () => {
  const [selectedPage, setSelectedPage] = useState("Category");


  return (
    <div className="h-[93vh] overflow-y-auto overflow-x-hidden flex bg-[#fdfef4]">
      <AdminSidePanel
        setSelectedPage={setSelectedPage}
        selectedPage={selectedPage}
      />

      <div className="w-4/5 h-full mx-1 bg-[#fdfef4] p-4">
          <>
            {/* {selectedPage === "Dashboard" && <Dashboard />} */}
            {selectedPage === "Category" && <AddCategory />}
            {selectedPage === "SubCategory" && <AddSubCategory />}
            {selectedPage === "BuyerProfile" && <BuyerList />}
            {selectedPage === "SellerProfile" && <SellerList />}
          </>
      </div>
    </div>
  );
};

export default AdminLandingPage;
