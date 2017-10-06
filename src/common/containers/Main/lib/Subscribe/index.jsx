import React from 'react';

import Background from 'src/common/components/Background';
import Typography from 'src/common/components/Typography';

import SubscriptionForm from 'src/common/containers/SubscriptionForm';

import { FormattedMessage } from 'react-intl';

import injectSheet from 'react-jss';
import styles from './styles';




const Subscribe = ({ classes }) => (
    <div className={classes.root}>
        <div className={classes.textCentered}>
            <Typography type="display2" inverted dimmed>
                <FormattedMessage
                    id="home.subscribe.title"
                    defaultMessage="Don’t Miss Important News"
                />
            </Typography>
            <Typography type="body" inverted dimmed>
                <FormattedMessage
                    id="home.subscribe.text"
                    defaultMessage="We do more than just develop the technical aspects of the platform: we also participate actively in integrating blockchain into real-world applications to grow the crypto economy. Subscribe to our newsletter to keep up to date with all the most interesting developments."
                />
            </Typography>
        </div>

        <div className={classes.formWrapper}>
            <SubscriptionForm />
        </div>
    </div>
);


export default injectSheet(styles)(Subscribe);