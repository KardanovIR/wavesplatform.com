import React from 'react';

import Typography from 'src/common/components/Typography';
import { Row, Col } from 'src/common/components/Grid';

import injectSheet from 'react-jss';
import styles from './styles';




const MainScreen = ({ classes }) => (
    <Row className={classes.root}>
        <Col xs={12} md={6}>
            <Typography type="display4" margin>
                Build unstoppable applications
            </Typography>
            <Typography type="body">
                These apps run on a custom built  blockchain, an enormously powerful shared global infrastructure that can move value around and represent the ownership of property. 
            </Typography>
        </Col>
        <Col xs={12} md={6}>
            <div className={classes.imageWrapper}>
                <div className={classes.image} />
            </div>
        </Col>
    </Row>
);


export default injectSheet(styles)(MainScreen);