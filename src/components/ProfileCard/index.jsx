import React, { useContext, useState, useEffect } from "react";
import { PieChart, Pie, Cell } from "recharts";
import { AnimatePresence, motion } from "framer-motion";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import ThemeContext from "../../context/ThemeContext";

import BadgeModal from "../BadgeModel";

import profileLogo from "../../assets/profileLogo.png";
import chatGpt1 from "../../assets/chatGpt1.png";
import certificate from "../../assets/certificate.png";
import badgeImage from "../../assets/badge.png";
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
  ProfileBranch,
  ModelName,
  Celebrate,
  RightArrow,
  ScrollContainer,
} from "./styledComponents";

import "../../index.css";

const Languages = [
  { id: 1, name: "Java" },
  { id: 2, name: "C++" },
  { id: 3, name: "Java Script" },
  { id: 4, name: "Type Sscript" },
  { id: 5, name: "React.js" },
  { id: 6, name: "MongoDB" },
];

const skills = [
  {
    id: 1,
    value: "Advance",
    color: "#FF0F31",
    skill: [
      { id: 1, name: "Array" },
      { id: 2, name: "String" },
      { id: 3, name: "Hash Map" },
      { id: 4, name: "Dynamic Programming" },
    ],
  },
  {
    id: 2,
    value: "Intermediate",
    color: "#FCAB13",
    skill: [
      { id: 1, name: "Hash Map" },
      { id: 2, name: "Graph" },
      { id: 3, name: "Tree" },
      { id: 4, name: "Hash Table" },
      { id: 5, name: "Sliding Window" },
    ],
  },
  {
    id: 3,
    value: "Fundamental",
    color: "#00B315",
    skill: [
      { id: 1, name: "Graph" },
      { id: 2, name: "Tree" },
      { id: 3, name: "Linked List" },
      { id: 4, name: "Sliding Window" },
      { id: 5, name: "Hash Table" },
    ],
  },
];

const activeBadges = ["PYTHON"];

import { badgesData } from "../../mockData/badgesData";

const ProfileCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [badge, setBadge] = useState(null);
  const [selectedBadge, setSelectedBadge] = useState(null);
  const [expandedLanguages, setExpandedLanguages] = useState(false);
  const [expandedGroups, setExpandedGroups] = useState({});

  const { theme } = useContext(ThemeContext);

  const hasLanguages = Languages.length > 0;
  const hasSkills = skills.length > 0;

  const showEmpty = !hasLanguages && !hasSkills;

  useEffect(() => {
    if (activeBadges.length > 0) {
      for (const badgeId of activeBadges) {
        const storageKey = `badge_shown_${badgeId}`;

        const alreadyShown = localStorage.getItem(storageKey);

        if (!alreadyShown) {
          const earnedBadge = badgesData.find((b) => b.id === badgeId);

          if (earnedBadge) {
            setIsOpen(true);
            localStorage.setItem(storageKey, "true");
            setBadge(earnedBadge);
          }

          break;
        }
      }
    }
  }, [activeBadges]);

  const toggleGroup = (id) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const BadgeBottomSection = ({ badge }) => {
    if (!badge) return null;

    if (badge.id === "50_DAYS") {
      return (
        <>
          <ModelDays theme={theme}>
            <span style={{ fontSize: "40px" }}>50</span>
            <span style={{ fontSize: "20px" }}>/50 Days</span>
          </ModelDays>
          <ModelMessage theme={theme}>
            {badge.newDesc || badge.desc}
          </ModelMessage>
        </>
      );
    }

    return (
      <>
        <ModelName theme={theme}>{badge.name}</ModelName>
        <ModelMessage theme={theme}>{badge.desc}</ModelMessage>
      </>
    );
  };

  return (
    <>
      <ProfileCardContainer theme={theme}>
        <ProfileDetails>
          <ProfileImage src={profileLogo} alt="Profile Logo" />
          <ProfileNameContainer>
            <ProfileName theme={theme}>Muskan Verma</ProfileName>
            <ProfileEmail theme={theme}>muskanverma@gmail.com</ProfileEmail>
            <ProfileBranch theme={theme}>CSE 3rd Year</ProfileBranch>
            <ProfileUniversity theme={theme}>SRM University</ProfileUniversity>
          </ProfileNameContainer>
        </ProfileDetails>

        {/* Rank Container */}
        <RankContainer>
          <Rank>Rank 56</Rank>
        </RankContainer>

        {/* Certificates Container */}
        <ProfileCertificates>
          <CertificatesContainer to="/certificates">
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
          <BadgeContainer to="/badges">
            <img
              src={badgeImage}
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
                  <>
                    <div
                      style={{
                        width: 150,
                        height: 150,
                        position: "relative",
                        margin: "auto",
                      }}
                    >
                      {/* Badge image in the center */}
                      <img
                        src={badge.img}
                        alt="Badge"
                        style={{
                          height: "112px",
                          width: "116px",
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                        }}
                      />

                      {/* Stars */}
                      <img
                        src={star}
                        alt="Star"
                        style={{
                          height: "13px",
                          width: "13px",
                          position: "absolute",
                          top: "50%",
                          left: "0%",
                        }}
                      />
                      <img
                        src={star}
                        alt="Star"
                        style={{
                          height: "17px",
                          width: "17px",
                          position: "absolute",
                          top: "10%",
                          right: "10%",
                        }}
                      />
                      <img
                        src={star}
                        alt="Star"
                        style={{
                          height: "38px",
                          width: "38px",
                          position: "absolute",
                          bottom: "18%",
                          left: "2%",
                        }}
                      />
                    </div>
                    <ModelBottomContainer>
                      <BadgeBottomSection badge={badge} />
                      <Celebrate onClick={() => setSelectedBadge(badge)}>
                        Let's Celebrate
                      </Celebrate>
                    </ModelBottomContainer>
                    <BadgeModal
                      open={!!selectedBadge}
                      onClose={() => setSelectedBadge(null)}
                      badge={badge}
                    />
                  </>
                </ModalContent>
              </ModalOverlay>
            )}
          </AnimatePresence>
        </ProfileCertificates>

        {!showEmpty ? (
          <ScrollContainer>
            <LanguagesContainer theme={theme}>
              <LanguageTitle theme={theme}>Languages</LanguageTitle>
              <LanguageList as={motion.div} layout>
                <AnimatePresence>
                  {(expandedLanguages ? Languages : Languages.slice(0, 3)).map(
                    (language) => (
                      <motion.div
                        key={language.id}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <LanguageItem theme={theme}>
                          {language.name}
                        </LanguageItem>
                      </motion.div>
                    )
                  )}
                </AnimatePresence>

                <RightArrowContainer
                  theme={theme}
                  onClick={() => setExpandedLanguages((prev) => !prev)}
                  style={{ cursor: "pointer" }}
                  whileTap={{ scale: 0.9 }}
                  layout
                >
                  <motion.img
                    src={theme === "light" ? arrowRight : arrowRightDark}
                    alt="toggle languages"
                    style={{
                      height: theme === "light" ? "20px" : "12px",
                      width: theme === "light" ? "10px" : "6px",
                    }}
                    animate={{ rotate: expandedLanguages ? -90 : 90 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  />
                </RightArrowContainer>
              </LanguageList>
            </LanguagesContainer>

            <SkillsSection>
              <SkillsHeading theme={theme}>Skills</SkillsHeading>
              {skills.map((group) => {
                const isExpanded = expandedGroups[group.id];
                const visibleSkills = isExpanded
                  ? group.skill
                  : group.skill.slice(0, 3);

                return (
                  <SkillContainer key={group.id}>
                    <SkillTitle style={{ color: group.color }}>
                      {group.value}
                    </SkillTitle>
                    <SkillsList as={motion.div} layout>
                      <AnimatePresence>
                        {visibleSkills.map((item) => (
                          <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.1 }}
                          >
                            <SkillItem theme={theme}>{item.name}</SkillItem>
                          </motion.div>
                        ))}
                      </AnimatePresence>

                      <RightArrowContainer
                        theme={theme}
                        onClick={() => toggleGroup(group.id)}
                        style={{ cursor: "pointer" }}
                        whileTap={{ scale: 0.9 }}
                        layout
                      >
                        <motion.img
                          src={theme === "light" ? arrowRight : arrowRightDark}
                          alt="toggle languages"
                          style={{
                            height: theme === "light" ? "20px" : "12px",
                            width: theme === "light" ? "10px" : "6px",
                          }}
                          animate={{ rotate: isExpanded ? -90 : 90 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                        />
                      </RightArrowContainer>
                    </SkillsList>
                  </SkillContainer>
                );
              })}
            </SkillsSection>
          </ScrollContainer>
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
