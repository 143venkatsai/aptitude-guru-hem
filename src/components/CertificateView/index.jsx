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
import { studentData } from "../../mockData/studentData";

const CertificateView = () => {
  const [studentDetails, setSudentDetails] = useState(studentData);
  return (
    <>
      {studentDetails.map((eachStudent) => (
        <BackgroundContainer>
          <LogoImage src={CertificateLogo} alt="AGH Logo" />
          <CertificateTitle>Certificate of Completion</CertificateTitle>
          <Certify>This is to Certify that</Certify>
          <CertificateHolder>{eachStudent.studentName}</CertificateHolder>
          <Certify>of</Certify>
          <InstituteName>{eachStudent.instituteName}</InstituteName>
          <TrainingDetails>
            has successfully completed the <br />
            <span style={{ fontWeight: "700" }}>
              {eachStudent.courseName}
            </span>{" "}
            conducted by <br />
            <span style={{ fontWeight: "700" }}>Aptitude Guru Hem</span>, held
            from
            <span style={{ fontWeight: "700" }}>
              {eachStudent.startDate} to {eachStudent.endDate}
            </span>
            , <br /> consisting of {eachStudent.hours} hours of structured,
            project-based training.
          </TrainingDetails>
          <Awarded>Awarded on : {eachStudent.awardDate}</Awarded>
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
      ))}
    </>
  );
};

export default CertificateView;
