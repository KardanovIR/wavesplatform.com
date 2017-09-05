import React from 'react';

import { Row, Col } from 'src/common/components/Grid';
import Typography from 'src/common/components/Typography';


import injectSheet from 'react-jss';
import styles from './styles';



const Facts = ({
    classes,
    tokens
}) => (
        <Row centered className={classes.row}>
            <Col xs={12} sm={5} className={classes.withMargin}>
                <Typography type="display1" className={classes.fact}>
                    A total of {tokens} tokens have been released on Waves
                </Typography>
            </Col>
            <Col xs={12} sm={5} smOffset={2}>
                <Typography type="display1" className={classes.fact}>
                    Totaling a market capitalisation of more than $1 000 000 000
                </Typography>
            </Col>
        </Row>
    );


export default injectSheet(styles)(Facts);