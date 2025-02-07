// "use client";
import React, { useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { signOut } from "next-auth/react";

import { RxHamburgerMenu } from "react-icons/rx";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

interface MenuProps {
  session:boolean
  uname?: string;
  response:any
}
const Menu = ({session, uname,response }: MenuProps) => {
  // const getUser = async () => {
  //   if(id){
  //     response = await axios
  //     .get(`/api/getCurrentUser/${id}`)
  //     .then((res) => res.data.user);
  //     console.log(response)
  //     return response
  //   }
    
  // };
 
  useEffect(() => {
    // getUser();
    console.log(response)
});
  const elements = ["POINTS", "VIRTUAL ASSISTANT", "VIRTUAL MEETUP"];
  return (
    <Sheet>
      <SheetTrigger>
        {" "}
        <RxHamburgerMenu />
      </SheetTrigger>
      <SheetContent className="bg-[#ffedac] sm:w-full w-[60%]">
        <SheetHeader className="  space-y-5">
          <SheetTitle className="text-center bg-[#bcb497] w-[85%] sm:w-[75%] mx-auto py-2 px-5 rounded-3xl border border-black">
            <Link href={"/"} className="flex">
              <Image
                alt="Home Icon"
                src={`/icons/SheetIcons/User.png`}
                width={1000}
                height={1000}
                className="h-10 sm:h-14 w-fit"
              />{" "}
              <span className=" my-auto "> {uname || "PROFILE"}</span>
            </Link>
          </SheetTitle>
          {session && (<SheetDescription className="font-bold text-black sm:w-[75%] space-y-10 mx-auto text-left w-[85%]">
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
                  <span className="my-auto">{element=="POINTS"?`POINTS - ${response?.Points}` : element}</span>
                </Link>
              );
            })}
            <span className="flex">
              <Image
                alt="Home Icon"
                src={`/icons/SheetIcons/LOGOUT.png`}
                width={1000}
                height={1000}
                className="h-10 sm:h-14 w-fit"
              />
              <Button
                className="my-auto border-none bg-inherit text-black font-bold"
                onClick={() => {
                  signOut();
                }}
              >
                LOGOUT
              </Button>
            </span>
          </SheetDescription>)}
          {!session && (
            <Link href={"/sign-in"}>
             <Button
                className="my-auto "
              >
                LOG IN
              </Button></Link>
          )}
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Menu;
