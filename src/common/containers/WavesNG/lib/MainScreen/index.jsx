import React from 'react';

import MainScreen from 'src/common/components/MainScreen';

import { FormattedMessage } from 'react-intl';

const DevelopersMainScreen = ({ inverted }) => (
  <MainScreen
    title={<FormattedMessage id="wavesNG.title" />}
    text={<FormattedMessage id="wavesNG.text" />}
    inverted={inverted}
  />
);

export default DevelopersMainScreen;
