import React from 'react';
import styles from './styles';

import injectSheet from 'react-jss';
import cn from 'classnames';

import Typography from 'src/common/components/Typography';



const DexktopNav = ({ classes, links, activeLink }) => (
    <div>
        {links.map((link, index) => (
            <Typography key={`desktop_nav_link${index}`} tagName="span" inverted>
                <a 
                    href={link.href}
                    className={cn(classes.link, { [classes.active]: link.text === activeLink })}
                >
                    {link.text}
                </a>
            </Typography>
        ))}
    </div>
)



export default injectSheet(styles)(DexktopNav);