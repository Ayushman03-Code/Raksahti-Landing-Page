import React from 'react';
import { MdOutlineChevronRight } from 'react-icons/md';

const ExploreButton = ({ icon, text, to }) => {
   return (
      <a
         href={to}
         className="flex items-center justify-between pl-6 p-4 border-2 rounded-xl w-[480px] hover:shadow-sm hover:shadow-gray-400"
      >
         <div className="flex items-center">
            <img src={icon || ''} alt="" height={36} width={36} />
            <p className="text-lg ml-6">{text}</p>
         </div>
         <MdOutlineChevronRight fontSize={28} />
      </a>
   );
};

export default ExploreButton;
