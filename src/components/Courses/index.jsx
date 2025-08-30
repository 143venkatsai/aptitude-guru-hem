import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileScreen,
  faCode,
  faLaptop,
  faClipboardList,
  faPuzzlePiece,
} from "@fortawesome/free-solid-svg-icons";

// import { CiMobile1 } from "react-icons/ci";
// import { FaCode } from "react-icons/fa6";
// import { TiDeviceLaptop } from "react-icons/ti";
// import { CiViewList } from "react-icons/ci";
// import { IoExtensionPuzzleOutline } from "react-icons/io5";

import {
  CoursesContainer,
  CoursesHeader,
  CoursesList,
  CourseItem,
  CourseTitle,
  ProgressBarWrapper,
  ProgressBar,
} from "./styledComponents";

const courseDetails = [
  {
    id: 1,
    title: "Aptitude Basics",
    info: "Boost your reasoning",
    color: "bg-yellow-500",
    icon: (
      <FontAwesomeIcon
        icon={faMobileScreen}
        className="text-white bg-yellow-500 p-3 my-2 rounded-lg"
        size="xs"
      />
    ),
  },
  {
    id: 2,
    title: "DSA Problems",
    info: "Master coding with DSA",
    color: "bg-sky-500",
    icon: (
      <FontAwesomeIcon
        icon={faCode}
        className="text-white bg-sky-500 p-3 my-2 rounded-lg"
        size="xs"
      />
    ),
  },
  {
    id: 3,
    title: "Programming",
    info: "Language Fundamentals",
    color: "bg-pink-400",
    icon: (
      <FontAwesomeIcon
        icon={faLaptop}
        className="text-white bg-pink-400 p-3 my-2 rounded-lg"
        size="xs"
      />
    ),
  },
  {
    id: 4,
    title: "Technical MCQ",
    info: "Core CS Concepts",
    color: "bg-green-500",
    icon: (
      <FontAwesomeIcon
        icon={faClipboardList}
        className="text-white bg-green-500 p-3 my-2 rounded-lg"
        size="xs"
      />
    ),
  },
  {
    id: 5,
    title: "Puzzels",
    info: "Challenge your mind",
    color: "bg-purple-400",
    icon: (
      <FontAwesomeIcon
        icon={faPuzzlePiece}
        className="text-white bg-purple-500 p-3 my-2 rounded-lg"
        size="xs"
      />
    ),
  },
];

const Courses = () => {
  return (
    <>
      <CoursesContainer>
        <CoursesHeader>
          <h1>Practice & Prep</h1>
          <button>Explore All &gt;</button>
        </CoursesHeader>

        <CoursesList>
          {courseDetails.map((course) => (
            <CourseItem key={course.id}>
              <span>{course.icon}</span>
              <CourseTitle>{course.title}</CourseTitle>
              <p>{course.info}</p>
              <ProgressBarWrapper>
                <ProgressBar width="10%" />
              </ProgressBarWrapper>
            </CourseItem>
          ))}
        </CoursesList>
      </CoursesContainer>
    </>
  );
};

export default Courses;
