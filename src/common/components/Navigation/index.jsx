import React from 'react';
import styles from './styles';

import injectSheet from 'react-jss';


const Nav = ({ classes, links }) => (
    <ul>
        { links.map((link, index) => (
            <li key={`nav_link_${index}`}>
                <a href={link.href} className={classes.link}>{ link.text }</a>
            </li>
        )) }
    </ul>
)


export default injectSheet(styles)(Nav);