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
  border: 1px solid
    ${(props) => (props.theme === "light" ? "#e4e4e7" : "#505050")};
`;

export const StreakTopTitle = styled.h1`
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => (props.theme === "light" ? " #666666" : "#ffffff")};
  margin-bottom: 5px;
`;

export const StreakInfo = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => (props.theme === "light" ? "#767676 " : "#DCDCDC")};
  margin-bottom: 10px;
`;

export const StreakMessage = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => (props.theme === "light" ? " #767676" : "#DCDCDC")};
  text-align: center;
  margin: 15px 0px;
`;

export const StreakButton = styled.button`
  background-color: #fc2947;
  color: #ffffff;
  font-size: 12px;
  font-weight: 500;
  padding: 5px 12px;
  border-radius: 4px;
  border: 1px solid #fd6a7f;
  cursor: pointer;
`;

export const StreakBottomSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
  flex-grow: 1;
  padding: 1rem;
  border: 1px solid
    ${(props) => (props.theme === "light" ? "#e4e4e7" : "#505050")};
  width: 100%;
  box-sizing: border-box;
  justify-content: flex-start;
`;

export const StreakBottomTitle = styled.h1`
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => (props.theme === "light" ? "#4d4d4d" : "#ffffff")};
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
  color: ${(props) => (props.theme === "light" ? "#343434" : "#DCDCDC")};
`;

export const StreakPracticeCount = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => (props.theme === "light" ? "#343434" : "#DCDCDC")};
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
