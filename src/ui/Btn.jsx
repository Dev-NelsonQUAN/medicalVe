// src/ui/Btn.jsx
import React from 'react';

const Btn = ({type= 'button', bg, color, px, py, mt, btnText }) => {
  return (
    <button
    type={type}
      className={`${bg} ${color} ${px} ${py} ${mt} rounded-md cursor-pointer`} // Added rounded-md for better styling
    >
      {btnText}
    </button>
  );
};

export default Btn;

// import React from 'react'

// const Btn = ({ bg, color, px, py, btnText }) => {
//   return (
//     <button
//       className={`${bg} ${color} ${px} ${py} cursor-pointer`}
//     >
//       {btnText}
//     </button>
//   )
// }

// export default Btn