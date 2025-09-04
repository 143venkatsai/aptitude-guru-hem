import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ProfileCardContainer = styled.section`
  display: flex;
  flex-direction: column;
  border: 1px solid #e4e4e7;
  border-radius: 16px;
  padding: 1rem;
  width: 100%;
  position: relative;
  @media (min-width: 1024px) {
    padding: 1.5rem;
    width: 400px;
  }
`;

export const RankContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-image: linear-gradient(to right, #204ea3, #2d74f7);
  border-top-left-radius: 16px;
  border-bottom-right-radius: 16px;
  padding: 0.5rem 1rem;
`;

export const Rank = styled.h2`
  font-size: 12px;
  font-weight: 600;
  color: #ffffff;
`;

export const ProfileDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ProfileImage = styled.img`
  width: 100px;
  height: 80px;
  border-radius: 10%;
  @media (min-width: 1024px) {
    width: 100px;
    height: 100px;
  }
`;
export const ProfileNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.8rem;
`;

export const ProfileName = styled.h2`
  font-size: 1.5rem;
  color: #343434;
  font-weight: 600;
`;

export const ProfileEmail = styled.p`
  font-size: 1rem;
  color: #737373;
  font-weight: 500;
`;

export const ProfileUniversity = styled.p`
  font-size: 1rem;
  color: #737373;
  font-weight: 500;
`;

export const ProfileCertificates = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
  gap: 1rem;
`;

export const CertificatesContainer = styled.div`
  background-color: #e9f3f9;
  padding: 0.5rem;
  display: flex;
  flex: 1;
  align-items: center;
  border-radius: 8px;
`;

export const CertificateIconContainer = styled.div`
  background-image: linear-gradient(to bottom, #989fff, #7a82ff);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  border-radius: 50%;
`;

export const CertificateIcon = styled(FontAwesomeIcon)`
  color: #ffffff;
  height: 20px;
  width: 20px;
`;

export const CertificateDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const CertificateTitle = styled.h1`
  font-size: 14px;
  color: #525151;
  margin: 0rem;
`;

export const CertificateCount = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: #343434;
  margin: 0rem;
`;

export const BadgeContainer = styled.div`
  background-color: #fff6ea;
  padding: 0.5rem;
  display: flex;
  flex: 1;
  align-items: center;
  border-radius: 8px;
`;

export const BadgeIconContainer = styled.div`
  background-image: linear-gradient(to bottom, #fec574, #fb9e14);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  border-radius: 50%;
`;

export const BadgeIcon = styled(FontAwesomeIcon)`
  color: #ffffff;
  height: 20px;
  width: 20px;
`;

export const BadgeDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const BadgeTitle = styled.h1`
  font-size: 14px;
  color: #525151;
  margin: 0rem;
`;

export const BadgeCount = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: #343434;
  margin: 0rem;
`;

export const LanguagesContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #d2d2d2;
`;

export const LanguageTitle = styled.h1`
  font-size: 1rem;
  color: #777575;
  font-weight: 600;
`;

export const LanguageList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  //   margin-top: 10px;
`;

export const LanguageItem = styled.li`
  background-color: #f2f3f4;
  padding: 0.3rem 0.8rem;
  border-radius: 16px;
  font-size: 14px;
  color: #6f6e6d;
`;

export const RightArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 35px;
  border-radius: 45%;
  background-color: #f2f3f4;
`;

export const RightArrowIcon = styled(FontAwesomeIcon)`
  color: #6f6e6d;
  height: 15px;
  width: 15px;
`;

export const SkillsSection = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SkillsHeading = styled.h1`
  font-size: 1rem;
  font-weight: 500;
`;

export const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const SkillTitle = styled.h2`
  font-size: 14px;
  color: ${(props) => props.color};
  font-weight: 600;
  margin: 0rem;
`;

export const SkillsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

export const SkillItem = styled.li`
  background-color: #f2f3f4;
  padding: 0.3rem 0.8rem;
  border-radius: 16px;
  font-size: 14px;
  color: #6f6e6d;
`;

export const ProfileEmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0rem;
`;

export const EmptyImage = styled.img`
  width: 350px;
  height: 200px;
`;

export const EmptyHeading = styled.h1`
  font-size: 16px;
  font-weight: 700;
  color: #767676;
  text-align: center;
  margin: 0.5rem 0rem;
`;

export const EmptyMessage = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #767676;
  text-align: center;
`;
