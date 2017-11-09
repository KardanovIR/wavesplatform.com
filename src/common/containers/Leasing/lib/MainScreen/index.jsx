import React from 'react';

import MainScreen from 'src/common/components/MainScreen';

import { FormattedMessage } from 'react-intl';

const DevelopersMainScreen = () => (
    <MainScreen
        title={
            <FormattedMessage
                id="leasing.title"
                defaultMessage="Use your WAVES balance to generate income"
            />
        }
        text={
            <FormattedMessage
                id="leasing.text"
                defaultMessage="By helping secure the Waves blockchain you can earn up to 1% per month on your WAVES balance. Simply lease your WAVES to a mining pool and you will receive a share of transaction fees in proportion to the amount you commit. "
            />
        }
    />
);

export default DevelopersMainScreen;
