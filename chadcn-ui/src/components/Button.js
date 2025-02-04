import React from "react";

const Button = ({ text, className = "" }) => {
  return (
    <button className={`px-6 py-2 rounded-lg font-semibold text-white ${className}`}>
      {text}
    </button>
  );
};

export default Button;
