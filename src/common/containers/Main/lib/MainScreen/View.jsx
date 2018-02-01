import React from 'react';

import MainScreen from 'src/common/components/MainScreen';
import Button from 'src/common/components/Button';
import DownloadClientDropdown from 'src/common/components/DownloadClientDropdown';

import { FormattedHTMLMessage, FormattedMessage } from 'react-intl';

import url from 'src/common/utils/url';

const IndexMainScreen = ({ onNewClientClick, animated, logSettings }) => (
  <MainScreen
    title={<FormattedHTMLMessage id="home.main.title" />}
    text={<FormattedMessage id="home.main.text" />}
    buttons={[
      <DownloadClientDropdown
        key="main_cta_button"
        logSettings={logSettings}
      >
        <FormattedMessage id="cta.onlineClientOld" />
      </DownloadClientDropdown>,
      <Button
        onClick={onNewClientClick}
        href={url('online-client(beta)')}
        withLoader
        key="main_cta_button2"
        bordered
      >
        <FormattedMessage id="cta.onlineClient" />
      </Button>,
    ]}
    animated={animated}
  />
);

export default IndexMainScreen;