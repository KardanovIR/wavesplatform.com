import React from 'react';

import AvatarTitleText from 'src/common/components/AvatarTitleText';
import Margin from 'src/common/components/Margin';
import IconProduct from 'src/common/components/IconProduct';
import { Row, Col } from 'src/common/components/Grid';



const DEXFeatures = () => (
    <Row>
        <Col xs={12} sm={6} md={5}>
            <AvatarTitleText
                avatar={<IconProduct name="safe" circle />}
                title="Trade quickly and securely"
                text="All transactions happen on the blockchain, and the order list is on the centralized matcher. This allows us to take full advantage of both centralized and decentralized technologies. In addition to that, the implementation of the latest developments (the adaptation of Bitcoin NG to a proof-of-stake system) has allowed us to increase the network capacity to hundreds of transactions per second."
            />
            <Margin bottom={5} />
        </Col>
        <Col xs={12} sm={6} md={5} mdOffset={1}>
            <AvatarTitleText
                avatar={<IconProduct name="noLimits" circle />}
                title="Trade without limits"
                text="On centralized exchanges, it’s the founders who decide which pairs will be traded, but our DEX allows you to trade any token pairs that are on the blockchain. In addition, there are no restrictions on the withdrawal of funds on the DEX . As soon as your transaction is complete, the cryptocurrency will appear in your wallet."
            />
            <Margin bottom={5} />
        </Col>
        <Col xs={12} sm={6} md={5}>
            <AvatarTitleText
                avatar={<IconProduct name="fees" circle />}
                title="Don't waste money on high fees"
                text="There is a very low and fixed fee on our exchange, which doesn’t depend on the trade. The commission per order is 0.003 Waves. If an order isn’t executed in full, an incomplete and proportional commission is calculated for you. By canceling the order, you lose nothing."
            />
            <Margin bottom={5} />
        </Col>
        <Col xs={12} sm={6} md={5} mdOffset={1}>
            <AvatarTitleText
                avatar={<IconProduct name="invisible" circle />}
                title="Protection from front running and other fraud"
                text="Your orders are transferred to the matcher on an encrypted channel and are not visible to other participants until the moment of execution. This excludes the possibility of manipulating information about an upcoming trade by unscrupulous traders."
            />
            <Margin bottom={5} />
        </Col>
    </Row>
);


export default DEXFeatures;