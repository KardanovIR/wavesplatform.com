import React from 'react';

import MainScreen from 'src/common/components/MainScreen';
import IconButton from 'src/common/components/Button/Icon';

import { FormattedMessage } from 'react-intl';

const DevelopersMainScreen = ({ onDocumentationClick, inverted }) => (
  <MainScreen
    title={
      <FormattedMessage id="developers.title" defaultMessage="Build unstoppable applications" />
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
        // className={classes.ctaButton}
        href="https://github.com/wavesplatform/Waves/wiki/Waves-Node-REST-API"
        target="_blank"
        iconName="github"
        secondary
      >
        <FormattedMessage id="developers.cta.documentation" defaultMessage="Documentation" />
      </IconButton>,
      // (
      //    <IconButton
      //         key="main_cta_button2"
      //         // className={classes.secondCtaButton}
      //         href="https://github.com/wavesplatform/WavesGUI"
      //         target="_blank"
      //         iconName="github"
      //         bordered
      //     >
      //         Client
      //     </IconButton>
      // ),
    ]}
    inverted={inverted}
  />
);

export default DevelopersMainScreen;
