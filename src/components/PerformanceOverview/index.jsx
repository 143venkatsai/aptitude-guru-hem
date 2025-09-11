import React, { useState, useEffect } from "react";
// import { faBullseye, faCheck } from "@fortawesome/free-solid-svg-icons";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  Area,
} from "recharts";

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
    { name: "Aptitude", color: "#228BE6" },
    { name: "Technical", color: "#85D6B5" },
    { name: "Aptitude E-learning", color: "#FFE9BF" },
    { name: "Tech E-learning", color: "#EDBFFB" },
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
    { name: "Aptitude", color: "#228BE6" },
    { name: "Technical", color: "#85D6B5" },
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
      <EmptyHeading>{title}</EmptyHeading>
      <EmptyImage src={chatGpt2} alt="Empty State" />
      <EmptyInfo>No Activity Recorded</EmptyInfo>
      <EmptyMessage>
        Complete your first test to view insights and track your growth here.
      </EmptyMessage>
      <EmptyButton>Attend Assessment</EmptyButton>
    </PerformanceEmptyContainer>
  );

  return (
    <PerformanceContainer>
      <ButtonsContainer>
        {buttons.map((btn) => (
          <Button
            key={btn.id}
            active={activeButton === btn.id}
            onClick={() => setActiveButton(btn.id)}
          >
            {btn.name}
          </Button>
        ))}
      </ButtonsContainer>

      {data.chartData.length === 0 ? (
        <PerformanceEmptyState />
      ) : (
        <Card>
          <CardTopContainer>
            <div>
              <Title>{title}</Title>
              <LegendStyled>
                {data.legend.map((item) => (
                  <Flex
                    key={item.name}
                    onClick={() => setSelectedMetric(item.name)}
                  >
                    <Emoji color={item.color}></Emoji>
                    <LegendTitle isActive={selectedMetric === item.name}>
                      {item.name}
                    </LegendTitle>
                  </Flex>
                ))}
              </LegendStyled>
            </div>
            <div>
              <TitleMobile>{selectedMetric}</TitleMobile>
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
                    <LegendScoreHeading>Average Score</LegendScoreHeading>
                    <LegendScore>
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
                    <LegendScoreHeading>Assessment</LegendScoreHeading>
                    <LegendScore>
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
              margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
            >
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis domain={[0, 100]} axisLine={false} tickLine={false} />
              <CartesianGrid strokeDasharray="4 4" vertical={false} />

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
                  dot={false}
                  opacity={selectedMetric === item.name ? 1 : 0.3}
                  activeDot={{ r: 6 }}
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
