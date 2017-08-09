import React from 'react';
import styles from './styles';

import injectSheet from 'react-jss';

import MobileNav from './lib/mobile';
import DesktopNav from './lib/desktop';

import Icon from '../Icon';


const Nav = ({ classes, links }) => (
    <nav className={classes.wrapper}>
        <div className={classes.logo}>
            <a href="/">
                <Icon name="logo" size={40} />
            </a>
        </div>

        <div className={classes.navContainer}>

            <div className={classes.mobileNav}>
                <MobileNav links={links} />
            </div>

            <div className={classes.desktopNav}>
                <DesktopNav links={links} />
            </div>
        </div>
    </nav> 
)


export default injectSheet(styles)(Nav);