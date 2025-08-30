import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Assessments from "./components/Assessments";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/assessments" element={<Assessments />} />
      </Routes>
    </Router>
  );
};

export default App;
