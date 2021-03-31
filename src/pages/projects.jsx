// Node Modules
import * as React from 'react';
import styled from 'styled-components';

// Components
import Layout from '../components/layout';
import SEO from '../components/seo';

const Projects = ({className}) => (
  <Layout>
    <SEO title="Projects" />
    <div className={className}>
      Projects
    </div>
  </Layout>
)

export default styled(Projects)`

`;