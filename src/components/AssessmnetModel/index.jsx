import React from "react";
import {
  Awarded,
  BackgroundContainer,
  CertificateBottom,
  CertificateHolder,
  CertificateTitle,
  Certify,
  InstituteName,
  LogoImage,
  SealImage,
  SignatureContainer,
  SignatureHolder,
  SignatureOne,
  SignatureTwo,
  SignatureWrapper,
  TrainingDetails,
} from "./styledComponents";

import CertificateLogo from "../../assets/CertificateLogo.png";
import seal1 from "../../assets/seal1.png";
import sign3 from "../../assets/sign3.png";
import sign4 from "../../assets/sign4.png";

const AssessmentModel = ({ certficateData }) => {
  console.log(certficateData);
  const {
    studentName,
    instituteName,
    courseName,
    startDate,
    endDate,
    hours,
    awardDate,
  } = certficateData;

  console.log(certficateData);

  return (
    <>
      <BackgroundContainer>
        <LogoImage src={CertificateLogo} alt="AGH Logo" />
        <CertificateTitle>Certificate of Completion</CertificateTitle>
        <Certify>This is to Certify that</Certify>
        <CertificateHolder>{studentName}</CertificateHolder>
        <Certify>of</Certify>
        <InstituteName>{instituteName}</InstituteName>
        <TrainingDetails>
          has successfully completed all{" "}
          <span style={{ fontWeight: 700 }}>Aptitude Test</span> Modules
          organized by <br />
          Aptitude Guru Hem, demonstrating proficiency in{" "}
          <span style={{ fontWeight: 700 }}>
            Quantitative Aptitude, <br />
            Logical Reasoning,
          </span>{" "}
          and <span style={{ fontWeight: 700 }}>Verbal Ability.</span>
        </TrainingDetails>
        <Awarded>Awarded on : {awardDate}</Awarded>
        <CertificateBottom>
          <SignatureContainer>
            <SignatureWrapper>
              <SignatureOne src={sign3} alt="See Sairam" />
            </SignatureWrapper>

            <SignatureHolder>
              Sreesairam V.
              <br /> Tech Lead <br /> Aptitude Guru Hem
            </SignatureHolder>
          </SignatureContainer>
          <SealImage src={seal1} alt="Seal Logo" />
          <SignatureContainer>
            <SignatureWrapper>
              <SignatureTwo src={sign4} alt="S.N Hemchandar" />
            </SignatureWrapper>

            <SignatureHolder>
              <span>S.N HEMCHANDAR</span> <br /> Founder & CEO <br /> Aptitude
              Guru Hem
            </SignatureHolder>
          </SignatureContainer>
        </CertificateBottom>
      </BackgroundContainer>
    </>
  );
};

export default AssessmentModel;
