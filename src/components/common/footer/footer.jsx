import React from "react";
import FooterLinks from "./footerLinks";
import {
  FaRegCopyright,
} from "react-icons/fa6";
import Link from "next/link";
import SocialsArray from "./socialsArray";
const footerLinks = [
  {
    title: "Company",
    links: [
      {
        title: "About Us",
        link: "#",
      },
      {
        title: "Careers",
        link: "#",
      },
      {
        title: "Blog",
        link: "#",
      },
    ],
  },
];
const Footer = () => {
  return (
    <footer className="py-10 w-full bg-[#1e212b] lg:px-20 px-10">
      <div className="mx-auto lg:max-w-7xl">
        <div className="md:flex items-start justify-between w-full gap-10 text-gray-300">
          <div className="flex flex-col items-start space-y-10 w-full md:w-3/4">
            <div className="text-xl font-extrabold text-white">
              Logo Lorem
            </div>
            <div className="text-sm md:mr-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              eligendi molestiae consectetur numquam. Quas perspiciatis adipisci
              quod blanditiis earum perferendis ratione quaerat, quidem vitae
              nesciunt quam vero quo aperiam esse.
            </div>
          </div>
          <div className="w-full flex items-center justify-between py-16 md:py-0">
            <div>
              <FooterLinks
                title={footerLinks[0].title}
                links={footerLinks[0].links}
              />
            </div>
            <div>
              <FooterLinks
                title={footerLinks[0].title}
                links={footerLinks[0].links}
              />
            </div>
            <div>
              <FooterLinks
                title={footerLinks[0].title}
                links={footerLinks[0].links}
              />
            </div>
          </div>
          <div className="space-y-5 md:w-1/3">
            <div className="text-lg font-bold whitespace-nowrap text-center md:text-right">
              Follow Us
            </div>
            <div className="flex items-center justify-center md:justify-end gap-4">
              <SocialsArray />
            </div>
          </div>
        </div>
        <div>
          <hr className="my-5 opacity-40" />
        </div>
        <div className="flex justify-between text-xs text-gray-300">
          <div className="flex gap-1 items-center">
            Copyright
            <FaRegCopyright />
            {new Date().getFullYear()}
          </div>
          <div className="hover:text-white hover:underline">
            <Link href={"/"}>Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
