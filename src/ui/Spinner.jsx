import React from 'react';

const Spinner = ({ size = '2em', color = '#3498db', borderWidth = '0.25em', animationDuration = '1s' }) => {
  const spinnerStyle = {
    border: `${borderWidth} solid transparent`,
    borderTop: `${borderWidth} solid ${color}`,
    borderRadius: '50%',
    width: size,
    height: size,
    animation: `spin ${animationDuration} linear infinite`,
    display: 'inline-block',
  };

  const keyframesStyle = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;

  return (
    <>
      <style>{keyframesStyle}</style>
      <div style={spinnerStyle} className="spinner" />
    </>
  );
};

export default Spinner;