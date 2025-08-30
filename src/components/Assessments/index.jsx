import React, { useState } from "react";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import {
  AssessmentContainer,
  AssessmentHeading,
  AssessmentNavContainer,
  SearchContainer,
  SearchIcon,
  TabContainer,
  TabContainerLgDevices,
  TabItem,
} from "./stylesComponents";

import Header from "../Header";
import TestDetails from "../TestDetails";

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

// const tabLinks = [
//   { id: 1, testId: "new", tabContent: "New Tests", },
//   { id: 2, testId: "attempted", tabContent: "Attempted Tests" },
//   { id: 3, testId: "missed", tabContent: "Missed Tests" },
// ];

const Assessments = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [searchInput, setSearchInput] = useState("");

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
    </>
  );
};

export default Assessments;
