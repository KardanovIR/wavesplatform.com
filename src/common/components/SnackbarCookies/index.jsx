import React from 'react';
import { assoc } from 'ramda';

import { COOKIE_CONSENT_FIELD } from 'src/common/constants';

import ContentContainer from 'src/common/components/ContentContainer';
import Typography from 'src/common/components/Typography';
import Link from 'src/common/components/Link';
import injectSheet from 'react-jss';
import cn from 'classnames';
import { fileUrl, FILES } from 'src/common/utils/url';
const styles = theme => ({
  text: {
    marginBottom: theme.spacing.unit,
    textAlign: 'justify',
    [theme.breakpoints.up('md')]: {
      marginBottom: 0,
    },
  },
  container: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,

    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  allowAllLink: {
    color: theme.palette.gray[0],
    padding: '5px',
    paddingRight: 0,
    display: 'inline-block',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  disallowLink: {
    padding: '5px',
    display: 'inline-block',
    marginRight: theme.spacing.unit * 2,
  },
  policyLink: {
    color: theme.palette.gray[0],
    textDecoration: 'underline',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  manageLink: {
    size: '70%',
  },
  rightColumn: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    textAlign: 'center',
  },
  [theme.breakpoints.down('tablet')]: {
    container: {
      ['& *']: {
        fontSize: '3vw !important',
      },
    },
  },
  blockWithTextCenter: {
    display: 'block',
    textAlign: 'center',
  },
  snackbar: {
    boxSizing: 'border-box',
    position: 'fixed',
    left: 0,
    right: 0,
    zIndex: 100,
    bottom: '-1px',
    background: '#4f77fc',
    transform: 'translateY(1111%)',
    transition: theme.transitions.create(
      'transform',
      theme.transitions.durationLong
    ),
    maxHeight: '35%',
  },
  open: {
    transform: 'translateY(0%)',
  },
  content: {
    position: 'relative',
  },
  second: {
    background: '#486fef',
  },
  test: {
    width: '100%',
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

const open = assoc('open', true);
const hide = assoc('open', false);

class CookiesSnackbarContainer extends React.Component {
  state = {
    open: false,
  };
  componentDidMount() {
    this.CookieConsentChecker = window[COOKIE_CONSENT_FIELD];
    if (this.CookieConsentChecker && !this.CookieConsentChecker.handled)
      this.setState(open);
  }
  handleAllowAllClick = () => {
    this.CookieConsentChecker.grantConsent();
    this.setState(hide);
  };
  handleEssentialsOnlyClick = () => {
    this.CookieConsentChecker.withdrawConsent();
    this.setState(hide);
  };
  render() {
    const { classes } = this.props;
    return (
      <div
        className={cn(classes.snackbar, { [classes.open]: this.state.open })}
      >
        <ContentContainer className={classes.container}>
          <Text classes={classes} />
          <Buttons
            classes={classes}
            onAllowClick={this.handleAllowAllClick}
            onEssentialsOnlyClick={this.handleEssentialsOnlyClick}
          />
        </ContentContainer>
      </div>
    );
  }
}

const Text = ({ classes }) => (
  <Typography inverted className={classes.text}>
    According to our{' '}
    <Link
      inverted
      noIcon
      className={classes.policyLink}
      target="_blank"
      href={fileUrl(FILES.cookies_policy)}
    >
      Policy
    </Link>
    , this website uses 🍪cookies to improve functionality and performance. Some
    cookies are essential for the operation of the website, other can be
    disabled by this tool.
  </Typography>
);
const Buttons = ({ classes, onAllowClick, onEssentialsOnlyClick }) => (
  <div className={classes.rightColumn}>
    <Link
      inverted
      className={classes.disallowLink}
      onClick={onEssentialsOnlyClick}
    >
      DISABLE
    </Link>
    <Link inverted className={classes.allowAllLink} onClick={onAllowClick}>
      ALLOW ALL
    </Link>
  </div>
);

export default injectSheet(styles)(CookiesSnackbarContainer);
