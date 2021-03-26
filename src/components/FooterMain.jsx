// Node Modules
import React from 'react';
import styled from 'styled-components';

const FooterMain = ({className}) => (
  <footer className={className}>
    This is the main footer.
  </footer>
);

export default styled(FooterMain)`
  background-color: dodgerblue;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 5rem;
`;