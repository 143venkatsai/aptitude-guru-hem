import React, { useContext } from "react";
import Header from "../Header";

import { ProfileContainer } from "./styledComponents";
import ProfileCard from "../ProfileCard";
import Streak from "../Streak";
import HeatMapSection from "../HeatMapSection";
import DashboardTabs from "../DashboardTabs";
import PerformanceOverview from "../PerformanceOverview";

import ThemeContext from "../../context/ThemeContext";

const ProfileSection = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const bgColor = theme === "dark" ? "#262626" : "#ffffff";
  const textColor = theme === "dark" ? "#FFFFFF" : "#343434";

  return (
    <div>
      <Header />
      <div style={{ backgroundColor: bgColor }}>
        <ProfileContainer>
          <ProfileCard />
          <PerformanceOverview />
          <Streak />
        </ProfileContainer>
        <HeatMapSection />
        <DashboardTabs />
      </div>
    </div>
  );
};

export default ProfileSection;
