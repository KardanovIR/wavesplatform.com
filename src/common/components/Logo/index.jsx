import React from 'react';
import LogoIcon from '!svg-react-loader!./logo.svg';

import cn from 'classnames';
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

const Logo = ({ classes, className }) => (
  <div className={cn(classes.logoWrapper, className)}>
    <LogoIcon />
  </div>
);

export default injectSheet(styles)(Logo);
