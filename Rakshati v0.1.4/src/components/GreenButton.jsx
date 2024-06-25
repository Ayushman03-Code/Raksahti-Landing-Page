import React from 'react';

const GreenButton = ({ text, className, onClick }) => {
   return (
      <button
         onClick={onClick}
         className={`${className} bg-success text-sm h-11 px-4 rounded-md text-white w-32`}
      >
         {text}
      </button>
   );
};

export default GreenButton;
