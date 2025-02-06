import Link from "next/link";
import React from "react";

const Footer = () => {
  const elements = [
    {Icon:"🏠",Name:" Home"},
    {Icon:"🛒",Name:" Store"},
    {Icon:"📺",Name:" Videos"},
    {Icon:"🫂",Name:" Connect"},
    {Icon:"🧑‍🏫",Name:" Tution"},
  ];
  return (
    <div className="bg-[#edf5e5] flex justify-between sticky bottom-0  z-10">
      {elements.map((element, index) => {
        return <Link href={'/'} key={index} className="flex flex-col">
            
                <div className="text-3xl">
                    {element.Icon}
                </div>
                <div>
                    {element.Name}
                </div>
            
        </Link>;
      })}
    </div>
  );
};

export default Footer;
