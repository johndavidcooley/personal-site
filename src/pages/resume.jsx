// Node Modules
import * as React from 'react';
import styled from 'styled-components';

// Components
import Container from '../components/Container';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Resume = ({className}) => (
  <Layout>
    <SEO title="Resume" />
    <div className={className}>
      <Container>
        <h1>Resume</h1>
        <p>Coming soon.</p>
      </Container>
    </div>
  </Layout>
)

export default styled(Resume)`
  height: 300vh;
`;