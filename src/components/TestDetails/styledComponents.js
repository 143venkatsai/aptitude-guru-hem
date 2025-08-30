import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const TestList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 1rem;
  padding: 0;
  margin: 0;
  margin-top: 1.5rem;
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: ${(props) =>
      props.activeTestId === "new" ? "row" : "column"};
  }
`;

export const TestItem = styled.li`
  display: flex;
  flex-direction: column;
  border: 1px solid #dcdcdc;
  border-radius: 1rem;
  padding: 1rem;

  @media (min-width: 1024px) {
    padding: 1rem 2rem;
    width: ${(props) => (props.activeTestId === "new" ? "50%" : "100%")};
  }
`;

export const TestTopContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1.2rem;
  gap: 0.5rem;
  border-bottom: 1px solid #999999;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: between;
    width: 100%;
    align-items: center;
  }
`;

export const TestTopLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;

export const TestTitleContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const TestTitle = styled.h1`
  font-size: 1rem;
  font-weight: 700;

  @media (min-width: 1024px) {
    font-size: 1.2rem;
  }
`;

export const TestType = styled.div`
  background-color: #f2f2f2;
  padding: 0.3rem 1rem;
  border-radius: 1rem;

  p {
    font-size: 1rem;
    color: #4d4d4d;
  }
`;

export const TestRoundContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  @media (min-width: 1024px) {
    gap: 0.8rem;
  }
`;

export const TestRound = styled.h1`
  font-size: 1rem;
`;

export const TestDate = styled.p`
  font-size: 1rem;
  color: #555;
`;

// export const HorizontalLine = styled.hr`
//   background-color: #323f4b;
// `;

export const TestBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.2rem;

  @media (min-width: 1024px) {
    flex-direction: ${(props) =>
      props.activeTestId === "new" ? "column" : "row"};
    gap: 2rem;
  }
`;

export const TestBottomInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 1024px) {
    ${({ activeTestId }) =>
      activeTestId === "new"
        ? `
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          gap:2rem;
        `
        : `
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          gap:2rem;
        `}
  }
`;

export const TestInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const TestIcon = styled(FontAwesomeIcon)`
  color: #4d4d4d;
  height: 1.2rem;
  width: 1.2rem;
`;

export const TestInfo = styled.h1`
  display: flex;
  font-weight: 500;
  align-items: center;
  font-size: 1rem;
  color: #4d4d4d;
`;

export const TestButton = styled.button`
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 0.2rem;
  cursor: pointer;

  @media (min-width: 1024px) {
    margin-left: auto;
    padding: 0.5rem 1.5rem;
  }
`;

export const StatusButton = styled.button`
  font-size: 1rem;
  color: #fff;
  padding: 0.3rem 1.5rem;
  border-radius: 2rem;
  margin-right: auto;

  @media (min-width: 1024px) {
    margin-left: auto;
  }
`;

export const Dot = styled.div`
  height: 0.4rem;
  width: 0.4rem;
  background-color: #3c9bd9;
  border-radius: 50%;
`;

export const MissedTabSection = styled.div`
  display: flex;
  align-item: center;
  background-color: #fffed8;
  padding: 0.8rem 1.5rem;
  gap: 1rem;
  border: 1px solid #ffeed4;
  border-radius: 0.5rem;
  margin-top: 1.5rem;

  @media (min-width: 1024px) {
    margin-top: 1rem;
  }
`;

export const MissedTabIcon = styled(FontAwesomeIcon)`
  color: #fdae00;
  height: 1.5rem;
  weight: 1.5rem;
`;

export const MissedTabMessage = styled.p`
  font-size: 1rem;
`;
