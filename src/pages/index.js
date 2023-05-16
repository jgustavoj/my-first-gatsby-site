import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { StaticImage } from 'gatsby-plugin-image';


const IndexPage = () => {
  return (
    <Layout pageTitle={"Home Page"}>
      <p>I'm making this by following Gatsby Tutorial.</p>
      <StaticImage
      alt="Chef talking to custsomer in kitchen"
      src="../../src/images/chef.jpg" />
    </Layout>
  )
}

export const Head = () => <Seo title="Home"/>

export default IndexPage

