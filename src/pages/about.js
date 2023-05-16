import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';

const Aboutpage = () => {
    return (
        <Layout pageTitle={"About Me"}>
            <Link to="/">Back to Home</Link>
            <p>Hi there! I'm the proud creator of this site, which i built with Gatsby.js.</p>
            <p>This is another line </p>
        </Layout>
    )
}

export const Head = () =>  <Seo title="About Me" />

export default Aboutpage;