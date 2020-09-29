import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head'
const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home"/>
      <h1>Hey welcome to my corner!.</h1>
      <h2>I'm Alec Wang, a computer scientist excited about data products and open to tech opportunities in North America and Asia-Pacific.</h2>
      <p>Need a project done or want to collaborate? <Link to="/contact">Contact me.</Link></p>
    </Layout>
  )
}

export default IndexPage