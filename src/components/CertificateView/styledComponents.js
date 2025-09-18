import styled from "styled-components";

import CertificateBackgroundImage from "../../assets/CertificateBackgroundImage.jpg";

export const BackgroundContainer = styled.div`
  width: 1883px;
  height: 1225px;
  background-image: url(${CertificateBackgroundImage});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  //   margin: 0rem 1rem;
  padding: 129px 0px 70px 0px;
  margin-bottom: 20px;
  @media (min-width: 1024px) {
    // margin: 20px 100px;
  }
`;

export const LogoImage = styled.img`
  height: 80px;
  width: 320px;
`;

export const CertificateTitle = styled.h1`
  color: #ce2d2c;
  font-size: 52px;
  font-weight: 700;
  font-family: "Raleway", sans-serif;
  letter-spacing: 5.2px;
  line-height: 100%;
  margin-top: 24px;
`;

export const Certify = styled.p`
  font-size: 32px;
  font-weight: 400;
  color: #2d2d37;
  letter-spacing: 3.2px;
  font-family: "Raleway", sans-serif;
  margin-top: 30px;
`;

export const CertificateHolder = styled.h1`
  color: #18191f;
  font-size: 90px;
  font-weight: 700;
  font-family: "Dancing Script", cursive;
  margin-top: 18px;
  padding-bottom: 1.5px;
  border-bottom: 2px solid #2d2d3780;
`;

export const InstituteName = styled.h2`
  color: #2d2d37;
  font-size: 42px;
  font-weight: 700;
  font-family: "Raleway", sans-serif;
  margin-top: 8px;
  letter-spacing: 4.2px;
`;

export const TrainingDetails = styled.p`
  color: #2d2d37;
  font-size: 32px;
  text-align: center;
  font-family: "Raleway", sans-serif;
  margin-top: 25px;
  letter-spacing: 3.2px;
`;

export const Awarded = styled.p`
  color: #ce2d2c;
  font-size: 38px;
  font-weight: 700;
  text-align: center;
  font-family: "Raleway", sans-serif;
  margin-top: 22px;
  letter-spacing: 3.8px;
`;

export const CertificateBottom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 114px;
  margin-top: -10px;
`;

export const SignatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SignatureHolder = styled.p`
  color: #2d2d37;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  font-family: "Raleway", sans-serif;
  letter-spacing: 2.4px;
`;

export const SealImage = styled.img`
  height: 147px;
  width: 160px;
  margin-top: auto;
`;

export const SignatureWrapper = styled.div`
  border-bottom: 2px solid #2d2d3780;
  margin-bottom: 8px;
`;

export const SignatureOne = styled.img`
  height: 142px;
  width: 225px;
  margin-bottom: -40px;
`;

export const SignatureTwo = styled.img`
  height: 142px;
  width: 305px;
  margin-bottom: -40px;
`;
