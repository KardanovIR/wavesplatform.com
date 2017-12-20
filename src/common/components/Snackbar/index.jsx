import React from 'react';

import ContentContainer from 'src/common/components/ContentContainer';

import injectSheet from 'react-jss';
import cn from 'classnames';

const styles = theme => ({
  container: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  snackbar: {
    boxSizing: 'border-box',
    position: 'fixed',
    left: 0,
    right: 0,
    zIndex: 100,
    bottom: '0',
    background: '#4f77fc',
    transform: 'translateY(101%)',
    transition: theme.transitions.create(
      'transform',
      theme.transitions.durationLong
    ),
  },
  open: {
    transform: 'translateY(0%)',
  },
  test: {
    height: 100,
  },
  content: {
    position: 'relative',
  },
  close: {
    position: 'absolute',
    height: theme.spacing.unit * 3,
    width: theme.spacing.unit * 3,
    top: -theme.spacing.unit,
    right: -theme.spacing.unit,
    color: theme.palette.grayBlue[300],
    cursor: 'pointer',
    padding: theme.spacing.unit,

    '&:hover': {
      color: theme.palette.gray[50],
    },
  },
});

const Snackbar = ({ classes, open, children }) => (
  <div className={cn(classes.snackbar, { [classes.open]: open })}>
    <ContentContainer className={classes.container}>
      <div className={classes.content}>{children}</div>
    </ContentContainer>
  </div>
);

Snackbar.defaultProps = {
  open: true,
};

export default injectSheet(styles)(Snackbar);
