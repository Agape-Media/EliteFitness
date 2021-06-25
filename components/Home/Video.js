import React, { useState } from "react";
import ReactPlayer from "react-player";

const HomeVideo = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  return (
    <video src="/HomeVideo.mp4" autoPlay={false} controls />
    // <ReactPlayer
    //   playing={isPlaying}
    //   url="/HomeVideo.mp4"
    //   controls
    //   width="100%"
    //   config={{
    //     file: {
    //       attributes: {
    //         controlsList: "nodownload",
    //       },
    //     },
    //   }}
    // />
  );
};

export default HomeVideo;
