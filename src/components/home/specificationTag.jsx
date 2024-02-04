import React from 'react'

const SpecificationTag = ({ text = "SpecificationTag" , customClass="bg-white" }) => {
  return <div className={'border px-5 py-3 whitespace-nowrap w-fit rounded-xl '+customClass}>{text}</div>;
};

export default SpecificationTag