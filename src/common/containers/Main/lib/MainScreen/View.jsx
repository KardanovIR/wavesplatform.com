import React from 'react';

import MainScreen from 'src/common/components/MainScreen';
import Button from 'src/common/components/Button';

import { FormattedHTMLMessage, FormattedMessage } from 'react-intl';

// import Image from '!svg-react-loader!./img/image.svg';
import url from 'src/common/utils/url';

const IndexMainScreen = ({ onGetClientClick, onGetWavesClick, animated }) => (
  <MainScreen
    title={
      <FormattedHTMLMessage id="home.main.title" defaultMessage="Get started<br>with blockchain" />
    }
    text={
      <FormattedMessage
      id="home.main.text"
      defaultMessage="Gain access to the Waves platform’s solutions for storing, trading, managing and issuing your digital assets, easily and securely."
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
        <FormattedMessage id="cta.signUp" defaultMessage="Sign up" />
      </Button>,
      <Button
        onClick={onGetWavesClick}
        href={url('get-waves')}
        withLoader
        secondary
        key="main_cta_button2"
      >
        <FormattedMessage id="cta.getWaves" defaultMessage="Get Waves" />
      </Button>,
    ]}
    animated={animated}
  />
);

export default IndexMainScreen;
