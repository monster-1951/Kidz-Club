"use client";
import React from "react";
import { useSession } from "next-auth/react";
import Menu from "./Menu";
import axios from "axios";
let response: any;
const Header = () => {
  const { data: session } = useSession();
  console.log(session);
  const getUser = async () => {
    if (session?.user._id) {
      response = await axios
        .get(`/api/getCurrentUser/${session?.user._id}`)
        .then((res) => res.data.user);
      // console.log(response);
      return response;
    }
  };
  getUser()
  return (
    <div className="bg-[#fbf1ee] h-[10vh] p-3 flex justify-between text-black font-bold sm:text-2xl my-auto top-0 sticky">
      <div className="flex space-x-2 justify-between ">
        <div className="h-6 w-6 bg-[#bad194] rounded-full sm:h-12 sm:w-12 my-auto"></div>
        <div className=" my-auto">Hello</div>
      </div>
      <div className=" my-auto -ml-[15%] ">
        WELCOME {session?.user.username}
      </div>
      <div className=" my-auto">
        <Menu
          session={session ? true : false}
          uname={session?.user.username}
          response={response}
        />
      </div>
    </div>
  );
};

export default Header;
