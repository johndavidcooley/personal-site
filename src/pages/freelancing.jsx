// Node Modules
import * as React from 'react';
import styled from 'styled-components';

// Components
import Container from '../components/Container';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Freelancing = ({className}) => (
  <Layout>
    <SEO title="Freelancing" />
    <div className={className}>
      <Container>
        <h1>Freelancing</h1>
        <p>Coming soon.</p>
      </Container>
    </div>
  </Layout>
)

export default styled(Freelancing)`

`;