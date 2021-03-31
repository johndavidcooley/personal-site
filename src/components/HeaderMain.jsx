// Node Modules
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

// Components
import NavMain from './NavMain';
import NavMobile from './NavMobile';

const HeaderMain = ({className}) => (
  <header className={className}>
    <Link to="/">John David Cooley</Link>
    <NavMobile />
    <NavMain />
  </header>
);

export default styled(HeaderMain)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #374075;
  a {
    color: #fff;
    text-decoration: none;
  }
`;