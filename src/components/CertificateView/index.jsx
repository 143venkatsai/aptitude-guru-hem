import React, { useState } from "react";
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
import sign1 from "../../assets/sign1.png";
import sign2 from "../../assets/sign2.png";

// import { studentData } from "../../mockData/studentData";

const CertificateView = ({ studentDetails, scale }) => {
  // const [studentDetails, setSudentDetails] = useState(studentData);
  console.log(studentDetails);
  const {
    studentName,
    instituteName,
    courseName,
    startDate,
    endDate,
    hours,
    awardDate,
  } = studentDetails;

  return (
    <div
    // style={{
    //   transform: `scale(${scale})`,
    //   transformOrigin: "top left",
    //   width: `${1883 * scale}px`,
    //   height: `${1225 * scale}px`,
    // }}
    >
      <BackgroundContainer>
        <LogoImage src={CertificateLogo} alt="AGH Logo" />
        <CertificateTitle>Certificate of Completion</CertificateTitle>
        <Certify>This is to Certify that</Certify>
        <CertificateHolder>{studentName}</CertificateHolder>
        <Certify>of</Certify>
        <InstituteName>{instituteName}</InstituteName>
        <TrainingDetails>
          has successfully completed the <br />
          <span style={{ fontWeight: "700" }}>{courseName}</span> conducted by{" "}
          <br />
          <span style={{ fontWeight: "700" }}>Aptitude Guru Hem</span>, held
          from
          <span style={{ fontWeight: "700" }}>
            {startDate} to {endDate}
          </span>
          , <br /> consisting of {hours} hours of structured, project-based
          training.
        </TrainingDetails>
        <Awarded>Awarded on : {awardDate}</Awarded>
        <CertificateBottom>
          <SignatureContainer>
            <SignatureWrapper>
              <SignatureOne src={sign1} alt="See Sairam" />
            </SignatureWrapper>

            <SignatureHolder>
              Sreesairam V.
              <br /> Tech Lead <br /> Aptitude Guru Hem
            </SignatureHolder>
          </SignatureContainer>
          <SealImage src={seal1} alt="Seal Logo" />
          <SignatureContainer>
            <SignatureWrapper>
              <SignatureTwo src={sign2} alt="S.N Hemchandar" />
            </SignatureWrapper>

            <SignatureHolder>
              <span>S.N HEMCHANDAR</span> <br /> Founder & CEO <br /> Aptitude
              Guru Hem
            </SignatureHolder>
          </SignatureContainer>
        </CertificateBottom>
      </BackgroundContainer>
    </div>
  );
};

export default CertificateView;
