import React from 'react';

import MainScreen from 'src/common/components/MainScreen';
import Button from 'src/common/components/Button';
import url from 'src/common/utils/url';
import DownloadClientDropdown from 'src/common/containers/DownloadClientDropdown';
import withIsDesktopFlag from 'src/public/hoc/isDesktop';
import Typography from 'src/common/components/Typography';
import { FormattedHTMLMessage, FormattedMessage } from 'react-intl';

const ProductMainScreen = ({
  onDownloadChange,
  onOnlineClientClick,
  isDesktop,
}) => (
  <MainScreen
    title={<FormattedHTMLMessage id="products.wallet.title" />}
    titleType="displayCustom"
    text={
      <Typography type="body">
        <FormattedMessage id="products.wallet.text" />
      </Typography>
    }
    align="left"
    buttons={[
      ...(isDesktop
        ? [
            <DownloadClientDropdown
              key="main_cta_button1"
              onChange={onDownloadChange}
            />,
          ]
        : []),
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
