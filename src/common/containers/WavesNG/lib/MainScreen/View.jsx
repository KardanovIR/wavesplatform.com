import React from 'react';

import MainScreen from 'src/common/components/MainScreen';
import Button from 'src/common/components/Button';

import { FormattedMessage } from 'react-intl';

import url from 'src/common/utils/url';

const DevelopersMainScreen = ({ inverted, onNewClientClick, onGetClientClick }) => (
  <MainScreen
    title={<FormattedMessage id="wavesNG.title" />}
    text={<FormattedMessage id="wavesNG.text" />}
    inverted={inverted}
    buttons={[
      <Button
        onClick={onGetClientClick}
        key="main_cta_button"
        target="_blank"
        href={url('online-client')}
        bordered
        inverted
      >
        <FormattedMessage id="cta.onlineClientOld" />
      </Button>,
      <Button
        onClick={onNewClientClick}
        href={url('online-client(beta)')}
        key="main_cta_button2"
        withLoader
        secondary
        inverted
      >
        <FormattedMessage id="cta.onlineClient" />
      </Button>,
    ]}
  />
);

export default DevelopersMainScreen;
