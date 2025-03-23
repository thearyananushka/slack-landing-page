
import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import slackLogo from "../assets/slack.png"; 

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Nav>
      {/* Logo */}
      <Logo>
        <img src={slackLogo} alt="Slack Logo" />
      </Logo>

      {/* Hamburger Icon for Mobile */}
      <MobileMenuIcon onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </MobileMenuIcon>

      {/* Navigation Links */}
      <NavLinks className={isMobileMenuOpen ? "active" : ""}>
        <Dropdown
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <a href="#">Product ▼</a>
          {isDropdownOpen && (
            <DropdownMenu>
              <li><a href="#">Features</a></li>
              <li><a href="#">Integrations</a></li>
              <li><a href="#">Solutions</a></li>
            </DropdownMenu>
          )}
        </Dropdown>
        <a href="#">Enterprise</a>
        <a href="#">Resources</a>
        <a href="#">Pricing</a>
      </NavLinks>

      {/* Search Bar */}
      <SearchBar>
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Search..." />
      </SearchBar>

      {/* Buttons */}
      <Buttons>
        <button>Sign In</button>
        <button>Talk to Sales</button>
        <button className="cta">Try for Free</button>
      </Buttons>
    </Nav>
  );
};

export default Navbar;

// Styled Components
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 50px;
  background: #fff;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 15px 20px;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  
  img {
    width: 100px;
    height: auto;
  }
`;

/* Hamburger Icon */
const MobileMenuIcon = styled.div`
  display: none;
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;

  a {
    text-decoration: none;
    color: #1d1c1d;
    font-size: 17px;
    font-weight: 500;
    position: relative;
    transition: all 0.3s ease-in-out;
    
    &:hover::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -2px;
      width: 100%;
      height: 2px;
      background: #4a154b;
      transition: width 0.3s ease-in-out;
    }
  }

  @media (max-width: 768px) {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    background: white;
    width: 100%;
    padding: 20px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    
    &.active {
      display: flex;
    }
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background: #f3f3f3;
  border-radius: 25px;
  padding: 5px 12px;
  width: 250px;
  position: relative;

  .search-icon {
    color: #888;
    font-size: 16px;
    margin-right: 8px;
  }

  input {
    width: 100%;
    border: none;
    background: transparent;
    outline: none;
    font-size: 16px;
    padding: 5px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 10px;
  
  button {
    padding: 8px 16px;
    border: 2px solid #611f69;
    border-radius: 15px;
    color: #611f69;
    cursor: pointer;
    background: none;
    font-size: 16px;
    font-weight: 500;

     &:hover {
      background: #4a154b;
      color: #fff;
    }
  }

  .cta {
    background: #611f69;
    color: white;
    border-radius: 14px;
    padding: 10px 18px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    
    button {
      width: 100%;
      margin-top: 10px;
    }
  }
`;

// Dropdown Styling
const Dropdown = styled.div`
  position: relative;
  a {
    display: block;
  }
`;

const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  list-style: none;
  padding: 10px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  min-width: 150px;
  overflow: hidden;

  li {
    padding: 8px 15px;
    transition: background 0.3s ease-in-out;
    
    &:hover {
      background: #4a154b;
    }
    
    a {
      color: #1d1c1d;
      font-size: 15px;
      display: block;
      text-decoration: none;
      transition: color 0.3s ease-in-out;
    }

    &:hover a {
      color: white;
    }
  }
`;
