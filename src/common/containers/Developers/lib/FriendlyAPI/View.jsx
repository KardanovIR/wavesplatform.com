import React from 'react';
import injectSheets from 'react-jss';
import { FormattedMessage } from 'react-intl';

import IconButton from 'src/common/components/Button/Icon';

import PictureBlock from '../PictureBlock';

const FriendlyAPI = ({ onDocumentationClick, onClientClick, classes }) => (
  <PictureBlock
    title={<FormattedMessage id="developers.friendlyAPI.title" />}
    subtitle={<FormattedMessage id="developers.friendlyAPI.subtitle" />}
    text={<FormattedMessage id="developers.friendlyAPI.text" />}
    buttons={[
      <IconButton
        onClick={onDocumentationClick}
        href="https://docs.wavesplatform.com/development-and-api/waves-node-rest-api.html"
        target="_blank"
        iconName="github"
        className={classes.button}
        secondary
      >
        <FormattedMessage id="developers.cta.documentation" />
      </IconButton>,
      <IconButton
        onClick={onClientClick}
        href="https://github.com/wavesplatform/WavesGUI"
        target="_blank"
        iconName="github"
        className={classes.button}
        inverted
      >
        <FormattedMessage id="developers.cta.client" />
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
      marginRight: theme.spacing.unit * 10,
    },
  },
});

export default injectSheets(styles)(FriendlyAPI);
