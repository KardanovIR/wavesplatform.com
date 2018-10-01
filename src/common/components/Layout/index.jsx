import React from 'react';
import { identity } from 'ramda';

import Wrapper from '../Wrapper';
import Navigation from '../Navigation';

import Footer from 'src/common/containers/Footer';
import PopupTelegram from 'src/common/containers/PopupTelegram';
import SnackbarCookies from 'src/public/containers/SnackbarCookies';
import { DESKTOP_LINKS, MOBILE_LINKS } from './links';

// patching store to separate common and page-specific state
import StorePatch from 'src/common/components/StorePatch';

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

const pageSelector = s => s.page;
const commonSelector = s => s.common;

const Layout = ({
  children,
  classes,
  inverted,
  activeLink,
  hideFooter,
  hideCredentials = false,
}) => (
  <div className={classes.body}>
    <div className={classes.navigationWrapper}>
      <Navigation
        desktopLinks={DESKTOP_LINKS}
        mobileLinks={MOBILE_LINKS}
        activeLink={activeLink}
      />
    </div>

    {/* children component store is page-specific */}
    <StorePatch selector={pageSelector} wrapper={identity}>
      {children}
    </StorePatch>

    <PopupTelegram page={activeLink} />

    {/* cookies store is common between pages */}
    <StorePatch selector={commonSelector} wrapper={identity}>
      <SnackbarCookies />
    </StorePatch>

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
