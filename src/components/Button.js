import React from "react";
/* 

import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { slideLeft, slideRight } from "../utils/HorizontalSliding";

const Button = ({ name }) => {
  return (
    <div className="relative flex items-center">
      <MdChevronLeft
        className="opacity-50 cursor-pointer hover:opacity-100"
        onClick={slideLeft}
        size={40}
      />

      <div
        id="slider"
        className="w-full h-full overflow-x-auto scroll whitespace-nowrap scroll-smooth "
      >
        {name.map((Eachname, index) => (
          <button key={index} className="px-5 py-2 m-2 bg-gray-200 rounded-lg">
            {Eachname}
          </button>
        ))}
      </div>
      <MdChevronRight
        className="opacity-50 cursor-pointer hover:opacity-100"
        onClick={slideRight}
        size={40}
      />
    </div>
  );
};

*/

const Button = ({ name }) => {
  return (
    <div className="w-auto h-auto">
      <button className="px-5 py-2 m-2 bg-gray-200 rounded-lg ">{name}</button>
    </div>
  );
};

export default Button;
