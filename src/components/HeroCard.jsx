import React from "react";
import { BsStars } from "react-icons/bs";
import { FaBullhorn } from "react-icons/fa";

// import founder1 from "../assets/founder1.png";
// import founder2 from "../assets/founder2.png";
import cardImage from "../assets/cardImage.png";
import technical from "../assets/technical.png";
import "./index.css";

const HeroCard = () => {
  return (
    <>
      {/* Larger devices  */}
      <section className="hidden lg:flex justify-between hero-section text-white mx-4 lg:mx-12 my-10 rounded-md">
        <div className="py-8 pl-8">
          <div className="flex items-center text-shadow">
            <h2 className="text-sm">Limited Time Offer</h2>
            <BsStars className="h-6 w-6 ml-2" />
          </div>
          <button className="enroll tracking-wider font-semibold text-sm p-2 shadow-4xl rounded-md bg-orange-400 mt-3">
            ENROLL NOW
          </button>
        </div>
        <div className="flex flex-col items-center pt-8">
          <h1 className="text-2xl pb-2 text-center">
            Celebrate the Grand Indian New Year with <b>AGH!</b>
          </h1>
          <p className="text-xs pb-2">
            Your Pathway to a Successful Career as a Software Development
            Engineer!
          </p>
          <h2 className="text-xl pb-2">
            Aptitude, Programming with DSA and MERN Full Stack
          </h2>
          <ul className="flex items-center list-disc gap-6 pb-2">
            <li className="text-[10px]">
              Master essential Aptitude skills for competitive exams
            </li>
            <li className="text-[10px]">Build strong coding skills with DSA</li>
            <li className="text-[10px]">
              Develop full-stack applications with MERN
            </li>
          </ul>
          <h1 className="text-lg font-bold">Batch Starts 31st March 2025</h1>
        </div>
        <div className="bottom-0">
          {/* <img src={founder1} alt="Image" className="h-40 w-35" />
          <img src={founder2} alt="image" className="h-44 w-30" /> */}
          <img src={cardImage} alt="Card Images" className="h-50 w-60" />
        </div>
      </section>

      {/* Mobile Devices */}
      <section className="flex flex-col lg:hidden px-4 py-4">
        <h1 className="flex justify-center items-center text-xl pb-1 font-semibold">
          Welcome back, <span className="text-blue-500 ml-1"> Muskan!</span>
          <BsStars className="text-amber-300 " />
        </h1>
        <p className="text-center text-sm text-gray-500 pb-5">
          Let’s continue your learning journey! Your next milestone is waiting!
        </p>
        <img src={technical} alt="Technical Image" className="rounded-md" />
      </section>

      {/* Announcement Section  */}

      <section className="flex items-start lg:items-center mx-4 lg:mx-12 my-4 px-4 lg:px-6 py-4 lg:py-8 bg-yellow-50 shadow-md rounded-r-md border-l-8 border-red-500">
        <FaBullhorn className="text-red-500 h-20 w-20 lg:h-10 lg:w-10 mr-4" />
        <div className="">
          <h1 className="text-md lg:text-xl font-semibold">
            Important Announcement
          </h1>
          <p className="pt-2 lg:pt-0 text-sm lg:text-base">
            New advanced Python course will be available from next week. Early
            birds get 30% discount. Stay tuned for more updates!
          </p>
        </div>
      </section>
    </>
  );
};

export default HeroCard;
