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
                text="Waves’s blockchain uses a Proof-of-Stake (PoS) algorithm, with participants being rewarded from the commission on transactions made."
            />
            <Margin bottom={4} />  
        </Col>
        <Col xs={12} sm={6} lg={3}>
            <Article
                title="High network channel capacity"
                text="Our new PoS consensus algorithm enables vastly increased network bandwidth, allowing for hundreds of transactions per second."
            />
            <Margin bottom={4} />  
        </Col>
        <Col xs={12} sm={6} lg={3}>
            <Article
                title="Low, fixed transaction fees"
                text="The minimum fee for the transfer of funds is 0.001 WAVES. The fixed fee for market orders is 0.001 WAVES. The price of releasing a token is 1 WAVES, and you do not pay to use your own token."
            />
            <Margin bottom={4} />  
        </Col>
        <Col xs={12} sm={6} lg={3}>
            <Article
                title="Low-level support for various transactions"
                text="You don’t need smart contracts to release tokens or for leasing and making deals on the decentralised exchange, because transactions are performed natively."
            />
            <Margin bottom={4} />  
        </Col>
    </Row>
);


export default injectSheet(styles)(Description);