import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaRegMessage } from "react-icons/fa6";
import { BsShare } from "react-icons/bs";

import testImage2 from "../assets/testImage2.png";

const Community = () => {
  return (
    <>
      <section className="flex flex-col px-4 lg:px-12">
        <h1 className="text-xl lg:text-2xl font-semibold">Continue Learning</h1>
        <div className="my-6 border border-gray-200 shadow-md rounded-md p-4 lg:p-6">
          <div className="flex items-center">
            <img
              src={testImage2}
              alt="instructor-logo"
              className="h-10 w-10 rounded-full"
            />
            <div className="flex flex-col ml-4">
              <h2 className="text-lg text-gray-700">Michael Brown </h2>
              <p className="text-sm text-gray-600">2 Hours Ago</p>
            </div>
            <button className="text-sm text-red-500 bg-red-200 px-4 py-1 rounded-sm ml-auto mb-auto lg:mb-0">
              Instructor
            </button>
          </div>
          <p className="text-sm lg:text-base mt-5 text-gray-600">
            Just published a new tutorial on React Hooks! Check it out and let
            me know what you think. This covers useState, useEffect, useContext,
            and custom hooks with practical examples.
          </p>
          <div className="flex items-center gap-5 border-t border-gray-500 mt-6 pt-3">
            <div className="flex items-center gap-1">
              <IoMdHeartEmpty className="h-4 w-4 text-gray-700" />
              <p className="text-gray-700">23</p>
            </div>
            <div className="flex items-center gap-1">
              <FaRegMessage className="h-4 w-4 text-gray-700" />
              <p className="text-gray-700">5</p>
            </div>
            <div className="flex items-center gap-1">
              <BsShare className="h-4 w-4 text-gray-700" />
              <p className="text-gray-700">7</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Community;
