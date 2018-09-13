import React from 'react';
import { assoc } from 'ramda';
import cn from 'classnames';
import injectSheet from 'react-jss';
import { FormattedMessage } from 'react-intl';

import {
  cookiesAllowClick,
  cookiesDisableClick,
  cookiesResetClick,
} from 'src/public/actions';
import { connect } from 'react-redux';

import { COOKIE_CONSENT_FIELD } from 'src/common/constants';
import ContentContainer from 'src/common/components/ContentContainer';
import Typography from 'src/common/components/Typography';
import Link from 'src/common/components/Link';
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
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 2,

    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'center',
    [theme.breakpoints.down('tablet')]: {
      ['& *']: {
        fontSize: '16px',
      },
    },
    [theme.breakpoints.down('sm')]: {
      ['& *']: {
        fontSize: '11px',
      },
    },
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

  rightColumn: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
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
});

const open = assoc('open', true);
const hide = assoc('open', false);

@connect(
  undefined,
  {
    onAllowClick: cookiesAllowClick,
    onDisableClick: cookiesDisableClick,
    onResetClick: cookiesResetClick,
  }
)
class CookiesSnackbarContainer extends React.Component {
  state = {
    open: false,
  };
  handleResetClick = () => {
    this.props.onResetClick();
    this.setState(open);
  };

  componentDidMount() {
    this.CookieConsentChecker = window[COOKIE_CONSENT_FIELD];
    this.CookieConsentChecker.onReset = this.handleResetClick;

    if (this.CookieConsentChecker && !this.CookieConsentChecker.handled)
      this.setState(open);
  }
  handleAllowAllClick = () => {
    this.props.onAllowClick();
    this.CookieConsentChecker.grantConsent();
    this.setState(hide);
  };
  handleEssentialsOnlyClick = () => {
    this.props.onDisableClick();
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
    <FormattedMessage
      id="cookieConsent.text"
      defaultMessage="According to our {policy}, this website uses 🍪cookies to improve functionality and performance. Some cookies are essential for the operation of the website, you can turn them off only via browser settings. Other cookies can be disabled by this tool."
      values={{
        policy: (
          <Link
            inverted
            noIcon
            className={classes.policyLink}
            target="_blank"
            href={fileUrl(FILES.cookies_policy)}
          >
            Policy
          </Link>
        ),
      }}
    />
  </Typography>
);
const Buttons = ({ classes, onAllowClick, onEssentialsOnlyClick }) => (
  <div className={classes.rightColumn}>
    <Link
      inverted
      className={classes.disallowLink}
      onClick={onEssentialsOnlyClick}
    >
      <FormattedMessage id="cookieConsent.disable" defaultMessage="DISABLE" />
    </Link>
    <Link inverted className={classes.allowAllLink} onClick={onAllowClick}>
      <FormattedMessage id="cookieConsent.allow" defaultMessage="ALLOW ALL" />
    </Link>
  </div>
);

export default injectSheet(styles)(CookiesSnackbarContainer);
