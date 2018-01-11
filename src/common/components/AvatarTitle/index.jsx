import React from 'react';
import injectSheet from 'react-jss';

import Typography from 'src/common/components/Typography';

const styles = theme => ({
  title: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  titleText: {
    fontSize: 16,
  },
  icon: {
    height: theme.spacing.unit * 11,
    flex: [0, 0, `${theme.spacing.unit * 5}px`],
    marginRight: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 4,
  },
  [theme.breakpoints.up('md')]: {
    titleText: {
      fontSize: 23,
    },
  },
});

const AvatarTitle = ({ classes, avatar, title, titleType }) => {
  return (
    <div className={classes.title}>
      <div className={classes.icon}>{avatar}</div>
      <Typography className={classes.titleText} type={titleType}>
        {title}
      </Typography>
    </div>
  );
};

AvatarTitle.defaultProps = {
  titleType: 'display1',
};

export default injectSheet(styles)(AvatarTitle);
