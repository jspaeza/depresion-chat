import React from "react";

function VideoSection() {
  return (
    <div className="flex justify-center items-center space-x-8 my-10">
      {/* Primer video */}
      <div className="w-full">
        <iframe
          width="100%"
          height="270"
          src="https://www.youtube.com/embed/XwD6YO_aaYs"
          title="Video 1"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Segundo video */}
      <div className="w-full">
        <iframe
          width="100%"
          height="270"
          src="https://www.youtube.com/embed/i4dwATyTcCk"
          title="Video 2"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default VideoSection;
