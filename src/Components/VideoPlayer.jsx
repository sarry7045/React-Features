import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  return (
    <div className="container text-center my-4">
      <h5 className="text-center my-2">React VideoPlayer:-</h5>
      <ReactPlayer
        width="400px"
        height="200px"
        controls
        className="container text-center my-4"
        url="https://www.youtube.com/watch?v=AETFvQonfV8  "
      />
    </div>
  );
};

export default VideoPlayer;
