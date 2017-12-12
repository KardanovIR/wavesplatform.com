import React from 'react';
import styles from './styles';

import injectSheet from 'react-jss';
import cn from 'classnames';

import Typography from 'src/common/components/Typography';

const DesktopNav = ({ classes, links, activeLink }) => (
  <div>
    {links.map((link, index) => (
      <Typography key={`desktop_nav_link${index}`} tagName="span">
        <a
          href={link.href}
          style={(activeLink==="company"?{color: '#fff'}:{})}
          className={cn(classes.link, { [classes.active]: link.page === activeLink })}
        >
          {link.text}
        </a>
      </Typography>
    ))}
  </div>
);

export default injectSheet(styles)(DesktopNav);
