import React from 'react';

import { Row, Col } from 'src/common/components/Grid';
import Background from 'src/common/components/Background';
import Typography from 'src/common/components/Typography';
import Input from 'src/common/components/Input';
import Button from 'src/common/components/Button';


import injectSheet from 'react-jss';
import styles from './styles';




const Subscribe = ({ classes }) => (
    <Background className={classes.background}>
        <div className={classes.root}>
            <Typography type="display2" className={classes.title} color="gray-0">
                Don’t Miss Important News
            </Typography>
            <Typography type="body" className={classes.text} color="gray-0">
                We do more than just develop more the technical aspect of the platform, we also participate actively in integrating blockchain economy in the real world. Subscribe to our news to keep up to date with all the most interesting happenings.
            </Typography>
            <Typography type="body" className={classes.text} color="gray-0">
                We do more than just develop more the technical aspect of the platform, we also participate actively in integrating blockchain economy in the real world. Subscribe to our news to keep up to date with all the most interesting happenings.
            </Typography>
             <Input />
             <Button>Subscribe</Button> 
        </div>
    </Background>
);


export default injectSheet(styles)(Subscribe);