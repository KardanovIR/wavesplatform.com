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

const INVERTED_SKIN_LINKS = {
  'get-waves': true,
  developers: true,
  leasing: true,
  company: true
};

const isInverted = link => link === undefined || INVERTED_SKIN_LINKS[link];

const Nav = ({ classes, desktopLinks, mobileLinks, activeLink }) => {
  return (
    <nav className={classes.wrapper}>
      <Wrapper>
        <ContentContainer>
          <div className={classes.logo}>
            <a href={url('home')} className={classes.logo}>
              <Logo
                color={isInverted(activeLink) ? '#fff' : '#000'}
                flat={isInverted(activeLink)}
              />
            </a>
          </div>

          <div className={classes.navContainer}>
            <div className={classes.mobileOnly}>
              <MobileNav
                links={mobileLinks}
                activeLink={activeLink}
                inverted={isInverted(activeLink)}
              />
            </div>

            <div className={classes.desktopOnly}>
              <DesktopNav
                links={desktopLinks}
                activeLink={activeLink}
                inverted={isInverted(activeLink)}
              />
            </div>
          </div>
        </ContentContainer>
      </Wrapper>
    </nav>
  );
};

export default injectSheet(styles)(Nav);
