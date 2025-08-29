import React from "react";
import { CiMobile1 } from "react-icons/ci";
import { FaCode } from "react-icons/fa6";
import { TiDeviceLaptop } from "react-icons/ti";
import { CiViewList } from "react-icons/ci";
import { IoExtensionPuzzleOutline } from "react-icons/io5";

const courseDetails = [
  {
    id: 1,
    title: "Aptitude Basics",
    info: "Boost your reasoning",
    color: "bg-yellow-500",
    icon: (
      <CiMobile1
        className="text-white bg-yellow-500 h-10 w-10 p-2 my-2 rounded-lg"
        size={30}
      />
    ),
  },
  {
    id: 2,
    title: "DSA Problems",
    info: "Master coding with DSA",
    color: "bg-sky-500",
    icon: (
      <FaCode
        className="text-white bg-sky-500 h-10 w-10 p-2 my-2 rounded-lg"
        size={30}
      />
    ),
  },
  {
    id: 3,
    title: "Programming",
    info: "Language Fundamentals",
    color: "bg-pink-400",
    icon: (
      <TiDeviceLaptop
        className="text-white bg-pink-400 h-10 w-10 p-2 my-2 rounded-lg"
        size={30}
      />
    ),
  },
  {
    id: 4,
    title: "Technical MCQ",
    info: "Core CS Concepts",
    color: "bg-green-500",
    icon: (
      <CiViewList
        className="text-white bg-green-500 h-10 w-10 p-2 my-2 rounded-lg"
        size={30}
      />
    ),
  },
  {
    id: 5,
    title: "Puzzels",
    info: "Challenge your mind",
    color: "bg-purple-400",
    icon: (
      <IoExtensionPuzzleOutline
        className="text-white bg-purple-500 h-10 w-10 p-2 my-2 rounded-lg"
        size={30}
      />
    ),
  },
];

const Courses = () => {
  return (
    <>
      <section className="px-4 lg:px-12 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl lg:text-2xl font-semibold">Practice & Prep</h1>
          <button className="text-base text-sky-600 cursor-pointer">
            Explore All &gt;
          </button>
        </div>

        {/* Mobile: horizontal scroll | Laptop: grid */}
        <ul className="flex lg:grid lg:grid-cols-5 gap-4 mt-6 overflow-x-auto lg:overflow-visible no-scrollbar">
          {courseDetails.map((course) => (
            <li
              key={course.id}
              className="min-w-[200px] lg:min-w-0 border border-gray-300 rounded-lg shadow-md flex flex-col items-center p-4 py-6"
            >
              <span>{course.icon}</span>
              <h1 className="text-base lg:text-xl font-semibold mt-2">
                {course.title}
              </h1>
              <p className="text-sm text-center text-gray-600 mt-1 mb-3">
                {course.info}
              </p>
              <div className="w-[90%] bg-gray-300 rounded-full h-2 mb-1 mt-auto">
                <div
                  className="bg-sky-500 h-2 rounded-l"
                  style={{ width: "10%" }}
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Courses;
