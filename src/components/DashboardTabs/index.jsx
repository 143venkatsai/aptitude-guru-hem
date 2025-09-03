import React, { useState } from "react";
import {
  faRotateRight,
  faBook,
  faUser,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";

import {
  DashboardContainer,
  TabRow,
  Tab,
  TabIcon,
  TabTitle,
  RecentTabContainer,
  RecentTopContainer,
  RecentTabTitle,
  RecentTabInfo,
  RecentQuestions,
  QuestionItem,
  Question,
  Time,
  LearningContainer,
  LearningTopContainer,
  LearningTitle,
  LearningView,
  CoursesList,
  CourseItem,
  CourseImage,
  CourseDetails,
  CourseTitle,
  CourseBottomContainer,
  AuthorIcon,
  AuthorName,
  CourseDuration,
  CourseProgressContainer,
  CourseProgress,
  CoursesListWrapper,
  PlayIconContainer,
  PlayIcon,
  CourseImageWrapper,
  EmptyContainer,
  EmptyImage,
  EmptyHeading,
  EmptyInfo,
  EmptyImageTop,
} from "./styledComponents";

import testImage4 from "../../assets/testImage4.png";
import trendingImage1 from "../../assets/trendingImage1.png";
import trendingImage2 from "../../assets/trendingImage2.png";
import trendingImage3 from "../../assets/trendingImage3.png";
import chatGpt3 from "../../assets/chatGpt3.png";
import chatGpt4 from "../../assets/chatGpt4.png";

const recent = [
  { title: "Move Zeroes", ago: "a minute ago" },
  { title: "Majority Element", ago: "a month ago" },
  { title: "Remove Duplicates from Sorted Array", ago: "a month ago" },
  { title: "Best Time to Buy and Sell Stock", ago: "a month ago" },
  { title: "Rotate Array", ago: "a month ago" },
  { title: "Product of Array Except Self", ago: "a month ago" },
  { title: "Best Time to Buy and Sell Stock II", ago: "a month ago" },
  { title: "Number of Zero-Filled Subarrays", ago: "a month ago" },
  { title: "Increasing Triplet Subsequence", ago: "a month ago" },
  { title: "Number of Zero-Filled Subarrays", ago: "a month ago" },
  { title: "Increasing Triplet Subsequence", ago: "a month ago" },
];

const courses = [
  {
    id: 1,
    img: testImage4,
    title: "Python Training and Classes from Intermediate",
    author: "John Smith",
    time: "10:48",
  },
  {
    id: 2,
    img: trendingImage2,
    title: "Python Training and Classes from Intermediate",
    author: "John Smith",
    time: "10:48",
  },
  {
    id: 3,
    img: trendingImage3,
    title: "Python Training and Classes from Intermediate",
    author: "John Smith",
    time: "10:48",
  },
  {
    id: 4,
    img: trendingImage1,
    title: "Python Training and Classes from Intermediate",
    author: "John Smith",
    time: "10:48",
  },
];

const tabContent = [
  {
    id: "recent",
    value: "Recent Updates",
    image: faRotateRight,
  },
  { id: "courses", value: "Continue Learning", image: faBook },
];

const DashboardTabs = () => {
  const [activeTab, setActiveTab] = useState("recent"); // Default tab

  const hasQuestions = recent.length > 0;
  const hasCourses = courses.length > 0;

  return (
    <>
      <DashboardContainer>
        <TabRow>
          {tabContent.map((item) => (
            <Tab
              key={item.id}
              isActive={activeTab === item.id}
              onClick={() => setActiveTab(item.id)}
            >
              <TabIcon icon={item.image} />
              <TabTitle>{item.value}</TabTitle>
            </Tab>
          ))}
        </TabRow>

        {activeTab === "recent" &&
          (hasQuestions ? (
            <RecentTabContainer>
              <RecentTopContainer>
                <RecentTabTitle>Problems</RecentTabTitle>
                <RecentTabInfo>View all submission</RecentTabInfo>
              </RecentTopContainer>
              <RecentQuestions>
                {recent.map((item, index) => (
                  <QuestionItem key={index} isTrue={index % 2 !== 0}>
                    <Question>{item.title}</Question>
                    <Time>{item.ago}</Time>
                  </QuestionItem>
                ))}
              </RecentQuestions>
            </RecentTabContainer>
          ) : (
            <EmptyContainer>
              <EmptyImageTop src={chatGpt3} alt="No data" />
              <EmptyHeading>No recently accepted questions</EmptyHeading>
              <EmptyInfo>
                Start Practicing, Your accepted questions will appear here
              </EmptyInfo>
            </EmptyContainer>
          ))}

        {activeTab === "courses" &&
          (hasCourses ? (
            <LearningContainer>
              <LearningTopContainer>
                <LearningTitle>Continue Learning</LearningTitle>
                <LearningView>View All &gt;</LearningView>
              </LearningTopContainer>
              <CoursesListWrapper>
                <CoursesList>
                  {courses.map((item) => (
                    <CourseItem key={item.id}>
                      <CourseImageWrapper>
                        <CourseImage src={item.img} alt={item.title} />
                        <PlayIconContainer>
                          <PlayIcon icon={faPlay} />
                        </PlayIconContainer>
                      </CourseImageWrapper>
                      <CourseProgressContainer>
                        <CourseProgress></CourseProgress>
                      </CourseProgressContainer>
                      <CourseDetails>
                        <CourseTitle>{item.title}</CourseTitle>
                        <CourseBottomContainer>
                          <AuthorIcon icon={faUser} />
                          <AuthorName>{item.author}</AuthorName>
                          <CourseDuration>{item.time}</CourseDuration>
                        </CourseBottomContainer>
                      </CourseDetails>
                    </CourseItem>
                  ))}
                </CoursesList>
              </CoursesListWrapper>
            </LearningContainer>
          ) : (
            <EmptyContainer>
              <EmptyImage src={chatGpt4} alt="No data" />
              <EmptyHeading>No courses yet!</EmptyHeading>
              <EmptyInfo>
                Your learning journey starts here! You haven’t enrolled in any
                courses yet.
              </EmptyInfo>
            </EmptyContainer>
          ))}
      </DashboardContainer>
    </>
  );
};

export default DashboardTabs;
