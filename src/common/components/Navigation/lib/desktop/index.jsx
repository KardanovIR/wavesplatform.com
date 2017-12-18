import React from 'react';
import styles from './styles';

import injectSheet from 'react-jss';
import cn from 'classnames';

import Typography from 'src/common/components/Typography';

const DesktopNav = ({ classes, links, activeLink, inverted }) => (
  <div>
    {links.map((link, index) => (
      <Typography
        key={`desktop_nav_link${index}`}
        tagName="span"
        inverted={inverted}
      >
        <a
          href={link.href}
          className={cn(classes.link, {
            [classes.active]:
              activeLink !== undefined && link.page === activeLink,
          })}
        >
          {link.text}
        </a>
      </Typography>
    ))}
  </div>
);

export default injectSheet(styles)(DesktopNav);
