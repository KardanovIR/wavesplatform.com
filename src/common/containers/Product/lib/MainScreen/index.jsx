import React from 'react';

import Typography from 'src/common/components/Typography';
import Button from 'src/common/components/Button';
import Margin from 'src/common/components/Margin';
import { Row, Col } from 'src/common/components/Grid';


import injectSheet from 'react-jss';
import styles from './styles';




const MainScreen = ({ classes }) => (
    <Row className={classes.root}>
        <Col xs={12} md={6}>
            <Typography inverted type="display4">
                Use blockchain — it’s easy with Waves
            </Typography>
            <Typography inverted type="body2">
                Issue, store, manage, trade, and analyze your digital assets safely with Waves blockchain platform and decentralized exchange.
            </Typography>

            <Margin bottom={4} />
        </Col>
        <Col xs={12} md={6}>
            <div className={classes.imageWrapper}>
                <div className={classes.image} />
            </div>
        </Col>
    </Row>
);


export default injectSheet(styles)(MainScreen);