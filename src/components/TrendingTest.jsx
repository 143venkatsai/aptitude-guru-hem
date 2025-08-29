import React from "react";
import { MdPerson } from "react-icons/md";

import testImage1 from "../assets/testImage1.png";
import testImage2 from "../assets/testImage2.png";
import testImage3 from "../assets/testImage3.png";
import testImage4 from "../assets/testImage4.png";

const testDetails = [
  {
    id: 1,
    image: testImage1,
    title: "DSA for Beginners",
    description: "Essential data structures and algorithms concepts for be...",
    author: "By John Smith",
  },
  {
    id: 2,
    image: testImage2,
    title: "C++ Mock Test",
    description: "C++ programming for beginners to advanced level",
    author: "By Emily Chen",
  },
  {
    id: 3,
    image: testImage3,
    title: "DBMS Mock Test",
    description: "Database Management System fundamentals & SQL",
    author: "By Robert Wilson",
  },
  {
    id: 4,
    image: testImage4,
    title: "DSA for Beginners",
    description: "Essential data structures and algorithms concepts for be..",
    author: "By John Smith",
  },
];

const TrendingTest = () => {
  return (
    <>
      <section className="px-4 lg:px-12 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl lg:text-2xl font-semibold">
            Top Trending Tests
          </h1>
          <button className="text-base text-sky-600 cursor-pointer">
            Explore All &gt;
          </button>
        </div>
        <ul className="flex lg:grid lg:grid-cols-4 gap-4 mt-6 overflow-x-auto lg:overflow-visible no-scrollbar">
          {testDetails.map((test) => (
            <li
              key={test.id}
              className="flex flex-col min-w-[240px] lg:min-w-0 rounded-lg shadow-md border border-gray-200"
            >
              <img
                src={test.image}
                alt={test.title}
                className="w-full h-35 lg:h-45 rounded-t-lg"
              />
              <div className="flex flex-col p-3">
                <h1 className="font-semibold text-base lg:text-xl mb-3">
                  {test.title}
                </h1>
                <p className="text-sm lg:text-base text-gray-600 mb-3">
                  {test.description}
                </p>
                <div className="flex items-center mb-3">
                  <MdPerson className="text-gray-700" />
                  <p className="ml-2 text-xs lg:text-sm text-gray-800">
                    {test.author}
                  </p>
                </div>
                <button className="w-full text-sm register-color rounded-md text-white py-2 mb-1 mt-auto">
                  Register
                </button>
              </div>
            </li>
          ))}
        </ul>

        {/* Featured Assessment */}
        <div className="mt-8 mb-6">
          <h1 className="text-xl lg:text-2xl font-bold">Featured Assessment</h1>
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center featured px-6 lg:px-8 py-6 my-4 rounded-lg">
            <div>
              <h1 className="text-base lg:text-lg font-bold text-white">
                Data Structures and Algorithms
              </h1>
              <p className="text-sm lg:text-base text-white mt-2">
                Master the fundamentals of DSA with our comprehensive
                assessment. Perfect for interview preparation and skill
                validation.
              </p>
            </div>
            <div>
              <button className="bg-white text-sm font-semibold px-6 py-1 rounded-md mt-4 lg:mt-0">
                Start Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrendingTest;
