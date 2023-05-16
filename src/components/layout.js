import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { container, heading, navLinks, navLinkItem, navLinkText, siteTitle } from './layout.module.css';
import useSiteMetadata  from "../hooks/useSiteMetadata"


const Layout = ({ pageTitle, children }) => { // destructuring objects properties
    const data = useSiteMetadata()
    return (
        <div className={container}>
            <header className={siteTitle}>{data.title}</header>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
                    <li className={navLinkItem}><Link to="/about" className={navLinkText}>About</Link></li>
                </ul>
            </nav>
            <h1 className={heading}>{pageTitle}</h1>
            {children}
        </div>
    );
};

export default Layout;