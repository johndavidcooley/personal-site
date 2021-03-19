// Node Modules
import React from 'react';
import styled from 'styled-components';

const HeaderMain = ({className}) => (
  <header className={className}>
    This is the main header.
  </header>
);

export default styled(HeaderMain)`
  background-color: red;
`;