"use client";
import React, { useState } from "react";
import Link from "next/link";
import Button from "../button";
import { IoMenu } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const navLinks = [
    {
      title: "About",
      link: "#",
    },
    {
      title: "Services",
      link: "#",
    },
    {
      title: "Blog",
      link: "#",
    },
    {
      title: "Pricing",
      link: "#",
    },
    {
      title: "FAQ",
      link: "#",
    },
  ];

  const navLinksList = navLinks.map((item, index) => {
    return (
      <Link
        href={item.link}
        key={index}
        className="hover:bg-bggrey  md:hover:text-btpurple hover:underline"
      >
        {item.title}
      </Link>
    );
  });

  const [nav, setNav] = useState(false);

  return (
    <nav className="absolute top-0 bg-transparent w-full z-50">
      <div className="flex justify-between items-center h-[80px] py-8 2xl:max-w-[1400px] mx-auto px-10 lg:px-20">
        <div className="text-xl font-extrabold text-white">RoboReply</div>
        <div className="hidden md:flex gap-6 font-inter text-white">
          {navLinksList}
        </div>
        <div className="flex  items-center gap-2">
          <Link href="login">
            <Button
              button="Sign in"
              customClass="hidden md:block max-w-32 bg-transparent text-white hover:bg-white hover:bg-opacity-10"
            />
          </Link>
          <Link href="signup">
            <Button
              button="Sign up"
              customClass="hidden md:block max-w-32 bg-white text-black"
            />
          </Link>
        </div>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setNav(!nav)}
        >
          <IoMenu />
        </button>

        <div className={nav ? "block" : "hidden"}>
          <div className="w-screen h-screen bg-white absolute inset-0 p-5">
            <button
              onClick={() => setNav(!nav)}
              className="text-2xl text-black absolute right-10 top-10"
            >
              <AiOutlineClose />
            </button>
            <div className="text-black flex flex-col items-center justify-center gap-20 py-32">
              {navLinksList}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
