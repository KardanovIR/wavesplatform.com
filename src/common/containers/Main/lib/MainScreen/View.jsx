import React from 'react';

import MainScreen from 'src/common/components/MainScreen';
import Button from 'src/common/components/Button';
import DownloadClientDropdown from 'src/common/components/DownloadClientDropdown';
import withIsDesktopFlag from 'src/public/hoc/isDesktop';

import { FormattedHTMLMessage, FormattedMessage } from 'react-intl';

import url from 'src/common/utils/url';
const IndexMainScreen = ({ onNewClientClick, logSettings, isDesktop }) => (
  <MainScreen
    title={<FormattedHTMLMessage id="home.main.title" />}
    text={<FormattedMessage id="home.main.text" />}
    buttons={[
      ...isDesktop ? [<DownloadClientDropdown key="main_cta_button1" logSettings={logSettings} />]: [],
      <Button
        onClick={onNewClientClick}
        href={url('online-client(beta)')}
        key="main_cta_button2"
        bordered
      >
        <FormattedMessage id="cta.onlineClient" />
      </Button>,
    ]}
  />
  );

export default withIsDesktopFlag(IndexMainScreen);
