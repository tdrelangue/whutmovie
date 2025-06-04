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
        <strong>
          Saturday night, scrolling through Netflix, 
          and you've already seen everything they’re showing?
        </strong> 
        <br/><br/>

        If you're hunting for what to watch next, WhutMovie has you covered! 
        Here, I showcase the best movies I’ve watched, organised into clear categories.
        <br/>
        You'll get my take on why they're worth your time
        <br/> 
        —in a quirky, no-nonsense way—
        <br/> 
        plus, where to stream them.
      </Text>
    </HomePageContainer>
  );
};

export default HomePage;
