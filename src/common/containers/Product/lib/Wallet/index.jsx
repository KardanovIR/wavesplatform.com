import React from 'react';

import AvatarTitleText from 'src/common/components/AvatarTitleText';
import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';

import { Row, Col } from 'src/common/components/Grid';


import injectSheet from 'react-jss';
import styles from './styles';



const Wallet = ({ classes }) => (
    <div className={classes.root}>
        <Row>
            <Col xs={12}>
                <Typography type="display3">Wallet</Typography>
                <Margin bottom={5} />
            </Col>
            <Col xs={12} md={4}>
                <AvatarTitleText
                    avatar={<div className={classes.wallet} />}
                    title="Create a multiple-currency wallet"
                    text="In addition to Waves tokens, 3,110 other kinds of tokens have also been released on the platform, many of which have gone through an ICO and have huge potential. We support fiat money ($, €) as well as cryptocurrencies such as bitcoin, ethereum, ethereum classic, and more. The list is constantly expanding."
                />
                <Margin bottom={5} />
            </Col>
            <Col xs={12} md={4}>
                <AvatarTitleText
                    avatar={<div className={classes.transfer} />}
                    title="Transfer funds from person to person"
                    text="Waves has a high network speed with hundreds of transactions per second and a small commission, which makes it as convenient as possible to transfer cryptocurrency between network members instantly."
                />
                <Margin bottom={5} />
            </Col>
            <Col xs={12} md={4}>
                <AvatarTitleText
                    avatar={<div className={classes.security} />}
                    title="Take advantage of our platform’s high security"
                    text="Your balance is stored on a blockchain that only you can access. Only you can manage your crypto assets. Your tokens are stored on a blockchain that only you can access."
                />
                <Margin bottom={5} />
            </Col>
        </Row>
    </div>
);


export default injectSheet(styles)(Wallet);