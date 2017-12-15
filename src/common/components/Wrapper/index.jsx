import React from 'react';

import injectSheet from 'react-jss';
import cn from 'classnames';

const styles = theme => {
  return {
    container: {
      maxWidth: theme.breakpoints.desktop1366,
      margin: '0 auto',
      height: '100%'
    },
  };
};

const Wrapper = ({ classes, children, className }) => (
  <div className={cn(classes.container, className)}>
    {children}
  </div>
);

export default injectSheet(styles)(Wrapper);
