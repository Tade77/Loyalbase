import React from "react";

const Inputs = ({ prefix, customStyle, type, placeholder, width }) => {
  return (
    <input
      className={customStyle}
      icon={prefix}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Inputs;
