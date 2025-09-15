import styled from "styled-components";

export const CertificatesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1rem;
  min-height: 100vh;
  background-color: ${(props) =>
    props.theme === "light" ? "#fff" : "#262626"};
  @media (min-width: 1024px) {
    padding: 54px 100px;
  }
`;

export const CertificatesHeading = styled.h1`
  font-size: 24px;
  font-weight: 600;
  padding-bottom: 32px;
  color: ${(props) => (props.theme === "light" ? "#000" : "#fff")};
`;

export const CertificatesList = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0px;
  gap: 32px;
  @media (min-width: 786px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 32px;
  }
`;

export const CertificateItem = styled.li`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  width: 100%;
  background-color: #fff;
  box-shadow: 2px 2px 6px 0px #0000001a;
  background-color: ${(props) =>
    props.theme === "light" ? "#fff" : "#343434"};
  @media (min-width: 786px) {
    width: 270px;
  }
`;

export const CertificateImage = styled.img`
  width: 100%;
  height: 200px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  @media (min-width: 786px) {
    width: 270px;
    height: 168px;
  }
`;

export const CertificateDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 14px 12px;
`;

export const CertificateName = styled.h1`
  font-size: 13px;
  font-weight: 600;
  color: ${(props) => (props.theme === "light" ? "#000" : "#fff")};
`;

export const CertificatesButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
`;

export const CertificateDownloadButton = styled.button`
  height: 32px;
  width: 119px;
  border-radius: 4px;
  background-color: #fc2947;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`;

export const CertificateViewButton = styled.button`
  height: 32px;
  width: 119px;
  border-radius: 4px;
  border: 1px solid #fc2947;
  background-color: transparent;
  color: #fc2947;
  font-size: 14px;
  font-weight: 600;
`;
