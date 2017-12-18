import React from 'react';
import { FormattedMessage } from 'react-intl';

import Button from 'src/common/components/Button';
import MainScreen from 'src/common/components/MainScreen';

const GetWavesMainScreen = ({ onGetClientClick }) => (
  <MainScreen
    title={<FormattedMessage id="getWaves.title"  />}
    /* text={
            <FormattedMessage
                id="getWaves.text"
                
            />
        } */
    buttons={[
      <Button
        onClick={onGetClientClick}
        key="main_cta_button"
        target="_blank"
        href="https://chrome.google.com/webstore/detail/wavesliteapp/kfmcaklajknfekomaflnhkjjkcjabogm"
        inverted
      >
        <FormattedMessage id="cta.getClient"  />
      </Button>,
    ]}
    inverted
  />
);

export default GetWavesMainScreen;
