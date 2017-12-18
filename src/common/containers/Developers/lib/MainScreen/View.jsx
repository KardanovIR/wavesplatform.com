import React from 'react';

import MainScreen from 'src/common/components/MainScreen';
import IconButton from 'src/common/components/Button/Icon';

import { FormattedMessage } from 'react-intl';

const DevelopersMainScreen = ({ onDocumentationClick, inverted }) => (
  <MainScreen
    title={
      <FormattedMessage
        id="developers.title"
        
      />
    }
    text={
      <FormattedMessage
        id="developers.text"
        
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
          
        />
      </IconButton>,
    ]}
    inverted={inverted}
  />
);

export default DevelopersMainScreen;
