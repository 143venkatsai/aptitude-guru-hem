import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMenu } from "react-icons/io5";

import logo from "../assets/headerLogo.png";
import profileLogo from "../assets/profileLogo.png";

const Header = () => {
  return (
    <>
      <nav className="flex justify-between items-center px-4 lg:px-8 py-4 border-b border-gray-400">
        <img
          src={logo}
          alt="Logo"
          className=""
          style={{ width: "166px", height: "44px" }}
        />
        <ul className="hidden lg:flex justify-between items-center gap-8">
          <li className="relative text-sm pb-1 cursor-pointer border-b-2 border-red-500">
            Home
          </li>
          <li className="relative text-sm pb-1 cursor-pointer">Practice</li>
          <li className="flex items-center relative pb-1 cursor-pointer">
            <span className="text-sm">Assessment</span>{" "}
            <MdKeyboardArrowDown className="ml-1" />
          </li>
          <li className="relative pb-1 text-sm cursor-pointer">Leaderboard</li>
          <li className="flex items-center relative pb-1 cursor-pointer ">
            <span className="text-sm">Company Specific</span>{" "}
            <MdKeyboardArrowDown className="ml-1" />
          </li>
        </ul>

        <div className="hidden lg:flex items-center">
          <img
            src={profileLogo}
            alt="Profile"
            className=""
            style={{ width: "34px", height: "34px", borderRadius: "50%" }}
          />
          <span className="ml-2 text-base">Hi, Muskan</span>
          <IoMdArrowDropdown className="ml-1" />
        </div>
        <div className="flex lg:hidden">
          <IoMenu className="h-8 w-8" />
        </div>
      </nav>
    </>
  );
};

export default Header;
