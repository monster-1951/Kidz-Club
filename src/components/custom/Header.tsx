import React from "react";
import Menu from "./Menu";
const Header = () => {
  return (
    <div className="bg-[#fbf1ee] h-[10vh] p-3 flex justify-between font-bold sm:text-2xl my-auto top-0 sticky">
      <div className="flex space-x-2 justify-between ">
        <div className="h-6 w-6 bg-[#bad194] rounded-full sm:h-12 sm:w-12 my-auto"></div>
        <div className=" my-auto">Hello</div>
      </div>
      <div className=" my-auto -ml-[15%] ">WELCOME</div>
      <div className=" my-auto">
        <Menu/>
      </div>
    </div>
  );
};

export default Header;
