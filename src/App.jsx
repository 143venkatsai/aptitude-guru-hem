import React from "react";
import Header from "./components/Header";
import HeroCard from "./components/HeroCard";
import Courses from "./components/Courses";
import TrendingTest from "./components/TrendingTest";
import Learning from "./components/Learning";
import Events from "./components/Events";
import Community from "./components/Community";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <HeroCard />
      <Courses />
      <TrendingTest />
      <Learning />
      <Events />
      <Community />
      <Footer />
    </>
  );
};

export default App;
