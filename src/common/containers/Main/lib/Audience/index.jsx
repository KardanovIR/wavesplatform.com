import React from 'react';

import Article from 'src/common/components/Article';
import Margin from 'src/common/components/Margin';
import { Row, Col } from 'src/common/components/Grid';




const Audience = () => (
    <Row>
        <Col xs={12} sm={6} lg={3}>
            <Article
                title="Developers"
                text="Enjoy the benefits of high network throughput capacity, low latency and low transaction fees."
            />
            <Margin bottom={3} />  
        </Col>
        <Col xs={12} sm={6} lg={3}>
            <Article
                title="Investors"
                text="Become part of a fast-growing area of the crypto world. Create a multiple-currency wallet and invest in verified crypto assets and the underlying WAVES platform token."
            />
            <Margin bottom={3} />  
        </Col>
        <Col xs={12} sm={6} lg={3}>
            <Article
                title="Traders"
                text="Store assets securely in the local lite client, whilst also trading them quickly and safely on the built-in decentralised exchange (DEX)."
            />
            <Margin bottom={3} />  
        </Col>
        <Col xs={12} sm={6} lg={3}>
            <Article
                title="Organizations"
                text="Issue your own blockchain token to give your business a head start - whatever your needs: crowdfunding, loyalty programs, voting and more."
            />
            <Margin bottom={3} />  
        </Col>
    </Row>
);



export default Audience;