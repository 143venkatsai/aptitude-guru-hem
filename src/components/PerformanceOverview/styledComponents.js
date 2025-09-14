import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const PerformanceContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flxow-direction: row;
  gap: 1rem;
`;

export const Button = styled.button`
  padding: 0.5rem 0.5rem;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;

  border: 1px solid
    ${(props) =>
      props.active
        ? props.themeMode === "dark"
          ? "#9BC6E2"
          : "#519CCD"
        : "#D4D4D4"};

  color: ${(props) =>
    props.active
      ? props.themeMode === "dark"
        ? "#BBD9EB"
        : "#519CCD"
      : props.themeMode === "dark"
      ? "#DCDCDC"
      : "#9D9D9D"};

  background-color: ${(props) =>
    props.active
      ? props.themeMode === "dark"
        ? "#53BFFF33"
        : "#E9F3F9"
      : "transparent"};

  &:hover {
    color: ${(props) =>
      !props.active
        ? props.themeMode === "dark"
          ? "#519CCD"
          : "#519CCD"
        : ""};
  }

  @media (min-width: 1024px) {
    font-size: 14px;
    padding: 0.5rem 1rem;
  }
`;

export const Card = styled.div`
  border: 1px solid
    ${(props) => (props.theme === "light" ? "#e4e4e7" : "#505050")};
  border-radius: 16px;
  padding: 1rem;
`;

export const TabBar = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 0.7rem;
`;

export const Tab = styled.button`
  font-size: 20px;
  font-weight: 600;
  padding: 0.42rem 2.1rem;
  border: 2px solid ${({ active }) => (active ? "#37bfff" : "transparent")};
  border-radius: 9px 9px 0 0;
  background: ${({ active }) => (active ? "#eaf8ff" : "transparent")};
  color: ${({ active }) => (active ? "#37bfff" : "#333")};
  outline: none;
  cursor: pointer;
  box-shadow: ${({ active }) => (active ? "0 2px 8px #eaf8ff" : "none")};
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 1.5rem;
  margin-top: 0.2rem;
  color: ${(props) => (props.theme === "light" ? "#444444" : "#ffffff")};
`;

export const Flex = styled.div`
  display: flex;
  align-items: cener;
  gap: 8px;
  cursor: pointer;
  @media (min-width: 1024px) {
    gap: 12px;
  }
`;

export const Metrics = styled.div`
  padding-left: 2.1rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  justify-content: center;
`;

export const MetricBlock = styled.div`
  font-size: 1.08rem;
  line-height: 1.2;
  margin-bottom: 0.2rem;
`;

export const Score = styled.div`
  font-size: 2rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const AssessmentScore = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #41c46b;
  margin-right: 0.4rem;
`;

export const ScoreInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

export const Emoji = styled.span`
  width: 21px;
  height: 17px;
  background: ${(props) => props.color};
`;

export const ChartArea = styled.div`
  margin: 0.7rem 0 0.3rem 0;
  width: 100%;
  height: 240px;
`;

export const LegendStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin: 1rem 0rem;
  align-items: center;
`;

export const LegendTitle = styled.h2`
  font-size: 12px;
  color: ${(props) => (props.theme === "light" ? "#343434" : "#DCDCDC")};
  @media (min-width: 1024px) {
    font-size: 14px;
  }
`;

export const CardTopContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    padding: 0rem 1rem;
    justify-content: space-between;
  }
`;

export const CardLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AverageIconContainer = styled.div`
  background-image: linear-gradient(to bottom, #fec574, #fb9e14);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  margin-right: 5px;
  @media (min-width: 1024px) {
    margin-right: 10px;
    height: 40px;
    width: 40px;
  }
`;

export const AverageAssessmentIcon = styled(FontAwesomeIcon)`
  color: #ffffff;
  height: 20px;
  width: 20px;
`;

export const AssessmentIconContainer = styled.div`
  background-image: linear-gradient(to bottom, #00aa72, #1fd196);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  margin-right: 5px;
  @media (min-width: 1024px) {
    margin-right: 10px;
    height: 40px;
    width: 40px;
  }
`;

export const AverageScoreContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const LegendScoreHeading = styled.h1`
  font-size: 14px;
  color: ${(props) => (props.theme === "light" ? "#777575" : "#ffffff")};
  font-weight: 500;
`;

export const LegendScore = styled.h1`
  font-size: 24px;
  color: ${(props) => (props.theme === "light" ? "#343434" : "#DCDCDC")};
  font-weight: 500;
`;

export const TitleMobile = styled.h1`
  display: none;
  @media (min-width: 1024px) {
    display: block;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 1.5rem;
    margin-top: 0.2rem;
    color: ${(props) => (props.theme === "light" ? "#444444" : "#ffffff")};
  }
`;

export const MobileContainer = styled.div`
  display: flex;
  margin-top: 30px;
  margin-bottom: 30px;
  gap: 20px;
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 0px;
  }
`;

export const MobileScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1024px) {
    display: flex;
  }
`;

export const PerformanceEmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #e4e4e7;
  padding: 1.5rem;
  border-radius: 16px;
  flex-grow: 1;
`;

export const EmptyHeading = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => (props.theme === "light" ? "#444444" : "#ffffff")};
`;
export const EmptyImage = styled.img`
  height: 300px;
  width: 350px;
  margin: 0rem auto;
`;

export const EmptyInfo = styled.h1`
  font-size: 16px;
  font-weight: 700;
  color: ${(props) => (props.theme === "light" ? "#767676" : "#ffffff")};
  text-align: center;
`;
export const EmptyMessage = styled.p`
  font-size: 16px;
  color: ${(props) => (props.theme === "light" ? "#767676" : "#ffffff")};
  text-align: center;
  margin-top: 0.5rem;
`;

export const EmptyButton = styled.button`
  background-color: #fc2947;
  color: #ffffff;
  font-size: 14px;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  align-self: center;
  margin-top: 1.5rem;
`;
