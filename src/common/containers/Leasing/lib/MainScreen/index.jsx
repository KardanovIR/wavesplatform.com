import React from 'react';

import MainScreen from 'src/common/components/MainScreen';

import { FormattedMessage } from 'react-intl';

const DevelopersMainScreen = () => (
    <MainScreen
        title={
            <FormattedMessage
                id="leasing.title"
                
            />
        }
        text={
            <FormattedMessage
                id="leasing.text"
                
            />
        }
    />
);

export default DevelopersMainScreen;
