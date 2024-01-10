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
  "stock markets",
];

const ButtonList = () => {
  return (
    <div className="flex">
      <Button name={list} />
    </div>
  );
};

export default ButtonList;
