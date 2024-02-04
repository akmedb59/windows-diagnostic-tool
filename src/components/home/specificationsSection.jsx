import Headers from "@/components/common/headers";
import React from "react";
import SpecificationTag from "./specificationTag";
import Image from "next/image";

const SpecificationsSection = () => {
  return (
    <div className="p-10 md:p-20 max-w-[1400px] mx-auto">
      <div className="w-3/4 md:w-2/4 mx-auto text-center">
        <Headers
          title="Advance AI Technology"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae omnis quo ad quam veritatis, molestias incidunt blanditiis adipisci perferendis quidem ut maiores provident cupiditate velit dolorum aut aliquam laudantium error!"
        />
      </div>
      <div className="grid md:grid-cols-8 mx-auto">
        <div className="md:col-span-2 flex flex-col items-center justify-center gap-10 py-10">
          {Array.from({ length: 3 }).map((_, index) => (
            <SpecificationTag
              key={index}
              text="Intelligent Conversations"
              customClass={
                index === 0
                  ? "bg-[#056cf2] text-white"
                  : index === 1
                  ? " mr-5 bg-white"
                  : "bg-white"
              }
            />
          ))}
        </div>
        <div className="md:col-span-4 flex items-center justify-center h-96 relative">
          {/* Image */}
          <div className="w-64 h-52 bg-[#056cf2] rounded-xl bg-opacity-20"></div>
          <Image
            src="/3d-robot-2.png"
            width={300}
            height={300}
            alt="ai-image"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-fit "
          />
        </div>
        <div className="md:col-span-2 flex flex-col items-center justify-center gap-10 py-10">
          {Array.from({ length: 3 }).map((_, index) => (
            <SpecificationTag
              key={index}
              text="Intelligent Conversations"
              customClass={index === 1 ? " ml-5 bg-white" : "bg-white"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecificationsSection;
