import React from 'react';
import styles from './styles';

import injectSheet from 'react-jss';



const DexktopNav = ({ classes, links }) => (
    <div className={classes.wrapper}>
        {links.map((link, index) => (
            <a
                key={`desktop_nav_link${index}`}
                href={link.href}
                className={classes.link}
            >
                {link.text}
            </a>
        ))}
    </div>
)



export default injectSheet(styles)(DexktopNav);