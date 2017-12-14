import React from 'react';
import injectSheet from 'react-jss';

import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';

import cn from 'classnames';

const styles = theme => ({
  avatarWrapper: {
    flex: `0 0 ${theme.spacing.unit * 7}px`,
    width: theme.spacing.unit * 7,
    height: theme.spacing.unit * 7,

    '& svg': {
      width: '100%',
      height: '100%',
    },
  },
  small: {
    height: theme.spacing.unit * 5,
    width: theme.spacing.unit * 5,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing.unit * 2,
  },
  title: {
    marginLeft: theme.spacing.unit * 2.5,
    paddingTop: theme.spacing.unit * 0.75,
    paddingRight: theme.spacing.unit * 4,
    fontSize: 20,
  },
  [theme.mixins.atMedia('md')]: {
    header: {
      display: ({ twoColumns }) => (twoColumns ? 'flex' : 'block'),
      marginBottom: 0,
    },
    title: {
      fontSize: 19,
      paddingRight: 0,
      marginLeft: ({ twoColumns }) => (twoColumns ? theme.spacing.unit * 2.5 : 0),
      paddingTop: ({ twoColumns }) => (twoColumns ? theme.spacing.unit * 0.75 : 0),
    },
    text: {
      marginLeft: ({ twoColumns, small }) =>
        twoColumns ? (small ? theme.spacing.unit * 8.5 : theme.spacing.unit * 12.5) : 0,
    },
    avatarWrapper: {
      flex: `0 0 ${theme.spacing.unit * 10}px`,
      height: theme.spacing.unit * 10,
      width: theme.spacing.unit * 10,
    },
    small: {
      flex: `0 0 ${theme.spacing.unit * 6}px`,
      height: theme.spacing.unit * 6,
      width: theme.spacing.unit * 6,
    },
  },
});

const AvatarTitleText = ({
  classes,
  className,
  avatar,
  small,
  text,
  title,
  twoColumns,
  inverted,
}) => {
  return (
    <div className={className}>
      <div className={classes.header}>
        <div
          className={cn(classes.avatarWrapper, {
            [classes.small]: small,
          })}
        >
          {avatar}
        </div>
        {!twoColumns && <Margin bottom={2} />}
        <Typography inverted={inverted} className={classes.title} type="display1" tagName="div" cut>
          {title}
        </Typography>
      </div>
      <Typography inverted={inverted} className={classes.text} type="body" tagName="div" cut>
        {text}
      </Typography>
    </div>
  );
};

AvatarTitleText.defaultProps = {
  centered: false,
  twoColumns: false,
};

export default injectSheet(styles)(AvatarTitleText);
