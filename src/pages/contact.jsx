// Node Modules
import * as React from 'react';
import styled from 'styled-components';

// Components
import Layout from '../components/layout';
import SEO from '../components/seo';

const Contact = ({className}) => (
  <Layout>
    <SEO title="Contact" />
    <div className={className}>
      Contact me.
    </div>
  </Layout>
)

export default styled(Contact)`

`;