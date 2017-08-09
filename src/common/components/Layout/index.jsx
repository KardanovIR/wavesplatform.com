import React from 'react';

import Wrapper from '../Wrapper';
import Navigation from '../Navigation';
import Footer from '../Footer';

import links from './links';

import injectSheet from 'react-jss';


const styles = {
    root: {
        overflowX: 'hidden'
    }
}


const Layout = ({ children }) => (
    <Wrapper>
        <Navigation links={links} />
        <div>{children}</div>
        <Footer links={links} />
    </Wrapper>
)


export default injectSheet(styles)(Layout);