import React from 'react';

import { FormattedMessage } from 'react-intl';


import IconButton from 'src/common/components/Button/Icon';

import ConsoleImage from '!svg-react-loader!./img/console.svg';

import PictureBlock from '../PictureBlock';



const FriendlyAPI = ({
    onWavesNodeClick,
    onWavesNodeInstallClick,
}) => (
        <PictureBlock
            align="right"
            title={
                <FormattedMessage
                    id="developers.wavesNode.title"
                    defaultMessage="Running Your Waves Node"
                />
            }
            subtitle={
                <FormattedMessage
                    id="developers.wavesNode.subtitle"
                    defaultMessage="Having your own node will allow you to build secure and high-load applications on top of it."
                />
            }
            image={<ConsoleImage />}
            text={
                <FormattedMessage
                    id="developers.wavesNode.text"
                    defaultMessage="It’s extremely easy to install and run your own instance of the Waves Node. It allows you to mine WAVES and MRTs (Miners Reward Tokens), and act as a leasing pool to aggregate mining power from other users."
                />
            }
            buttons={[
                (
                    <IconButton
                        onClick={onWavesNodeClick}
                        href="https://github.com/wavesplatform/Waves"
                        target="_blank"
                        iconName="github"
                    >
                        <FormattedMessage
                            id="developers.cta.wavesNode"
                            defaultMessage="Waves node"
                        />
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
                        <FormattedMessage
                            id="developers.cta.howToInstallNode"
                            defaultMessage="How to install"
                        />
                    </IconButton>
                )
            ]}
        />
    );


export default FriendlyAPI;