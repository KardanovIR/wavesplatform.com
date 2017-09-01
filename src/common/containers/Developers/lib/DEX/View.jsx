import React from 'react';

import IconButton from 'src/common/components/Button/Icon';

import DexImage from '!svg-react-loader!./img/dex.svg';

import PictureBlock from '../PictureBlock';


const DEX = ({ onDexApiClick }) => (
    <PictureBlock
        title="Decentralized Exchange"
        subtitle="Our nodes contain an order matcher which is used as decentralized exchange — it enables token trades that don’t require transferring them from the blockchain to a centralized exchange."
        image={ <DexImage /> }
        text={[
            "Our nodes expose the REST API allowing access to all blockchain data (transaction history, balances, etc.) as well as operations for creating a new transaction — it’s easy to make a transfer, exchange, issue of tokens or lease fund transactions programmatically.",
            "The matcher exposes its own REST API for accessing the order book and submitting orders. This allows users to implement any kind of trading UI or trading robots."
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