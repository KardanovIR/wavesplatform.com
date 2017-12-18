import React from 'react';
import injectSheets from 'react-jss';
import { FormattedMessage } from 'react-intl';

import IconButton from 'src/common/components/Button/Icon';

import PictureBlock from '../PictureBlock';

const FriendlyAPI = ({ onWavesNodeClick, onWavesNodeInstallClick, classes }) => (
  <PictureBlock
    title={
      <FormattedMessage id="developers.wavesNode.title"  />
    }
    subtitle={
      <FormattedMessage
        id="developers.wavesNode.subtitle"
        
      />
    }
    text={
      <FormattedMessage
        id="developers.wavesNode.text"
        
      />
    }
    buttons={[
      <IconButton
        onClick={onWavesNodeClick}
        href="https://github.com/wavesplatform/Waves"
        target="_blank"
        iconName="github"
        className={classes.button}
        secondary
      >
        <FormattedMessage id="developers.cta.wavesNode"  />
      </IconButton>,
      <IconButton
        onClick={onWavesNodeInstallClick}
        href="https://github.com/wavesplatform/Waves/wiki/How-to-install-Waves-node"
        target="_blank"
        iconName="github"
        className={classes.button}
        inverted
      >
        <FormattedMessage id="developers.cta.howToInstallNode"  />
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
