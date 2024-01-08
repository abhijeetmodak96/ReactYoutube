import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      {name.map((Eachname) => (
        <button className="px-5 py-2 m-2 bg-gray-200 rounded-lg">
          {Eachname}
        </button>
      ))}
    </div>
  );
};

export default Button;
