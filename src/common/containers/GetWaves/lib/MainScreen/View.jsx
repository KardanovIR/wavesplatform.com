import React from 'react';
import { FormattedMessage } from 'react-intl';
import url from 'src/common/utils/url';
import withIsDesktopFlag from 'src/public/hoc/isDesktop';

import DownloadClientDropdown from 'src/common/containers/DownloadClientDropdown';
import Button from 'src/common/components/Button';
import MainScreen from 'src/common/components/MainScreen';

const GetWavesMainScreen = ({
  onNewClientClick,
  isDesktop,
  onDropdownChange,
}) => (
  <MainScreen
    title={<FormattedMessage id="getWaves.title" />}
    buttons={[
      ...(isDesktop
        ? [
            <DownloadClientDropdown
              key="main_cta_button1"
              onChange={onDropdownChange}
            />,
          ]
        : []),
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

export default withIsDesktopFlag(GetWavesMainScreen);
