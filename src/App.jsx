import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Assessments from "./components/Assessments";
import ProfileSection from "./components/ProfileSection";

import { ThemeProvider } from "./context/ThemeContext.jsx";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/assessments" element={<Assessments />} />
          <Route exact path="/profile" element={<ProfileSection />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
