import React from 'react';

import Article from 'src/common/components/Article';
import Margin from 'src/common/components/Margin';
import { Row, Col } from 'src/common/components/Grid';

import { FormattedMessage } from 'react-intl';




const Audience = () => (
    <Row>
        <Col xs={12} sm={6} lg={3}>
            <Article
                title={
                    <FormattedMessage
                        id="home.audience.developers.title"
                        defaultMessage="Developers"
                    />
                }
                text={
                    <FormattedMessage
                        id="home.audience.developers.text"
                        defaultMessage="Enjoy the benefits of high network throughput capacity, low latency and low transaction fees."
                    />
                }
            />
            <Margin bottom={3} />  
        </Col>
        <Col xs={12} sm={6} lg={3}>
            <Article
                title={
                    <FormattedMessage
                        id="home.audience.investors.title"
                        defaultMessage="Investors"
                    />
                }
                text={
                    <FormattedMessage
                        id="home.audience.investors.text"
                        defaultMessage="Become part of a fast-growing area of the crypto world. Create a multiple-currency wallet and invest in verified crypto assets and the underlying WAVES platform token."
                    />
                }
            />
            <Margin bottom={3} />  
        </Col>
        <Col xs={12} sm={6} lg={3}>
            <Article
                title={
                    <FormattedMessage
                        id="home.audience.traders.title"
                        defaultMessage="Traders"
                    />
                }
                text={
                    <FormattedMessage
                        id="home.audience.traders.text"
                        defaultMessage="Store assets securely in the local lite client, whilst also trading them quickly and safely on the built-in decentralised exchange (DEX)."
                    />
                }
            />
            <Margin bottom={3} />  
        </Col>
        <Col xs={12} sm={6} lg={3}>
            <Article
                title={
                    <FormattedMessage
                        id="home.audience.organisations.title"
                        defaultMessage="Organisations"
                    />
                }
                text={
                    <FormattedMessage
                        id="home.audience.organisations.text"
                        defaultMessage="Issue your own blockchain token to give your business a head start - whatever your needs: crowdfunding, loyalty programs, voting and more."
                    />
                }
            />
            <Margin bottom={3} />  
        </Col>
    </Row>
);



export default Audience;