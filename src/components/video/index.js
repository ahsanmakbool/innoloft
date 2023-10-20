import React from "react";

const VideoComponent = ({ productDetail }) => {
  return (
    <div className="flex flex-col md:flex-row mt-2 mb-2">
      <div className="hidden md:flex w-1/4 justify-start items-start p-4"></div>
      <div className="w-full flex flex-col md:flex-row border border-gray-200">
        <div className="w-full flex md:w-1/4 justify-start items-start bg-white-300 p-4">
          <h2 className="text-xl">Video</h2>
        </div>
        <div className="flex justify-center items-center mt-2">
          <video controls width="640" height="360">
            <source src={productDetail?.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default VideoComponent;
