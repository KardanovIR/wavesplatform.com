import React from 'react';
import styles from './styles';

import injectSheet from 'react-jss';

import MobileNav from './lib/mobile';
import DesktopNav from './lib/desktop';

import Logo from 'src/common/components/Logo';


const Nav = ({ classes, links, activeLink, inverted }) => (
    <nav className={classes.wrapper}>
        <div className={classes.logo}>
            <a href="/" className={classes.logo}>
                <span className={classes.mobileOnly}>
                    <Logo desktop={false} />
                </span>
                <span className={classes.desktopOnly}>
                    <Logo />
                </span>
            </a>
        </div>

        <div className={classes.navContainer}>

            <div className={classes.mobileOnly}>
                <MobileNav inverted links={links} activeLink={activeLink} />
            </div>

            <div className={classes.desktopOnly}>
                <DesktopNav inverted={inverted} links={links} activeLink={activeLink} />
            </div>
        </div>
    </nav>
)


export default injectSheet(styles)(Nav);