import React from 'react';
import injectSheet from 'react-jss';
import cx from 'classnames';

import Typography from 'src/common/components/Typography';

const quoteStyles = {
  fontSize: '2em',
  lineHeight: '0.1em',
  verticalAlign: '-0.2em',
};

const styles = theme => ({
  wrapper: {
    display: 'flex',
  },
  avatarWrapper: {
    display: 'none',
    flex: '0 0',
    flexBasis: theme.spacing.unit * 10,
    height: theme.spacing.unit * 10,
    marginRight: theme.spacing.unit * 3,

    background: theme.palette.grayBlue[500],
    borderRadius: '50%',
    overflow: 'hidden',
  },
  quote: {
    color: ({inverted}) => inverted ? theme.palette.gray[0] : theme.palette.gray[800],
  },
  withQuotes: {
    '&:before': {
      ...quoteStyles,
      content: 'open-quote',
      marginRight: '0.25em',
    },
    '&:after': {
      ...quoteStyles,
      content: 'close-quote',
      marginLeft: '0.15em',
    },
  },
  signature: {
    fontWeight: 500,
  },
  [theme.mixins.atMedia('lg')]: {
    avatarWrapper: {
      display: 'block',
    },
  },
});

const Quote = ({ classes, avatar, children, withQuotes, signature, inverted, className}) => (
  <div className={cx(classes.wrapper, className)}>
    {avatar && <div className={classes.avatarWrapper}>{avatar}</div>}
    <div>
      <Typography type="quote" className={cx(classes.quote, {[classes.withQuotes]: withQuotes})} inverted={inverted}>
        {children}
      </Typography>
      {signature && (
        <Typography type="body" className={classes.signature} inverted={inverted}>
          <br />
          &mdash; {signature}
        </Typography>
      )}
    </div>
  </div>
);

Quote.defaultProps = {
  withQuotes: true,
  avatar: null,
};

export default injectSheet(styles)(Quote);
