// Node Modules
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavMain = ({className}) => {

  return (
    <nav className={className}>
      <Link to="#">About</Link>
      <Link to="#">Resume</Link>
      <Link to="#">Projects</Link>
    </nav>
  )
};

export default styled(NavMain)`

`;