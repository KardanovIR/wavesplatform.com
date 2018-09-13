import React from 'react';
import { assoc, compose } from 'ramda';
import cn from 'classnames';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';

import {
  cookiesAllowClick,
  cookiesDisableClick,
  cookiesResetClick,
} from 'src/public/actions';

import { COOKIE_CONSENT_FIELD } from 'src/common/constants';
import ContentContainer from 'src/common/components/ContentContainer';

import Text from './Text';
import Buttons from './Buttons';

import styles from './styles';

const open = assoc('open', true);
const hide = assoc('open', false);

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

export default compose(
  injectSheet(styles),
  connect(
    undefined,
    {
      onAllowClick: cookiesAllowClick,
      onDisableClick: cookiesDisableClick,
      onResetClick: cookiesResetClick,
    }
  )
)(CookiesSnackbarContainer);
