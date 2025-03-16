import React from 'react';

const Btn = ({ type = 'button', bg, color, px, py, mt, btnText, txtSize, width, fontWeight, hoverBg,onClick}) => {
  return (
    <button
      type={type}
      className={`${bg} ${color} ${px} ${py} ${mt} ${txtSize} ${fontWeight} ${hoverBg} ${width} rounded-md cursor-pointer`}
      onClick={onClick}
    >
      {btnText}
    </button>
  );
};

export default Btn;
