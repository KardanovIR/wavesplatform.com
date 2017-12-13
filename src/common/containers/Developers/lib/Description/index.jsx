import React from 'react';

import { Row, Col } from 'src/common/components/Grid';
import Article from 'src/common/components/Article';
import Margin from 'src/common/components/Margin';

import { FormattedMessage } from 'react-intl';

import injectSheet from 'react-jss';
import styles from './styles';

const Description = () => (
  <Row>
    <Col xs={12} sm={6}>
      <Article
        inverted
        title={
          <FormattedMessage
            id="developers.description.algorithm.title"
            defaultMessage="Proof-of-Stake algorithm"
          />
        }
        text={
          <FormattedMessage
            id="developers.description.algorithm.text"
            defaultMessage="Waves’s blockchain uses a Proof-of-stake (PoS) algorithm, with participants being rewarded from the commission on transactions made."
          />
        }
        textType="body2"
      />
      <Margin bottom={4} />
    </Col>
    <Col xs={12} sm={6}>
      <Article
        inverted
        title={
          <FormattedMessage
            id="developers.description.network.title"
            defaultMessage="High network channel capacity"
          />
        }
        text={
          <FormattedMessage
            id="developers.description.network.text"
            defaultMessage="Our new PoS consensus algorithm enables vastly increased network bandwidth, allowing for hundreds of transactions per second."
          />
        }
        textType="body2"
      />
      <Margin bottom={4} />
    </Col>
    <Col xs={12} sm={6}>
      <Article
        inverted
        title={
          <FormattedMessage
            id="developers.description.fees.title"
            defaultMessage="Low, fixed transaction fees"
          />
        }
        text={
          <FormattedMessage
            id="developers.description.fees.text"
            defaultMessage="The minimum fee for the transfer of funds is 0.001 WAVES. The fixed fee for market orders is 0.001 WAVES. The price of releasing a token is 1 WAVES, and you do not pay to use your own token."
          />
        }
        textType="body2"
      />
      <Margin bottom={4} />
    </Col>
    <Col xs={12} sm={6}>
      <Article
        inverted
        title={
          <FormattedMessage
            id="developers.description.transactions.title"
            defaultMessage="Low-level support for various transactions"
          />
        }
        text={
          <FormattedMessage
            id="developers.description.transactions.text"
            defaultMessage="You don’t need smart contracts to release tokens or for leasing and making deals on the decentralised exchange, because transactions are performed natively."
          />
        }
        textType="body2"
      />
      <Margin bottom={4} />
    </Col>
  </Row>
);

export default injectSheet(styles)(Description);
