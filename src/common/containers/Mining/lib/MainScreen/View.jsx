import React from 'react';

import MainScreen from 'src/common/components/MainScreen';
import IconButton from 'src/common/components/Button/Icon';

// import ImageMobile from '!svg-react-loader!./img/table_mob.svg';
// import Image from '!svg-react-loader!./img/table.svg';

import { FormattedMessage } from 'react-intl';

const DevelopersMainScreen = ({ onWavesNodeClick }) => (
  <MainScreen
    inverted
    title={
      <FormattedMessage
        id="mining.title"
        defaultMessage="Join the Waves Network"
      />
    }
    text={
      <FormattedMessage
        id="mining.text"
        defaultMessage="Install your node and help us secure the network and power the Waves blockchain. You don’t need any fancy hardware and can earn up to 5% yearly on your WAVES balance."
      />
    }
    buttons={[
      <IconButton
        onClick={onWavesNodeClick}
        key="main_cta_button"
        href="https://docs.wavesplatform.com/waves-full-node/how-to-install-a-node/how-to-install-a-node.html"
        target="_blank"
        iconName="github"
        secondary
      >
        <FormattedMessage
          id="developers.cta.wavesNode"
          defaultMessage="Waves Node"
        />
      </IconButton>,
    ]}
  />
);

export default DevelopersMainScreen;
