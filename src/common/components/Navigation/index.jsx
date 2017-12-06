import React from 'react';
import styles from './styles';

import injectSheet from 'react-jss';

import MobileNav from './lib/mobile';
import DesktopNav from './lib/desktop';

import Wrapper from 'src/common/components/Wrapper';
import Logo from 'src/common/components/Logo';

import url from 'src/common/utils/url';

const Nav = ({ classes, links, activeLink }) => (
  <nav className={classes.wrapper}>
    <Wrapper>
      <div className={classes.logo}>
        <a href={url('home')} className={classes.logo}>
          <Logo />
        </a>
      </div>

      <div className={classes.navContainer}>
        <div className={classes.mobileOnly}>
          <MobileNav links={links} activeLink={activeLink} />
        </div>

        <div className={classes.desktopOnly}>
          <DesktopNav links={links} activeLink={activeLink} />
        </div>
      </div>
    </Wrapper>
  </nav>
);

export default injectSheet(styles)(Nav);
