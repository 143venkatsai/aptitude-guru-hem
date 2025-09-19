import styled from "styled-components";

import CertificateBackgroundImage from "../../assets/CertificateBackgroundImage.jpg";

export const BackgroundContainer = styled.div`
  background-image: url(${CertificateBackgroundImage});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 23px 0px 13px 0px;
  width: 350px;
  @media (min-width: 1024px) {
    width: 900px;
    height: 600px;
    padding: 60px 0px 35px 0px;
  }
`;

export const LogoImage = styled.img`
  height: 14px;
  width: 58px;
  @media (min-width: 1024px) {
    height: 40px;
    width: 150px;
  }
`;

export const CertificateTitle = styled.h1`
  color: #ce2d2c;
  font-size: 9.28px;
  font-weight: 700;
  font-family: "Raleway", sans-serif;
  letter-spacing: 0.928px;
  line-height: 100%;
  margin-top: 4px;
  @media (min-width: 1024px) {
    font-size: 26px;
    font-weight: 700;
    letter-spacing: 2.6px;
    margin-top: 12px;
  }
`;

export const Certify = styled.p`
  font-size: 5.71px;
  font-weight: 400;
  color: #2d2d37;
  letter-spacing: 0.571px;
  font-family: "Raleway", sans-serif;
  margin-top: 4px;
  @media (min-width: 1024px) {
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 1.6px;
    margin-top: 15px;
  }
`;

export const CertificateHolder = styled.h1`
  color: #18191f;
  font-size: 16.07px;
  font-weight: 700;
  font-family: "Dancing Script", cursive;
  margin-top: 0px;
  padding-bottom: 5px;
  border-bottom: 0.1px solid #2d2d3780;
  @media (min-width: 1024px) {
    color: #18191f;
    font-size: 45px;
    font-weight: 700;
    margin-top: 9px;
    padding-bottom: 0px;
    border-bottom: 2px solid #2d2d3780;
  }
`;

export const InstituteName = styled.h2`
  color: #2d2d37;
  font-size: 8.3px;
  font-weight: 700;
  font-family: "Raleway", sans-serif;
  margin-top: 0.7px;
  letter-spacing: 0.83px;
  @media (min-width: 1024px) {
    font-size: 21px;
    font-weight: 700;
    margin-top: 2px;
    text-align: center;
    letter-spacing: 2.1px;
  }
`;

export const TrainingDetails = styled.p`
  color: #2d2d37;
  font-size: 5.7px;
  text-align: center;
  font-family: "Raleway", sans-serif;
  margin-top: 3.57px;
  letter-spacing: 0.57px;
  @media (min-width: 1024px) {
    font-size: 16px;
    text-align: center;
    margin-top: 10px;
    letter-spacing: 1.6px;
  }
`;

export const Awarded = styled.p`
  color: #ce2d2c;
  font-size: 6.78px;
  font-weight: 700;
  text-align: center;
  font-family: "Raleway", sans-serif;
  margin-top: 3.07px;
  letter-spacing: 0.678px;
  @media (min-width: 1024px) {
    font-size: 19px;
    margin-top: 11px;
    margin-bottom: -10px;
    letter-spacing: 1.9px;
  }
`;

export const CertificateBottom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 14px;
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 60px;
    margin-top: 10px;
  }
`;

export const SignatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SignatureHolder = styled.p`
  color: #2d2d37;
  font-size: 6px;
  font-weight: 600;
  text-align: center;
  font-family: "Raleway", sans-serif;
  letter-spacing: 0.6px;
  @media (min-width: 1024px) {
    font-size: 12px;
    font-weight: 600;
    text-align: center;
    letter-spacing: 1.2px;
  }
`;

export const SealImage = styled.img`
  height: 26px;
  width: 26px;
  margin-top: auto;
  @media (min-width: 1024px) {
    height: 60px;
    width: 70px;
  }
`;

export const SignatureWrapper = styled.div`
  border-bottom: 0.2px solid #2d2d3780;
  @media (min-width: 1024px) {
    margin-bottom: 4px;
  }
`;

export const SignatureOne = styled.img`
  height: 25px;
  width: 40px;
  margin-bottom: -5px;

  @media (min-width: 1024px) {
    height: 40px;
    width: 80px;
    margin-bottom: -10px;
  }
`;

export const SignatureTwo = styled.img`
  height: 25px;
  width: 54px;
  margin-bottom: -5px;
  @media (min-width: 1024px) {
    height: 40px;
    width: 80px;
    margin-bottom: -10px;
  }
`;
