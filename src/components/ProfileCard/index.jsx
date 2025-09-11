import React from "react";
import // faArrowRight,
// faCertificate,
// faRibbon,
"@fortawesome/free-solid-svg-icons";

import profileLogo from "../../assets/profileLogo.png";
import chatGpt1 from "../../assets/chatGpt1.png";
import certificate from "../../assets/certificate.png";
import badge from "../../assets/badge.png";
import arrowRight from "../../assets/arrowRight.png";

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
  // Check if Languages and skills are empty
  const hasLanguages = Languages.length > 0;
  const hasSkills = skills.length > 0;

  // Determine if should show empty state
  const showEmpty = !hasLanguages && !hasSkills;

  return (
    <>
      <ProfileCardContainer>
        <ProfileDetails>
          <ProfileImage src={profileLogo} alt="Profile Logo" />
          <ProfileNameContainer>
            <ProfileName>Muskan Verma</ProfileName>
            <ProfileEmail>muskanverma@gmail.com</ProfileEmail>
            <ProfileUniversity>SRM University</ProfileUniversity>
          </ProfileNameContainer>
        </ProfileDetails>

        {/* Rank Container */}
        <RankContainer>
          <Rank>Rank 56</Rank>
        </RankContainer>

        {/* Certificates and Badges */}
        <ProfileCertificates>
          <CertificatesContainer>
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
          <BadgeContainer>
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
        </ProfileCertificates>

        {!showEmpty ? (
          <>
            <LanguagesContainer>
              <LanguageTitle>Languages</LanguageTitle>
              <LanguageList>
                {Languages.map((language) => (
                  <LanguageItem key={language.id}>{language.name}</LanguageItem>
                ))}
                <RightArrowContainer>
                  <img
                    src={arrowRight}
                    alt="arrow right"
                    style={{ height: "20px", width: "10px" }}
                  />
                </RightArrowContainer>
              </LanguageList>
            </LanguagesContainer>

            <SkillsSection>
              <SkillsHeading>Skills</SkillsHeading>
              {skills.map((group) => (
                <SkillContainer key={group.id}>
                  <SkillTitle style={{ color: group.color }}>
                    {group.value}
                  </SkillTitle>
                  <SkillsList>
                    {group.skill.map((item) => (
                      <SkillItem key={item.id}>{item.name}</SkillItem>
                    ))}
                    <RightArrowContainer>
                      {/* <RightArrowIcon icon={faArrowRight} /> */}
                      <img
                        src={arrowRight}
                        alt="arrow right"
                        style={{ height: "20px", width: "10px" }}
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
            <EmptyHeading>No Highlights yet</EmptyHeading>
            <EmptyMessage>
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
