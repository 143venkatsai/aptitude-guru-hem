import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import flameIcon from "../../assets/flameIcon.png";

import {
  StreakSection,
  StreakTopSection,
  StreakTopTitle,
  StreakInfo,
  StreakMessage,
  StreakButton,
  StreakBottomSection,
  StreakBottomTitle,
  StreakPracticeContainer,
  StreakPracticeSession,
  StreakPracticeTitle,
  StreakPracticeCount,
  StreakRangeContainer,
  StreakRange,
} from "./styledComponents";

// Progress value (0 - 100)
const progress = 70;

const data = [{ value: progress }, { value: 100 - progress }];

const COLORS = ["#22ba69", "#e7e7eb"];

const practiceData = [
  { id: 1, name: "Aptitude", completed: 18, total: 20 },
  { id: 2, name: "Technical", completed: 18, total: 20 },
  { id: 3, name: "Logical Reasoning", completed: 12, total: 20 },
];
const Streak = () => {
  return (
    <>
      <StreakSection>
        <StreakTopSection>
          <StreakTopTitle>You are almost there</StreakTopTitle>
          <StreakInfo>Keep Going !!</StreakInfo>
          <div style={{ width: 180, height: 180, position: "relative" }}>
            <PieChart width={180} height={180}>
              <Pie
                data={data}
                innerRadius={65}
                outerRadius={80}
                startAngle={180}
                endAngle={-180}
                fill="#8884d8"
                paddingAngle={0}
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
                width: "180px",
                height: "180px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 32,
                fontWeight: 700,
              }}
            >
              <span role="img" aria-label="fire" style={{ fontSize: 42 }}>
                <img
                  src={flameIcon}
                  alt="Flame"
                  style={{ height: "50px", width: "50px" }}
                />
              </span>
              <div style={{ fontSize: 28, fontWeight: "600", color: "#222" }}>
                {progress}%
              </div>
            </div>
          </div>
          <StreakMessage>
            You are about to achieve your target of 10 LPA
          </StreakMessage>
          <StreakButton>Continue Practice</StreakButton>
        </StreakTopSection>
        <StreakBottomSection>
          <StreakBottomTitle>Practice Activity</StreakBottomTitle>
          <StreakPracticeContainer>
            {practiceData.map((item) => {
              const widthPercent = (item.completed / item.total) * 100;

              return (
                <div key={item.id} style={{ marginBottom: "1rem" }}>
                  <StreakPracticeSession>
                    <StreakPracticeTitle>{item.name}</StreakPracticeTitle>
                    <StreakPracticeCount>{`${item.completed}/${item.total}`}</StreakPracticeCount>
                  </StreakPracticeSession>
                  <StreakRangeContainer>
                    <StreakRange value={widthPercent} />
                  </StreakRangeContainer>
                </div>
              );
            })}
          </StreakPracticeContainer>
        </StreakBottomSection>
      </StreakSection>
    </>
  );
};

export default Streak;
