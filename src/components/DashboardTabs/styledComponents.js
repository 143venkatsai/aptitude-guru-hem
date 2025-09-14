import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const DashboardContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0rem 1rem;
  padding: 1rem 0rem;
  @media (min-width: 1024px) {
    margin: 0rem 5rem;
    padding-bottom: 1rem;
`;

export const TabRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  @media (min-width: 1024px) {
    gap: 1rem;
  }
`;

export const Tab = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 1rem 0rem;
  margin: auto;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${(props) => {
    if (props.isActive) {
      return props.themeMode === "light" ? "#DCDCDC" : "#5c5c5c";
    }
    return props.themeMode === "light" ? "#ECECEC" : "#343434";
  }};
`;

export const TabIcon = styled(FontAwesomeIcon)`
  color: ${(props) => (props.theme === "light" ? "#444444" : "#DCDCDC")};
`;

export const TabTitle = styled.h1`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => (props.theme === "light" ? "#444444" : "#DCDCDC")};
  margin-left: 4px;
  @media (min-width: 1024px) {
    font-size: 16px;
    margin-left: 10px;
  }
`;

export const RecentTabContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid
    ${(props) => (props.theme === "light" ? "#e4e4e7" : "#505050")};
  border-radius: 8px;
  margin: 1rem 0rem;
`;

export const RecentTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 55px;
  padding: 0.5rem 1rem;
  @media (min-width: 1024px) {
    padding: 0.5rem 3rem;
  }
`;

export const RecentTabTitle = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => (props.theme === "light" ? "#737373" : "#ffffff")};
  @media (min-width: 1024px) {
    font-size: 20px;
    font-weight: 600;
  }
`;

export const RecentTabInfo = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #2f88c6;
`;

export const RecentQuestions = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
`;

export const QuestionItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  height: 55px;
  background-color: ${(props) => {
    if (props.isTrue) {
      return props.themeMode === "light" ? "#f8f8f8" : "#343434";
    }
  }};
  border-radius: 7px;
  @media (min-width: 1024px) {
    padding: 0.5rem 3rem;
  }
`;

export const Question = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: #3c9bd9;

  @media (min-width: 1024px) {
    font-size: 18px;
    font-weight: 500;
  }

  @media (max-width: 1023px) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 140px;
  }
`;

export const Time = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => (props.theme === "light" ? "#848382" : "#ffffff")};
  margin-left: auto;
  margin-right: 10px;
  @media (min-width: 1024px) {
    font-size: 16px;
    margin-right: 20px;
  }
`;

export const LearningContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  @media (min-width: 1024px) {
    margin-top: 5px;
  }
`;

export const LearningTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0rem;
`;

export const LearningTitle = styled.h1`
  font-size: 16px;
  font-weight: 600px;
  color: ${(props) => (props.theme === "light" ? "#000000" : "#ffffff")};
  @media (min-width: 1024px) {
    font-size: 24px;
    font-weight: 600;
  }
`;

export const LearningView = styled.p`
  font-size: 14px;
  color: #5a52f2;
  @media (min-width: 1024px) {
    font-size: 16px;
  }
`;

export const CoursesList = styled.ul`
  list-style: none;
  display: flex;
  gap: 16px;
  width: max-content;
  margin: 0;
  padding: 0;

  @media (min-width: 1024px) {
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
  }
`;

export const CourseItem = styled.li`
  display: flex;
  flex-direction: column;
  border: 1px solid
    ${(props) => (props.theme === "light" ? "#e4e4e7" : "#505050")};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 280px;

  @media (min-width: 1024px) {
    width: calc((100% - 3 * 16px) / 4);
  }
`;

export const CourseImage = styled.img`
  width: 100%;
  height: 180px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const CourseProgressContainer = styled.div`
  width: 100%;
  height: 5px;
  background-color: #cccccc;
`;

export const CourseProgress = styled.div`
  width: 50%;
  height: 5px;
  background-color: #fc2947;
`;

export const CourseDetails = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
`;

export const CourseTitle = styled.h1`
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => (props.theme === "light" ? "#212121 " : "#ffffff")};
  margin-bottom: 1rem;
`;

export const CourseBottomContainer = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 6px;
`;

export const AuthorIcon = styled(FontAwesomeIcon)`
  color: ${(props) => (props.theme === "light" ? "#444444 " : "#ffffff")};
  height: 10.67px;
  width: 10.67px;
`;

export const AuthorName = styled.h1`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => (props.theme === "light" ? "#444444 " : "#ffffff")};
  margin-left: 4px;
`;

export const CourseDuration = styled.p`
  font-size: 10px;
  font-weight: 600;
  color: ${(props) => (props.theme === "light" ? "#444444 " : "#ffffff")};
  margin-left: auto;
`;

export const CoursesListWrapper = styled.div`
  overflow-x: auto;
  width: 100%;
  padding-bottom: 12px;

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;

  -webkit-overflow-scrolling: touch;

  @media (min-width: 1024px) {
    overflow-x: hidden;
  }
`;

export const PlayIconContainer = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: #fc2947;
`;

export const PlayIcon = styled(FontAwesomeIcon)`
  color: #ffffff;
`;

export const CourseImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
`;

export const EmptyImage = styled.img`
  height: 300px;
  width: 350px;
`;

export const EmptyHeading = styled.h1`
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  color: ${(props) => (props.theme === "light" ? "#212121 " : "#ffffff")};
`;

export const EmptyInfo = styled.p`
  font-size: 14px;
  color: ${(props) => (props.theme === "light" ? "#212121 " : "#ffffff")};
  text-align: center;
`;

export const EmptyImageTop = styled.img`
  height: 150px;
  width: 150px;
  margin: 0rem auto;
`;
