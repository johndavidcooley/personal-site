// Node Modules
import * as React from 'react';
import styled from 'styled-components';

// Components
import Container from '../components/Container';
import Layout from '../components/layout';
import SEO from '../components/seo';

const AboutPage = ({className}) => (
  <Layout>
    <SEO title="About" />
    <div className={className}>
      <Container>
        <h1>About</h1>
        <p>Coming soon.</p>
      </Container>
    </div>
  </Layout>
)

export default styled(AboutPage)`

`;