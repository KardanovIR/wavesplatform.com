import React from 'react';
import LogoIcon from '!svg-react-loader!./logo.svg';

import injectSheet from 'react-jss';

const styles = theme => ({
  logoWrapper: {
    marginTop: 6,
    width: 100,
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing.unit,
      width: 120,
    },
  },
});

const Logo = ({ classes }) => (
  <div className={classes.logoWrapper}>
    <LogoIcon />
  </div>
);

export default injectSheet(styles)(Logo);
