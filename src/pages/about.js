import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const Aboutpage = () => {
    return (
        <Layout pageTitle={"About Me"}>
            <Link to="/">Back to Home</Link>
            <p>Hi there! I'm the proud creator of this site, which i built with Gatsby.js.</p>
        </Layout>
    )
}

export const Head = () =>  <title>About Me</title>

export default Aboutpage;