import React, { useContext, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";
import { AnimatePresence } from "framer-motion";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import ThemeContext from "../../context/ThemeContext";

import BadgeModal from "../BadgeModel";

import profileLogo from "../../assets/profileLogo.png";
import chatGpt1 from "../../assets/chatGpt1.png";
import certificate from "../../assets/certificate.png";
import badge from "../../assets/badge.png";
import arrowRight from "../../assets/arrowRight.png";
import arrowRightDark from "../../assets/arrowRightDark.png";
import Padlock from "../../assets/Padlock.png";
import LockStreak from "../../assets/LockStreak.png";
import star from "../../assets/star.png";
import Streak from "../../assets/Streak.png";
import Python from "../../assets/Python.png";
import Java from "../../assets/Java.png";

import {
  ProfileCardContainer,
  ProfileDetails,
  ProfileImage,
  ProfileNameContainer,
  ProfileName,
  ProfileEmail,
  ProfileUniversity,
  ProfileCertificates,
  CertificatesContainer,
  CertificateIconContainer,
  CertificateDetails,
  CertificateTitle,
  CertificateCount,
  CertificateIcon,
  BadgeContainer,
  BadgeIconContainer,
  BadgeIcon,
  BadgeDetails,
  BadgeTitle,
  BadgeCount,
  LanguagesContainer,
  LanguageTitle,
  LanguageList,
  LanguageItem,
  RightArrowContainer,
  RightArrowIcon,
  SkillsSection,
  SkillsHeading,
  SkillContainer,
  SkillTitle,
  SkillsList,
  SkillItem,
  ProfileEmptyContainer,
  EmptyImage,
  EmptyHeading,
  EmptyMessage,
  RankContainer,
  Rank,
  ModalOverlay,
  ModalContent,
  CloseButton,
  ModelHeading,
  ModelTopContainer,
  ModelBottomContainer,
  ModelDays,
  ModelMessage,
  ModelImage,
  ModelBadges,
  SmallBadge,
  CenterBadge,
  ModelBadgeDetails,
  BadgeName,
  ModelBadgeDetailsSmall,
  BadgesCount,
} from "./styledComponents";

const Languages = [
  { id: 1, name: "Java" },
  { id: 2, name: "C++" },
  { id: 3, name: "Java Script" },
];

const skills = [
  {
    id: 1,
    value: "Advanced",
    color: "#FF0F31",
    skill: [
      { id: 1, name: "Array" },
      { id: 2, name: "String" },
      { id: 3, name: "Hash Table" },
    ],
  },
  {
    id: 2,
    value: "Intermediate",
    color: "#FCAB13",
    skill: [
      { id: 1, name: "Sliding Window" },
      { id: 2, name: "Hash Table" },
    ],
  },
  {
    id: 3,
    value: "Fundamental",
    color: "#00B315",
    skill: [{ id: 1, name: "Dynamic Programming" }],
  },
];

const ProfileCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [streakValue, setStreakValue] = useState(50);
  const [badges, setBadges] = useState(3);
  const [selectedBadge, setSelectedBadge] = useState(null);
  const { theme } = useContext(ThemeContext);

  const hasLanguages = Languages.length > 0;
  const hasSkills = skills.length > 0;

  const showEmpty = !hasLanguages && !hasSkills;

  const COLORS = ["#FB9E14", "#DCDCDC"];
  const data = [
    { name: "progress", value: streakValue },
    { name: "remaining", value: 50 - streakValue },
  ];

  const badgesList = [
    {
      id: 1,
      img: Python,
      name: "Python Master",
      desc: "Solved 200+ Python problems",
    },
    {
      id: 2,
      img: Streak,
      name: "50 Days Badge",
      desc: "50 Days of Consistency! Keep coding, keep growing.",
    },
    {
      id: 3,
      img: Java,
      name: "Java Master",
      desc: "Solved 150+ Java problems",
    },
  ];

  const fiftyDaysBadge = {
    id: 1,
    img: LockStreak,
    name: "50 Days Badge",
    desc: "50 Days of Consistency! Keep coding, keep growing.",
  };

  return (
    <>
      <ProfileCardContainer theme={theme}>
        <ProfileDetails>
          <ProfileImage src={profileLogo} alt="Profile Logo" />
          <ProfileNameContainer>
            <ProfileName theme={theme}>Muskan Verma</ProfileName>
            <ProfileEmail theme={theme}>muskanverma@gmail.com</ProfileEmail>
            <ProfileUniversity theme={theme}>SRM University</ProfileUniversity>
          </ProfileNameContainer>
        </ProfileDetails>

        {/* Rank Container */}
        <RankContainer>
          <Rank>Rank 56</Rank>
        </RankContainer>

        {/* Certificates and Badges */}
        <ProfileCertificates>
          <CertificatesContainer to="/certificates">
            {/* <CertificateIconContainer>
              <CertificateIcon icon={faCertificate} />
            </CertificateIconContainer> */}
            <img
              src={certificate}
              alt="Certificate"
              style={{ height: "40px", width: "40px" }}
            />
            <CertificateDetails>
              <CertificateTitle>Certificates</CertificateTitle>
              <CertificateCount>5</CertificateCount>
            </CertificateDetails>
          </CertificatesContainer>

          {/* Badges Container */}
          <BadgeContainer onClick={() => setIsOpen(true)}>
            {/* <BadgeIconContainer>
              <BadgeIcon icon={faRibbon} />
            </BadgeIconContainer> */}
            <img
              src={badge}
              alt="Badge"
              style={{ height: "40px", width: "40px" }}
            />
            <BadgeDetails>
              <BadgeTitle>Badges</BadgeTitle>
              <BadgeCount>3</BadgeCount>
            </BadgeDetails>
          </BadgeContainer>
          <AnimatePresence>
            {isOpen && (
              <ModalOverlay
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <ModalContent
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "100%" }}
                  transition={{ type: "", stiffness: 120 }}
                  onClick={(e) => e.stopPropagation()}
                  theme={theme}
                >
                  <ModelTopContainer>
                    <ModelHeading theme={theme}>Badge List</ModelHeading>
                    <CloseButton
                      icon={faXmark}
                      onClick={() => setIsOpen(false)}
                      theme={theme}
                    />
                  </ModelTopContainer>

                  {/* Case 1: streakValue === 0 */}
                  {streakValue === 0 && (
                    <>
                      <div
                        style={{
                          width: 180,
                          height: 180,
                          position: "relative",
                          margin: "auto",
                        }}
                      >
                        <PieChart width={180} height={180}>
                          <Pie
                            data={data}
                            innerRadius={74}
                            outerRadius={80}
                            startAngle={180}
                            endAngle={-180}
                            dataKey="value"
                            stroke="none"
                          >
                            {data.map((entry, index) => (
                              <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index]}
                              />
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
                              height: "40px",
                              width: "40px",
                              zIndex: 2,
                            }}
                          />
                        </div>
                      </div>
                      <ModelBottomContainer>
                        <ModelDays theme={theme}>
                          <span style={{ fontSize: "40px" }}>
                            {streakValue}
                          </span>
                          <span style={{ fontSize: "20px" }}>/50Days</span>
                        </ModelDays>
                        <ModelMessage theme={theme}>
                          Stay consistent! Unlock this badge at 50 days
                        </ModelMessage>
                      </ModelBottomContainer>
                    </>
                  )}

                  {/* Case 2: streakValue between 1 and 49 */}
                  {streakValue > 0 && streakValue < 50 && (
                    <>
                      <div
                        style={{
                          width: 180,
                          height: 180,
                          position: "relative",
                          margin: "auto",
                        }}
                      >
                        <PieChart width={180} height={180}>
                          <Pie
                            data={data}
                            innerRadius={74}
                            outerRadius={80}
                            startAngle={180}
                            endAngle={-180}
                            dataKey="value"
                            stroke="none"
                          >
                            {data.map((entry, index) => (
                              <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index]}
                              />
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
                              height: "40px",
                              width: "40px",
                              zIndex: 2,
                            }}
                          />
                        </div>
                      </div>

                      <ModelBottomContainer>
                        <ModelDays theme={theme}>
                          <span style={{ fontSize: "40px" }}>
                            {streakValue}
                          </span>
                          <span style={{ fontSize: "20px" }}>/50Days</span>
                        </ModelDays>
                        <ModelMessage theme={theme}>
                          Stay consistent! Unlock this badge at 50 days
                        </ModelMessage>
                      </ModelBottomContainer>
                    </>
                  )}

                  {/* Case 3: streakValue >= 50  */}
                  {streakValue >= 50 && badges === 0 && (
                    <>
                      <div
                        style={{
                          width: 200,
                          height: 200,
                          position: "relative",
                          margin: "auto",
                        }}
                      >
                        {/* Badge image in the center */}
                        <img
                          src={LockStreak}
                          alt="Badge"
                          style={{
                            height: "200px",
                            width: "200px",
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            cursor: "pointer",
                          }}
                          onClick={() => setSelectedBadge(badgesList[1])}
                        />

                        {/* Stars */}
                        <img
                          src={star}
                          alt="Star"
                          style={{
                            height: "20px",
                            width: "20px",
                            position: "absolute",
                            top: "50%",
                            left: "0%",
                          }}
                        />
                        <img
                          src={star}
                          alt="Star"
                          style={{
                            height: "30px",
                            width: "30px",
                            position: "absolute",
                            top: "8%",
                            right: "10%",
                          }}
                        />
                        <img
                          src={star}
                          alt="Star"
                          style={{
                            height: "50px",
                            width: "50px",
                            position: "absolute",
                            bottom: "15%",
                            left: "0%",
                          }}
                        />
                      </div>
                      <ModelBottomContainer>
                        <ModelDays theme={theme}>
                          <span style={{ fontSize: "40px" }}>
                            {streakValue}
                          </span>
                          <span style={{ fontSize: "20px" }}>/50Days</span>
                        </ModelDays>
                        <ModelMessage theme={theme}>
                          Congratulations! You've unlocked the 50-Day Streak
                          Badge!
                        </ModelMessage>
                      </ModelBottomContainer>
                      <BadgeModal
                        open={!!selectedBadge}
                        onClose={() => setSelectedBadge(null)}
                        badge={badgesList[1]}
                      />
                    </>
                  )}

                  {/* Case 4: streakValue >= 50 and badges > 0 */}
                  {streakValue >= 50 && badges > 0 && (
                    <>
                      <ModelBadges>
                        {badgesList.map((badge, index) =>
                          index === 1 ? (
                            <ModelBadgeDetails
                              key={badge.id}
                              onClick={() => setSelectedBadge(badge)}
                            >
                              <CenterBadge src={badge.img} alt={badge.name} />
                              <BadgeName theme={theme}>{badge.name}</BadgeName>
                            </ModelBadgeDetails>
                          ) : (
                            <ModelBadgeDetailsSmall
                              key={badge.id}
                              onClick={() => setSelectedBadge(badge)}
                            >
                              <SmallBadge src={badge.img} alt={badge.name} />
                              <BadgeName theme={theme}>{badge.name}</BadgeName>
                            </ModelBadgeDetailsSmall>
                          )
                        )}
                      </ModelBadges>
                      <BadgesCount theme={theme}>
                        {badges} Badges Earned
                      </BadgesCount>

                      <BadgeModal
                        open={!!selectedBadge}
                        onClose={() => setSelectedBadge(null)}
                        badge={selectedBadge}
                      />
                    </>
                  )}
                </ModalContent>
              </ModalOverlay>
            )}
          </AnimatePresence>
        </ProfileCertificates>

        {!showEmpty ? (
          <>
            <LanguagesContainer theme={theme}>
              <LanguageTitle theme={theme}>Languages</LanguageTitle>
              <LanguageList>
                {Languages.map((language) => (
                  <LanguageItem theme={theme} key={language.id}>
                    {language.name}
                  </LanguageItem>
                ))}
                <RightArrowContainer theme={theme}>
                  {/* <RightArrowIcon icon={faArrowRight} /> */}
                  <img
                    src={theme === "light" ? arrowRight : arrowRightDark}
                    alt="arrow right"
                    style={{
                      height: theme === "light" ? "20px" : "12px",
                      width: theme === "light" ? "10px" : "6px",
                    }}
                    theme={theme}
                  />
                </RightArrowContainer>
              </LanguageList>
            </LanguagesContainer>

            <SkillsSection>
              <SkillsHeading theme={theme}>Skills</SkillsHeading>
              {skills.map((group) => (
                <SkillContainer key={group.id}>
                  <SkillTitle style={{ color: group.color }}>
                    {group.value}
                  </SkillTitle>
                  <SkillsList>
                    {group.skill.map((item) => (
                      <SkillItem key={item.id} theme={theme}>
                        {item.name}
                      </SkillItem>
                    ))}
                    <RightArrowContainer theme={theme}>
                      {/* <RightArrowIcon icon={faArrowRight} /> */}
                      <img
                        src={theme === "light" ? arrowRight : arrowRightDark}
                        alt="arrow right"
                        style={{
                          height: theme === "light" ? "20px" : "12px",
                          width: theme === "light" ? "10px" : "6px",
                        }}
                        theme={theme}
                      />
                    </RightArrowContainer>
                  </SkillsList>
                </SkillContainer>
              ))}
            </SkillsSection>
          </>
        ) : (
          <ProfileEmptyContainer>
            <EmptyImage src={chatGpt1} about="Profile Empty" />
            <EmptyHeading theme={theme}>No Highlights yet</EmptyHeading>
            <EmptyMessage theme={theme}>
              Your profile summary will appear here once you attempt an
              assessment or practice questions.
            </EmptyMessage>
          </ProfileEmptyContainer>
        )}
      </ProfileCardContainer>
    </>
  );
};

export default ProfileCard;
