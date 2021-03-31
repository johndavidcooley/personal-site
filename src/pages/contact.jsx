// Node Modules
import * as React from 'react';
import styled from 'styled-components';

// Components
import Container from '../components/Container';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Contact = ({className}) => (
  <Layout>
    <SEO title="Contact" />
    <div className={className}>
      <Container>
        <h1>Contact me.</h1>
      </Container>
    </div>
  </Layout>
)

export default styled(Contact)`

`;