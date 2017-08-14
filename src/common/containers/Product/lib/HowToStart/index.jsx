import React from 'react';

import { Row, Col } from 'src/common/components/Grid';
import Link from 'src/common/components/Link';
import Margin from 'src/common/components/Margin';
import Typography from 'src/common/components/Typography';

import Step from './Step';

import injectSheet from 'react-jss';
import styles from './styles';




const HowToStart = ({ classes }) => (
    <Row className={classes.root}>
        <Col xs={12}>
            <Typography className={classes.title} type="display1">How do I start using my Waves wallet?</Typography>
            <Margin bottom={3} />
        </Col>
        <Col xs={12} md={4} className={classes.column}>
            <Margin bottom={3} className={classes.columnContent}>
                <Step avatar={<div style={{height: '100%', background: 'lightcyan'}} />}>
                    <span>First, <Link href="/get-client">download</Link> and install the Waves client.</span>
                </Step>
            </Margin>
        </Col>
        <Col xs={12} md={4} className={classes.column}>
            <Margin bottom={3} className={classes.columnContent}>
                <Step avatar={<div style={{height: '100%', background: 'lightcyan'}} />}>
                    Fill your wallet with bitcoins, ethereum, ethereum classic, US dollars or Euros.
                </Step>
            </Margin>
        </Col>
        <Col xs={12} md={4} className={classes.column}>
            <Margin bottom={3} className={classes.columnContent}>
                <Step avatar={<div style={{height: '100%', background: 'lightcyan'}} />}>
                    You can convert them to Waves tokens using the decentralized exchange, which you can find on the Waves client. 
                </Step>
            </Margin>
        </Col>
        <Col xs={12}>
            <Margin bottom={3}>
                <Typography className={classes.quote} type="quote" color="gray-500">
                    <span>To complete your first operation on the DEX, you need 0.003 Waves, which you can buy directly with $ or €, or get them for free on the</span>
                    <Link href="#">Waves faucet.</Link>
                </Typography>
            </Margin>
        </Col>
    </Row>
);


export default injectSheet(styles)(HowToStart);