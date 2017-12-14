import React from 'react';
import injectSheets from 'react-jss';
import { FormattedMessage } from 'react-intl';

import IconButton from 'src/common/components/Button/Icon';

import PictureBlock from '../PictureBlock';

const FriendlyAPI = ({ onDocumentationClick, onClientClick, classes }) => (
  <PictureBlock
    title={
      <FormattedMessage id="developers.friendlyAPI.title" defaultMessage="Developer-friendly API" />
    }
    subtitle={
      <FormattedMessage
        id="developers.friendlyAPI.subtitle"
        defaultMessage="Our open source client application uses the same API. You can explore it and implement any kind of client application yourself."
      />
    }
    text={
      <FormattedMessage
        id="developers.friendlyAPI.text"
        defaultMessage="Our nodes expose the REST API allowing access to all blockchain data (transaction history, balances, etc.) as well as operations for creating a new transaction — it’s easy to make a transfer, exchange, issue of tokens or lease fund transactions programmatically."
      />
    }
    buttons={[
      <IconButton
        onClick={onDocumentationClick}
        href="https://github.com/wavesplatform/Waves/wiki/Waves-Node-REST-API"
        target="_blank"
        iconName="github"
        className={classes.button}
        secondary
      >
        <FormattedMessage id="developers.cta.documentation" defaultMessage="Documentation" />
      </IconButton>,
      <IconButton
        onClick={onClientClick}
        href="https://github.com/wavesplatform/WavesGUI"
        target="_blank"
        iconName="github"
        className={classes.button}
        inverted
      >
        <FormattedMessage id="developers.cta.client" defaultMessage="Client" />
      </IconButton>,
    ]}
  />
);

const styles = theme => ({
  button: {
    boxSizing: 'border-box',
    width: 240,
    [theme.mixins.atMedia(414)]: {
      width: '100%',
    },
    [theme.mixins.atMedia('sm')]: {
      width: '100%',
      marginRight: theme.spacing.unit * 10
    }
  }
});

export default injectSheets(styles)(FriendlyAPI);
