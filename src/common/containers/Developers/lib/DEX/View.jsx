import React from 'react';

import IconButton from 'src/common/components/Button/Icon';

import DexImage from '!svg-react-loader!./img/dex.svg';

import PictureBlock from '../PictureBlock';


const DEX = ({ onDexApiClick }) => (
    <PictureBlock
        title="Decentralised Exchange (DEX)"
        subtitle="Our nodes contain an order matcher which is used to power our decentralised exchange — enabling token trades that don’t require tokens to be transferred from your blockchain account to a separate exchange."
        image={ <DexImage /> }
        text={[
            "All operations within the DEX are secure and validated by blockchain nodes. Since the DEX is open source and a part of every node, each user can run their own instance of the DEX.",
            "The matcher exposes its own REST API for accessing the order book and submitting orders. This allows users to implement any kind of trading UI or trading bots.",
        ]}
        buttons={[
            (
                <IconButton
                    onClick={onDexApiClick}
                    href="https://github.com/wavesplatform/Waves/wiki/Matcher"
                    target="_blank"
                    iconName="github"
                >
                    DEX API
                </IconButton>
            )
        ]}
    />
);


export default DEX;