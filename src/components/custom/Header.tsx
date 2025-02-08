"use client";
import React from "react";
import { useSession } from "next-auth/react";
import Menu from "./Menu";
import axios from "axios";
let response: any;
const Header = () => {
  const Mode = localStorage.getItem("Mode");
  const { data: session } = useSession();
  console.log(session);
  const getUser = async () => {
    if (session?.user._id) {
      response = await axios
        .post("/api/getCurrentUser", {
        id: session.user._id, // ✅ Send `id` in the request body
      })
        .then((res) => res.data.user).catch((err) => {
          console.log("Error fetching user :" ,err)
        }
        )
      console.log(response);
      return response;
    }
  };
  const capitalizeFirstLetter = (str: string): string => {
    return str?.charAt(0).toUpperCase() || 'U';
  };
  
  const C = capitalizeFirstLetter(session?.user.username)
  const P = capitalizeFirstLetter(session?.user.parentname)
  
  getUser()
  if (Mode == "Child Mode"){
    return (
      <div className="bg-[#fbf1ee] h-[10vh] p-3 flex justify-between text-black font-bold sm:text-2xl my-auto top-0 sticky">
        <div className="flex space-x-2 justify-between ">
          <div className="h-6 w-6 bg-[#bad194] rounded-full sm:h-12 sm:w-12 my-auto text-center text-white font-bold">{C}</div>
          {/* <div className=" my-auto">Hello</div> */}
        </div>
        <div className=" my-auto -ml-[15%] ">
          WELCOME {session?.user.username}
        </div>
        <div className=" my-auto">
          <Menu
            session={session ? true : false}
            uname={session?.user.username}
            Mode="Child"
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="bg-[#fbf1ee] h-[10vh] p-3 flex justify-between text-black font-bold sm:text-2xl my-auto top-0 sticky">
      <div className="flex space-x-2 justify-between ">
        <div className="h-6 w-6 bg-[#bad194] rounded-full sm:h-12 sm:w-12 my-auto text-center text-white font-bold">{P}</div>
        {/* <div className=" my-auto">Hello</div> */}
      </div>
      <div className=" my-auto -ml-[15%] ">
        WELCOME {session?.user.parentname}
      </div>
      <div className=" my-auto">
        <Menu
          session={session ? true : false}
          uname={session?.user.parentname}
          Mode="Parent"
        />
      </div>
    </div>
    )
  }
 
};

export default Header;
