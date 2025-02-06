import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const elements = ["Home", "Store", "Videos", "Connect", "Tution"];
  return (
    <div className="bg-[#edf5e5] flex justify-between fixed bottom-0 z-10 p-5 w-full">
      {elements.map((element, index) => {
        return (
          <Link href={"/"} key={index} className="flex flex-col">
            <div className="text-3xl">
              <Image
                alt="Home Icon"
                src={`/icons/${element}.png`}
                width={1000}
                height={1000}
                className="h-10 sm:h-14 w-fit"
              />
            </div>
            <div>{element}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Footer;
