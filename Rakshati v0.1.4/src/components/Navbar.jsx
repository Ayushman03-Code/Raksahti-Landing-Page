import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';
import Blogo from '@/assets/images/rakshati_Blogo.png';

const Navbar = () => {
   const [search, setSearch] = useState('');

   return (
      <div className="h-20 w-full max-w-6xl mx-auto flex items-center justify-between bg-red-100 px-10">
         <img src={Blogo} alt="" className="h-15 w-40" />
         <div className="border-2 rounded-xl px-3 h-10 bg-white space-x-2 flex items-center w-[400px]">
            <MdSearch className="text-gray-500 text-xl" />
            <input
               className="focus:outline-none w-full"
               type="text"
               placeholder="What are you looking for today?"
               value={search}
               onChange={(e) => setSearch(e.target.value)}
            />
         </div>
         <button className="bg-success text-sm h-11 px-4 rounded-md text-white ">
            Login/Register
         </button>
      </div>
   );
};

export default Navbar;
