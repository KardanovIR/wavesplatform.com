import React from 'react';

import MainScreen from 'src/common/components/MainScreen';
import Button from 'src/common/components/Button';
import url from 'src/common/utils/url';
import DownloadClientDropdown from 'src/common/components/DownloadClientDropdown';
import withIsDesktopFlag from 'src/public/hoc/isDesktop';

import { FormattedHTMLMessage, FormattedMessage } from 'react-intl';

const ProductMainScreen = ({ logSettings, onOnlineClientClick, isDesktop }) => (
  <MainScreen
    title={<FormattedHTMLMessage id="product.title" />}
    text={<FormattedMessage id="product.text" />}
    buttons={[
      ...isDesktop ? [<DownloadClientDropdown key="main_cta_button1" logSettings={logSettings} />]: [],
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

export default withIsDesktopFlag(ProductMainScreen);
