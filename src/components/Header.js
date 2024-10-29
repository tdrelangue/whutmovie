import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"; 
import darkTheme from "../assets/Color theme";
import logo from "../assets/logo.svg";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

// Styled components for the header
const HeaderContainer = styled.header`
  background-color: ${darkTheme.headerBackground}; /* Bordeaux color */
  padding: 0; /* Remove padding to ensure full height */
  display: flex;
  align-items: stretch; /* Stretch items to fill the header */
  justify-content: space-between;
  height: 80px; /* Adjusted height for the navbar */
  position: fixed; /* Keep it fixed at the top */
  width: 100%; /* Full width of the viewport */
  box-sizing: border-box; /* Include padding and border in width and height */
  z-index: 1000; /* Ensure it stays above other elements */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25); /* Add shadow here */
`;

const LogoContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center; /* Center logo vertically */
`;

const Logo = styled.img`
  width: 100px; /* Adjust as needed */
  height: auto; /* Maintain aspect ratio */
  filter: brightness(0) invert(1); /* Change SVG to white */
`;

const NavigationItems = styled.div`
  display: flex;
  flex: 2;
  justify-content: flex-start;
  align-items: stretch; /* Ensure links take full height of navbar */

  @media (max-width: 600px) {
    display: none; /* Hide on small screens */
  }
`;

const NavLink = styled(Link)` /* Changed from 'a' to 'Link' */
  color: ${darkTheme.color}; /* White color for the links */
  text-decoration: none;
  padding: 0 20px; /* Padding for button appearance */
  display: flex; /* Allow for full height */
  align-items: center; /* Center text vertically */
  height: 100%; /* Full height of the navbar */
  
  &:hover {
    background-color: ${darkTheme.hoverColor}; /* Dark grey on hover */
  }
`;

const HamburgerMenu = styled.div`
  flex: 1; /* Take up available space */
  display: none; /* Hidden by default, show on small screens */
  color: ${darkTheme.color}; /* White color for the links */
  align-items: center; /* Center icon vertically */
  height: 100%; /* Full height of the navbar */
  justify-content: center; /* Center icon horizontally */
  cursor: pointer; /* Pointer cursor for clickable menu */
  &:hover {
    background-color: ${darkTheme.hoverColor}; /* Dark grey on hover */
  }

  @media (max-width: 600px) {
    display: flex; /* Show on small screens */
  }
`;

const ResponsiveNav = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')}; /* Only display when isOpen is true */
  flex-direction: column; /* Stack items vertically */
  position: absolute; 
  background-color: ${darkTheme.headerBackground}; 
  width: 100%; 
  top: 80px; 
  left: 0;
  z-index: 10;
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <HeaderContainer className="navigation-header">
      <LogoContainer>
        <NavLink to="/"><Logo src={logo} alt="logo" /></NavLink>
      </LogoContainer>
      <NavigationItems id="navigation-items">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/categories">Categories</NavLink>
        <NavLink to="/must-sees">Must Sees</NavLink>
      </NavigationItems>
      <HamburgerMenu onClick={toggleMenu}>
        {isOpen ? <CloseIcon style={{ fontSize: '30px' }} /> : <MenuIcon style={{ fontSize: '30px' }} />}
      </HamburgerMenu>
      <ResponsiveNav isOpen={isOpen}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/categories">Categories</NavLink>
        <NavLink to="/must-sees">Must Sees</NavLink>
      </ResponsiveNav>
    </HeaderContainer>
  );
};

export default Header;
