// Node Modules
import React from 'react';
import styled from 'styled-components';

// Components
import NavMain from './NavMain';

const HeaderMain = ({className}) => (
  <header className={className}>
    This is the main header.
    <NavMain />
  </header>
);

export default styled(HeaderMain)`
  background-color: red;
`;