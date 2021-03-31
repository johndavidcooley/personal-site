// Node Modules
import * as React from 'react';
import styled from 'styled-components';

// Components
import Container from '../components/Container';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Story = ({className}) => (
  <Layout>
    <SEO title="About (The Verbose Version)" />
    <div className={className}>
      <Container>
        <h1>More about me.</h1>
        <p>Coming soon.</p>
      </Container>
    </div>
  </Layout>
)

export default styled(Story)`

`;