import React from 'react';

import MainScreen from 'src/common/components/MainScreen';
import Button from 'src/common/components/Button';
import DownloadClientDropdown from 'src/common/components/DownloadClientDropdown';

import { FormattedMessage } from 'react-intl';

import url from 'src/common/utils/url';

const DevelopersMainScreen = ({ inverted, onNewClientClick, logSettings }) => (
  <MainScreen
    title={<FormattedMessage id="wavesNG.title" />}
    text={<FormattedMessage id="wavesNG.text" />}
    inverted={inverted}
    buttons={[
      <DownloadClientDropdown
      key="main_cta_button"
      logSettings={logSettings}
    />,
      <Button
        onClick={onNewClientClick}
        href={url('online-client(beta)')}
        key="main_cta_button2"
        bordered
        inverted
      >
        <FormattedMessage id="cta.onlineClient" />
      </Button>,
    ]}
  />
);

export default DevelopersMainScreen;
