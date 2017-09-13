import React from 'react';

import AvatarTitleText from 'src/common/components/AvatarTitleText';
import Margin from 'src/common/components/Margin';
import IconProduct from 'src/common/components/IconProduct';
import { Row, Col } from 'src/common/components/Grid';

import { FormattedMessage } from 'react-intl';


const DEXFeatures = () => (
    <Row>
        <Col xs={12} sm={6} md={5}>
            <AvatarTitleText
                avatar={<IconProduct name="safe" circle />}
                title={
                    <FormattedMessage
                        id="product.DEXFeatures.security.title"
                        defaultMessage="Trade quickly and securely"
                    />    
                }
                text={
                    <FormattedMessage
                        id="product.DEXFeatures.security.text"
                        defaultMessage="All transactions happen on the blockchain, and only the order list is held on the centralised matcher. This allows us to take full advantage of both centralised and decentralised technologies. In addition, implementing the latest developments has allowed us to increase network capacity to hundreds of transactions per second."
                    />    
                }
            />
            <Margin bottom={5} />
        </Col>
        <Col xs={12} sm={6} md={5} mdOffset={1}>
            <AvatarTitleText
                avatar={<IconProduct name="noLimits" circle />}
                title={
                    <FormattedMessage
                        id="product.DEXFeatures.tradeNoLimits.title"
                        defaultMessage="Trade without limits"
                    />    
                }
                text={
                    <FormattedMessage
                        id="product.DEXFeatures.tradeNoLimits.text"
                        defaultMessage="On centralised exchanges, it’s the administrators who decide which pairs will be traded. Waves’ DEX allows you to trade any token pairs that are on the blockchain. In addition, there are no restrictions on the withdrawal of funds from the DEX. As soon as your transaction is complete, the cryptocurrency will appear in your wallet."
                    />    
                }
            />
            <Margin bottom={5} />
        </Col>
        <Col xs={12} sm={6} md={5}>
            <AvatarTitleText
                avatar={<IconProduct name="fees" circle />}
                title={
                    <FormattedMessage
                        id="product.DEXFeatures.fees.title"
                        defaultMessage="Don’t waste money on high fees"
                    />    
                }
                text={
                    <FormattedMessage
                        id="product.DEXFeatures.fees.text"
                        defaultMessage="There is a very low and fixed fee on our exchange, which doesn’t depend on the size of the trade. The commission per order is 0.003 WAVES. If an order isn’t executed in full, an incomplete and proportional commission is calculated for you. By canceling the order, you lose nothing."
                    />    
                }
            />
            <Margin bottom={5} />
        </Col>
        <Col xs={12} sm={6} md={5} mdOffset={1}>
            <AvatarTitleText
                avatar={<IconProduct name="invisible" circle />}
                title={
                    <FormattedMessage
                        id="product.DEXFeatures.frontRunning.title"
                        defaultMessage="Protection from front-running and other fraud"
                    />
                }
                text={
                    <FormattedMessage
                        id="product.DEXFeatures.frontRunning.text"
                        defaultMessage="Your orders are transferred to the matcher over an encrypted channel and are not visible to other participants until the moment of execution. This excludes the possibility of unscrupulous traders manipulating information about an upcoming trade."
                    />    
                }
            />
            <Margin bottom={5} />
        </Col>
    </Row>
);


export default DEXFeatures;