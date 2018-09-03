import React from 'react';
import { pathEq, ifElse, assoc } from 'ramda';

import ContentContainer from 'src/common/components/ContentContainer';
import Typography from 'src/common/components/Typography';
import Link from 'src/common/components/Link';
import { Col } from 'src/common/components/Grid';
import injectSheet from 'react-jss';
import cn from 'classnames';

const styles = theme => ({
  container: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rightColumn: {
    display: 'flex',
    justifyContent: 'center',
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
    maxHeight: '30%',
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

const Statuses = {
  Light: 1,
  Full: 2,
};
const isFullyOpened = pathEq(['status'], Statuses.Full);

/* prettier-ignore */
const getLinkText = ifElse(
  isFullyOpened,
  () => 'Manage ↑', 
  () => 'Manage ↓'
);
const toggleStatus = ifElse(
  isFullyOpened,
  assoc('status', Statuses.Light),
  assoc('status', Statuses.Full)
);
const open = assoc('open', true);
const hide = assoc('open', false);

class CookiesSnackbarContainer extends React.Component {
  state = {
    status: Statuses.Light,
    open: false,
  };
  componentDidMount() {
    this.CookieConsentChecker = window.CookieConsentChecker;
    if (this.CookieConsentChecker && !this.CookieConsentChecker.handled)
      this.setState(open);
  }
  handleShowMoreClick = () => this.setState(toggleStatus);
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
    const showSecondPart = isFullyOpened(this.state);
    const linkText = getLinkText(this.state);
    return (
      <div
        className={cn(classes.snackbar, { [classes.open]: this.state.open })}
      >
        <div className={classes.content}>
          <FirstPart
            classes={classes}
            linkText={linkText}
            onToggle={this.handleShowMoreClick}
            onAllowClick={this.handleAllowAllClick}
          />
          {showSecondPart && (
            <SecondPart
              classes={classes}
              onEssentialsOnlyClick={this.handleEssentialsOnlyClick}
            />
          )}
        </div>
      </div>
    );
  }
}

const FirstPart = ({ classes, onToggle, onAllowClick, linkText }) => (
  <div className={cn(classes.test, classes.first)}>
    <ContentContainer className={classes.container}>
      <Col xs={9}>
        <Typography inverted>
          According to our Cookie Policy, this website uses cookies to improve
          functionality and performance.
          <Link inverted onClick={onToggle}>
            {linkText}
          </Link>
        </Typography>
      </Col>
      <Col xs={3} className={classes.rightColumn}>
        <Link inverted onClick={onAllowClick}>
          ALLOW ALL
        </Link>
      </Col>
    </ContentContainer>
  </div>
);
const SecondPart = ({ classes, onEssentialsOnlyClick }) => (
  <div className={cn(classes.test, classes.second)}>
    <ContentContainer className={cn(classes.container)}>
      <Col xs={9}>
        <Typography inverted className={classes.second}>
          Some cookies are essential for the operation of the website, you can
          turn them off ONLY via your browser settings. Other cookies can be
          disabled by this tool.
        </Typography>
      </Col>
      <Col xs={3} className={classes.rightColumn}>
        <Link
          inverted
          className={classes.blockWithTextCenter}
          onClick={onEssentialsOnlyClick}
        >
          DISABLE
        </Link>
      </Col>
    </ContentContainer>
  </div>
);

export default injectSheet(styles)(CookiesSnackbarContainer);
