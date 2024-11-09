import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/SellerComponents/NavBar/NavBar';



const SellerLayout = () => {
  return (
    <div>
        <NavBar />
        <Outlet />
    </div>
  )
}

export default SellerLayout;