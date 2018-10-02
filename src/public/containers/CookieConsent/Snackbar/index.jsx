import React, { Component } from 'react';
import cn from 'classnames';
import injectSheet from 'react-jss';

import ContentContainer from 'src/common/components/ContentContainer';

import Text from './Text';
import Buttons from './Buttons';

import styles from './styles';

class CookiesSnackbar extends Component {
  componentDidMount() {
    this.props.onMount();
  }

  render() {
    const { classes, open, onAllowClick, onDisableClick } = this.props;
    return (
      <div className={cn(classes.snackbar, { [classes.open]: open })}>
        <ContentContainer className={classes.container}>
          <Text classes={classes} />
          <Buttons
            classes={classes}
            onAllowClick={onAllowClick}
            onEssentialsOnlyClick={onDisableClick}
          />
        </ContentContainer>
      </div>
    );
  }
}

export default injectSheet(styles)(CookiesSnackbar);
