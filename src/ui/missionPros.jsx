import React from "react";

const MissionItem = ({ image, text }) => (
  <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg">
    <img src={image} alt="Mission Step" className="w-full max-w-xs rounded-lg mb-4" />
    <p className="text-lg text-gray-800 max-lg:text-[15px] max-md:text-[14px]">{text}</p>
  </div>
);

export default MissionItem;
