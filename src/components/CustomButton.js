import React from 'react';
import './CustomButton.css';

function CustomButton({ text, onClick, variant = 'primary', type = 'button' }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`custom-button ${variant}`}
    >
      {text}
    </button>
  );
}

export default CustomButton; 