import Button from "@/components/common/button";
import Headers from "@/components/common/headers";
import React from "react";
import Image from "next/image";

const LearnMoreSection = () => {
  return (
    <div className="p-10 md:p-20 max-w-[1400px] mx-auto">
      <div className="grid md:grid-cols-2 mx-auto">
        <div className="mx-auto h-full relative">
          <div className="w-64 h-52 rotate-45 bg-[#056cf2] rounded-xl opacity-20"></div>
          <Image
            src="/3d-robot-chatbot-1.png"
            width={500}
            height={500}
            alt="ai-image"
            className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        <div className="flex flex-col gap-10 h-full">
          <Headers
            title="Improve Customer Satisfaction"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae omnis quo ad quam veritatis, molestias incidunt blanditiis adipisci perferendis quidem ut maiores provident cupiditate velit dolorum aut aliquam laudantium error!"
          />
          <Button
            button="Learn More"
            customClass="bg-[#056cf2] text-white w-fit"
          />
        </div>
      </div>
    </div>
  );
};

export default LearnMoreSection;
