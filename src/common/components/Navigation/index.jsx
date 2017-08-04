import React from 'react';
import styles from './styles';

import injectSheet from 'react-jss';

import MobileNav from './lib/mobile';


const Nav = ({ classes }) => (
    <nav>
        <div className={classes.logo}>L</div>

        <div className={classes.navContainer}>

            <div className={classes.mobileNav}>
                <MobileNav />
            </div>
        </div>
    </nav> 
)


export default injectSheet(styles)(Nav);