import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';


const IndexPage = () => {
  return (
    <Layout pageTitle={"Home Page"}>
      <Link to="/about">About</Link>
      <p>I'm making this by following Gatsby Tutorial.</p>
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage

