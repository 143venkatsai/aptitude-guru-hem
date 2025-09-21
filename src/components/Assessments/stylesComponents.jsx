import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const AssessmentContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1rem;
  position: relative;
  @media (min-width: 1024px) {
    padding: 2rem 10rem;
  }
`;

export const AssessmentHeading = styled.h1`
  font-size: 1.2rem;
  font-weight: 600;

  @media (min-width: 1024px) {
    font-size: 2rem;
  }
`;

export const AssessmentNavContainer = styled.div`
  disply: flex;
  flex-direction: coulmn;
  @media (min-width: 1024px) {
    flex-direction: column;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f2f2f2;
  width: 100%;
  padding: 0.5rem 0.8rem;
  margin: 1rem 0rem;
  border-radius: 2rem;

  @media (min-width: 1024px) {
    width: 30%;
    margin-top: 1.5rem;
  }

  input {
    outline: none;
    width: 100%;
    padding-left: 0.5rem;
  }
`;

export const SearchIcon = styled(FontAwesomeIcon)`
  color: #555;
`;

export const TabContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  @media (min-width: 1024px) {
    display: none;
  }
`;

export const TabItem = styled.li`
  font-size: 1rem;
  font-weight: ${(props) => (props.isActive ? 600 : 500)};
  position: relative;
  padding: 0.3rem 0.5rem;
  cursor: pointer;

  color: ${(props) => (props.isActive ? "red" : "black")};
  border-bottom: ${(props) =>
    props.isActive ? "2px solid red" : "2px solid transparent"};

  &:hover {
    color: red;
  }
`;

// tablist laptop screens

export const TabContainerLgDevices = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
    list-style: none;
    padding: 0;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

export const AssessmentPop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const AssessmentModelContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) =>
    props.theme === "light" ? "#fff" : "#343434"};
  width: 95%;
  border-radius: 12px;
  gap: 16px;
  padding: 20px 20px;
  position: relative;
  margin-top: 20px;
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 792px;
    border-radius: 16px;
    padding: 20px 20px;
    margin-top: 30px;
  }
`;

export const CloseButton = styled.button`
  margin-left: auto;
  border: none;
  color: ${(props) => (props.theme === "light" ? "#343434" : "#E6E6E6")};
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  position: absolute;
  z-index: 1000;
  right: 20px;
  top: 20px;
  @media (min-width: 1024px) {
    font-size: 20px;
    right: 30px;
    top: 20px;
  }
`;

export const PopupTopContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
`;

export const PopupHeading = styled.h1`
  background: linear-gradient(to bottom, #fec574, #fb9e14);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  font-size: 24px;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  margin-top: 40px;

  @media (min-width: 1024px) {
    font-size: 32px;
    font-weight: 700;
    margin-top: 40px;
  }
`;

export const PopupDescription = styled.p`
  color: ${(props) => (props.theme === "light" ? "#666666" : "#E6E6E6")};
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  margin-bottom: 20px;
  text-align: center;
  @media (min-width: 1024px) {
    font-size: 20px;
    font-weight: 400;
  }
`;

export const PopupButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const DownloadButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: 155px;
  height: 48px;
  color: #fff;
  background-color: #fc2947;
  border-radius: 4px;
  cursor: pointer;
  @media (min-width: 1024px) {
    width: 246px;
    height: 42px;
    gap: 12px;
    font-size: 16px;
  }
`;

export const ViewButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: 155px;
  height: 48px;
  color: #fc2947;
  border: 1px solid #fc2947;
  border-radius: 4px;
  cursor: pointer;
  @media (min-width: 1024px) {
    width: 246px;
    height: 42px;
    gap: 12px;
    background-color: #ececec;
    border: none;
  }
`;

export const Medal = styled.img`
  width: 88px;
  height: 88px;
  position: absolute;
  top: -48px;
`;

export const GifVideoOne = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
  }
`;

export const GifVideoOneSm = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  @media (min-width: 1024px) {
    display: none;
  }
`;

export const GifVideoTwo = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 60%;
  left: 0;
  @media (min-width: 1024px) {
    left: 20px;
  }
`;

export const GifVideoThree = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 60%;
  right: 0;
  transform: scaleX(-1);
  @media (min-width: 1024px) {
    right: 20px;
  }
`;
