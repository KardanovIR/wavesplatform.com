import React from 'react';
import injectSheet from 'react-jss';

import Typography from 'src/common/components/Typography';

const styles = theme => ({
  title: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    height: theme.spacing.unit * 6,
    width: theme.spacing.unit * 6,
    flex: [0, 0, `${theme.spacing.unit * 6}px`],
    marginRight: theme.spacing.unit * 2,
    '& svg': {
      width: '100%',
      height: '100%',
    }
  },
  [theme.breakpoints.up('md')]: {
    title: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    icon: {
      height: theme.spacing.unit * 11,
      width: theme.spacing.unit * 11,
      marginBottom: theme.spacing.unit * 4,
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
