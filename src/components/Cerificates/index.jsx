import React, { useState, useContext } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useNavigate } from "react-router-dom";
import { SlCalender } from "react-icons/sl";
import { FiDownload } from "react-icons/fi";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

import ThemeContext from "../../context/ThemeContext";

import { studentData } from "../../mockData/studentData";

import Header from "../Header";
import CertificateView from "../CertificateView";

import {
  CertificateDetails,
  CertificateDownloadButton,
  CertificateItem,
  CertificateName,
  CertificatesContainer,
  CertificatesHeading,
  CertificatesList,
  CertificateDate,
  CertificateNameContainer,
  CertificatesTopContainer,
  CertificateViewWrapper,
  ViewOverlay,
  ModalOverlay,
  ModalContent,
  CloseButton,
} from "./styledComponents";

const Certificates = () => {
  const [certificates, setCertificates] = useState(studentData);
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  console.log(certificates);

  const handleDownload = async (certificateId) => {
    const element = document.getElementById(`certificate-${certificateId}`);
    if (element) {
      const canvas = await html2canvas(element, { scale: 2 }); // better quality
      const imgData = canvas.toDataURL("image/png");

      const link = document.createElement("a");
      link.href = imgData;
      link.download = `certificate-${certificateId}.png`;
      link.click();
    }
  };

  return (
    <>
      <Header />
      <CertificatesContainer theme={theme}>
        <CertificatesTopContainer theme={theme}>
          <MdOutlineKeyboardArrowLeft
            style={{ height: "24", width: "24px", cursor: "pointer" }}
            onClick={() => navigate(-1)}
          />
          <CertificatesHeading theme={theme}> Certificates</CertificatesHeading>
        </CertificatesTopContainer>
        <CertificatesList>
          {certificates.map((certificate) => (
            <CertificateItem key={certificate.id} theme={theme}>
              <div id={`certificate-${certificate.id}`}>
                <CertificateViewWrapper>
                  <CertificateView certificateDetails={certificate} />
                  <ViewOverlay
                    onClick={() => setSelectedCertificate(certificate)}
                  >
                    View
                  </ViewOverlay>
                </CertificateViewWrapper>
              </div>
              <CertificateDetails>
                <CertificateNameContainer>
                  <CertificateName theme={theme}>
                    {certificate.courseShortName}
                  </CertificateName>
                  <CertificateDate theme={theme}>
                    <SlCalender height={16} width={16} />
                    <span>Issued On - </span>
                    <span>{certificate.awardDate}</span>
                  </CertificateDate>
                </CertificateNameContainer>

                <CertificateDownloadButton
                  onClick={() => handleDownload(certificate.id)}
                >
                  Download <FiDownload height={16} width={16} />
                </CertificateDownloadButton>
              </CertificateDetails>
            </CertificateItem>
          ))}
        </CertificatesList>
      </CertificatesContainer>
      {selectedCertificate && (
        <ModalOverlay>
          <ModalContent>
            <CloseButton onClick={() => setSelectedCertificate(null)}>
              ✕
            </CloseButton>
            <CertificateView certificateDetails={selectedCertificate} />
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default Certificates;
