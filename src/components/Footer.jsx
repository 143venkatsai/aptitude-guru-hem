import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import footerLogo3 from "../assets/footerLogo3.png";

const Footer = () => {
  return (
    <>
      <footer className="footer flex flex-col lg:flex-row lg:justify-between px-6 py-15 lg:p-25">
        <div className="flex flex-col">
          <img src={footerLogo3} alt="AGH Logo" className="w-55 h-15" />
          <h1 className="text-white text-2xl font-semibold text- mt-5">
            Aptitude Guru Hem
          </h1>
          <p className="text-gray-300 text-sm mt-2">
            Transforming Learning, Empowering Success{" "}
          </p>
          <div className="flex items-center gap-2 mt-8">
            <span className="footer-icon text-white p-4">
              <FaInstagram />
            </span>
            <span className="footer-icon text-white p-4">
              <FaLinkedinIn />
            </span>
            <span className="footer-icon text-white p-4">
              <FaTwitter />
            </span>
            <span className="footer-icon text-white p-4">
              <FaYoutube />
            </span>
          </div>
          <button className="mr-auto mt-6 footer-button text-white text-base px-4 py-2 rounded-sm">
            Contact Us
          </button>
        </div>
        <div className="grid mt-20 lg:mt-0 grid-cols-2 gap-8">
          <ul className="text-white ">
            <h1 className="mb-6 text-base">Quick Links</h1>
            <li className="mb-3 text-sm">Home</li>
            <li className="mb-3 text-sm">Contact Us</li>
            <li className="mb-3 text-sm">Features</li>
          </ul>
          <ul className="text-white">
            <h1 className="mb-6 text-base">Support</h1>
            <li className="mb-3 text-sm">Help Center</li>
            <li className="mb-3 text-sm">Faqs</li>
            <li className="mb-3 text-sm">Terms & Condition</li>
            <li className="mb-3 text-sm">Privacy Policy</li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
