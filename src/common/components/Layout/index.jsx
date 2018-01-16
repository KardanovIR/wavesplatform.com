import React from 'react';

import Wrapper from '../Wrapper';
import Navigation from '../Navigation';

import Footer from '../Footer';
import SnackbarCta from 'src/common/components/SnackbarCta';

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
    backgroundColor: ({ darkFooter }) => darkFooter ? theme.palette.gray[9999] : 'transparent',
  },
});

const Layout = ({
  children,
  classes,
  activeLink,
  hideFooter,
  hideSnackbar,
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
    <div className={classes.ftwrapper}>
      <Wrapper>
        {!hideFooter && <Footer links={MOBILE_LINKS} />}
        {!hideSnackbar && (
          <SnackbarCta
            text="Join our Waves community Telegram channel 🏄"
            buttonText="JOIN"
          />
        )}
      </Wrapper>
    </div>
  </div>
);

export default injectSheet(styles)(Layout);
