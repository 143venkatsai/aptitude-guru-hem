import styled from "styled-components";

export const CertificatesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 1rem;
  padding-top: 2rem;
  min-height: 100vh;
  background-color: ${(props) =>
    props.theme === "light" ? "#fff" : "#262626"};
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    padding: 1rem 5rem;
    padding-top: 2rem;
  }
`;

export const CertificatesHeading = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => (props.theme === "light" ? "#000" : "#fff")};
`;
