import styled from "styled-components";

export const ProfileContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem;
  padding-top: 2rem;
  gap: 1rem;
  background-color: ${(props) => props.bgColor};
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    padding: 1rem 5rem;
    padding-top: 2rem;
  }
`;
