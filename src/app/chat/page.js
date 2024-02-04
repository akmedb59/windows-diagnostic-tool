"use client";
import React, { useState } from "react";

import Profilelist from "@/components/chat/profilelist";
import Chatbox from "@/components/chat/chatbox";
import Faq from "@/components/chat/faq";

const Login = () => {
  const [isChecked, setIsChecked] = useState(false); // initialize state

  const handleCheckboxChange = () => {
    // function to toggle state
    setIsChecked(!isChecked);
  };
  return (
    <div
      style={{
        backgroundImage: `url("/auth-bg.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full h-full min-h-screen px-10 md:px-20 bg-gray-200 bg-opacity-55">
        <div className="py-5 flex items-center gap-3">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <div className="w-11 h-6 bg-themeDarkGrey peer-focus:ring-blue-300 rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-themeBlue"></div>
          </label>
          <div className="font-semibold">Chat Now</div>
        </div>
        <div className="max-w-[1200px] mx-auto py-10">
          {isChecked ? <Chatbox /> : <Faq />}
        </div>
        {/* <div className='w-full sm:w-1/3'> */}
        {/* <Profilelist /> */}
        {/* </div> */}

        {/* <div className='hidden sm:block sm:w-2/3'> */}

        {/* </div> */}

        {/* <Chatheader />
      <Chatprofile />
      <Inputmessage /> */}
      </div>
    </div>
  );
};

export default Login;
