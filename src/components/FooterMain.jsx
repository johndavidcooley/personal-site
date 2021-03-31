// Node Modules
import React from 'react';
import styled from 'styled-components';

// Icons
import { FaRegEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';

// Style
import { above } from '../style/design-system';

const FooterMain = ({className}) => (
  <footer className={className}>
    <div className="wrapper">
    <div className="copyright">&copy; 2021 John David Cooley</div>
      <div className="contact">
        <a href="mailto:johndavidcooley@gmail.com">
          <FaRegEnvelope />
        </a>
        <a href="tel:3522090733">
          <MdPhoneIphone />
        </a>
        <a href="https://github.com/johndavidcooley" rel="noopener noreferrer" target="_blank">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/jdcooley" rel="noopener noreferrer" target="_blank">
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  </footer>
);

export default styled(FooterMain)`
  @keyframes wiggle {
    0%   { transform: rotate(-1deg) scale(1.1); }
    50%   { transform: rotate(1deg) scale(1.1); }
    100%   { transform: rotate(-1deg) scale(1.1); }
  }
  padding: 1rem;
  color: #374075;
  font-size: 1rem;
  font-weight: bold;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border-top: 2px solid #374075;
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    ${above.sm`
      justify-content: space-between;
      flex-wrap: nowrap;
    `}
  }
  .copyright {
    font-size: .75rem;
    order: 1;
    margin-top: .75rem;
    flex: 0 0 50%;
    text-align: center;
    ${above.sm`
      padding-left: 1rem;
      order: 0;
      text-align: left;
    `}

  }
  .contact {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0 0 50%;
    ${above.sm`
      justify-content: flex-end;
    `}
  }
  a {
    font-size: 2rem;
    color: #374075;
    text-decoration: none;
    padding: 12.5px 1rem;
    margin: 0 .25rem;
    border: 2px solid #fff;
    border-radius: 10px;
    vertical-align: middle;
    display: inline;
    transition: all .2s ease-in-out;
    &:first-child {
      svg {
        margin-left: 0;
        transform: translateY(4px);
      }
    }
    &:nth-child(2) {
      svg {
        transform: translateY(3px);
      }
    }
    &:nth-child(3) {
      svg {
        transform: translateY(3px);
      }
    }
    &:last-child {
      svg {
        margin-right: 0;
        transform: translateY(3px);
      }
    }
    &:hover {
      border: 1px solid #374075;
      color: #fff;
      background-color: #374075;
      animation: wiggle .4s infinite;
    }
  }
`;