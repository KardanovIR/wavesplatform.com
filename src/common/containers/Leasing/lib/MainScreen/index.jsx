import React from 'react';

import MainScreen from 'src/common/components/MainScreen';

import { FormattedMessage } from 'react-intl';

import Typography from 'src/common/components/Typography';
import injectSheet from 'react-jss';

import styles from './styles';

const DevelopersMainScreen = ({classes}) => (
    <MainScreen
        title={
            <Typography className={classes.Title} inverted>
                <FormattedMessage
                    id="leasing.title"
                    defaultMessage="Use your WAVES balance to generate income"
                />
            </Typography>
        }
        text={
            <Typography className={classes.description} inverted>
                <FormattedMessage
                    id="leasing.text"
                    defaultMessage="By helping secure the Waves blockchain you can earn up to 5% per year on your WAVES balance. Simply lease your WAVES to a mining pool and you will receive a share of transaction fees in proportion to the amount you commit. "
                />
            </Typography>
        }
    />
);

export default injectSheet(styles)(DevelopersMainScreen);
