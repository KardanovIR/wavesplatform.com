import React from 'react';

import MainScreen from 'src/common/components/MainScreen';
import IconButton from 'src/common/components/Button/Icon';

import { FormattedMessage } from 'react-intl';

const DevelopersMainScreen = ({ onDocumentationClick, inverted }) => (
  <MainScreen
    title={
      <FormattedMessage
        id="developers.title"
        defaultMessage="Build applications on the blockchain"
      />
    }
    text={
      <FormattedMessage
        id="developers.text"
        defaultMessage="These apps run on a custom built blockchain, an enormously powerful shared global infrastructure that can move value around and represent the ownership of property."
      />
    }
    buttons={[
      <IconButton
        onClick={onDocumentationClick}
        key="main_cta_button"
        href="https://github.com/wavesplatform/Waves/wiki/Waves-Node-REST-API"
        target="_blank"
        iconName="github"
        secondary
      >
        <FormattedMessage
          id="developers.cta.documentation"
          defaultMessage="Documentation"
        />
      </IconButton>,
    ]}
    inverted={inverted}
  />
);

export default DevelopersMainScreen;
