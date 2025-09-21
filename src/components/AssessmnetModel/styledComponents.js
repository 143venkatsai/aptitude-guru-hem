import styled from "styled-components";

import CertificateBackgroundImage from "../../assets/CertificateBackgroundImage.jpg";

export const BackgroundContainer = styled.div`
  background-image: url(${CertificateBackgroundImage});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 0px 12px 0px;
  width: 330px;
  @media (min-width: 1024px) {
    width: 509px;
    padding: 42px 0px 19px 0px;
  }
`;

export const LogoImage = styled.img`
  height: 15px;
  width: 61px;
  @media (min-width: 1024px) {
    height: 21px;
    width: 87px;
  }
`;

export const CertificateTitle = styled.h1`
  color: #ce2d2c;
  font-size: 9.86px;
  font-weight: 700;
  font-family: "Raleway", sans-serif;
  letter-spacing: 0.986px;
  line-height: 100%;
  margin-top: 4.5px;
  @media (min-width: 1024px) {
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 1.4px;
    margin-top: 6.5px;
  }
`;

export const Certify = styled.p`
  font-size: 6.06px;
  font-weight: 400;
  color: #2d2d37;
  letter-spacing: 0.606px;
  font-family: "Raleway", sans-serif;
  margin-top: 5.69px;
  @media (min-width: 1024px) {
    font-size: 8.66px;
    font-weight: 400;
    letter-spacing: 0.866px;
    margin-top: 8.12px;
  }
`;

export const CertificateHolder = styled.h1`
  color: #18191f;
  font-size: 17.06px;
  font-weight: 700;
  font-family: "Dancing Script", cursive;
  margin-top: 3.27px;
  padding-bottom: 5px;
  border-bottom: 0.38px solid #2d2d3780;
  @media (min-width: 1024px) {
    color: #18191f;
    font-size: 24.37px;
    font-weight: 700;
    margin-top: 3.95px;
    padding-bottom: 0px;
    border-bottom: 0.54px solid #2d2d3780;
  }
`;

export const InstituteName = styled.h2`
  color: #2d2d37;
  font-size: 8.53px;
  font-weight: 700;
  font-family: "Raleway", sans-serif;
  margin-top: 1.37px;
  letter-spacing: 0.853px;
  @media (min-width: 1024px) {
    font-size: 12px;
    font-weight: 700;
    margin-top: 1.2px;
    text-align: center;
    letter-spacing: 1.2px;
  }
`;

export const TrainingDetails = styled.p`
  color: #2d2d37;
  font-size: 6.06px;
  font-wight: 400;
  text-align: center;
  font-family: "Raleway", sans-serif;
  margin-top: 7.87px;
  letter-spacing: 0.606px;
  line-height: 9.86px;
  @media (min-width: 1024px) {
    font-size: 8.66px;
    text-align: center;
    margin-top: 10.45px;
    line-height: 14.08px;
    letter-spacing: 0.866px;
  }
`;

export const Awarded = styled.p`
  color: #ce2d2c;
  font-size: 7.2px;
  font-weight: 700;
  text-align: center;
  font-family: "Raleway", sans-serif;
  margin-top: 10px;
  letter-spacing: 0.72px;
  @media (min-width: 1024px) {
    font-size: 10.29px;
    margin-top: 14.67px;
    margin-bottom: -8px;
    letter-spacing: 1.029px;
  }
`;

export const CertificateBottom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 40px;
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
  font-size: 4px;
  font-weight: 600;
  text-align: center;
  font-family: "Raleway", sans-serif;
  letter-spacing: 0.4px;
  @media (min-width: 1024px) {
    font-size: 6.5px;
    font-weight: 600;
    text-align: center;
    letter-spacing: 0.65px;
  }
`;

export const SealImage = styled.img`
  height: 20px;
  width: 22px;
  margin-top: auto;
  @media (min-width: 1024px) {
    height: 39.98px;
    width: 43.57px;
  }
`;

export const SignatureWrapper = styled.div`
  border-bottom: 0.1px solid #2d2d3780;
  margin-bottom: 2px;

  @media (min-width: 1024px) {
    margin-bottom: 4px;
    border-bottom: 0.2px solid #2d2d3780;
  }
`;

export const SignatureOne = styled.img`
  height: 20px;
  width: 30px;
  margin-bottom: -5px;
  @media (min-width: 1024px) {
    height: 30.59px;
    width: 50.97px;
    margin-bottom: -10px;
  }
`;

export const SignatureTwo = styled.img`
  height: 18px;
  width: 50px;
  margin-bottom: -5px;
  @media (min-width: 1024px) {
    height: 30.07px;
    width: 61.68px;
    margin-bottom: -10px;
  }
`;
