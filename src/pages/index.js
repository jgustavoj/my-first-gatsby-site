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
      alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at camera"
      src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large" />
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage

