import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

export const NavContainer = styled.nav`
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  padding: 0.5rem 1rem;
  border-bottom-width: 0.5px;
  border-bottom-style: solid;
  border-bottom-color: ${(props) =>
    props.theme === "light" ? "#B3B3B3" : "#D3D3D3"};
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ textColor }) => textColor};
  @media (min-width: 1024px) {
    justify-content: space-between;
    padding: 1rem 2rem;
  }
`;

export const MenuIconContainer = styled.div`
  display: flex;
  cursor: pointer;
  @media (min-width: 1024px) {
    display: none;
  }
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  width: 1.5rem;
  height: 1.5rem;
  color: ${({ textColor }) => textColor};
`;

export const LogoImg = styled.img`
  width: 150px;
  height: 40px;
  margin-left: 1rem;
`;

export const NavList = styled.ul`
  display: none;
  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
  }
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const NavItem = styled.li``;

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  font-size: 0.875rem; /* text-sm */
  padding-bottom: 2px;
  border-bottom: 2px solid transparent;
  transition: color 0.2s, border-color 0.2s;
  color: ${({ textColor }) => textColor};
  text-decoration: none;

  &.active {
    border-bottom-color: #ef4444;
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
`;

export const StyledNavLinkLeft = styled(NavLink)`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  padding-bottom: 0px;
  cursor: pointer;
  color: ${({ textColor }) => textColor};
  border-bottom: 2px solid transparent;
  transition: border-color 0.3s;

  &.active {
    border-bottom-color: #ef4444;
  }
`;

export const DownArrowIcon = styled(FontAwesomeIcon)`
  margin-left: 0.25rem;
  color: ${({ textColor }) => textColor};
`;

export const ProfileLink = styled.div`
  text-decoration: none;
  position: relative;
`;

export const ProfileContainer = styled.div`
  display: none;
  align-items: center;

  @media (min-width: 1024px) {
    display: flex;
  }
`;

export const ProfileImage = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 50%;
`;

export const ProfileText = styled.span`
  margin-left: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  color: ${({ textColor }) => textColor};
`;

export const DropdownIcon = styled(FontAwesomeIcon)`
  margin-left: 0.25rem;
  color: ${({ textColor }) => textColor};
`;

export const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

// Sliding menu container
export const MobileMenu = styled.div`
  position: fixed;
  top: 10; /* MUST have units */
  left: 0;
  height: 100vh;
  width: 280px;
  background: white;
  box-shadow: 10px 0 8px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #d1d5db;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  overflow-y: auto;
  z-index: 1000;
  animation: ${({ isOpen }) => (isOpen ? slideIn : slideOut)} 0.3s forwards;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const MobileProfile = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  padding: 0rem 1.5rem;
  padding-top: 1rem;
  padding-bottom: 0.5rem;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid #e2e4e5;
`;

export const MobileProfileImage = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50%;
`;

export const MobileProfileName = styled.h1`
  font-size: 16px;
  font-weight: 600;
  margin: 0.4rem 0rem;
`;

export const MobileCollegeName = styled.p`
  font-size: 16px;
  color: #6c7072;
`;

export const MobileMenuList = styled.ul`
  //   overflow-y: auto;
  //   flex-grow: 1;
  padding: 0;
  margin: 0;
  margin-bottom: 1rem;
  list-style: none;
`;

export const MenuItem = styled.li`
  width: 100%;
`;

export const StyledNavLinkProfile = styled(NavLink)`
  display: flex;
  align-items: center;
  font-size: 18px; 
  padding: 1rem 1.5rem;
  color: ##0F0F0F; 

  &.active {
    background-color: #f5f5f5;
    font-weight: 500;
 
`;

export const StyledNavLinkProfileApperance = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  padding: 1rem 1.5rem;
  transition: color 0.3s, background-color 0.3s;
  color: #0f0f0f;

  &.active {
    background-color: #f5f5f5;
    font-weight: 500;
  }
`;

export const MenuIcon = styled(FontAwesomeIcon)``;

export const ItemWithIcon = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const DropdownIconMobile = styled(StyledIcon)`
  margin-left: auto;
  width: 1rem;
  height: 1rem;
  transform: rotate(270deg);
`;

export const MobileLogoutContainer = styled.div`
  background-color: #fc2947;
  padding: 0.5rem 1rem;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  margin: 0.75rem 1.5rem;
  border-radius: 4px;
  margin-top: auto;
`;

export const MobileLogoutButton = styled.button`
  color: #ffffff;
  font-size: 14px;
  padding-right: 0.5rem;
`;

export const Underline = styled.div`
  position: relative;
  width: 100%;
  height: 0.5px;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, #ffffff, #6c7072 50%, #ffffff);
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 40px;
  right: 0;
  //   width: 250px;
  background: ${(props) => (props.theme === "light" ? "#ffffff" : "#343434")};
  border-radius: 4px;
  box-shadow: 0 6px 20px rgba(60, 60, 60, 0.18);
  padding: 16px;
  z-index: 999;
`;

export const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px;
  font-size: 15px;
  border-radius: 6px;
  color: #343434;
`;

export const DropdownItemProfile = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px;
  font-size: 15px;
  color: #343434;
  cursor: pointer;
  border-radius: 6px;

  &:hover {
    background: ${(props) => (props.theme === "light" ? "#DCDCDC" : "#262626")};
  }
`;

export const DropdownLogout = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: #fc2947;
  color: #fff;
  border: none;
  padding: 12px 0;
  border-radius: 4px;
  margin-top: 12px;
  cursor: pointer;

  &:hover {
    background: #cb1f3d;
  }
`;

export const ThemeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid #bababa;
  border-radius: 999px;
  padding: 2px 4px;
  background: ${(props) => (props.theme === "light" ? "#fff" : "#434343")};
  width: 100px;
  height: 36px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
`;

export const ThemeButton = styled.button`
  cursor: pointer;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  padding: 2px;
  justify-content: center;
  transition: background 0.2s;
  background-color: ${({ theme }) =>
    theme === "light" ? "#FD6A7F" : "transparent"};
`;

export const ThemeIcon = styled(FontAwesomeIcon)`
  height: 22px;
  width: 22px;
  color: ${({ isTheme }) => (isTheme ? "#ffffff" : "#000000")};
  background-color: ${({ isTheme }) => (isTheme ? "#FD6A7F" : "transparent")};
  border-radius: 50%;
  padding: 4px;
  transition: background-color 0.3s, color 0.3s;
`;

export const MoonIcon = styled(FontAwesomeIcon)`
  height: 22px;
  width: 22px;
  color: ${({ isTheme }) => (isTheme ? "#ffffff" : "##BABABA")};
  background-color: ${({ isTheme }) => (isTheme ? "#FD6A7F" : "#ffffff")};
  border-radius: 50%;
  padding: 4px;
  transition: background-color 0.3s, color 0.3s;
`;

export const AppearanceModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 280px;
  background: white;
  z-index: 2000;
  padding: 24px 20px;
`;

export const AppearanceHeader = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 20px;
  gap: 12px;
`;

export const BackArrow = styled.span`
  font-size: 18px;
  cursor: pointer;
`;

export const AppearanceOption = styled.div`
  display: flex;
  align-items: center;
  padding: 18px 0;
  cursor: pointer;
`;

export const OptionIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 16px;
`;

export const OptionText = styled.span`
  flex: 1;
  font-size: 16px;
`;

export const RadioOuter = styled.span`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 2px solid #fc2947;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
`;

export const RadioInner = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #fc2947;
`;
