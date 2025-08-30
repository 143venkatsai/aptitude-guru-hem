import styled from "styled-components";

export const CoursesContainer = styled.section`
  padding: 1rem;
  @media (min-width: 1024px) {
    padding: 1rem 3rem;
  }
`;

export const CoursesHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 1.25rem;
    font-weight: 600;

    @media (min-width: 1024px) {
      font-size: 1.5rem;
    }
  }

  button {
    font-size: 1rem;
    color: #0284c7;
    cursor: pointer;
    background: none;
    border: none;
  }
`;

export const CoursesList = styled.ul`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    overflow: visible;
  }
`;

export const CourseItem = styled.li`
  min-width: 200px;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1024px) {
    min-width: 0;
  }

  span {
    font-size: 2rem;
  }

  h1 {
    font-size: 1rem;
    font-weight: 600;
    margin-top: 0.5rem;

    @media (min-width: 1024px) {
      font-size: 1.25rem;
    }
  }

  p {
    font-size: 0.875rem;
    color: #4b5563; /* Tailwind gray-600 */
    text-align: center;
    margin: 0.25rem 0 0.75rem;
  }
`;

export const CourseTitle = styled.h1`
  text-align: center;
`;

export const ProgressBarWrapper = styled.div`
  width: 90%;
  background: #d1d5db;
  border-radius: 9999px;
  height: 0.5rem;
  margin-top: auto;
  margin-bottom: 0.25rem;
`;

export const ProgressBar = styled.div`
  background: #0ea5e9;
  height: 0.5rem;
  border-radius: 9999px 0 0 9999px;
  width: ${(props) => props.width || "0%"};
`;
