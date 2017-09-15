import React from 'react';

import Wrapper from '../Wrapper';
import Navigation from '../Navigation';
import Footer from '../Footer';

import links from './links';

import injectSheet from 'react-jss';


const styles = theme => ({
    root: {
        overflowX: 'hidden'
    },
    navigationWrapper: {
        marginBottom: theme.spacing.unit * 5
    },
    [theme.mixins.atMedia('md')]: {
        navigationWrapper: {
            marginBottom: theme.spacing.unit * 10
        },
    },
    [theme.mixins.atMedia('lg')]: {
        navigationWrapper: {
            marginBottom: theme.spacing.unit * 15
        },
    }
})



const Layout = ({
    children,
    classes,
    activeLink,
    hideFooter
}) => (
    <Wrapper>
        <div className={classes.navigationWrapper}>
            <Navigation links={links} activeLink={activeLink} />
        </div>
        <div>{children}</div>
        { !hideFooter && <Footer links={links} /> }
    </Wrapper>
)


export default injectSheet(styles)(Layout);