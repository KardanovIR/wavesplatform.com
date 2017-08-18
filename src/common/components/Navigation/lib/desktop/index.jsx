import React from 'react';
import styles from './styles';

import injectSheet from 'react-jss';

import Typography from 'src/common/components/Typography';



const DexktopNav = ({ classes, links, inverted }) => (
    <div>
        {links.map((link, index) => (
            <Typography key={`desktop_nav_link${index}`} tagName="span" inverted>
                <a 
                    href={link.href}
                    className={classes.link}
                >
                    {link.text}
                </a>
            </Typography>
            
        ))}
    </div>
)



export default injectSheet(styles)(DexktopNav);