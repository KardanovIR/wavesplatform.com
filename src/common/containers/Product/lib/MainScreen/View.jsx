import React from 'react';

import MainScreen from 'src/common/components/MainScreen';
import Button from 'src/common/components/Button';
import url from 'src/common/utils/url';

import { FormattedHTMLMessage, FormattedMessage } from 'react-intl';

const DevelopersMainScreen = ({ onGetClientClick, onOnlineClientClick }) => (
  <MainScreen
    title={<FormattedHTMLMessage id="product.title" />}
    text={<FormattedMessage id="product.text" />}
    buttons={[
      <Button
        onClick={onGetClientClick}
        key="main_cta_button"
        target="_blank"
        href={url('online-client')}
        bordered
      >
        <FormattedMessage id="cta.onlineClientOld" />
      </Button>,
      <Button
        onClick={onOnlineClientClick}
        secondary
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
