// Node Modules
import * as React from 'react';
import styled from 'styled-components';

// Components
import Container from '../components/Container';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Projects = ({className}) => (
  <Layout>
    <SEO title="Projects" />
    <div className={className}>
      <Container>  
        <h1>Projects</h1>
        <p>Coming soon.</p>
      </Container>
    </div>
  </Layout>
)

export default styled(Projects)`

`;