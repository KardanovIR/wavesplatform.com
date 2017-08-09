import React from 'react';

import Background from 'src/common/components/Background';
import Typography from 'src/common/components/Typography';

import SubscriptionForm from 'src/common/containers/SubscriptionForm';


import injectSheet from 'react-jss';
import styles from './styles';




const Subscribe = ({ classes }) => (
    <Background className={classes.background}>
        <div className={classes.root}>
            <div className={classes.textCentered}>
                <Typography type="display2" color="gray-0" margin>
                    Don’t Miss Important News
                </Typography>
                <Typography type="body" color="gray-0" margin>
                    We do more than just develop more the technical aspect of the platform, we also participate actively in integrating blockchain economy in the real world. Subscribe to our news to keep up to date with all the most interesting happenings.
                </Typography>
            </div>

            <div className={classes.formWrapper}>
                <SubscriptionForm />
            </div>
        </div>
    </Background>
);


export default injectSheet(styles)(Subscribe);