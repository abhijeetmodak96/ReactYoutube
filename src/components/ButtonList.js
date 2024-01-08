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
];

const ButtonList = () => {
  return (
    <div className="flex">
      <Button name={list} />
    </div>
  );
};

export default ButtonList;
