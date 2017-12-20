import React from 'react';

import Panel from 'src/common/components/Panel';
import Typography from 'src/common/components/Typography';

import injectSheet from 'react-jss';

const styles = theme => ({
  panel: {
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 3,
    display: 'flex',
    flex: 1,
  },
  avatar: {
    display: 'inline-block',
    width: theme.spacing.unit * 6,
    height: theme.spacing.unit * 6,
    marginBottom: theme.spacing.unit * 2,
    flex: `0 0 ${theme.spacing.unit * 6}px`,

    '& svg': {
      width: '100%',
      height: '100%',
    },
  },
  children: {
    paddingLeft: theme.spacing.unit * 2,
  },
  [theme.mixins.atMedia('md')]: {
    panel: {
      paddingTop: theme.spacing.unit * 7,
      paddingBottom: theme.spacing.unit * 8,
      display: 'flex',
    },
    avatar: {
      width: theme.spacing.unit * 10,
      height: theme.spacing.unit * 10,
      flex: `0 0 ${theme.spacing.unit * 10}px`,
      marginRight: theme.spacing.unit * 5,
    },
    children: {
      paddingLeft: 0,
      paddingTop: theme.spacing.unit * 2,
    },
  },
});

const Step = ({ avatar, children, classes, inverted }) => (
  <div className={classes.panel}>
    <div className={classes.avatar}>{avatar}</div>
    <Typography inverted={inverted} className={classes.children}>
      {children}
    </Typography>
  </div>
);

export default injectSheet(styles)(Step);
