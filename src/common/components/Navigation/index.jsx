import React from 'react';
import cx from 'classnames';
import styles from './styles';

import injectSheet from 'react-jss';

import MobileNav from './lib/mobile';
import DesktopNav from './lib/desktop';

import Wrapper from 'src/common/components/Wrapper';
import ContentContainer from 'src/common/components/ContentContainer';
import Logo from 'src/common/components/Logo';

import url from 'src/common/utils/url';

const Nav = ({ classes, desktopLinks, mobileLinks, activeLink }) => {
  return (
    <nav className={cx(classes.wrapper, { [classes.wrapperAnimated]: activeLink === 'home' })}>
      <Wrapper>
        <ContentContainer>
          <div className={classes.logo}>
            <a href={url('home')} className={classes.logo}>
              <Logo
                color={activeLink === undefined ? '#fff' : '#000'}
                flat={activeLink === undefined || activeLink === 'get-waves'}
              />
            </a>
          </div>

          <div className={classes.navContainer}>
            <div className={classes.mobileOnly}>
              <MobileNav links={mobileLinks} activeLink={activeLink} inverted={activeLink === undefined} />
            </div>

            <div className={classes.desktopOnly}>
              <DesktopNav
                links={desktopLinks}
                activeLink={activeLink}
                inverted={activeLink === undefined}
              />
            </div>
          </div>
        </ContentContainer>
      </Wrapper>
    </nav>
  );
};

export default injectSheet(styles)(Nav);
