import React from 'react';
// import styles from './styles';

import ThemeProvider from '../ThemeProvider';

import Wrapper from '../Wrapper';
import Navigation from '../Navigation';

import links from './links';



const Layout = ({ children }) => (
    <ThemeProvider>
        <Wrapper>
            <Navigation links={links} />
            <br />
            <br />
            <div>{children}</div>
            <br />
            <br />
            <footer>This is a footer</footer>
        </Wrapper>
    </ThemeProvider>
)


export default Layout;