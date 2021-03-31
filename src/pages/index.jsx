// Node Modules
import * as React from 'react';
import styled from 'styled-components';

// Components
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = ({className}) => (
  <Layout>
    <SEO title="Home" />
    <div className={className}>
      This is John's new personal site. Cool stuff.
      <br/>
      Not seeing much here? I pushed this live on March 31, 2021. More is coming soon.
      {/* Who?
      What?
      When?
      Where?
      Why?
      How? */}
    </div>
  </Layout>
)

export default styled(IndexPage)`
  height: 100vh;
`;