import React from 'react';

import Article from 'src/common/components/Article';
import Margin from 'src/common/components/Margin';
import { Row, Col } from 'src/common/components/Grid';




const Audience = () => (
    <Row>
        <Col xs={12} sm={6} lg={3}>
            <Article
                title="Developers"
                text="Waves’s blockchain uses a Proof-of-stake (PoS) algorithm, with participants being rewarded from the commission on transactions made."
            />
            <Margin bottom={3} />  
        </Col>
        <Col xs={12} sm={6} lg={3}>
            <Article
                title="Investors"
                text="Implementing the Bitcoin-NG algorithm adapted for PoS allowed us to increase the network bandwidth to hundreds of transactions per second."
            />
            <Margin bottom={3} />  
        </Col>
        <Col xs={12} sm={6} lg={3}>
            <Article
                title="For traders"
                text="The minimum commission for a transfer of funds is 0,001 Waves. The fixed commission for market orders is 0,003 Waves. The price of releasing a token is 1 Waves and you do not pay to use your token."
            />
            <Margin bottom={3} />  
        </Col>
        <Col xs={12} sm={6} lg={3}>
            <Article
                title="Organizations"
                text="You don’t need smart contracts to release tokens or for leasing and making deals on the decentralized exchange, because transactions are performed natively."
            />
            <Margin bottom={3} />  
        </Col>
    </Row>
);



export default Audience;