import React from 'react';

import injectSheet from 'react-jss';
import cn from 'classnames';

const styles = theme => {
  return {
    container: {
      maxWidth: theme.breakpoints.lg,
      margin: '0 auto',
      height: '100%'
    },
    content: {
      height: '100%'
    }
  };
};

const Wrapper = ({ classes, children, className }) => (
  <div className={cn(classes.container, className)}>
    <div className={classes.content}>{children}</div>
  </div>
);

export default injectSheet(styles)(Wrapper);
