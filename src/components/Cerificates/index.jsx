import React, { useContext } from "react";

import ThemeContext from "../../context/ThemeContext";

import Header from "../Header";
import { CertificatesContainer, CertificatesHeading } from "./styledComponents";

const Certificates = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Header />
      <CertificatesContainer theme={theme}>
        <CertificatesHeading theme={theme}>Certificates</CertificatesHeading>
      </CertificatesContainer>
    </>
  );
};

export default Certificates;
