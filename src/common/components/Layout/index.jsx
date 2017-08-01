import React from 'react';
// import styles from './styles';

import Navigation from '../Navigation';

import links from './links';



const Layout = ({ children }) => (
    <div>
        <Navigation links={links} />
        <div>{ children }</div>
        <br/>
        <br/>
        <footer>This is a footer</footer>
    </div>
)


export default Layout;