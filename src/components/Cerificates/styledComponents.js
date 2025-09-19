import styled from "styled-components";
import CertificateContainer from "../../assets/CertificateContainer.png";
import CertificateBackgroundImage from "../../assets/CertificateBackgroundImage.jpg";

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

export const CertificatesTopContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  padding-bottom: 32px;
  color: ${(props) => (props.theme === "light" ? "#000" : "#fff")};
`;

export const CertificatesHeading = styled.h1`
  font-size: 24px;
  font-weight: 600;
  font-family: "Work Sans", sans-serif;
`;

export const CertificatesList = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0px;
  gap: 24px;
  @media (min-width: 786px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 24px;
  }
`;

export const CertificateItem = styled.li`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  width: 100%;
  background-color: #fff;
  box-shadow: 2px 2px 6px 0px #0000001a;
  background-color: ${(props) =>
    props.theme === "light" ? "#fff" : "#343434"};
  @media (min-width: 786px) {
    width: 345px;
  }
`;

export const CertificateDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 20px;
`;

export const CertificateNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const CertificateName = styled.h1`
  font-size: 24px;
  font-family: "Work Sans", sans-serif;
  font-weight: 500;
  margin-top: 0px;
  color: ${(props) => (props.theme === "light" ? "#262626" : "#fff")};
`;

export const CertificateDate = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${(props) => (props.theme === "light" ? "#787575" : "#fff")};
  font-family: "Work Sans", snas-serif;
  font-size: 16px;
  font-wight: 500;
  gap: 8px;
`;

export const CertificateDownloadButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 12px;
  align-items: center;
  border-radius: 8px;
  background-color: #fc2947;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  height: 44px;
  cursor: pointer;
  transition: 0.2s ease-in;

  &:hover {
    background-color: #ce2d2c;
  }
`;

export const CertificateViewWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  cursor: pointer;

  &:hover div {
    opacity: 1;
    visibility: visible;
  }
`;

export const ViewOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out;
`;

// Certificate Model
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  // background: #fff;
  padding: 20px;
  border-radius: 12px;
  // max-width: 100%;
  // max-height: 90%;
  // overflow: auto;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 20px;
  background: transparent;
  border: none;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
`;
