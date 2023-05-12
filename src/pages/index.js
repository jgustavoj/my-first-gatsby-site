import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';


const IndexPage = () => {
  return (
    <Layout pageTitle={"Home Page"}>
      <Link to="/about">About</Link>
      <p>I'm making this by following Gatsby Tutorial.</p>
      <StaticImage
      alt="Chef talking to custsomer in kitchen"
      src="../../src/images/chef.jpg" />
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage

