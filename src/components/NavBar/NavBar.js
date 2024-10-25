import React, { useEffect, useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";




const NavBar = () => {
    const [searchText , setSearchText] = useState('')
    const [debouncedSearchText, setDebouncedSearchText] = useState("");

    useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedSearchText(searchText);
      }, 500); // 500ms delay
  
      return () => {
        clearTimeout(handler);
      };
    }, [searchText]);
  
    useEffect(() => {
      if (debouncedSearchText) {
        // Perform the search
        console.log(debouncedSearchText, "Searching");
        // Your search function here, e.g., fetch data from an API
      }
    }, [debouncedSearchText]);
  
    const handleSearch = (e) => {
      e.preventDefault();
      setSearchText(e.target.value);
    };

  return (
    <div className=" h-[7vh] flex justify-around items-center shadow-[0px_0px_10px_2px_rgba(0,0,0,0.2)]">
        <div className="logo">
            LOGO
        </div>
        <div className="searchBar h-[70%] w-[60%] bg-[#f0f5ff] shadow flex justify-center items-center rounded-md text-md px-2">
           <IoSearch className='text-xl'/> 
           <input 
                type="text" id="searchBar" 
                placeholder={` Search for Products, Brands and More`} 
                className="bg-[#f0f5ff] w-full h-full p-2" 
                value={searchText}
                onChange={(e) => handleSearch(e)} 
            />
        </div>
        <div >
            <button className="flex justify-center items-center">
                Sign In 
                <IoIosArrowDown />
            </button>
        </div>
        <div>
            Become a Seller
        </div>
        <div>
            =
        </div>
    </div>
  )
}

export default NavBar