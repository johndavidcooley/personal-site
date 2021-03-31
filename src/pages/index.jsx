// Node Modules
import * as React from 'react';
import styled from 'styled-components';

// Components
import Container from '../components/Container';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = ({className}) => (
  <Layout>
    <SEO title="Home" />
    <div className={className}>
      <Container>
        <h1>This is John's new personal site. Cool stuff.</h1>
        <br/>
        Not seeing much here? I pushed this live on March 31, 2021. More is coming soon.
        {/* Who?
        What?
        When?
        Where?
        Why?
        How? */}
      </Container>
    </div>
  </Layout>
)

export default styled(IndexPage)`
  height: 100vh;
`;