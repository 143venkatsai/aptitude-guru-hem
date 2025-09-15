import React, { useState, useContext } from "react";

import ThemeContext from "../../context/ThemeContext";

import Header from "../Header";
import {
  CertificatesButtonsContainer,
  CertificateDetails,
  CertificateDownloadButton,
  CertificateImage,
  CertificateItem,
  CertificateName,
  CertificatesContainer,
  CertificatesHeading,
  CertificatesList,
  CertificateViewButton,
} from "./styledComponents";

import Certificate1 from "../../assets/Certificate1.png";
import Certificate2 from "../../assets/Certificate2.png";

const certificatesList = [
  {
    id: 1,
    image: Certificate1,
    name: "Full Stack Developer Certificate",
  },
  {
    id: 2,
    image: Certificate2,
    name: "Python Development Course",
  },
];

const Certificates = () => {
  const [certificates, setCertificates] = useState(certificatesList);
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Header />
      <CertificatesContainer theme={theme}>
        <CertificatesHeading theme={theme}>Certificates</CertificatesHeading>
        <CertificatesList>
          {certificates.map((eachItem) => (
            <CertificateItem key={eachItem.id} theme={theme}>
              <CertificateImage src={eachItem.image} alt={eachItem.name} />
              <CertificateDetails>
                <CertificateName theme={theme}>{eachItem.name}</CertificateName>
                <CertificatesButtonsContainer>
                  <CertificateDownloadButton
                    onClick={() => {
                      const link = document.createElement("a");
                      link.href = eachItem.image;
                      link.download =
                        eachItem.name.replace(/\s+/g, "_") + ".png"; // file name
                      link.click();
                    }}
                  >
                    Download
                  </CertificateDownloadButton>
                  <CertificateViewButton>View</CertificateViewButton>
                </CertificatesButtonsContainer>
              </CertificateDetails>
            </CertificateItem>
          ))}
        </CertificatesList>
      </CertificatesContainer>
    </>
  );
};

export default Certificates;
