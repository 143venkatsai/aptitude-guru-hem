import React, { useContext, useState } from "react";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import {
  AssessmentContainer,
  AssessmentHeading,
  AssessmentModelContent,
  AssessmentNavContainer,
  AssessmentPop,
  CloseButton,
  DownloadButton,
  GifVideoOne,
  GifVideoOneSm,
  GifVideoThree,
  GifVideoTwo,
  Medal,
  PopupButtons,
  PopupDescription,
  PopupHeading,
  PopupTopContainer,
  SearchContainer,
  SearchIcon,
  TabContainer,
  TabContainerLgDevices,
  TabItem,
  ViewButton,
} from "./stylesComponents";

import ThemeContext from "../../context/ThemeContext";

import Header from "../Header";
import TestDetails from "../TestDetails";
import AssessmentModel from "../AssessmnetModel";

import medal from "../../assets/medal.png";
import video from "../../assets/video.gif";
import ConeVideo from "../../assets/ConeVideo.gif";

const tabLinks = [
  { id: 1, testId: "new", tabContent: "New", tabContentLg: "New Tests" },
  {
    id: 2,
    testId: "attempted",
    tabContent: "Attempted",
    tabContentLg: " Attemted Tests",
  },
  {
    id: 3,
    testId: "missed",
    tabContent: "Missed",
    tabContentLg: "Missed Tests",
  },
];

const data = {
  id: 1,
  studentName: "Prisha Yagna",
  instituteName: "Sathyabama Institute of Science and Technology",
  courseName: "Full Stack Development Training Program",
  courseShortName: "Full Stack Dev",
  startDate: "24th February 2025",
  endDate: "28th March 2025",
  hours: 120,
  awardDate: "2nd April 2025",
};

const Assessments = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [assessment, setAssessment] = useState(true);
  const { theme } = useContext(ThemeContext);

  console.log(assessment);

  const activeTestId = tabLinks.find((tab) => tab.id === activeTab)?.testId;
  console.log(activeTestId);

  return (
    <>
      <Header />
      <AssessmentContainer>
        <AssessmentHeading>Lab Tests</AssessmentHeading>
        <AssessmentNavContainer>
          <TabContainerLgDevices>
            {tabLinks.map((eachTab) => (
              <TabItem
                key={eachTab.id}
                isActive={activeTab === eachTab.id}
                onClick={() => setActiveTab(eachTab.id)}
              >
                {eachTab.tabContentLg}
              </TabItem>
            ))}
          </TabContainerLgDevices>
          <SearchContainer>
            <SearchIcon icon={faMagnifyingGlass} />
            <input
              type="text"
              placeholder="Search Here..."
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </SearchContainer>
          <TabContainer>
            {tabLinks.map((eachTab) => (
              <TabItem
                key={eachTab.id}
                isActive={activeTab === eachTab.id}
                onClick={() => setActiveTab(eachTab.id)}
              >
                {eachTab.tabContent}
              </TabItem>
            ))}
          </TabContainer>
        </AssessmentNavContainer>

        {/* test details */}
        <TestDetails activeTestId={activeTestId} searchInput={searchInput} />
      </AssessmentContainer>
      {!!assessment && (
        <AssessmentPop>
          <AssessmentModelContent theme={theme}>
            <CloseButton theme={theme} onClick={() => setAssessment(false)}>
              ✕
            </CloseButton>
            <PopupTopContainer>
              <PopupHeading>Congratulations</PopupHeading>
              <PopupDescription theme={theme}>
                You have successfully completed all aptitude tests.
              </PopupDescription>
            </PopupTopContainer>
            <AssessmentModel certficateData={data} />
            <PopupButtons>
              <DownloadButton>Download</DownloadButton>
              <ViewButton>View All</ViewButton>
            </PopupButtons>
            <Medal src={medal} />
            <GifVideoOne>
              <img
                src={video}
                alt="Celebration Animation"
                style={{ width: "240px", height: "180px" }}
              />
              <img
                src={video}
                alt="Celebration Animation"
                style={{ width: "250px", height: "180px" }}
              />
              <img
                src={video}
                alt="Celebration Animation"
                style={{ width: "240px", height: "180px" }}
              />
              {/* <img
                src={video}
                alt="Celebration Animation"
                style={{ width: "200px", height: "180px" }}
              /> */}
            </GifVideoOne>
            <GifVideoOneSm>
              <img
                src={video}
                alt="Celebration Animation"
                style={{ width: "300px", height: "180px" }}
              />
            </GifVideoOneSm>
            <GifVideoTwo>
              <img src={ConeVideo} alt="Celbration Animation" />
            </GifVideoTwo>
            <GifVideoThree>
              <img src={ConeVideo} alt="Celbration Animation" />
            </GifVideoThree>
          </AssessmentModelContent>
        </AssessmentPop>
      )}
    </>
  );
};

export default Assessments;
