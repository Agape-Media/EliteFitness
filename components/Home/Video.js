import React, { useState } from "react";

const HomeVideo = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  return <video src="/HomeVideo.mp4" autoPlay muted controls />;
};

export default HomeVideo;
