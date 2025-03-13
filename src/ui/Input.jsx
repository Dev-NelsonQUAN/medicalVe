import React from 'react'

const Input = ({ labelText, htmlFor, type, placeholder, border, outline, px, py, rounded, w, p, bg, borderCol }) => {
  return (
    <div>
      {labelText && <label 
      htmlFor={htmlFor}
      className='font-medium text-[18px] mb-2'>{labelText}</label>}

      <input
        className={`${border} ${outline} ${px} ${py} ${rounded} ${w} ${p} ${bg} ${borderCol} `}
        type={type}
        placeholder={placeholder}

      />
    </div>
  )
}

export default Input