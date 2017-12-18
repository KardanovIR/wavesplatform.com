import React from 'react';

import MainScreen from 'src/common/components/MainScreen';
import IconButton from 'src/common/components/Button/Icon';

// import ImageMobile from '!svg-react-loader!./img/table_mob.svg';
// import Image from '!svg-react-loader!./img/table.svg';

import { FormattedMessage } from 'react-intl';

const DevelopersMainScreen = ({ onWavesNodeClick }) => (
  <MainScreen
    title={<FormattedMessage id="mining.title" />}
    text={<FormattedMessage id="mining.text" />}
    buttons={[
      <IconButton
        onClick={onWavesNodeClick}
        key="main_cta_button"
        href="https://github.com/wavesplatform/Waves/wiki/How-to-install-Waves-node"
        target="_blank"
        iconName="github"
        secondary
      >
        <FormattedMessage id="developers.cta.wavesNode" />
      </IconButton>,
    ]}
  />
);

export default DevelopersMainScreen;
