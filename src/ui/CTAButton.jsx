import React from "react";

const Button = ({ text, className, onClick }) => {
  return (
    <button
      className={`px-6 py-2 rounded-lg font-semibold ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
