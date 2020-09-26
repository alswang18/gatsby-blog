import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello.</h1>
      <h2>I'm Alec Wang, a full-stack developer and data engineer living between Vancouver and Manila.</h2>
      <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
    </Layout>
  )
}

export default IndexPage