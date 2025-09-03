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
  border: none;
  border-radius: 8px;
  border: 1px solid ${(props) => (props.active ? "#519CCD" : "#D4D4D4")};
  color: ${(props) => (props.active ? "#519CCD" : "#9D9D9D")};
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    color: ${(props) => (props.active ? "" : "#519CCD")};
  }
  @media (min-width: 1024px) {
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }
`;

//////
export const Card = styled.div`
  border: 1px solid #e4e4e7;
  border-radius: 16px;
  padding: 1rem;
`;

export const TabBar = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 0.7rem;
`;

export const Tab = styled.button`
  font-size: 1.09rem;
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
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 1.5rem;
  margin-top: 0.2rem;
  color: #444444;
`;

export const Flex = styled.div`
  display: flex;
  align-items: cener;
  gap: px;
  cursor: pointer;
  @media (min-width: 1024px) {
    gap: 20px;
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
  width: 25px;
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
  color: ${(props) => (props.isActive ? "#343434" : "#9D9D9D")};
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
  color: #777575;
  font-weight: 500;
`;

export const LegendScore = styled.h1`
  font-size: 14px;
  color: #343434;
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
    color: #444444;
  }
`;

export const MobileContainer = styled.div`
  display: flex;
  margin-top: 10px;
  gap: 20px;
  @media (min-width: 1024px) {
    displa: flex;
    flex-direction: column;
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
  color: #444444;
`;
export const EmptyImage = styled.img`
  height: 300px;
  width: 350px;
  margin: 0rem auto;
`;

export const EmptyInfo = styled.h1`
  font-size: 16px;
  font-weight: 700;
  color: #767676;
  text-align: center;
`;
export const EmptyMessage = styled.p`
  font-size: 16px;
  color: #767676;
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
