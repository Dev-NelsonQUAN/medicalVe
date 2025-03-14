import React from 'react';

const Btn = ({ type = 'button', bg, color, px, py, mt, btnText }) => {
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
