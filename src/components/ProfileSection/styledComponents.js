import styled from "styled-components";

export const ProfileContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1rem;
  gap: 1rem;
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    padding: 2rem 5rem;
  }
`;
