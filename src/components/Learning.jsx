import React from "react";
import { IoBookOutline } from "react-icons/io5";
import { HiOutlineStar } from "react-icons/hi2";
import { LiaCertificateSolid } from "react-icons/lia";
import { MdPerson } from "react-icons/md";

import testImage4 from "../assets/testImage4.png";
import trendingImage1 from "../assets/trendingImage1.png";
import trendingImage2 from "../assets/trendingImage2.png";
import trendingImage3 from "../assets/trendingImage3.png";
import learningLogo from "../assets/LearningLogo.png";
import image from "../assets/image.png";

const learningDetails = [
  {
    id: 1,
    image: testImage4,
    title: "Python Training and Classes from Intermediate",
    author: "By John Smith",
  },
  {
    id: 2,
    image: trendingImage2,
    title: "Python Training and Classes from Intermediate",
    author: "By John Smith",
  },
  {
    id: 3,
    image: trendingImage3,
    title: "Python Training and Classes from Intermediate",
    author: "By John Smith",
  },
  {
    id: 4,
    image: trendingImage1,
    title: "Python Training and Classes from Intermediate",
    author: "By John Smith",
  },
];

const Learning = () => {
  return (
    <>
      <section className="flex flex-col px-4 lg:px-12 mb-6 border-b border-gray-400 pb-5">
        <div className="flex items-center gap-2">
          <div className="flex items-center px-2 py-2 text-sm rounded-md cursor-pointer bg-red-100 text-red-500">
            <IoBookOutline />
            <span className="text-xs lg:text-sm ml-1">My Courses</span>
          </div>
          <div className="flex items-center  cursor-pointer">
            <HiOutlineStar />
            <span className="text-xs lg:text-sm ml-1">Recommended</span>
          </div>
          <div className="flex items-center cursor-pointer ">
            <LiaCertificateSolid />
            <span className="text-xs lg:text-sm ml-1">Certificates</span>
          </div>
        </div>
      </section>

      <section className="flex flex-col px-4 lg:px-12 pb-6">
        <div className="flex justify-between items-center">
          <h1 className="text-xl lg:text-2xl font-semibold">
            Continue Learning
          </h1>
          <button className="text-base text-sky-600 cursor-pointer">
            View All &gt;
          </button>
        </div>
        <ul className="flex lg:grid lg:grid-cols-4 gap-4 mt-6 overflow-x-auto lg:overflow-visible no-scrollbar">
          {learningDetails.map((item) => (
            <li
              key={item.id}
              className="min-w-[240px] lg:min-w-0 rounded-lg border border-gray-200 shadow-md flex flex-col"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-35 lg:h-45 rounded-t-lg"
              />
              <div className="w-full bg-gray-300 h-1.5 mb-1 mt-auto">
                <div
                  className="bg-red-500 h-1.5"
                  style={{ width: "50%" }}
                ></div>
              </div>
              <div className="flex flex-col p-2">
                <h1 className="font-semibold text-base lg:text-xl mb-3">
                  {item.title}
                </h1>
                <p className="text-sm lg:text-base text-gray-600">
                  {item.description}
                </p>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <MdPerson className="text-gray-700" />
                    <p className="ml-2 text-xs lg:text-sm text-gray-800">
                      {item.author}
                    </p>
                  </div>
                  <p className="text-[10px]">10:48</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col lg:flex-row items-center px-4 lg:px-12 py-2">
        <div>
          <img
            src={learningLogo}
            alt="Learning"
            className="w-full lg:w-120 lg:h-70"
          />
        </div>
        <div className="flex flex-col items-start ml-0 lg:ml-10">
          <h1 className="text-xl lg:text-2xl font-bold">
            Join Live Classes on Advance React Hooks
          </h1>
          <p className="text-gray-500 text-sm lg:text-base my-4">
            Engage with expert instructors in interactive sessions. Ask
            questions, solve doubts instantly, and boost your learning with live
            classes.
          </p>
          <button className="text-sm text-white bg-red-500 rounded-md px-4 py-2">
            Join Class
          </button>
        </div>
        <div>
          <img src={image} alt="Books" className="hidden lg:block h-70 w-80" />
        </div>
      </section>
    </>
  );
};

export default Learning;
