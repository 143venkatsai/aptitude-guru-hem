import React, { useContext, useEffect, useState } from "react";
import Header from "../Header";

import ThemeContext from "../../context/ThemeContext";
import {
  AllBadgesContainer,
  BadgeImage,
  BadgeItem,
  BadgeName,
  BadgesContainer,
  BadgesHeading,
  BadgesList,
  BadgesTopContainer,
  ModelBottomContainer,
  ModelDays,
  ModelMessage,
  OnGoingContainer,
} from "./styledComponents";
import { Cell, Pie, PieChart } from "recharts";

import LockStreak from "../../assets/LockStreak.png";
import Padlock from "../../assets/Padlock.png";

const streakValue = 0;

const COLORS = ["#FB9E14", "#DCDCDC"];
const data = [
  { name: "progress", value: streakValue },
  { name: "remaining", value: 50 - streakValue },
];

const activeBadges = ["50_DAYS", "PYTHON", "JAVA"];

import { badgesData } from "../../mockData/badgesData";
import BadgeModal from "../BadgeModel";
import { useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const Badges = () => {
  const [selectedBadge, setSelectedBadge] = useState(null);
  const [filteredBadegs, setFilterBadges] = useState(activeBadges);
  const navigate = useNavigate();
  const { theme, filterBadges } = useContext(ThemeContext);
  console.log(filterBadges);

  useEffect(() => {
    const filterBadges = badgesData.filter((eachBadge) =>
      activeBadges.includes(eachBadge.id)
    );
    setFilterBadges(filterBadges);
    console.log(filterBadges);
  }, []);

  const OnGoingCourses = () => (
    <OnGoingContainer>
      <div
        style={{
          width: 150,
          height: 150,
          position: "relative",
          margin: "auto",
        }}
      >
        <PieChart width={150} height={150}>
          <Pie
            data={data}
            innerRadius={64}
            outerRadius={70}
            startAngle={180}
            endAngle={-180}
            dataKey="value"
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>

        {/* Center Content */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "150px",
            height: "150px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={LockStreak}
            alt="Badge"
            style={{
              height: "90%",
              width: "90%",
              opacity: 0.2,
              position: "absolute",
            }}
          />
          <img
            src={Padlock}
            alt="Lock"
            style={{
              height: "30px",
              width: "30px",
              zIndex: 2,
            }}
          />
        </div>
      </div>
      <ModelBottomContainer>
        <ModelDays theme={theme}>
          <span style={{ fontSize: "40px" }}>{data[0].value}</span>
          <span style={{ fontSize: "20px" }}>/50Days</span>
        </ModelDays>

        <ModelMessage theme={theme}>
          Stay consistent! Unlock this <br /> badge at 50 days
        </ModelMessage>
      </ModelBottomContainer>
    </OnGoingContainer>
  );

  return (
    <>
      <Header />
      <BadgesContainer theme={theme}>
        <BadgesTopContainer theme={theme}>
          <MdOutlineKeyboardArrowLeft
            style={{ height: "24", width: "24px", cursor: "pointer" }}
            onClick={() => navigate(-1)}
          />
          <BadgesHeading>Badges List</BadgesHeading>
        </BadgesTopContainer>

        <AllBadgesContainer>
          <OnGoingCourses />
          <BadgesList>
            {filteredBadegs.map((badge) => (
              <BadgeItem key={badge.id}>
                <BadgeImage
                  src={badge.img}
                  alt={badge.id}
                  onClick={() => setSelectedBadge(badge)}
                />
                <BadgeName theme={theme}>{badge.name}</BadgeName>
              </BadgeItem>
            ))}
          </BadgesList>
        </AllBadgesContainer>
      </BadgesContainer>

      <BadgeModal
        open={!!selectedBadge}
        onClose={() => setSelectedBadge(null)}
        badge={selectedBadge}
      />
    </>
  );
};

export default Badges;
