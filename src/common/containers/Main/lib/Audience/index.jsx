import React from 'react';

import Article from 'src/common/components/Article';
import Margin from 'src/common/components/Margin';
import { Row, Col } from 'src/common/components/Grid';

import injectSheet from 'react-jss';
import styles from './styles';

import { FormattedMessage } from 'react-intl';

const Audience = ({ classes }) => (
  <Row>
    <Col xs={12} sm={6} lg={4}>
      <Article
        title={
          <FormattedMessage id="home.audience.developers.title" defaultMessage="Developers">
            {message => <span className={classes.title}>{message}</span>}
          </FormattedMessage>
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
    <Col xs={12} sm={6} lg={4}>
      <Article
        title={
          <FormattedMessage
            className={classes.title}
            id="home.audience.traders.title"
            defaultMessage="Traders"
          >
            {message => <span className={classes.title}>{message}</span>}
          </FormattedMessage>
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
    <Col xs={12} sm={6} lg={4}>
      <Article
        title={
          <FormattedMessage
            className={classes.title}
            id="home.audience.organisations.title"
            defaultMessage="Organisations"
          >
            {message => <span className={classes.title}>{message}</span>}
          </FormattedMessage>
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

export default injectSheet(styles)(Audience);
