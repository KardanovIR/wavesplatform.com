import React from 'react';

import IconButton from 'src/common/components/Button/Icon';

import ConsoleImage from '!svg-react-loader!./img/console.svg';

import PictureBlock from '../PictureBlock';


const FriendlyAPI = ({
    onWavesNodeClick,
    onWavesNodeInstallClick,
}) => (
    <PictureBlock
        align="right"
        title="Running Your Waves Node"
        subtitle="Having your own node will allow you to build secure and high-load applications on top of it."
        image={<ConsoleImage />}
        text="It’s extremely easy to install and run your own instance of the Waves Node. It allows you to mine WAVES and MRTs (Miners Reward Tokens), and act as a leasing pool to aggregate mining power from other users."
        buttons={[
            (
                <IconButton
                    onClick={onWavesNodeClick}
                    href="https://github.com/wavesplatform/Waves"
                    target="_blank"
                    iconName="github"
                >
                    Waves node
                </IconButton>
            ),
            (
                <IconButton
                    onClick={onWavesNodeInstallClick}
                    href="https://github.com/wavesplatform/Waves/wiki/How-to-install-Waves-node"
                    target="_blank"
                    iconName="github"
                    secondary
                >
                    How to install
                </IconButton>
            )
        ]}
    />
);


export default FriendlyAPI;