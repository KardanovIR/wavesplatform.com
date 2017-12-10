import React from 'react';

import injectSheet from 'react-jss';
import cn from 'classnames';

const styles = theme => {
  return {
    container: {
      maxWidth: theme.breakpoints.md,
      margin: '0 auto',
      height: '100%',
      padding: theme.spacing.getSpacing(0, 2)
    },
  };
};

const ContentContainer = ({ classes, children, className }) => (
  <div className={cn(classes.container, className)}>
    {children}
  </div>
);

export default injectSheet(styles)(ContentContainer);
