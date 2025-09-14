import React, { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
// import { IoClose, IoMenu } from "react-icons/io5";

import {
  faBars,
  faAngleDown,
  faTimes,
  faCaretDown,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

import ThemeContext from "../../context/ThemeContext.jsx";

import header1 from "../../assets/header1.png";
import header2 from "../../assets/header2.png";

// import logo from "../../assets/headerLogo.png";
import profileLogo from "../../assets/profileLogo.png";
import mobileIcon1 from "../../assets/mobileicon1.png";
import mobileIcon2 from "../../assets/mobileIcon2.png";
import mobileIcon3 from "../../assets/mobileIcon3.png";
import mobileIcon4 from "../../assets/mobileIcon4.png";
import mobileIcon5 from "../../assets/mobileIcon5.png";
import mobileIcon6 from "../../assets/mobileIcon6.png";
import mobileIcon7 from "../../assets/mobileIcon7.png";
import mobileIcon8 from "../../assets/mobileIcon8.png";
import deviceTheme from "../../assets/deviceTheme.png";
import backArrow from "../../assets/backArrow.png";
// import sun from "../../assets/sun.png";
// import footerLogo3 from "../../assets/footerLogo3.png";

import {
  AppearanceHeader,
  AppearanceModal,
  AppearanceOption,
  BackArrow,
  DownArrowIcon,
  DropdownIcon,
  DropdownIconMobile,
  DropdownItem,
  DropdownItemProfile,
  DropdownLogout,
  DropdownMenu,
  ItemWithIcon,
  ListItem,
  LogoImg,
  MenuIconContainer,
  MenuItem,
  MobileCollegeName,
  MobileLogoutButton,
  MobileLogoutContainer,
  MobileMenu,
  MobileMenuList,
  MobileProfile,
  MobileProfileImage,
  MobileProfileName,
  MoonIcon,
  NavContainer,
  NavItem,
  NavList,
  OptionIcon,
  OptionText,
  ProfileContainer,
  ProfileImage,
  ProfileLink,
  ProfileText,
  RadioInner,
  RadioOuter,
  StyledIcon,
  StyledNavLink,
  StyledNavLinkLeft,
  StyledNavLinkProfile,
  StyledNavLinkProfileApperance,
  ThemeButton,
  ThemeContainer,
  ThemeIcon,
  Underline,
} from "./styledComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import "/index.css";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/practice", label: "Practice" },
  { to: "/assessments", label: "Assessment" },
  { to: "/leaderboard", label: "Leaderboard" },
];

const navLinksMobile = [
  { to: "/", label: "Home", icon: mobileIcon1 },
  { to: "/practice", label: "Practice", icon: mobileIcon2 },
  { to: "/assessments", label: "Assessment", icon: mobileIcon3 },
  { to: "/leaderboard", label: "Leaderboard", icon: mobileIcon4 },
  { to: "/company", label: "Company Specific", icon: mobileIcon5 },
  { to: "/profile", label: "Profile", icon: mobileIcon6 },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);
  const [showAppearanceOptions, setShowAppearanceOptions] = useState(false);

  let timeoutId;

  const handleEnter = () => {
    clearTimeout(timeoutId);
    setDropDown(true);
  };

  const handleLeave = () => {
    timeoutId = setTimeout(() => setDropDown(false), 200); // 200ms delay
  };

  const bgColor = theme === "dark" ? "#262626" : "#ffffff";
  const textColor = theme === "dark" ? "#FFFFFF" : "#343434";

  const activeLogo = theme === "dark" ? header1 : header2;

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const collegeName = "MEENAKSHI RAMASWAMY ENGINEERING COLLEGE, Ariyalur";
  console.log(collegeName.length);

  const sliceCollegeName = collegeName.slice(0, 40);
  console.log(sliceCollegeName);

  return (
    <>
      <NavContainer bgColor={bgColor} theme={theme}>
        {/* Mobile Menu Icon */}
        <MenuIconContainer onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <StyledIcon icon={faTimes} textColor={textColor} />
          ) : (
            <StyledIcon icon={faBars} textColor={textColor} />
          )}
        </MenuIconContainer>
        <LogoImg src={activeLogo} alt="Logo" />
        <NavList>
          {navLinks.map((item) => (
            <NavItem key={item.to}>
              <StyledNavLink
                textColor={textColor}
                to={item.to}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {item.label}
              </StyledNavLink>
            </NavItem>
          ))}

          <ListItem>
            <StyledNavLinkLeft
              textColor={textColor}
              to="/company"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Company Specific
            </StyledNavLinkLeft>
            <DownArrowIcon icon={faAngleDown} textColor={textColor} />
          </ListItem>
        </NavList>

        <ProfileLink onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
          <ProfileContainer>
            <ProfileImage src={profileLogo} alt="Profile" />
            <ProfileText textColor={textColor}>Hi, Muskan</ProfileText>
            <DropdownIcon
              icon={faCaretDown}
              // onClick={() => setDropDown(!dropDown)}
              textColor={textColor}
            />
          </ProfileContainer>
          {dropDown && (
            <DropdownMenu theme={theme}>
              <DropdownItemProfile to="/profile" theme={theme}>
                <img
                  src={mobileIcon6}
                  alt="Profile"
                  style={{ width: 22, height: 22 }}
                />
                <span
                  style={{ color: theme === "light" ? "#343434" : "#ECECEC" }}
                >
                  Profile
                </span>
              </DropdownItemProfile>
              <DropdownItem>
                <img
                  src={mobileIcon7}
                  alt="Appearance"
                  style={{ width: 22, height: 22 }}
                />
                <span
                  style={{ color: theme === "light" ? "#343434" : "#ECECEC" }}
                >
                  Appearance
                </span>
                <ThemeContainer theme={theme}>
                  <ThemeButton
                    active={theme === "light"}
                    aria-label="Light theme"
                    onClick={() => setTheme("light")}
                    theme={theme}
                  >
                    <ThemeIcon icon={faSun} isTheme={theme === "light"} />
                  </ThemeButton>
                  <ThemeButton
                    active={theme === "dark"}
                    aria-label="Dark theme"
                    onClick={() => setTheme("dark")}
                  >
                    <MoonIcon icon={faMoon} isTheme={theme === "dark"} />
                  </ThemeButton>
                </ThemeContainer>
              </DropdownItem>
              <DropdownLogout>
                Logout
                <img src={mobileIcon8} alt="logout" />
              </DropdownLogout>
            </DropdownMenu>
          )}
        </ProfileLink>
      </NavContainer>
      {isMenuOpen && (
        <MobileMenu isOpen={isMenuOpen}>
          <MobileProfile>
            <MobileProfileImage src={profileLogo} alt="Profile image" />
            <MobileProfileName>Muskan Verma</MobileProfileName>
            <MobileCollegeName>{sliceCollegeName} ....</MobileCollegeName>
          </MobileProfile>
          <MobileMenuList>
            {navLinksMobile.map((item) => (
              <MenuItem key={item.to}>
                <StyledNavLinkProfile
                  to={item.to}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <ItemWithIcon>
                    <img
                      src={item.icon}
                      alt={`${item.label} icon`}
                      style={{
                        marginRight: "0.75rem",
                        width: "24px",
                        height: "24px",
                        objectFit: "contain",
                      }}
                    />
                    {["/assessments", "/company"].includes(item.to) ? (
                      <>
                        {item.label}
                        <DropdownIconMobile icon={faAngleDown} />
                      </>
                    ) : (
                      item.label
                    )}
                  </ItemWithIcon>
                </StyledNavLinkProfile>
                <Underline />
              </MenuItem>
            ))}
            <div>
              {" "}
              <StyledNavLinkProfileApperance
                onClick={() => setShowAppearanceOptions(true)}
              >
                <img
                  src={mobileIcon7}
                  alt="Appearance"
                  style={{
                    marginRight: "0.75rem",
                    width: "24px",
                    height: "24px",
                    objectFit: "contain",
                  }}
                />
                <p> Apperance</p>
                <DropdownIconMobile icon={faAngleDown} />
              </StyledNavLinkProfileApperance>
              <Underline />
            </div>
          </MobileMenuList>
          <div>
            <MobileLogoutContainer>
              <MobileLogoutButton>Logout</MobileLogoutButton>
              <img
                src={mobileIcon8}
                alt="Logout"
                style={{
                  width: "1.25rem",
                  height: "1.25rem",
                  objectFit: "contain",
                }}
              />
            </MobileLogoutContainer>
          </div>
        </MobileMenu>
      )}

      {showAppearanceOptions && (
        <AppearanceModal>
          <AppearanceHeader>
            <BackArrow onClick={() => setShowAppearanceOptions(false)}>
              <img src={backArrow} alt="Back Arrow" />
            </BackArrow>
            Appearance
          </AppearanceHeader>
          <AppearanceOption
            selected={theme === "light"}
            onClick={() => {
              setTheme("light");
            }}
          >
            <OptionIcon src={mobileIcon7} alt="Light theme" />
            <OptionText>Light theme</OptionText>
            <RadioOuter selected={theme === "light"}>
              {theme === "light" && <RadioInner />}
            </RadioOuter>
          </AppearanceOption>
          <Underline />

          <AppearanceOption
            selected={theme === "dark"}
            onClick={() => {
              setTheme("dark");
            }}
          >
            <FontAwesomeIcon
              icon={faMoon}
              alt="Dark theme"
              style={{
                color: "#848382",
                marginRight: "16px",
                height: "24px",
                width: "24px",
              }}
            />
            <OptionText>Dark theme</OptionText>
            <RadioOuter selected={theme === "dark"}>
              {theme === "dark" && <RadioInner />}
            </RadioOuter>
          </AppearanceOption>
          <Underline />

          <AppearanceOption
            selected={theme === "device"}
            onClick={() => {
              setTheme("device");
            }}
          >
            <OptionIcon src={deviceTheme} alt="Device theme" />
            <OptionText>Use device theme</OptionText>
            <RadioOuter selected={theme === "device"}>
              {theme === "device" && <RadioInner />}
            </RadioOuter>
          </AppearanceOption>
          <Underline />
        </AppearanceModal>
      )}
    </>
  );
};

export default Header;
