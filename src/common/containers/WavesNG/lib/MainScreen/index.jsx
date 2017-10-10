import React from 'react';

import {
    FormattedHTMLMessage,
    FormattedMessage
} from 'react-intl';

import MainScreen from 'src/common/components/MainScreen';



const MainScreenSection = () => (
    <MainScreen
        title={
            <FormattedHTMLMessage
                id="wavesNG.title"
                defaultMessage="Help us test<br>Waves-NG"
            />
        }
        text={
            <FormattedMessage
                id="wavesNG.text"
                defaultMessage="Waves network is implementing a ground-breaking new protocol that will allow its blockchain to process hundreds of transactions per second. We need the community to help us stress test Waves-NG on TestNet."
            />
        }
    />
);


export default MainScreenSection;