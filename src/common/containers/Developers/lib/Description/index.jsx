import React from 'react';

import { Row, Col } from 'src/common/components/Grid';
import Article from 'src/common/components/Article';
import Margin from 'src/common/components/Margin';


import injectSheet from 'react-jss';
import styles from './styles';




const Description = () => (
    <Row>
        <Col xs={12} sm={6} lg={3}>
            <Article
                title="Proof-of-Stake algorithm"
                text="Waves’s blockchain uses a Proof-of-stake (PoS) algorithm, with participants being rewarded from the commission on transactions made."
            />
            <Margin bottom={4} />  
        </Col>
        <Col xs={12} sm={6} lg={3}>
            <Article
                title="High network channel capacity"
                text="Implementing the Bitcoin-NG algorithm adapted for PoS allowed us to increase the network bandwidth to hundreds of transactions per second."
            />
            <Margin bottom={4} />  
        </Col>
        <Col xs={12} sm={6} lg={3}>
            <Article
                title="Low fixed transaction fee"
                text="The minimum commission for a transfer of funds is 0,001 Waves. The fixed commission for market orders is 0,003 Waves. The price of releasing a token is 1 Waves and you do not pay to use your token."
            />
            <Margin bottom={4} />  
        </Col>
        <Col xs={12} sm={6} lg={3}>
            <Article
                title="Low-level support for various transactions"
                text="You don’t need smart contracts to release tokens or for leasing and making deals on the decentralized exchange, because transactions are performed natively."
            />
            <Margin bottom={4} />  
        </Col>
    </Row>
);


export default injectSheet(styles)(Description);