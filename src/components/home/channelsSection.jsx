import Headers from "@/components/common/headers";
import React from "react";
import ChannelsCard from "./channelsCard";

const ChannelsSection = () => {
  return (
    <div className="p-10 md:p-20 max-w-[1400px] mx-auto">
      <div className="w-3/4 md:w-3/4 mx-auto text-center">
        <Headers
          title="Stay Connected on All Channels"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae omnis quo ad quam veritatis, molestias incidunt blanditiis adipisci perferendis quidem ut maiores provident cupiditate velit dolorum aut aliquam laudantium error!"
        />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-auto py-10 gap-5">
        <ChannelsCard />
        <ChannelsCard />
        <ChannelsCard />
      </div>
    </div>
  );
};

export default ChannelsSection;
