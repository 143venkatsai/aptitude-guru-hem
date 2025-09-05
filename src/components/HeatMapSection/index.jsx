import React from "react";

import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

// import { ChevronDown } from "lucide-react";

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
  HeatMapScrollWrapper,
  MonthBlockContainer,
  MonthBlock,
  SelectContainer,
} from "./styledComponents";

// Generate empty data for 365 days from today
const generateEmptyYearData = () => {
  const values = [];
  const startDate = new Date();
  for (let i = 0; i < 365; i++) {
    const date = new Date(startDate);
    date.setDate(date.getDate() + i);
    values.push({ date: date.toISOString().slice(0, 10), count: 0 });
  }
  return values;
};

// Helper function to detect last day of the month
const isLastDayOfMonth = (date) => {
  const testDate = new Date(date);
  testDate.setDate(testDate.getDate() + 1);
  return testDate.getDate() === 1;
};

// Example active activity data
const exampleActiveData = [
  { date: "2025-09-04", count: 1 },
  { date: "2025-09-05", count: 5 },
  { date: "2025-09-07", count: 2 },
  { date: "2025-09-10", count: 4 },
  { date: "2025-09-15", count: 3 },
  { date: "2025-09-20", count: 6 },
  { date: "2025-09-25", count: 1 },
  { date: "2025-10-01", count: 7 },
  { date: "2025-10-05", count: 3 },
  { date: "2025-10-12", count: 5 },
  { date: "2025-10-20", count: 2 },
  { date: "2025-11-01", count: 6 },
  { date: "2025-11-07", count: 4 },
  { date: "2025-11-15", count: 3 },
  { date: "2025-11-20", count: 1 },
  { date: "2025-12-01", count: 8 },
  { date: "2025-12-10", count: 5 },
  { date: "2025-09-18", count: 7 },
  { date: "2025-09-23", count: 2 },
  { date: "2025-09-28", count: 4 },
  { date: "2025-10-03", count: 6 },
  { date: "2025-10-08", count: 2 },
  { date: "2025-10-15", count: 5 },
  { date: "2025-10-18", count: 3 },
  { date: "2025-10-25", count: 7 },
  { date: "2025-10-30", count: 1 },
  { date: "2025-11-05", count: 2 },
  { date: "2025-11-12", count: 6 },
  { date: "2025-11-18", count: 4 },
  { date: "2025-11-25", count: 7 },
  { date: "2025-12-05", count: 2 },
  { date: "2025-12-08", count: 6 },
  { date: "2025-12-15", count: 3 },
  { date: "2025-12-20", count: 4 },
  { date: "2025-12-27", count: 7 },
  { date: "2026-01-02", count: 5 },
  { date: "2026-01-07", count: 3 },
  { date: "2026-01-12", count: 6 },
  { date: "2026-01-18", count: 2 },
  { date: "2026-01-25", count: 7 },
  { date: "2026-01-30", count: 4 },
];

const HeatMapSection = () => {
  const emptyData = generateEmptyYearData();

  // Merge empty data with active data counts
  const activeDataMap = new Map(
    exampleActiveData.map((d) => [d.date, d.count])
  );
  const values = emptyData.map((d) => ({
    date: d.date,
    count: activeDataMap.get(d.date) || 0,
  }));

  const classForValue = (value) => {
    if (!value || value.count === 0) return "color-level-0";
    if (value.count >= 4) return "color-level-4";
    if (value.count === 3) return "color-level-3";
    if (value.count === 2) return "color-level-2";
    if (value.count === 1) return "color-level-1";
    return "color-level-0";
  };

  const transformDayElement = (rect, value) => {
    if (!value) return rect;
    const date = new Date(value.date);
    const isFirstDay = date.getDate() === 1;
    const lastDay = isLastDayOfMonth(date);

    const style = { ...rect.props.style };
    if (isFirstDay) {
      style.marginLeft = "10px";
      style.borderLeft = "2px solid #999";
    }
    if (lastDay) {
      style.marginRight = "10px";
      style.borderRight = "2px solid #999";
    }
    return React.cloneElement(rect, { style });
  };

  console.log(new Date());

  return (
    <HeatMapContainer>
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
      <div
        style={{
          overflowX: "auto",
          WebkitOverflowScrolling: "touch",
          //   border: "1px solid #ccc",
          padding: "10px",

          maxWidth: "100%",
        }}
        className="hide-scrollbar"
      >
        <div
          style={{
            minWidth: "900px",
          }}
        >
          <CalendarHeatmap
            startDate={new Date()}
            endDate={new Date(new Date().setDate(new Date().getDate() + 364))}
            values={values}
            classForValue={classForValue}
            showWeekdayLabels={false}
            showMonthLabels={true}
            transformDayElement={transformDayElement}
            titleForValue={(value) =>
              value ? `${value.date}: ${value.count} activities` : "No activity"
            }
          />
        </div>
      </div>
      <style>{`
      .color-level-0 { fill: #e8e8e8; }
      .color-level-1 { fill: #c6e48b; }
      .color-level-2 { fill: #7bc96f; }
      .color-level-3 { fill: #239a3b; }
      .color-level-4 { fill: #196127; }
      .hide-scrollbar::-webkit-scrollbar {
            display: none;
        }
    `}</style>
    </HeatMapContainer>
  );
};

export default HeatMapSection;
