import React, { useState, useRef, useEffect } from "react";
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
  level0: "#B3B3B3",
  level1: "#ACEEBB",
  level2: "#4AC26B",
  level3: "#2DA44E",
  level4: "#116329",
};

const HeatMapSection = () => {
  const [hoveredActivity, setHoveredActivity] = useState(null);
  const popoverRef = useRef();

  // close popover if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target)) {
        setHoveredActivity(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  console.log(hoveredActivity);

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
            renderTooltip={(activity) => {
              if (!activity) return null;
              console.log(activity);

              return (
                <div
                  onMouseEnter={() => setHoveredActivity(activity)}
                  onMouseLeave={() => setHoveredActivity(null)}
                />
              );
            }}
          />
        </div>
      </div>

      {/* Popover like your UMF/MGO */}
      {hoveredActivity && (
        <div
          ref={popoverRef}
          className="absolute left-20 mt-4 w-[280px] bg-white rounded-xl shadow-lg border border-gray-200 z-50"
        >
          {/* Arrow */}
          <div className="absolute -top-2 left-6 w-4 h-4 bg-white border-l border-t border-gray-200 rotate-45"></div>

          <div className="p-4 space-y-3">
            <div className="bg-gray-100 rounded-md p-4">
              <h2 className="font-bold">Activity Details</h2>
              <p className="text-sm text-gray-600">
                {new Date(hoveredActivity.date).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <div className="mt-3 text-sm">
                <p>Aptitude: {hoveredActivity.count || 0}</p>
                <p>Technical: {hoveredActivity.count || 0}</p>
                <p>No. of Attempts: {hoveredActivity.count || 0}</p>
              </div>
            </div>
          </div>
        </div>
      )}

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
