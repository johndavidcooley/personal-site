// Node Modules
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

// Style
import { above } from '../style/design-system';

const NavMain = ({className}) => {

  return (
    <nav className={className}>
      <Link to="/about">About</Link>
      <Link to="/resume">Resume</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  )
};

export default styled(NavMain)`
  display: none;
  ${above.sm`
    display: block;
  `}
  a {
    color: #fff;
    text-decoration: none;
    margin: 0 1rem;
    &:last-child {
      margin-right: 0;
    }
  }
`;