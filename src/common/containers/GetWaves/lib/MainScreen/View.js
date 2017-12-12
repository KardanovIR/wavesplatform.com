import React from 'react';
import { FormattedMessage } from 'react-intl';

import Button from 'src/common/components/Button';
import MainScreen from 'src/common/components/MainScreen';

const GetWavesMainScreen = ({ onGetClientClick }) => (
  <MainScreen
    title={<FormattedMessage id="getWaves.title" defaultMessage="Get Waves" />}
    /* text={
            <FormattedMessage
                id="getWaves.text"
                defaultMessage="You will need WAVES to create custom tokens and fuel other operations on the Waves platform, like transferring and trading tokens. There are lots of ways to get hold of WAVES, including through centralised exchanges, through the Waves DEX, and from the Waves client using a credit card via partnerships with third parties. You can trade them on popular exchanges such as Bittrex, and again on the DEX, against many other counterparty currencies, including EUR, USD and BTC."
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
        <FormattedMessage id="cta.getClient" defaultMessage="Get client" />
      </Button>,
    ]}
    inverted
  />
);

export default GetWavesMainScreen;
