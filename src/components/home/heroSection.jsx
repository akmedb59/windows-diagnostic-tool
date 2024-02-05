import Button from "@/components/common/button";
import Description from "@/components/common/description";
import React from "react";
import TrustedBrands from "./trustedBrands";
import Image from "next/image";
import Link from "next/link";
const HeroSection = () => {
  return (
    <div className="min-h-screen p-10 md:p-20 relative grid md:grid-cols-2 items-center max-w-[1400px] mx-auto">
      <div className="text-white flex flex-col gap-5 2xl:gap-10 mt-[40px]">
        <div className="text-4xl py-5 lg:text-6xl font-bold ">
          Revolutionize Customer Service with Chatbot
        </div>
        <Description
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia iure sed,
      ipsa eos accusamus amet reprehenderit dolores ipsam. Eum nobis quae
      voluptatem delectus commodi placeat deserunt odio laudantium, similique
      sapiente."
        />
        <Link href="/chat">
          <Button
            button="Get Started"
            customClass="bg-white text-black w-fit"
          />
        </Link>

        <div className="mt-5"></div>
        <Description text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia iure sed," />
        <TrustedBrands />
      </div>
      <div className="flex items-center justify-center w-full h-full">
        <Image
          src="/3d-robot-3.png"
          width={300}
          height={300}
          alt="ai-image"
          className="z-20 h-full w-fit "
        />
      </div>
    </div>
  );
};

export default HeroSection;
