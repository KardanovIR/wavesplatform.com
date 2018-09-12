import React from 'react';

import Wrapper from '../Wrapper';
import Navigation from '../Navigation';

import Footer from '../Footer';
import PopupTelegram from 'src/common/containers/PopupTelegram';
import SnackbarCookies from 'src/public/containers/SnackbarCookies';
import { DESKTOP_LINKS, MOBILE_LINKS } from './links';

import injectSheet from 'react-jss';

const styles = theme => ({
  root: {
    overflowX: 'hidden',
  },
  navigationWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 300,
  },
  body: {
    backgroundColor: ({ inverted }) => inverted && theme.palette.gray[800],
  },
  ftwrapper: {
    backgroundColor: ({ darkFooter }) =>
      darkFooter ? theme.palette.gray[9999] : 'transparent',
  },
});

const Layout = ({
  children,
  classes,
  inverted,
  activeLink,
  hideFooter,
  hideCredentials = false,
  showCookiesSnackbar = true,
}) => (
  <div className={classes.body}>
    <div className={classes.navigationWrapper}>
      <Navigation
        desktopLinks={DESKTOP_LINKS}
        mobileLinks={MOBILE_LINKS}
        activeLink={activeLink}
      />
    </div>
    {children}
    <PopupTelegram page={activeLink} />
    <SnackbarCookies show={showCookiesSnackbar} />
    <div className={classes.ftwrapper}>
      <Wrapper>
        {!hideFooter && (
          <Footer
            links={MOBILE_LINKS}
            hideCredentials={hideCredentials}
            inverted={inverted}
          />
        )}
      </Wrapper>
    </div>
  </div>
);

export default injectSheet(styles)(Layout);
