import React from 'react'
import Home from '../components/HomePage/Home';
import FeaturedProducts from './FeaturedProducts';
import Categories from '../components/Categories/Categories';

const LandingPage = () => {
  return (
    <div className="h-[93vh] overflow-y-auto">
      <Home />
      <FeaturedProducts />
      <Categories />
    </div>
  )
}

export default LandingPage;