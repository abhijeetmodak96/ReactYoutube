import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Live",
  "Gaming",
  "Cricket",
  "news",
  "songs",
  "cooking",
  "sports",
  "astrology",
  "History",
  "stocks",
  "History",
];

const ButtonList = () => {
  return (
    // <div className="flex">
    //   <Button name={list} />
    // </div>
    <div className="rounded-lg flex border bg-slate-100 overflow-x-scroll ">
      {list.map((listItem, index) => (
        <Button key={index} name={listItem} />
      ))}
    </div>
  );
};

export default ButtonList;
