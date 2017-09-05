import React from 'react';

import AvatarTitleText from 'src/common/components/AvatarTitleText';
import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';
import IconProduct from 'src/common/components/IconProduct';
import { Row, Col } from 'src/common/components/Grid';




const Wallet = () => (
        <Row>
            <Col xs={12}>
                <Typography type="display3">Wallet</Typography>
                <Margin bottom={5} />
            </Col>
            <Col xs={12} md={4}>
                <AvatarTitleText
                    avatar={<IconProduct name="wallet" circle />}
                    title="Create a multiple-currency wallet"
                    text="In addition to Waves tokens, thousands of other kinds of tokens have also been released on the platform, many of which have gone through an ICO and have huge potential. We support fiat money ($, €) as well as cryptocurrencies such as bitcoin, ethereum, ethereum classic, and more. The list is constantly expanding."
                />
                <Margin bottom={5} xsOnly />
            </Col>
            <Col xs={12} md={4}>
                <AvatarTitleText
                    avatar={<IconProduct name="transaction" circle />}
                    title="Transfer funds from person to person"
                    text="Waves has a high network speed with hundreds of transactions per second and only a small commission fee, which makes it as convenient as possible to transfer cryptocurrency between people instantly."
                />
                <Margin bottom={5} xsOnly />
            </Col>
            <Col xs={12} md={4}>
                <AvatarTitleText
                    avatar={<IconProduct name="shield" circle />}
                    title="Take advantage of our platform’s outstanding security"
                    text="We do not have access to your balance. Only you can manage your crypto assets. Your tokens are stored in a blockchain address that only you can access."
                />
                <Margin bottom={5} xsOnly />
            </Col>
        </Row>
);


export default Wallet;