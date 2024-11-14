import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "../components/AdminComponents/NavBar/NavBar";


const AdminLayout = (props) => {
  const navigate = useNavigate();
  const { isAuthenticatedAdmin, setIsAuthenticatedAdmin } = props;

//   useEffect(() => {
//     if (localStorage.getItem("isAuthenticatedAdmin") === "false") {
//       navigate("/admin-signin");
//     }
//     if (
//       !localStorage.getItem("token") ||
//       !localStorage.getItem("isAuthenticatedAdmin")
//     ) {
//       navigate("/admin-signin");
//     }
//   }, [navigate]);

  return (
    <>
      {/* {localStorage.getItem("token") && isAuthenticatedAdmin && ( */}
        <div>
            <NavBar />
          <Outlet />
        </div>
    {/* //   )} */}
    </>
  );
};

export default AdminLayout;
