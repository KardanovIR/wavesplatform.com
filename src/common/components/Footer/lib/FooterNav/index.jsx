import React from 'react';
import styles from './styles';

import injectSheet from 'react-jss';

import Typography from 'src/common/components/Typography';
import Link from 'src/common/components/Link';



const FooterNav = ({ classes, links }) => (
    <div>
        {links.map((link, index) => (
            <Typography key={`desktop_nav_link${index}`} tagName="span" color="gray-50">
                <a
                    key={`desktop_nav_link${index}`}
                    href={link.href}
                    className={classes.link}
                >
                    {link.text}
                </a>
            </Typography>
        ))}
    </div>
)



export default injectSheet(styles)(FooterNav);