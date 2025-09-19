import styled from "styled-components";

export const BadgesContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 27px 1rem;
  min-height: 100vh;
  background-color: ${(props) =>
    props.theme === "light" ? "#fff" : "#262626"};
  @media (min-width: 1024px) {
    padding: 32px 99px;
  }
`;

export const BadgesTopContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  padding-bottom: 32px;
  color: ${(props) => (props.theme === "light" ? "#000" : "#fff")};
  @media (min-width: 1024px) {
    padding-bottom: 48px;
  }
`;

export const BadgesHeading = styled.h1`
  font-size: 24px;
  font-weight: 600;
  font-family: "Work Sans", sans-serif;
`;

export const AllBadgesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 786px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const BadgesList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 60px;
  border-left: none;
  border-top: 1px solid #dcdcdc;
  padding: 32px 0px;
  @media (min-width: 786px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 50px;
    border-left: 1px solid #dcdcdc;
    border-top: none;
    padding: 0rem 60px;
  }
`;

export const BadgeItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BadgeImage = styled.img`
  height: 125px;
  width: 129px;
  cursor: pointer;
  @media (min-width: 1024px) {
    width: 144px;
    height: 139px;
  }
`;

export const BadgeName = styled.p`
  font-size: 18px;
  font-weight: 600;
  font-family: "Work Sans", sans-serif;
  margin-top: 12px;
  color: ${(props) => (props.theme === "light" ? "#000" : "#fff")};
  @media (min-width: 1024px) {
    font-size: 20px;
  }
`;

export const ModelBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ModelDays = styled.p`
  color: ${(props) => (props.theme === "light" ? "#666666" : "#fff")};
  font-weight: 600;
  text-align: center;
`;

export const ModelMessage = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #767676;
  color: ${(props) => (props.theme === "light" ? "#767676" : "#fff")};
  text-align: center;
`;

export const OnGoingContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
  @media (min-width: 786px) {
    margin: 0px 40px 0px 0px;
  }
`;
