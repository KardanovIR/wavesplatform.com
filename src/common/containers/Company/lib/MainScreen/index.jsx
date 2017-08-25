import React from 'react';

import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';
import { Row, Col } from 'src/common/components/Grid';

import injectSheet from 'react-jss';
import styles from './styles';




const MainScreen = ({ classes }) => (
    <Row className={classes.root}>
        <Col xs={12} md={6}>
            <Typography type="display4" inverted>
                We change lives of the people
            </Typography>
            <Typography type="body" inverted cut>
                We believe that blockchain technology can improve and fundamentally transform not only the modern economy, but all of its various sectors.
            </Typography>
            <Margin bottom={4} />
        </Col>
        <Col xs={12} md={6}>
            {/* <Typography type="body2" align="right" className={classes.quote} inverted>
                Our mission is to accelerate that process by creating easy-to-use, highly functional tools to make blockchain available to every person or organization that can benefit from it.
            </Typography> */}
        </Col>
    </Row>
);


export default injectSheet(styles)(MainScreen);