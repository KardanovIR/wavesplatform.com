import React from 'react';

import IconButton from 'src/common/components/Button/Icon';

import CodeImage from '!svg-react-loader!./img/code.svg';

import PictureBlock from '../PictureBlock';


const FriendlyAPI = ({
    onDocumentationClick,
    onClientClick,
}) => (
    <PictureBlock
        title="Developer-Friendly API"
        subtitle="Our open source client application uses the same API. You can explore it and implement any kind of client application yourself."
        image={ <CodeImage /> }
        text="Our nodes expose the REST API allowing access to all blockchain data (transaction history, balances, etc.) as well as operations for creating a new transaction — it’s easy to make a transfer, exchange, issue of tokens or lease fund transactions programmatically."
        buttons={[
            (
                <IconButton
                    onClick={onDocumentationClick}
                    href="https://github.com/wavesplatform/Waves/wiki/Waves-Node-REST-API"
                    target="_blank"
                    iconName="github"
                >
                        Documentation
                </IconButton>
            ),
            (
                <IconButton
                    onClick={onClientClick}
                    href="https://github.com/wavesplatform/WavesGUI"
                    target="_blank"
                    iconName="github"
                    secondary
                >
                        Client
                </IconButton>
            )
        ]}
    />
);


export default FriendlyAPI;