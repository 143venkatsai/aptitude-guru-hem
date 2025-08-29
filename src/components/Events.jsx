import React from "react";
import { FiClock } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";

const eventsList = [
  {
    id: 1,
    month: "APR",
    date: "05",
    title: "Live Webinar: Machine Learning Fundamentals",
    info: "Join our expert panel for an introduction to machine learning concepts and applications.",
    timings: "10:00 AM - 12:00 PM",
  },
  {
    id: 2,
    month: "APR",
    date: "09",
    title: "Live Webinar: Machine Learning Fundamentals",
    info: "Join our expert panel for an introduction to machine learning concepts and applications.",
    timings: "10:00 AM - 12:00 PM",
  },
];

const Events = () => {
  return (
    <>
      <section className="flex flex-col px-4 lg:px-12 pt-6">
        <div className="flex justify-between items-center">
          <h1 className="text-xl lg:text-2xl font-semibold">Upcoming Events</h1>
          <button className="text-base text-sky-600 cursor-pointer">
            View Calender &gt;
          </button>
        </div>
        <ul>
          {eventsList.map((event) => (
            <li
              key={event.id}
              className="flex flex-col lg:flex-row lg:items-center w-full shadow-md px-4 border border-gray-200 lg:px-6 p-6 my-6 rounded-md"
            >
              <div className="flex items-center">
                <div className="flex flex-col items-center bg-red-500 text-white px-3 py-2 lg:px-4 lg:py-3 rounded-md mb-auto">
                  <h1 className="text-sm font-semibold">{event.month}</h1>
                  <h1 className="text-2xl font-semibold">{event.date}</h1>
                </div>
                <div className="ml-5 lg:ml-8">
                  <h1 className="text-base font-semibold lg:text-lg lg:font-semibold">
                    {event.title}
                  </h1>
                  <p className="text-sm text-gray-500 my-2">{event.info}</p>
                  <p className="flex items-center">
                    <FiClock className="text-sm text-gray-500" />
                    <span className="text-sm ml-1 text-gray-500">
                      {event.timings}
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center border-1 border-red-500 px-4 py-2 rounded-sm text-red-500 cursor-pointer ml-auto mt-5 sm:mt-0 w-full sm:w-auto">
                <IoNotificationsOutline className="text-xl" />
                <button className="text-sm ml-1">Remind Me</button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Events;
