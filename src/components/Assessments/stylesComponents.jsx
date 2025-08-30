import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const AssessmentContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1rem;
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
