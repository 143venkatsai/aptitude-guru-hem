import React from "react";
import HeatMap from "@uiw/react-heat-map";
import { format, addDays, startOfMonth, endOfMonth, getDay } from "date-fns";

// import CalendarHeatmap from "react-calendar-heatmap";
// import "react-calendar-heatmap/dist/styles.css";
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
  MonthLabel,
  SelectContainer,
} from "./styledComponents";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "April",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const HeatMapSection = () => {
  const generateHeatmapCounts = () => {
    return months.map((label, idx) => {
      const year = 2025;
      const monthNumber = idx;
      const firstOfMonth = new Date(year, monthNumber, 1);
      const startDate = addDays(firstOfMonth, -getDay(firstOfMonth));

      const days = Array.from({ length: 42 }).map((_, i) => {
        const currentDate = addDays(startDate, i);
        const currentMonth = currentDate.getMonth();
        const dateStr = format(currentDate, "yyyy/MM/dd");

        const count =
          currentMonth === monthNumber
            ? Math.random() > 0.4
              ? Math.floor(Math.random() * 3) + 1
              : 0
            : 0;

        return {
          date: dateStr,
          count,
        };
      });
      console.log(label, days, startDate);

      return { label, days, startDate };
    });
  };
  const heatmapBlocks = generateHeatmapCounts();

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
      <HeatMapScrollWrapper>
        <MonthBlockContainer>
          {heatmapBlocks.map((month) => (
            <MonthBlock key={month.label}>
              <HeatMap
                value={month.days}
                width={100}
                startDate={month.startDate}
                style={{
                  marginBottom: 0,
                  overflow: "visible",
                }}
                panelColors={{
                  0: "#ffffff",
                  1: "#c6e48b",
                  2: "#7bc96f",
                  3: "#239a3b",
                  4: "#196127",
                }}
                legendCellSize={0}
                space={2}
                rectProps={{ rx: 1 }}
                showMonthLabel={false}
                showWeekLabels={false}
              />
              <MonthLabel>{month.label}</MonthLabel>
            </MonthBlock>
          ))}
        </MonthBlockContainer>
      </HeatMapScrollWrapper>
    </HeatMapContainer>
  );
};

export default HeatMapSection;
