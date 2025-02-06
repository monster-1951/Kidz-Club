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
const Menu = () => {
  const elements = ["🪙 POINTS", "🤖 VIRTUAL ASSISTANT", "🚶‍♂️‍➡️ LOGOUT"];
  return (
    <Sheet>
      <SheetTrigger>
        {" "}
        <RxHamburgerMenu />
      </SheetTrigger>
      <SheetContent className="bg-[#ffedac] sm:w-full w-[60%]">
        <SheetHeader className="  space-y-5">
          <SheetTitle className="text-center bg-[#bcb497] w-[85%] sm:w-[75%] mx-auto py-2 px-5 rounded-3xl">👤 PROFILE</SheetTitle>
          <SheetDescription className="font-bold text-black sm:w-[75%] space-y-10 mx-auto text-left w-[85%]">
            {elements.map((element, index) => {
              return <span key={index} className="block">{element}</span>;
            })}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Menu;
