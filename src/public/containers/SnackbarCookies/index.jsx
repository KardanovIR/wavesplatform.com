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

import { withLocalStorage } from 'src/public/hoc/localStorage';

import ContentContainer from 'src/common/components/ContentContainer';

import Text from './Text';
import Buttons from './Buttons';

import styles from './styles';

const initTags = () => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: 'init_tags' });
};

class CookiesSnackbarContainer extends React.Component {
  constructor(props) {
    super(props);
    const intInitialValue = parseInt(props.initialValue);
    this.state = {
      consentGiven: isNaN(intInitialValue) ? undefined : intInitialValue,
    };
  }

  handleResetClick = () => this.props.onResetClick();

  componentDidMount() {
    if (this.state.consentGiven === 1) initTags();
  }

  handleAllowAllClick = () => {
    this.props.onAllowClick();
    this.props.onLocalStorageUpdate(1);

    if (this.state.consentGiven !== 1) {
      initTags();
      this.setState({ consentGiven: 1 });
    }
  };

  handleEssentialsOnlyClick = () => {
    this.props.onDisableClick();

    const { onLocalStorageUpdate } = this.props;
    switch (this.state.consentGiven) {
      case 1:
        // revoking consent — simply refresh page
        onLocalStorageUpdate(0);
        location.reload();
        return;
      case 0:
        return;
      case undefined:
        onLocalStorageUpdate(0);
        this.setState({ consentGiven: 0 });
        return;
    }
  };

  render() {
    const { classes, open } = this.props;
    return (
      <div className={cn(classes.snackbar, { [classes.open]: open })}>
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
  withLocalStorage('cookieConsentGiven'),
  connect(
    s => ({ open: s.cookieConsentSnackbarOpen }),
    {
      onAllowClick: cookiesAllowClick,
      onDisableClick: cookiesDisableClick,
      onResetClick: cookiesResetClick,
    }
  )
)(CookiesSnackbarContainer);
