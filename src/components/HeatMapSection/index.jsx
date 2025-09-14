import React, { useState, useRef, useEffect, useContext } from "react";
import { ActivityHeatmap } from "react-activity-heatmap";

import ThemeContext from "../../context/ThemeContext";

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

const today = new Date();
const startDate = new Date(today);
const endDate = new Date(today);
endDate.setDate(endDate.getDate() + 364);

const colors = {
  level0: "#B3B3B399",
  level1: "#ACEEBB",
  level2: "#4AC26B",
  level3: "#2DA44E",
  level4: "#116329",
};

const HeatMapSection = () => {
  const [hoveredActivity, setHoveredActivity] = useState(null);
  const [popoverPos, setPopoverPos] = useState({ x: 0, y: 0 });
  const popoverRef = useRef();
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target)) {
        setHoveredActivity(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Popover floating card like PerformanceOverview
  const FloatingCard = ({ activity, x, y }) => {
    return (
      <foreignObject x={x} y={y} width={180} height={100}>
        <div
          style={{
            position: "relative",
            background: "#000",
            borderRadius: "16px",
            color: "#fff",
            padding: "12px",
            // textAlign: "center",
            fontFamily: "sans-serif",
            boxShadow: "0px 2px 6px rgba(0,0,0,0.15)",
            zIndex: 9999,
          }}
        >
          {/* <div
            style={{ fontSize: "14px", fontWeight: "600", marginBottom: "4px" }}
          >
            Activity Details
          </div> */}
          <div style={{ fontSize: "12px", marginBottom: "4px" }}>
            {new Date(activity.date).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </div>
          <div
            style={{
              fontSize: "12px",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            <p>Aptitude: {activity.count}</p>
            <p>Technical: {activity.count}</p>
            <p>No. of Attempts: {activity.count}</p>
          </div>
          <div
            style={{
              position: "absolute",
              top: "20%",
              left: "-13px", // move it to the left edge of the card
              transform: "translateY(-50%)",
              width: 0,
              height: 0,
              borderTop: "6px solid transparent",
              borderBottom: "6px solid transparent",
              borderRight: "6px solid #000", // solid border on right makes arrow point left
            }}
          />
        </div>
      </foreignObject>
    );
  };

  return (
    <HeatMapContainer theme={theme}>
      {/* Top Section */}
      <HeatMapTopSection>
        <HeatMapMobileLeftSection>
          <HoursMobile>
            <Hours theme={theme}>230</Hours>
            <Months theme={theme}>Hours in last</Months>
          </HoursMobile>
          <Months theme={theme}>6 Months</Months>
        </HeatMapMobileLeftSection>
        <HeatMapLeftSection>
          <Hours theme={theme}>230</Hours>
          <Months theme={theme}>Hours in last 6 Months</Months>
        </HeatMapLeftSection>
        <HeatMapRightSection>
          <MaxStreak theme={theme}>Max Streak : 11</MaxStreak>
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
          paddingTop: "10px",
          maxWidth: "100%",
        }}
        className="hide-scrollbar"
      >
        <div style={{ minWidth: "900px", position: "relative" }}>
          <ActivityHeatmap
            activities={activities}
            startDate={startDate}
            endDate={endDate}
            cellColors={colors}
            renderTooltip={(activity, index, rect) => {
              if (!activity) return null;

              // rect contains the bounding rectangle of the hovered cell
              const x = rect ? rect.x + rect.width / 2 : 0;
              const y = rect ? rect.y - 110 : 0;

              return <FloatingCard activity={activity} x={x} y={y} />;
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
