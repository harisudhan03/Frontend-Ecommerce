import React, { useContext, useEffect, useState } from 'react'
import { Shopcontext } from '../context/Shopcontext'
import { assets } from '../assets/assets'
import { useLocation } from 'react-router-dom'

const SearchBar = () => {

    const { search, setSearch, showSearch, setShowSearch } = useContext(Shopcontext)
    const [visibel, setVisibel] = useState(false)
    
    let location = useLocation();

    useEffect(() => {
        if (location.pathname.includes("collection")) {
            setVisibel(true);
        } else {
            setVisibel(false);
        }
    },[location])

  return showSearch && visibel ? (
    <div className="border-t text-center border-gray-300 bg-gray-50">
      <div className="inline-flex justify-center items-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          className="flex-1 bg-inherit text-sm outline-none"
          type="text"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <img className="w-4" src={assets.search_icon} alt="" />
      </div>
      <img
        className="w-3 inline cursor-pointer"
        onClick={() => setShowSearch(false)}
        src={assets.cross_icon}
        alt=""
      />
    </div>
  ) : null;
}

export default SearchBar