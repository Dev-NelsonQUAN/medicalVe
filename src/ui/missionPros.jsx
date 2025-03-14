// import React from "react";


// const MissionItem = ({ image, text }) => (
//   <div className="text-center">
//     <img src={image} alt="Mission Step" className="mx-auto mb-4 w-2/3 rounded-lg shadow-lg" />
//     <p className="text-lg text-gray-800">{text}</p>
//   </div>
// );

// export default MissionItem;

// import React from "react";

// const MissionItem = ({ image, text, reverse }) => (
//   <div className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-6`}>
//     <img src={image} alt="Mission Step" className="w-full md:w-1/2 rounded-lg shadow-lg" />
//     <p className="text-lg text-gray-800 w-full md:w-1/2 text-center md:text-left">{text}</p>
//   </div>
// );

// export default MissionItem;


// import React from "react";

// const MissionItem = ({ image, text }) => (
//   <div className="flex flex-col items-center text-center w-full">
//     <img src={image} alt="Mission Step" className="w-full md:w-2/3 rounded-lg shadow-lg mb-4" />
//     <p className="text-lg text-gray-800 w-full md:w-2/3">{text}</p>
//   </div>
// );

// export default MissionItem;


import React from "react";

const MissionItem = ({ image, text }) => (
  <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg">
    <img src={image} alt="Mission Step" className="w-full max-w-xs rounded-lg mb-4" />
    <p className="text-lg text-gray-800">{text}</p>
  </div>
);

export default MissionItem;
