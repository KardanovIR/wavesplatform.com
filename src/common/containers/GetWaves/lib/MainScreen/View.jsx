import React from 'react';
import { FormattedMessage } from 'react-intl';
import url from 'src/common/utils/url';

import Button from 'src/common/components/Button';
import MainScreen from 'src/common/components/MainScreen';

const GetWavesMainScreen = ({ onGetClientClick, onNewClientClick }) => (
  <MainScreen
    title={<FormattedMessage id="getWaves.title" />}
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
        withLoader
        secondary
        key="main_cta_button2"
        inverted
      >
        <FormattedMessage id="cta.onlineClient" />
      </Button>,
    ]}
    inverted
  />
);

export default GetWavesMainScreen;
