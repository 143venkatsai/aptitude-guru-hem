import React from "react";

import HeroCard from "./HeroCard";
import Courses from "./Courses";
import TrendingTest from "./TrendingTest";
import Learning from "./Learning";
import Events from "./Events";
import Community from "./Community";
import Footer from "./Footer";
import Header from "./Header";

const Home = () => {
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

export default Home;
