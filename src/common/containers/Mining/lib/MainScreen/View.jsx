import React from 'react';

import MainScreen from 'src/common/components/MainScreen';
import IconButton from 'src/common/components/Button/Icon';

// import ImageMobile from '!svg-react-loader!./img/table_mob.svg';
// import Image from '!svg-react-loader!./img/table.svg';

import { FormattedMessage } from 'react-intl';

const DevelopersMainScreen = ({ onWavesNodeClick }) => (
    <MainScreen
        title={
            <FormattedMessage
                id="mining.title"
                defaultMessage="Support the Waves Network"
            />
        }
        text={
            <FormattedMessage
                id="mining.text"
                defaultMessage="Install your node and help us to secure the network and power the Waves blockchain. You don’t need any fancy hardware and can earn up to 1% monthly on your WAVES balance."
            />
        }
        buttons={[
            <IconButton
                onClick={onWavesNodeClick}
                key="main_cta_button"
                href="https://github.com/wavesplatform/Waves/wiki/How-to-install-Waves-node"
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
