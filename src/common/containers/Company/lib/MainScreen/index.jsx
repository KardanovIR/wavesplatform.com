import React from 'react';

import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';
import { Row, Col } from 'src/common/components/Grid';

import injectSheet from 'react-jss';
import styles from './styles';




const MainScreen = ({ classes }) => (
    <div className={classes.root}>
        <Row>
            <Col xs={12} md={6}>
                <Typography type="display4">
                    We change lives of the people
                </Typography>
                <Margin bottom={5} />
            </Col>
            <Col xs={12} md={6} />
        </Row>
        <Row>
            <Col xs={12} md={6}>
                <Typography type="display1">
                    We believe that blockchain technology can improve and fundamentally transform not only the modern economy, but all of its various sectors.
                </Typography>
                <Margin bottom={5} />
            </Col>
            <Col xs={12} md={5} mdOffset={1}>
                <Typography type="body">
                    Our mission is to accelerate that process by creating easy-to-use, highly functional tools to make blockchain available to every person or organization that can benefit from it.
                </Typography>
            </Col>
        </Row>
    </div>
);


export default injectSheet(styles)(MainScreen);