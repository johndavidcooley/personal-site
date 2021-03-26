// Node Modules
import * as React from 'react';
import PropTypes from 'prop-types';

// Components
import HeaderMain from './HeaderMain';
import FooterMain from './FooterMain';

// Styles
import GlobalStyle from '../style/Global';

const Layout = ({ children }) => {

  return (
    <>
      <HeaderMain />
      <main>{children}</main>
      <FooterMain />
      <GlobalStyle />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;