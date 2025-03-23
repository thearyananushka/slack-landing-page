
import React from "react";
import styled from "styled-components";
import heroImage from "../assets/hero-image.png";
import googleIcon from "../assets/google-icon.png"; 

const Hero = () => {
    return (
      <HeroContainer>
        <TopBanner> 
          <strong> Slack is your digital HQ.</strong>  
          Meet the new features keeping teams connected in a work-from-anywhere world. 
          <strong> Let's go → </strong>
        </TopBanner>

        <HeroContent>
          <TextContent>
            <h1>Slack is where the future works</h1>
            <p>Transform the way you work with one place for everyone and everything you need to get stuff done.</p>
            <Buttons>
              <button className="primary">Try for Free</button>
              <GoogleButton>
                <img src={googleIcon} alt="Google Icon" /> 
                Sign up with Google
              </GoogleButton>
            </Buttons>
          </TextContent>
          <ImageContainer>
            <img src={heroImage} alt="Slack Interface" />
          </ImageContainer>
        </HeroContent>
      </HeroContainer>
    );
};

export default Hero;

// Styled Components
const HeroContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

const TopBanner = styled.div`
  background: #4a154b;
  color: white;
  padding: 20px;
  font-size: 17px;
  border-radius: 20px;
  text-align: center;
`;

const HeroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const TextContent = styled.div`
  max-width: 500px;

  h1 {
    font-size: 48px;
    text-align: left;
    color: #1d1c1d;

    @media (max-width: 768px) {
      font-size: 32px;
      text-align: center;
    }
  }

  p {
    font-size: 20px;
    text-align: left;
    margin: 10px 0;
    padding-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 18px;
      text-align: center;
    }
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }

  .primary {
    background: #611f69;
    color: white;
    font-size: 15px;
    padding: 10px 20px;
    border-radius: 14px;
    border: none;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background: #4a154b;
    }

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

const GoogleButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #1a73e8;
  color: white;
  font-size: 15px;
  padding: 10px 20px;
  border-radius: 14px;
  cursor: pointer;
  transition: 0.3s;
  border: none;

  img {
    width: 20px;
    height: 20px;
    background: #fff;
  }

  &:hover {
    background: rgb(74, 7, 244);
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

const ImageContainer = styled.div`
  img {
    max-width: 500px;
    width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;
