"use client";
import React from "react";
import ReactPlayer from "react-player";

type Props = {};

const MusicList = (props: Props) => {
  return (
    <div className="flex justify-center align-center">
      <ReactPlayer url="https://www.youtube.com/watch?v=uDgBO6brbSI" />
    </div>
  );
};

export default MusicList;
