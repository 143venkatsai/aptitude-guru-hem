import React from "react";
import Header from "../Header";

import { ProfileContainer } from "./styledComponents";
import ProfileCard from "../ProfileCard";
import PerformanceOverview from "../PerformanceOverView";
import Streak from "../Streak";
import HeatMapSection from "../HeatMapSection";
import DashboardTabs from "../DashboardTabs";

const ProfileSection = () => {
  return (
    <>
      <Header />
      <ProfileContainer>
        <ProfileCard />
        <PerformanceOverview />
        <Streak />
      </ProfileContainer>
      <HeatMapSection />
      <DashboardTabs />
    </>
  );
};

export default ProfileSection;
