import styled from "styled-components";

export const HeatMapContainer = styled.section`
  display: flex;
  flex-direction: column;
  border: 1px solid
    ${(props) => (props.theme === "light" ? "#e4e4e7" : "#505050")};
  border-radius: 16px;
  padding: 1rem;
  margin: 0rem 1rem;
  @media (min-width: 1024px) {
    margin: 0rem 5rem;
    margin-bottom: 1rem;
    padding: 1rem 2rem;
  }
`;

export const HeatMapTopSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const HeatMapLeftSection = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }
`;

export const Hours = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: ${(props) => (props.theme === "light" ? "#262626" : "#ffffff")};
`;

export const Months = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => (props.theme === "light" ? "#262626" : "#ffffff")};
`;

export const HeatMapRightSection = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }
`;

export const MaxStreak = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => (props.theme === "light" ? " #777676" : "#ffffff")};
`;

export const SelectContainer = styled.select`
  background-color: #fd6a7f;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  padding: 5px 10px;
  border-radius: 4px;

  option {
    background: #fff;
    color: #222;
  }
`;

export const HeatMapMobileLeftSection = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1024px) {
    display: none;
  }
`;

export const HoursMobile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

export const HeatMapScrollWrapper = styled.div`
  overflow-x: auto;
  width: 100%;
  box-sizing: border-box;
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  /* Hide scrollbar - IE and Edge */
  -ms-overflow-style: none;

  -webkit-overflow-scrolling: touch;

  @media (min-width: 769px) {
    overflow-x: unset;
  }
`;

export const MonthBlockContainer = styled.div`
  display: flex;
  gap: 10px;
  min-width: fit-content;
  justify-content: space-between;
  @media (max-width: 768px) {
    gap: 10px;
  }
`;

export const MonthBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: max-content;
`;
