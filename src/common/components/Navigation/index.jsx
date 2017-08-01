import React from 'react';
import styles from './styles';


const Nav = ({ links }) => (
    <ul>
        { links.map((link, index) => (
            <li key={`nav_link_${index}`}>
                <a href={link.href} className={styles.link}>{ link.text }</a>
            </li>
        )) }
    </ul>
)


export default Nav;