import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Assessments from "./components/Assessments";
import ProfileSection from "./components/ProfileSection";
import Certificates from "./components/Cerificates/index.jsx";
import Badges from "./components/Badges/index.jsx";

import { ThemeProvider } from "./context/ThemeContext.jsx";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/assessments" element={<Assessments />} />
          <Route exact path="/profile" element={<ProfileSection />} />
          <Route exact path="/certificates" element={<Certificates />} />
          <Route exact path="/badges" element={<Badges />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
