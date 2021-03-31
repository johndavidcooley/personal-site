// Node Modules
import * as React from 'react';
import styled from 'styled-components';

// Components
import Layout from '../components/layout';
import SEO from '../components/seo';

const Resume = ({className}) => (
  <Layout>
    <SEO title="Resume" />
    <div className={className}>
      Resume
    </div>
  </Layout>
)

export default styled(Resume)`

`;