import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/BuyerComponents/NavBar/NavBar'


const BuyerLayout = () => {
  return (
    <div>
        <NavBar />
        <Outlet />
    </div>
  )
}

export default BuyerLayout