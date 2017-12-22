import React from 'react';

import MainScreen from 'src/common/components/MainScreen';
import Button from 'src/common/components/Button';

import { FormattedMessage } from 'react-intl';

import url from 'src/common/utils/url';

const DevelopersMainScreen = ({ inverted, onNewClientClick }) => (
  <MainScreen
    title={<FormattedMessage id="wavesNG.title" />}
    text={<FormattedMessage id="wavesNG.text" />}
    inverted={inverted}
    buttons={[
      <Button
        onClick={onNewClientClick}
        href={url('online-client')}
        withLoader
        secondary
        key="main_cta_button2"
      >
        <FormattedMessage id="cta.onlineClient" />
      </Button>,
    ]}
  />
);

export default DevelopersMainScreen;
