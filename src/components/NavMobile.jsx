// Node Modules
import React, { useState} from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

// Icons
import { FaBars, FaTimes } from 'react-icons/fa';

// Style
import { above } from '../style/design-system';

const NavMobile = ({className}) => {
  
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNavOpen = () => setMobileNavOpen(!mobileNavOpen);

  return (
    <div className={className}>
      <button className="btn pointer no-outline" aria-label="Open mobile navigation" onClick={toggleMobileNavOpen}>
        {!mobileNavOpen ? <FaBars /> : <FaTimes />}
      </button>
      <div className={mobileNavOpen ? 'nav-wrapper open' : 'nav-wrapper'}>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </div>
  );
}

export default styled(NavMobile)`
  display: block;
  ${above.sm`
    display: none;
  `}
  button {
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    svg {
      fill: #fff;
    }
  }
  .nav-wrapper {
    position: absolute;
    top: 50px;
    bottom: 0;
    left: 0;
    max-width: 0;
    width: 100%;
    background-color: red;
    transition: max-width .5s ease-in-out;
    overflow: hidden;
    &.open {
      max-width: 100vw;
    }
  }
`;