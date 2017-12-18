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
                
            />
        }
        text={
            <FormattedMessage
                id="wavesNG.text"
                
            />
        }
    />
);


export default MainScreenSection;