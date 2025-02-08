"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const [mode, setMode] = useState<string | null>(null);
  const elements = ["Home", "Store", "Videos", "Connect", "Tution"];

  useEffect(() => {
    // Ensure that localStorage is only accessed on the client-side
    if (typeof window !== "undefined") {
      const storedMode = localStorage.getItem("Mode");
      setMode(storedMode);
    }
  }, []);

  if (mode === "Child Mode") {
    return (
      <div className="bg-[#edf5e5] text-black flex justify-between fixed bottom-0 z-10 p-5 w-full">
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
  } else {
    return (
      <div className="bg-[#edf5e5] text-black flex justify-between fixed bottom-0 z-10 p-5 w-full">
        Parent Footer
      </div>
    );
  }
};

export default Footer;
