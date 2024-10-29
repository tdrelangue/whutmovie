// src/components/HomePage.js
import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg"; // Update with the path to your logo image

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full viewport height */
  background-color: #333; /* Background color */
  color: white; /* Text color */
  text-align: center;
`;

const Logo = styled.img`
  width: 200px; /* Adjust logo size as needed */
  margin-bottom: 20px; /* Space below the logo */
  filter: brightness(0) invert(1); /* Change SVG to white */
`;

const Text = styled.p`
  font-size: 18px; /* Font size for the text */
  max-width: 600px; /* Limit text width */
  line-height: 1.5; /* Line height for better readability */
`;

const HomePage = () => {
  return (
    <HomePageContainer>
      <Logo src={logo} alt="Logo" />
      <Text>
        Saturday night, you are looking through Netflix 
        and you have seen all the movies presented to you. 
        If your looking for WhutMovie to view, this website is for you.
        On WhutMovie I share the best movie I've seen, I sort them in explicit categories, 
        I share why they are great and where to find them.
      </Text>
    </HomePageContainer>
  );
};

export default HomePage;
