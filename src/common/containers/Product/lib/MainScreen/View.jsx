import React from 'react';

import MainScreen from 'src/common/components/MainScreen';
import Button from 'src/common/components/Button';

import { FormattedHTMLMessage, FormattedMessage } from 'react-intl';

const DevelopersMainScreen = ({ onGetClientClick, onOnlineClientClick }) => (
  <MainScreen
    title={
      <FormattedHTMLMessage
        id="product.title"
        
      />
    }
    text={
      <FormattedMessage
        id="product.text"
        
      />
    }
    buttons={[
      <Button
        onClick={onGetClientClick}
        key="main_cta_button"
        target="_blank"
        href="https://chrome.google.com/webstore/detail/wavesliteapp/kfmcaklajknfekomaflnhkjjkcjabogm"
        bordered
      >
        <FormattedMessage id="cta.getClient" />
      </Button>,
      <Button
        onClick={onOnlineClientClick}
        secondary
        key="main_cta_button2"
        target="_blank"
        href="https://waveswallet.io/"
      >
        <FormattedMessage id="cta.onlineClient"  />
      </Button>,
    ]}
  />
);

export default DevelopersMainScreen;
