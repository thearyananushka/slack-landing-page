

import React, { useState } from "react";
import styled from "styled-components";
import foxLogo from "../assets/fox.png";
import lonelyPlanetLogo from "../assets/lonelyplanet.png";
import intuitLogo from "../assets/intuit.png";
import carvanaLogo from "../assets/carvana.png";
import kivaLogo from "../assets/kiva.png";
import targetLogo from "../assets/target.jpg";
import devaLogo from "../assets/deva.png";
import videoThumbnail from "../assets/video-thumbnail.jpg";

const BrandsSection = () => {
  const [showCookies, setShowCookies] = useState(true);

  return (
    <Container>
      {/* Logos */}
      <BrandLogos>
        <img src={foxLogo} alt="Fox" />
        <img src={lonelyPlanetLogo} alt="Lonely Planet" />
        <img src={intuitLogo} alt="Intuit" />
        <img src={carvanaLogo} alt="Carvana" />
        <img src={kivaLogo} alt="Kiva" />
        <img src={targetLogo} alt="Target" />
        <img src={devaLogo} alt="Deva" />
      </BrandLogos>

      {/* Content Section */}
      <ContentWrapper>
        <TextSection>
          <h2>Now is your moment to build a better tomorrow</h2>
          <p>
            We've seen what the future can be. Now it's time to decide what it will be.
          </p>
        </TextSection>

        {/* Video Placeholder */}
        <VideoWrapper>
          <img src={videoThumbnail} alt="Video Thumbnail" />
          <PlayButton>▶</PlayButton>
        </VideoWrapper>
      </ContentWrapper>

      {/* Cookie Popup */}
      {showCookies && (
        <CookiePopup>
          <CloseButton onClick={() => setShowCookies(false)}>✖</CloseButton>
          <p>
            This website uses cookies to enhance user experience and analyze performance.
            More Info
          </p>
          <AcceptButton>ACCEPT ALL COOKIES</AcceptButton>
          <ChatBubble>👋 Hey there! Want to know something cool?</ChatBubble>
        </CookiePopup>
      )}
    </Container>
  );
};

export default BrandsSection;

// Styled Components
const Container = styled.div`
  background: #fdf6f2;
  padding: 50px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 30px;
  }
`;

const BrandLogos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 100px;
  margin-bottom: 40px;

  img {
    height: 60px;
    max-width: 100px;
  }

  @media (max-width: 768px) {
    gap: 10px;
    img {
      height: 35px;
      max-width: 80px;
    }
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  max-width: 1000px;
  margin: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 30px;
  }
`;

const TextSection = styled.div`
  text-align: left;
  max-width: 400px;

  h2 {
    font-size: 28px;
    font-weight: bold;
    color: #1d1c1d;
  }

  p {
    font-size: 16px;
    color: #555;
  }

  @media (max-width: 768px) {
    text-align: center;
    h2 {
      font-size: 24px;
    }
  }
`;

const VideoWrapper = styled.div`
  position: relative;

  img {
    width: 300px;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    img {
      width: 90%;
    }
  }
`;

const PlayButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #4a154b;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 20px;
  border-radius: 50%;
  cursor: pointer;
`;

const CookiePopup = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: white;
  padding: 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  max-width: 300px;
  text-align: left;

  @media (max-width: 768px) {
    width: 90%;
    right: 5%;
    bottom: 10px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 10px;
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

const AcceptButton = styled.button`
  background: #611f69;
  color: white;
  padding: 8px;
  border: none;
  width: 100%;
  margin-top: 10px;
  cursor: pointer;
`;

const ChatBubble = styled.div`
  background: #fdf6f2;
  color: black;
  padding: 10px;
  border-radius: 20px;
  margin-top: 10px;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 5px;
`;
