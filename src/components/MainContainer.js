import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="flex-wrap items-center ">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
