import React from 'react';

import Wrapper from '../Wrapper';
import Navigation from '../Navigation';

import links from './links';

import injectSheet from 'react-jss';


const styles = {
    root: {
        overflowX: 'hidden'
    }
}


const Layout = ({ children }) => (
    <div>
        <Wrapper>
            <Navigation links={links} />
            <br />
            <br />
            <div>{children}</div>
            <br />
            <br />
        </Wrapper>
        <footer style={{ background: '#acacac' }}>
            <br />
            <br />
            This is a footer
            <br />
            <br />
        </footer>
    </div>
)


export default injectSheet(styles)(Layout);