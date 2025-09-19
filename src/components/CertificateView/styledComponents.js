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
  width: 100%;
  // border-top-left-radius: 12px;
  // border-top-right-radius: 12px;
  @media (min-width: 1024px) {
    width: 345px;
    height: 227px;
  }
`;

export const LogoImage = styled.img`
  height: 14px;
  width: 58px;
`;

export const CertificateTitle = styled.h1`
  color: #ce2d2c;
  font-size: 9.28px;
  font-weight: 700;
  font-family: "Raleway", sans-serif;
  letter-spacing: 0.928px;
  line-height: 100%;
  margin-top: 4px;
`;

export const Certify = styled.p`
  font-size: 5.71px;
  font-weight: 400;
  color: #2d2d37;
  letter-spacing: 0.571px;
  font-family: "Raleway", sans-serif;
  margin-top: 4px;
`;

export const CertificateHolder = styled.h1`
  color: #18191f;
  font-size: 16.07px;
  font-weight: 700;
  font-family: "Dancing Script", cursive;
  margin-top: 0px;
  padding-bottom: 5px;
  border-bottom: 0.1px solid #2d2d3780;
`;

export const InstituteName = styled.h2`
  color: #2d2d37;
  font-size: 8.3px;
  font-weight: 700;
  font-family: "Raleway", sans-serif;
  margin-top: 0.7px;
  letter-spacing: 0.83px;
`;

export const TrainingDetails = styled.p`
  color: #2d2d37;
  font-size: 5.7px;
  text-align: center;
  font-family: "Raleway", sans-serif;
  margin-top: 3.57px;
  letter-spacing: 0.57px;
`;

export const Awarded = styled.p`
  color: #ce2d2c;
  font-size: 6.78px;
  font-weight: 700;
  text-align: center;
  font-family: "Raleway", sans-serif;
  margin-top: 3.07px;
  letter-spacing: 0.678px;
`;

export const CertificateBottom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 14px;
`;

export const SignatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SignatureHolder = styled.p`
  color: #2d2d37;
  font-size: 4.29px;
  font-weight: 600;
  text-align: center;
  font-family: "Raleway", sans-serif;
  letter-spacing: 0.429px;
  margin-top: 2px;
`;

export const SealImage = styled.img`
  height: 26px;
  width: 26px;
  margin-top: auto;
`;

export const SignatureWrapper = styled.div`
  border-bottom: 0.1px solid #2d2d3780;
`;

export const SignatureOne = styled.img`
  height: 25px;
  width: 40px;
  margin-bottom: -5px;
`;

export const SignatureTwo = styled.img`
  height: 25px;
  width: 54px;
  margin-bottom: -5px;
`;
