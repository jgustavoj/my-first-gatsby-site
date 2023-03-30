import * as React from 'react';
import { Link } from 'gatsby';

const Aboutpage = () => {
    return (
        <main>
            <h1>About Page</h1>
            <Link to="/">Back to Home</Link>
            <p>Hi there! I'm the proud creator of this site, which i built with Gatsby.js.</p>
        </main>
    )
}

export const Head = () =>  <title>About Me</title>

export default Aboutpage;