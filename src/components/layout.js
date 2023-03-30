import * as React from 'react';
import { Link } from 'gatsby';

// destructuring objects properties
const Layout = ({ pageTitle, children }) => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
            <h1>{pageTitle}</h1>
            {children}
        </div>
    );
};

export default Layout;