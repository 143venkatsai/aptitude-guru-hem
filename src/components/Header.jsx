import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoClose, IoMenu } from "react-icons/io5";

import logo from "../assets/headerLogo.png";
import profileLogo from "../assets/profileLogo.png";

import "./index.css";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/practice", label: "Practice" },
  { to: "/assessments", label: "Assessment" },
  { to: "/leaderboard", label: "Leaderboard" },
];

const navLinksMobile = [
  { to: "/", label: "Home" },
  { to: "/practice", label: "Practice" },
  { to: "/assessments", label: "Assessment" },
  { to: "/leaderboard", label: "Leaderboard" },
  { to: "/profile", label: "Profile" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex relative justify-between items-center px-4 lg:px-8 py-4 border-b border-gray-400">
        <img
          src={logo}
          alt="Logo"
          className=""
          style={{ width: "166px", height: "44px" }}
        />
        <ul className="hidden lg:flex justify-between items-center gap-8">
          {navLinks.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `inline-block text-sm pb-[2px] border-b-2 transition-colors ${
                    isActive ? "border-red-500" : "border-transparent"
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}

          <li className="flex items-center">
            <span className="text-sm">
              <NavLink
                to="/company"
                className={({ isActive }) =>
                  `relative text-sm pb-1 cursor-pointer ${
                    isActive
                      ? "border-b-2 border-red-500"
                      : "border-b-2 border-transparent"
                  }`
                }
              >
                Company Specific
              </NavLink>
            </span>{" "}
            <MdKeyboardArrowDown className="ml-1" />
          </li>
        </ul>
        <NavLink to="/profile">
          <div className="hidden lg:flex items-center">
            <img
              src={profileLogo}
              alt="Profile"
              style={{ width: "34px", height: "34px", borderRadius: "50%" }}
            />
            <span className="ml-2 text-base">Hi, Muskan</span>

            <IoMdArrowDropdown className="ml-1" />
          </div>
        </NavLink>

        {/* Mobile Menu Icon */}
        <div
          className="flex lg:hidden cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <IoClose className="h-8 w-8" />
          ) : (
            <IoMenu className="h-8 w-8" />
          )}
        </div>
      </nav>
      {isMenuOpen && (
        <ul className="lg:hidden flex flex-col items-start gap-4 px-6 py-4 border-b border-gray-300 bg-white shadow-md animate-slideDown">
          {navLinksMobile.map((item) => (
            <li key={item.to} className="w-full">
              <NavLink
                to={item.to}
                onClick={() => setIsMenuOpen(false)} // close menu on click
                className={({ isActive }) =>
                  `block text-sm py-2 border-b transition-colors ${
                    isActive ? "text-red-500 font-medium" : "text-gray-700"
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Header;
