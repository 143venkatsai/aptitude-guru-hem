import React, { useEffect, useState, useContext } from "react";

import { FaUser } from "react-icons/fa6";
import { FiHome, FiMenu } from "react-icons/fi";
import { CgNotes } from "react-icons/cg";
import { PiListChecksLight, PiBuildingOffice } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa6";
import { VscColorMode } from "react-icons/vsc";
import { IoClose } from "react-icons/io5";
import { BiSolidDownArrow } from "react-icons/bi";
import { IoIosArrowBack } from "react-icons/io";
import {
  MdOutlineLightMode,
  MdOutlineDarkMode,
  MdKeyboardArrowDown,
  MdOutlineChevronRight,
  MdLogout,
  MdOutlineLeaderboard,
} from "react-icons/md";

import ThemeContext from "../../context/ThemeContext.jsx";

import header1 from "../../assets/header1.png";
import header2 from "../../assets/header2.png";
import profileLogo from "../../assets/profileLogo.png";

import {
  AppearanceHeader,
  AppearanceModal,
  AppearanceOption,
  BackArrow,
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
  NavContainer,
  NavItem,
  NavList,
  OptionText,
  ProfileContainer,
  ProfileImage,
  ProfileLink,
  ProfileText,
  RadioInner,
  RadioOuter,
  StyledNavLink,
  StyledNavLinkLeft,
  StyledNavLinkProfile,
  StyledNavLinkProfileApperance,
  ThemeButton,
  ThemeContainer,
  Underline,
} from "./styledComponents";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/practice", label: "Practice" },
  { to: "/assessments", label: "Assessment" },
  { to: "/leaderboard", label: "Leaderboard" },
];

const navLinksMobile = [
  { to: "/", label: "Home", newIcon: FiHome },
  { to: "/practice", label: "Practice", newIcon: CgNotes },
  {
    to: "/assessments",
    label: "Assessment",
    newIcon: PiListChecksLight,
  },
  {
    to: "/leaderboard",
    label: "Leaderboard",
    newIcon: MdOutlineLeaderboard,
  },
  {
    to: "/company",
    label: "Company Specific",
    newIcon: PiBuildingOffice,
  },
  { to: "/profile", label: "Profile", newIcon: FaRegUser },
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
    timeoutId = setTimeout(() => setDropDown(false), 200);
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
            <IoClose
              style={{ color: textColor, height: "30px", width: "30px" }}
            />
          ) : (
            <FiMenu
              style={{ color: textColor, height: "30px", width: "30px" }}
            />
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
            <MdKeyboardArrowDown
              style={{
                color: textColor,
                marginLeft: "4px",
                height: "20px",
                width: "20px",
              }}
            />
          </ListItem>
        </NavList>

        <ProfileLink onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
          <ProfileContainer>
            <ProfileImage src={profileLogo} alt="Profile" />
            <ProfileText textColor={textColor}>Hi, Muskan</ProfileText>
            <BiSolidDownArrow
              style={{
                color: textColor,
                marginLeft: "9px",
                height: "12px",
                width: "12px",
              }}
            />
          </ProfileContainer>

          {dropDown && (
            <DropdownMenu theme={theme}>
              <DropdownItemProfile to="/profile" theme={theme}>
                <FaUser
                  style={{
                    width: 22,
                    height: 22,
                    color: theme === "light" ? "#343434" : "#ECECEC",
                  }}
                />
                <span
                  style={{ color: theme === "light" ? "#343434" : "#ECECEC" }}
                >
                  Profile
                </span>
              </DropdownItemProfile>
              <DropdownItem>
                <MdOutlineLightMode
                  style={{
                    width: 25,
                    height: 25,
                    color: theme === "light" ? "#343434" : "#ECECEC",
                  }}
                />
                <span
                  style={{ color: theme === "light" ? "#343434" : "#ECECEC" }}
                >
                  Appearance
                </span>
                <ThemeContainer theme={theme}>
                  <ThemeButton
                    aria-label="Light theme"
                    onClick={() => setTheme("light")}
                    style={{
                      height: 30,
                      width: 30,
                      backgroundColor: theme === "light" ? "#FD6A7F" : "",
                      borderRadius: "50%",
                    }}
                  >
                    <MdOutlineLightMode
                      style={{
                        color: "#fff",
                        height: 20,
                        width: 20,
                      }}
                    />
                  </ThemeButton>
                  <ThemeButton
                    aria-label="Dark theme"
                    onClick={() => setTheme("dark")}
                    style={{
                      height: 30,
                      width: 30,
                      backgroundColor: theme === "dark" ? "#FD6A7F" : "",
                      borderRadius: "50%",
                    }}
                  >
                    <MdOutlineDarkMode
                      style={{
                        color: theme === "light" ? "#262626" : "#fff",
                        height: 20,
                        width: 20,
                      }}
                    />
                  </ThemeButton>
                </ThemeContainer>
              </DropdownItem>
              <DropdownLogout>
                Logout
                <MdLogout />
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
                    <item.newIcon
                      style={{
                        marginRight: "20px",
                        width: "24px",
                        height: "24px",
                        objectFit: "contain",
                        color: "#6C7072",
                      }}
                    />
                    {["/assessments", "/company"].includes(item.to) ? (
                      <>
                        <p style={{ color: "#0F0F0F" }}>{item.label}</p>
                        <MdOutlineChevronRight style={{ marginLeft: "auto" }} />
                      </>
                    ) : (
                      <p style={{ color: "#0F0F0F" }}>{item.label}</p>
                    )}
                  </ItemWithIcon>
                </StyledNavLinkProfile>
                <Underline />
              </MenuItem>
            ))}
            <div>
              <StyledNavLinkProfileApperance
                onClick={() => setShowAppearanceOptions(true)}
              >
                <MdOutlineLightMode
                  style={{
                    marginRight: "20px",
                    width: "24px",
                    height: "24px",
                    objectFit: "contain",
                    color: "#6C7072",
                  }}
                />
                <p style={{ color: "#0F0F0F" }}>Appearance</p>
                <MdOutlineChevronRight style={{ marginLeft: "auto" }} />
              </StyledNavLinkProfileApperance>
              <Underline />
            </div>
          </MobileMenuList>

          <MobileLogoutContainer>
            <MobileLogoutButton>Logout</MobileLogoutButton>
            <MdLogout
              style={{
                width: "16px",
                height: "16px",
                objectFit: "contain",
                color: "#fff",
              }}
            />
          </MobileLogoutContainer>
        </MobileMenu>
      )}

      {showAppearanceOptions && (
        <AppearanceModal>
          <AppearanceHeader>
            <BackArrow onClick={() => setShowAppearanceOptions(false)}>
              <IoIosArrowBack
                style={{ width: "24px", height: "24px", color: "#6C7072" }}
              />
            </BackArrow>
            <p style={{ color: "#0F0F0F" }}>Appearance</p>
          </AppearanceHeader>
          <AppearanceOption
            selected={theme === "light"}
            onClick={() => {
              setTheme("light");
            }}
          >
            <MdOutlineLightMode
              style={{
                width: "24px",
                height: "24px",
                marginRight: "20px",
                color: "#6C7072",
              }}
            />
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
            <MdOutlineDarkMode
              style={{
                width: "24px",
                height: "24px",
                marginRight: "20px",
                color: "#6C7072",
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
            <VscColorMode
              style={{
                width: "24px",
                height: "24px",
                marginRight: "20px",
                color: "#6C7072",
              }}
            />
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
