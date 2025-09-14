import React, { useState, useEffect, useContext } from "react";
// import { faBullseye, faCheck } from "@fortawesome/free-solid-svg-icons";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  Area,
  Tooltip,
  ReferenceLine,
  Label,
} from "recharts";

import ThemeContext from "../../context/ThemeContext";

import {
  PerformanceContainer,
  ButtonsContainer,
  Button,
  Card,
  Title,
  Flex,
  Emoji,
  LegendTitle,
  LegendStyled,
  CardTopContainer,
  AverageIconContainer,
  AverageAssessmentIcon,
  AssessmentIconContainer,
  AverageScoreContainer,
  LegendScoreHeading,
  LegendScore,
  TitleMobile,
  MobileContainer,
  PerformanceEmptyContainer,
  EmptyHeading,
  EmptyImage,
  EmptyMessage,
  EmptyInfo,
  EmptyButton,
} from "./styledComponents";

import chatGpt2 from "../../assets/chatGpt2.png";

import score from "../../assets/score.png";
import assessment from "../../assets/assessment.png";

const buttons = [
  { id: 1, name: "Assessment" },
  { id: 2, name: "College Assessment" },
];

// --- Data definitions ---
const assessmentData = {
  legend: [
    { name: "Aptitude", color: "#3C9BD9" },
    { name: "Technical", color: "#57C05D" },
    { name: "Aptitude E-learning", color: "#FEC574" },
    { name: "Tech E-learning", color: "#C202BC" },
  ],
  summary: {
    averageScore: [
      { name: "Aptitude", score: 85 },
      { name: "Technical", score: 75 },
      { name: "Aptitude E-learning", score: 90 },
      { name: "Tech E-learning", score: 70 },
    ],
    assessment: [
      { name: "Aptitude", score: 30, total: 50 },
      { name: "Technical", score: 25, total: 50 },
      { name: "Aptitude E-learning", score: 40, total: 50 },
      { name: "Tech E-learning", score: 28, total: 50 },
    ],
  },
  chartData: [
    {
      name: "Test 1",
      Aptitude: 25,
      Technical: 40,
      "Aptitude E-learning": 60,
      "Tech E-learning": 10,
    },
    {
      name: "Test 2",
      Aptitude: 35,
      Technical: 55,
      "Aptitude E-learning": 80,
      "Tech E-learning": 16,
    },
    {
      name: "Test 3",
      Aptitude: 40,
      Technical: 50,
      "Aptitude E-learning": 45,
      "Tech E-learning": 22,
    },
    {
      name: "Test 4",
      Aptitude: 55,
      Technical: 65,
      "Aptitude E-learning": 67,
      "Tech E-learning": 10,
    },
    {
      name: "Test 5",
      Aptitude: 85,
      Technical: 75,
      "Aptitude E-learning": 95,
      "Tech E-learning": 30,
    },
  ],
};

const collegeAssessmentData = {
  legend: [
    { name: "Aptitude", color: "#3C9BD9" },
    { name: "Technical", color: "#57C05D" },
  ],
  summary: {
    averageScore: [
      { name: "Aptitude", score: 85 },
      { name: "Technical", score: 75 },
    ],
    assessment: [
      { name: "Aptitude", score: 30, total: 31 },
      { name: "Technical", score: 20, total: 31 },
    ],
  },
  chartData: [
    { name: "Test 1", Aptitude: 25, Technical: 40 },
    { name: "Test 2", Aptitude: 35, Technical: 55 },
    { name: "Test 3", Aptitude: 10, Technical: 75 },
    { name: "Test 4", Aptitude: 55, Technical: 65 },
    { name: "Test 5", Aptitude: 85, Technical: 75 },
  ],
};

const PerformanceOverview = () => {
  const [activeButton, setActiveButton] = useState(1);
  const [selectedMetric, setSelectedMetric] = useState("");
  const { theme } = useContext(ThemeContext);

  const data = activeButton === 1 ? assessmentData : collegeAssessmentData;
  const title =
    activeButton === 1 ? "Performance Overview" : "College Assessment Overview";

  useEffect(() => {
    setSelectedMetric(data.legend[0].name);
  }, [activeButton]);

  const avg =
    data.summary.averageScore.find((sc) => sc.name === selectedMetric) || {};
  const assess =
    data.summary.assessment.find((sc) => sc.name === selectedMetric) || {};

  const PerformanceEmptyState = () => (
    <PerformanceEmptyContainer>
      <EmptyHeading theme={theme}>{title}</EmptyHeading>
      <EmptyImage src={chatGpt2} alt="Empty State" />
      <EmptyInfo theme={theme}>No Activity Recorded</EmptyInfo>
      <EmptyMessage theme={theme}>
        Complete your first test to view insights and track your growth here.
      </EmptyMessage>
      <EmptyButton>Attend Assessment</EmptyButton>
    </PerformanceEmptyContainer>
  );

  // FloatingCard (same as before)
  const FloatingCard = ({ x, y, value, label, theme }) => {
    return (
      <foreignObject x={x - 60} y={y - 90} width={120} height={90}>
        <div
          style={{
            position: "relative",
            background: theme === "light" ? "#F2F2F2" : "#343434",
            borderRadius: "20px",
            padding: "12px 16px",
            textAlign: "center",
            zIndex: "10",
            fontFamily: "sans-serif",
            boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.15)",
          }}
        >
          <div
            style={{
              fontSize: "14px",
              color: theme === "light" ? "#000" : "#ffffff",
              marginBottom: "2px",
              fontWeight: "600",
            }}
          >
            {/* {label} */}
            Analogy
          </div>
          <div
            style={{
              fontSize: "22px",
              fontWeight: "500",
              color: "#22C55E",
              lineHeight: "1.2",
            }}
          >
            {value}
            <span
              style={{
                fontSize: "14px",
                fontWeight: "500",
                marginLeft: "2px",
                color: "#22C55E",
              }}
            >
              /100
            </span>
          </div>
          <div
            style={{
              position: "absolute",
              bottom: "-8px",
              left: "50%",
              transform: "translateX(-50%)",
              width: 0,
              height: 0,
              borderLeft: "8px solid transparent",
              borderRight: "8px solid transparent",
              borderTop: `8px solid  ${
                theme === "light" ? "#F2F2F2" : "#343434"
              }`,
            }}
          />
        </div>
      </foreignObject>
    );
  };

  // shows FloatingCard only on active dot of selected metric
  const CustomActiveDot = ({ cx, cy, value, dataKey, color, theme }) => {
    return (
      <g>
        <circle
          cx={cx}
          cy={cy}
          r={6}
          fill={color}
          stroke="#fff"
          strokeWidth={2}
        />
        <FloatingCard
          x={cx}
          y={cy}
          value={value}
          label={dataKey}
          theme={theme}
        />
      </g>
    );
  };

  return (
    <PerformanceContainer>
      <ButtonsContainer>
        {buttons.map((btn) => (
          <Button
            key={btn.id}
            active={activeButton === btn.id}
            themeMode={theme}
            onClick={() => setActiveButton(btn.id)}
          >
            {btn.name}
          </Button>
        ))}
      </ButtonsContainer>

      {data.chartData.length === 0 ? (
        <PerformanceEmptyState />
      ) : (
        <Card position="relative" theme={theme}>
          <CardTopContainer>
            <div>
              <Title theme={theme}>{title}</Title>
              <LegendStyled>
                {data.legend.map((item) => (
                  <Flex
                    key={item.name}
                    onClick={() => setSelectedMetric(item.name)}
                  >
                    <Emoji
                      color={item.color}
                      style={{
                        opacity: selectedMetric === item.name ? 1 : 0.4,
                      }}
                    ></Emoji>
                    <LegendTitle
                      isActive={selectedMetric === item.name}
                      theme={theme}
                      style={{
                        opacity: selectedMetric === item.name ? 1 : 0.4,
                      }}
                    >
                      {item.name}
                    </LegendTitle>
                  </Flex>
                ))}
              </LegendStyled>
            </div>
            <div>
              <TitleMobile theme={theme}>{selectedMetric}</TitleMobile>
              <MobileContainer>
                <AverageScoreContainer>
                  {/* <AverageIconContainer>
                    <AverageAssessmentIcon icon={faBullseye} />
                  </AverageIconContainer> */}
                  <img
                    src={score}
                    alt="Score"
                    style={{
                      height: "40px",
                      width: "40px",
                      marginRight: "10px",
                    }}
                  />
                  <div>
                    <LegendScoreHeading theme={theme}>
                      Average Score
                    </LegendScoreHeading>
                    <LegendScore theme={theme}>
                      {avg.score !== undefined ? `${avg.score}%` : "--"}
                    </LegendScore>
                  </div>
                </AverageScoreContainer>
                <AverageScoreContainer>
                  {/* <AssessmentIconContainer>
                    <AverageAssessmentIcon icon={faCheck} />
                  </AssessmentIconContainer> */}
                  <img
                    src={assessment}
                    alt="Assessment"
                    style={{
                      height: "40px",
                      width: "40px",
                      marginRight: "10px",
                    }}
                  />
                  <div>
                    <LegendScoreHeading theme={theme}>
                      Assessment
                    </LegendScoreHeading>
                    <LegendScore theme={theme}>
                      {assess.score !== undefined
                        ? `${assess.score}/${assess.total}`
                        : "--"}
                    </LegendScore>
                  </div>
                </AverageScoreContainer>
              </MobileContainer>
            </div>
          </CardTopContainer>

          <ResponsiveContainer width="100%" height={350}>
            <LineChart
              data={data.chartData}
              margin={{ top: 20, right: 20, left: 20, bottom: 15 }}
            >
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tickMargin={25}
                stroke={theme === "light" ? "#5C5C5C" : "#DCDCDC"}
              />
              <YAxis
                domain={[0, 100]}
                axisLine={false}
                tickLine={false}
                tickFormatter={(value) => `${value}%`}
                tickMargin={10}
                stroke={theme === "light" ? "#5C5C5C" : "#DCDCDC"}
              />

              <CartesianGrid
                strokeDasharray="4 4"
                vertical={false}
                stroke={theme === "light" ? "#444444" : "#000"}
              />
              {/* <Tooltip content={() => null} cursor={false} /> */}

              {data.legend.map((item) =>
                selectedMetric === item.name ? (
                  <Area
                    key={`${item.name}-area`}
                    type="monotone"
                    dataKey={item.name}
                    stroke="none"
                    fill={item.color}
                    fillOpacity={0.15}
                  />
                ) : null
              )}

              {data.legend.map((item) => (
                <Line
                  key={item.name}
                  type="linear"
                  dataKey={item.name}
                  stroke={item.color}
                  strokeWidth={selectedMetric === item.name ? 3 : 2}
                  dot={selectedMetric === item.name ? false : false}
                  opacity={selectedMetric === item.name ? 1 : 0.4}
                  activeDot={
                    selectedMetric === item.name ? (
                      <CustomActiveDot color={item.color} theme={theme} />
                    ) : (
                      false
                    )
                  }
                  isAnimationActive={false}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </Card>
      )}
    </PerformanceContainer>
  );
};

export default PerformanceOverview;
