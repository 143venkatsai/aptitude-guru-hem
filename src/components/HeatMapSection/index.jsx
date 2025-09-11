import React from "react";
import { ActivityHeatmap } from "react-activity-heatmap";

import {
  HeatMapContainer,
  HeatMapTopSection,
  HeatMapLeftSection,
  Hours,
  Months,
  HeatMapRightSection,
  MaxStreak,
  HeatMapMobileLeftSection,
  HoursMobile,
  SelectContainer,
} from "./styledComponents";

// Example activity data (can be dynamic later)
const activities = [
  { date: "2025-09-04", count: 1, level: 1 },
  { date: "2025-09-05", count: 5, level: 3 },
  { date: "2025-09-07", count: 2, level: 2 },
  { date: "2025-09-10", count: 4, level: 3 },
  { date: "2025-09-15", count: 3, level: 2 },
  { date: "2025-09-20", count: 6, level: 4 },
  { date: "2025-09-25", count: 1, level: 1 },
  { date: "2025-10-01", count: 7, level: 4 },
  { date: "2025-10-05", count: 3, level: 2 },
  { date: "2025-10-12", count: 5, level: 3 },
  { date: "2025-10-20", count: 2, level: 2 },
  { date: "2025-11-01", count: 6, level: 4 },
  { date: "2025-11-07", count: 4, level: 3 },
  { date: "2025-11-15", count: 3, level: 2 },
  { date: "2025-11-20", count: 1, level: 1 },
  { date: "2025-12-01", count: 8, level: 4 },
  { date: "2025-12-10", count: 5, level: 3 },
  { date: "2025-12-18", count: 7, level: 4 },
  { date: "2025-12-23", count: 2, level: 2 },
  { date: "2025-12-28", count: 4, level: 3 },
  { date: "2026-01-05", count: 6, level: 4 },
  { date: "2026-01-12", count: 2, level: 2 },
  { date: "2026-01-20", count: 5, level: 3 },
  { date: "2026-01-28", count: 3, level: 2 },
];
// ✅ Dynamic start and end dates
const today = new Date();
const startDate = new Date(today); // today
const endDate = new Date(today);
endDate.setDate(endDate.getDate() + 364); // 365 days later

const colors = {
  level0: "#B3B3B3",
  level1: "#ACEEBB",
  level2: "#4AC26B",
  level3: "#2DA44E",
  level4: "#116329",
};

const HeatMapSection = () => {
  return (
    <HeatMapContainer>
      {/* Top Section */}
      <HeatMapTopSection>
        <HeatMapMobileLeftSection>
          <HoursMobile>
            <Hours>230</Hours>
            <Months>Hours in last</Months>
          </HoursMobile>
          <Months>6 Months</Months>
        </HeatMapMobileLeftSection>
        <HeatMapLeftSection>
          <Hours>230</Hours>
          <Months>Hours in last 6 Months</Months>
        </HeatMapLeftSection>
        <HeatMapRightSection>
          <MaxStreak>Max Streak : 11</MaxStreak>
          <SelectContainer>
            <option>Current</option>
          </SelectContainer>
        </HeatMapRightSection>
      </HeatMapTopSection>

      {/* Scrollable Heatmap */}
      <div
        style={{
          overflowX: "auto",
          WebkitOverflowScrolling: "touch",
          padding: "10px",
          maxWidth: "100%",
          color: "#777676",
        }}
        className="hide-scrollbar"
      >
        <div style={{ minWidth: "900px" }}>
          <ActivityHeatmap
            activities={activities}
            startDate={startDate}
            endDate={endDate}
            cellColors={colors}
            renderTooltip={(activity) =>
              activity
                ? `${activity.date}: ${activity.count} activities`
                : "No activity"
            }
            tooltipStyle={{
              backgroundColor: "#ffffff",
              color: "#777676",
              border: "1px solid #ccc",
              borderRadius: "6px",
              padding: "6px 10px",
              fontSize: "14px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            }}
          />
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </HeatMapContainer>
  );
};

export default HeatMapSection;
