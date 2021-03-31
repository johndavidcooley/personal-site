// Node Modules
import React from 'react';
import styled from 'styled-components';

// Icons
import { FaRegEnvelope, FaGithub } from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';

const FooterMain = ({className}) => (
  <footer className={className}>
    <span>&copy; 2021 John David Cooley</span>
    <span>
    <FaRegEnvelope />
    <FaGithub />
    <MdPhoneIphone />
    </span>
  </footer>
);

export default styled(FooterMain)`
  background-color: #d9c5a6;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 5rem;
`;