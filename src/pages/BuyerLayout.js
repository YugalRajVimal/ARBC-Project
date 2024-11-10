import React from "react";
import { Outlet} from "react-router-dom";
import NavBar from "../components/BuyerComponents/NavBar/NavBar";


const BuyerLayout = (props) => {
  const { isAuthenticatedBuyer, setIsAuthenticatedBuyer } = props;
  
  return (
    <>
      {isAuthenticatedBuyer ? (
        <div>
          <NavBar setIsAuthenticatedBuyer={setIsAuthenticatedBuyer} />
          <Outlet />
        </div>
      ) : 
      null}
    </>
  );
};

export default BuyerLayout;
