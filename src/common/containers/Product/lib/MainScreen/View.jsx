import React from 'react';

import MainScreen from 'src/common/components/MainScreen';
import Button from 'src/common/components/Button';
import url from 'src/common/utils/url';
import DownloadClientDropdown from 'src/common/components/DownloadClientDropdown';

import { FormattedHTMLMessage, FormattedMessage } from 'react-intl';

const DevelopersMainScreen = ({ logSettings, onOnlineClientClick }) => (
  <MainScreen
    title={<FormattedHTMLMessage id="product.title" />}
    text={<FormattedMessage id="product.text" />}
    buttons={[
      <DownloadClientDropdown
      key="main_cta_button"
      logSettings={logSettings}
    />,
      <Button
        onClick={onOnlineClientClick}
        bordered
        key="main_cta_button2"
        target="_blank"
        href={url('online-client(beta)')}
      >
        <FormattedMessage id="cta.onlineClient" />
      </Button>,
    ]}
  />
);

export default DevelopersMainScreen;
