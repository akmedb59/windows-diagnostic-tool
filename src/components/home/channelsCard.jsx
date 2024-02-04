import React from 'react'
import { FaGlobe } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
const ChannelsCard = () => {
  return (
    <div className="border p-8 rounded-xl shadow-md">
      <div className="text-3xl mb-5 text-[#056cf2]">
        <FaGlobe />
      </div>
      <div className="text-xl font-bold py-2">Website</div>
      <div className="text-base text-gray-700">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat quas
        molestiae accusamus.
      </div>
      <div className="text-sm flex items-center gap-2 pt-5 text-[#056cf2]">
        <div>Learn more</div>
        <div className="text-xs">
          <FaChevronRight />
        </div>
      </div>
    </div>
  );
}

export default ChannelsCard