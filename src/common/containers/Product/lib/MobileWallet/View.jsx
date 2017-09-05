import React from 'react';

import Typography from 'src/common/components/Typography';
import ButtonGetApp from 'src/common/components/ButtonGetApp';
import Margin from 'src/common/components/Margin';
import { Row, Col } from 'src/common/components/Grid';


import injectSheet from 'react-jss';
import styles from './styles';




const MainScreen = ({
    classes,
    onAndroidClientClick,
    onIosClientClick,
}) => (
    <Row className={classes.root} alignItems="center">
        <Col xs={12} sm={6} className={classes.imageCol}>
            <div className={classes.imageWrapper}>
                <div className={classes.image} />
            </div>
        </Col>
        <Col xs={12} sm={5} smOffset={1}>
            <Typography type="display2" margin>
                Mobile wallet
            </Typography>
            <Typography type="body2" margin>
                Don’t forget to download the mobile wallet for iOS & Android
            </Typography>

            <Margin bottom={3} />

            <Margin bottom={1} right={1} className={classes.buttonWrapper}>
                <ButtonGetApp onClick={onAndroidClientClick} type="google-play" />
            </Margin>
            <Margin bottom={1} right={1} className={classes.buttonWrapper}>
                <ButtonGetApp onClick={onIosClientClick} type="app-store" />
            </Margin>
        </Col>
    </Row>
);


export default injectSheet(styles)(MainScreen);