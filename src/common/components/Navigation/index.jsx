import React from 'react';
import styles from './styles';

import injectSheet from 'react-jss';

import MobileNav from './lib/mobile';
import DesktopNav from './lib/desktop';

import Icon from 'src/common/components/Icon';


const Nav = ({ classes, links, inverted }) => (
    <nav className={classes.wrapper}>
        <div className={classes.logo}>
            <a href="/">
                 <Icon name="logo" size={40} /> 
            </a>
        </div>

        <div className={classes.navContainer}>

             <div className={classes.mobileNav}>
                <MobileNav inverted links={links} />
            </div>

            <div className={classes.desktopNav}>
                <DesktopNav inverted links={links} />
            </div> 
        </div>
    </nav> 
)


export default injectSheet(styles)(Nav);