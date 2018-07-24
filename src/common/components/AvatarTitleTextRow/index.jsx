import React from 'react';
import injectSheet from 'react-jss';
import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';

const avatarStyles = theme => ({
  container: {
    padding: theme.spacing.unit * 4,
    display: 'flex',
  },
  avatar: {
    flexShrink: 1,
  },
  textContainer: {
    marginLeft: theme.spacing.unit * 4,
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'column',
  },
  title: {
    fontWeight: 500,
    width: '100%',
  },
  text: {
    width: '100%',
  },
});

const AvatarTitleTextRow = ({ avatar, title, text, classes, inverted }) => (
  <div className={classes.container}>
    <div className={classes.avatar}>{avatar}</div>
    <div className={classes.textContainer}>
      <div className={classes.title}>
        <Typography inverted={inverted}>{title}</Typography>
      </div>
      <Margin bottom={1} />
      <div className={classes.text}>
        <Typography inverted={inverted}>{text}</Typography>
      </div>
    </div>
  </div>
);

export default injectSheet(avatarStyles)(AvatarTitleTextRow);
