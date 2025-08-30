import React from "react";

import {
  faLock,
  faClock,
  faListCheck,
  faCircleMinus,
  faCircleCheck,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";

import testDetails from "../../mockData/testDetails";

import {
  TestList,
  TestItem,
  TestTopContainer,
  TestTitleContainer,
  TestRoundContainer,
  TestRound,
  TestDate,
  TestBottomContainer,
  TestInfoContainer,
  TestInfo,
  TestIcon,
  TestTitle,
  TestType,
  TestButton,
  TestBottomInfo,
  StatusButton,
  TestTopLeftContainer,
  Dot,
  MissedTabSection,
  MissedTabMessage,
  MissedTabIcon,
} from "./styledComponents";

const TestDetails = (props) => {
  const { activeTestId, searchInput } = props;

  const filterTestDetails = testDetails.filter((test) => {
    const matchesTab = test.testTabId === activeTestId;
    const matchesSearch =
      searchInput.trim() === "" ||
      test.testName.toLowerCase().includes(searchInput.toLowerCase());
    return matchesTab && matchesSearch;
  });

  console.log(filterTestDetails);
  console.log(activeTestId);

  const getButtonConfiguration = (test) => {
    if (test.testTabId === "new") {
      return { text: "Start", bg: "#3C9BD9", color: "#ffffff" };
    }
    if (test.testTabId === "attempted") {
      if (test.score > 14) {
        return { text: "Completed", bg: "#ECECEC", color: "#4D4D4D" };
      }
      return { text: "Reattempt", bg: "#3C9BD9", color: "#ffffff" };
    }
    if (test.testTabId === "missed") {
      return { text: "Locked", bg: "#ECECEC", color: "#4D4D4D" };
    }

    return { text: "Start", bg: "#3c9bd9" };
  };

  const getResultConfiguration = (test) => {
    if (test.result === "Pass") {
      return { resultBg: "#00AA72", resultColor: "#00AA72" };
    }
    if (test.result === "Failed") {
      return { resultBg: "#FC2947", resultColor: "#FC2947" };
    }
  };

  const missedTab = activeTestId === "missed";

  return (
    <>
      {missedTab && (
        <MissedTabSection>
          <MissedTabIcon icon={faCircleExclamation} />
          <MissedTabMessage>
            You missed this test. Please contact your admin to request a
            reschedule.
          </MissedTabMessage>
        </MissedTabSection>
      )}
      <TestList activeTestId={activeTestId}>
        {filterTestDetails.map((testItem) => {
          console.log(testItem.testTabId);

          const { text, bg, color } = getButtonConfiguration(testItem);

          const statusText = testItem.testTabId === "attempted";
          const { resultBg, resultColor } =
            getResultConfiguration(testItem) || {};
          console.log(resultBg);
          console.log(statusText);

          return (
            <TestItem key={testItem.id} activeTestId={activeTestId}>
              <TestTopContainer>
                <TestTopLeftContainer>
                  <TestTitleContainer>
                    <TestTitle>{testItem.testName}</TestTitle>
                    <TestType>
                      <p>{testItem.testType}</p>
                    </TestType>
                  </TestTitleContainer>
                  <TestRoundContainer>
                    <TestRound>{testItem.subTopic}</TestRound>
                    <Dot></Dot>
                    <TestDate>
                      <span>Last Updated at </span>
                      {testItem.updatedAt}
                    </TestDate>
                  </TestRoundContainer>
                </TestTopLeftContainer>
                {statusText && (
                  <StatusButton style={{ backgroundColor: resultColor }}>
                    {testItem.result}
                  </StatusButton>
                )}
              </TestTopContainer>

              <TestBottomContainer activeTestId={activeTestId}>
                <TestBottomInfo activeTestId={activeTestId}>
                  <TestInfoContainer>
                    <TestIcon icon={faClock} />
                    <TestInfo>Duration : {testItem.duration}Marks</TestInfo>
                  </TestInfoContainer>
                  <TestInfoContainer>
                    <TestIcon icon={faListCheck} />
                    <TestInfo>Total Marks : {testItem.totalMarks}</TestInfo>
                  </TestInfoContainer>

                  {statusText ? (
                    <TestInfoContainer>
                      <TestIcon
                        icon={faCircleCheck}
                        style={{ color: resultBg }}
                      />
                      <TestInfo style={{ color: resultBg, fontWeight: 600 }}>
                        Your Marks : {testItem.score}
                      </TestInfo>
                    </TestInfoContainer>
                  ) : (
                    <TestInfoContainer>
                      <TestIcon icon={faCircleMinus} />
                      <TestInfo>
                        Negative Marks : {testItem.negativeMarks}
                      </TestInfo>
                    </TestInfoContainer>
                  )}
                </TestBottomInfo>
                {/* <TestButton>Start</TestButton> */}
                <TestButton style={{ backgroundColor: bg, color: color }}>
                  {text}
                  {(text === "Completed" || text === "Locked") && (
                    <TestIcon icon={faLock} style={{ marginLeft: "10px" }} />
                  )}
                </TestButton>
              </TestBottomContainer>
            </TestItem>
          );
        })}
      </TestList>
    </>
  );
};

export default TestDetails;
