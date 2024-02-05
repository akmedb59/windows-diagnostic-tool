import Image from "next/image";
import React from "react";

const TrustedBrands = () => {
  const brands = [
    {
      id: 1,
      name: "Adobe",
      logo: "/adobe.svg",
    },
    {
      id: 2,
      name: "Amazon",
      logo: "/amazon.svg",
    },
    {
      id: 3,
      name: "Netflix",
      logo: "/netflix.svg",
    },
    {
      id: 4,
      name: "Spotify",
      logo: "/spotify.svg",
    },
  ];

  return (
    <div className="flex items-start justify-between flex-wrap md:flex-nowrap">
      {brands.map((brand) => {
        return (
          <Image
            key={brand.id}
            src={brand.logo}
            width={100}
            height={100}
            className="fill-white h-10 object-cover "
          />
        );
      })}
    </div>
  );
};

export default TrustedBrands;
