import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { RxHamburgerMenu } from "react-icons/rx";
import Image from "next/image";
import Link from "next/link";
const Menu = () => {
  const elements = ["POINTS", "VIRTUAL ASSISTANT", "LOGOUT"];
  return (
    <Sheet>
      <SheetTrigger>
        {" "}
        <RxHamburgerMenu />
      </SheetTrigger>
      <SheetContent className="bg-[#ffedac] sm:w-full w-[60%]">
        <SheetHeader className="  space-y-5">
          <SheetTitle className="text-center bg-[#bcb497] w-[85%] sm:w-[75%] mx-auto py-2 px-5 rounded-3xl flex justify-between">
           <Link href={'/'}>
           <Image
              alt="Home Icon"
              src={`/icons/SheetIcons/User.png`}
              width={1000}
              height={1000}
              className="h-10 sm:h-14 w-fit"
            />{" "}
           <span className=" my-auto "> PROFILE</span>
           </Link>
          </SheetTitle>
          <SheetDescription className="font-bold text-black sm:w-[75%] space-y-10 mx-auto text-left w-[85%]">
            {elements.map((element, index) => {
              return (
                <Link href={"/"} key={index} className="flex">
                  <Image
                    alt="Home Icon"
                    src={`/icons/SheetIcons/${element}.png`}
                    width={1000}
                    height={1000}
                    className="h-10 sm:h-14 w-fit"
                  />
                  <span className="my-auto">{element}</span>
                </Link>
              );
            })}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Menu;
