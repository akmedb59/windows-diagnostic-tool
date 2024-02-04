import React from "react";

const Description = ({ text }) => {
  return (
    <div className="text-sm font-light">
      {text
        ? text
        : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia iure sed,`}
    </div>
  );
};

export default Description;
