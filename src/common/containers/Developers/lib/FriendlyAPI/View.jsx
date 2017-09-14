import React from 'react';

import { FormattedMessage } from 'react-intl';



import IconButton from 'src/common/components/Button/Icon';

import CodeImage from '!svg-react-loader!./img/code.svg';

import PictureBlock from '../PictureBlock';





const FriendlyAPI = ({
    onDocumentationClick,
    onClientClick,
}) => (
        <PictureBlock
            title={
                <FormattedMessage
                    id="developers.friendlyAPI.title"
                    defaultMessage="Developer-friendly API"
                />
            }
            subtitle={
                <FormattedMessage
                    id="developers.friendlyAPI.subtitle"
                    defaultMessage="Our open source client application uses the same API. You can explore it and implement any kind of client application yourself."
                />
            }
            image={<CodeImage />}
            text={
                <FormattedMessage
                    id="developers.friendlyAPI.text"
                    defaultMessage="Our nodes expose the REST API, allowing access to all blockchain data (transaction history, balances, etc.) as well as operations for creating a new transaction — it’s easy to make a transfer or exchange, issue tokens or lease funds programmatically."
                />
            }
            buttons={[
                (
                    <IconButton
                        onClick={onDocumentationClick}
                        href="https://github.com/wavesplatform/Waves/wiki/Waves-Node-REST-API"
                        target="_blank"
                        iconName="github"
                    >
                        <FormattedMessage
                            id="developers.cta.documentation"
                            defaultMessage="Documentation"
                        />
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
                        <FormattedMessage
                            id="developers.cta.client"
                            defaultMessage="Client"
                        />
                    </IconButton>
                )
            ]}
        />
    );


export default FriendlyAPI;