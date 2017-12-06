import React from 'react';

import Wrapper from '../Wrapper';
import Navigation from '../Navigation';
import Footer from '../Footer';
// import SnackbarStressTest from 'src/common/components/SnackbarStressTest';

import links from './links';

import injectSheet from 'react-jss';

const styles = () => ({
  root: {
    overflowX: 'hidden',
  },
  navigationWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 300
  },
});

const Layout = ({
  children,
  classes,
  activeLink,
  hideFooter,
  // hideSnackbar,
}) => (
  <div>
    <div className={classes.navigationWrapper}>
      <Navigation links={links} activeLink={activeLink} />
    </div>
    {children}
    <Wrapper>
      {!hideFooter && <Footer links={links} />}
      {/* {!hideSnackbar && <SnackbarStressTest />} */}
    </Wrapper>
  </div>
);

export default injectSheet(styles)(Layout);
