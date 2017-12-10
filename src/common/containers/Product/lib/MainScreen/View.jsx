import React from 'react';

import MainScreen from 'src/common/components/MainScreen';
import Button from 'src/common/components/Button';

import { FormattedHTMLMessage, FormattedMessage } from 'react-intl';

const DevelopersMainScreen = ({ onGetClientClick, onOnlineClientClick }) => (
  <MainScreen
    title={
      <FormattedHTMLMessage
        id="product.title"
        defaultMessage="Use blockchain —<br>it’s easy with Waves"
      />
    }
    text={
      <FormattedMessage
        id="product.text"
        defaultMessage="Issue, store, manage, trade, and analyze your digital assets safely with Waves blockchain platform and decentralized exchange."
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
        <FormattedMessage id="cta.onlineClient" defaultMessage="Online Client" />
      </Button>,
    ]}
  />
);

export default DevelopersMainScreen;
