import styled from "styled-components";

export const StreakSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
  @media (min-width: 1024px) {
    width: 250px;
  }
`;

export const StreakTopSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
  padding: 1rem;
  border: 1px solid #e4e4e7;
`;

export const StreakTopTitle = styled.h1`
  font-size: 16px;
  font-weight: 600;
  color: #666666;
  margin-bottom: 5px;
`;

export const StreakInfo = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #767676;
  margin-bottom: 10px;
`;

export const StreakMessage = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #767676;
  text-align: center;
  margin: 10px 0px;
`;

export const StreakButton = styled.button`
  background-color: #fc2947;
  color: #ffffff;
  font-size: 12px;
  font-weight: 500;
  padding: 5px 12px;
  border-radius: 4px;
  cursor: pointer;
`;

export const StreakBottomSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
  flex-grow: 1;
  padding: 1rem;
  border: 1px solid #e4e4e7;
  width: 100%;
  box-sizing: border-box;
  justify-content: flex-start;
`;

export const StreakBottomTitle = styled.h1`
  font-size: 16px;
  font-weight: 600;
  color: #4d4d4d;
  margin-bottom: 20px;
`;

export const StreakPracticeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StreakPracticeSession = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 7px;
`;

export const StreakPracticeTitle = styled.h1`
  font-size: 16px;
  font-weight: 600;
  color: #343434;
`;

export const StreakPracticeCount = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #343434;
`;

export const StreakRangeContainer = styled.div`
  height: 8px;
  border-radius: 10px;
  width: 100%;
  background-color: #e6e6ed;
`;

export const StreakRange = styled.div`
  background-image: linear-gradient(to right, #989fff, #7a82ff);
  height: 8px;
  width: ${(props) => props.value}%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;
