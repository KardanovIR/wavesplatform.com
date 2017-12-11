import React from 'react';

import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';
import Article from 'src/common/components/Article';
import { Row, Col } from 'src/common/components/Grid';

import { FormattedMessage } from 'react-intl';

import injectSheet from 'react-jss';
import styles from './styles';

const DEX = ({ classes }) => (
  <div className={classes.root}>
    <Row className={classes.titleRow}>
      <Col xs={12} md={7}>
        <Typography type="display5" tagName="div" className={classes.title} inverted>
          <FormattedMessage id="home.DEX.title" defaultMessage="Decentralised Exchange" />
        </Typography>
      </Col>
      <div className={classes.imageWrapper}>
        <img src={require('./img/dexmain@1x.jpg')} srcSet={`${require('./img/dexmain@1x.jpg')} 1x, ${require('./img/dexmain@2x.jpg')} 2x`} alt="" className={classes.image} />
      </div>
    </Row>
    <Row>
      <Col xs={12} md={6} className={classes.article}>
        <Margin bottom={5}>
          <Article
            title={
              <FormattedMessage
                id="home.DEX.tradeNoLimits.title"
                defaultMessage="Trade without limits"
              />
            }
            text={
              <FormattedMessage
                id="home.DEX.tradeNoLimits.text"
                defaultMessage="There are no limits on withdrawals, and any cryptocurrency purchased immediately appears in your wallet’s balance."
              />
            }
            textType="body2"
            inverted
          />
        </Margin>
      </Col>
      <Col xs={12} md={6} className={classes.article}>
        <Margin bottom={5}>
          <Article
            title={
              <FormattedMessage
                id="home.DEX.tradeQuickly.title"
                defaultMessage="Trade quickly and safely"
              />
            }
            text={
              <FormattedMessage
                id="home.DEX.tradeQuickly.text"
                defaultMessage="A centralised matcher and high channel capacity allow you to make deals as quickly as on a centralised exchange, but without the risk of losing your money."
              />
            }
            textType="body2"
            inverted
          />
        </Margin>
      </Col>
      <Col xs={12} md={6} className={classes.article}>
        <Margin bottom={5}>
          <Article
            title={
              <FormattedMessage
                id="home.DEX.fees.title"
                defaultMessage="Don’t waste money on high commission fees"
              />
            }
            text={
              <FormattedMessage
                id="home.DEX.fees.text"
                defaultMessage="Our exchange has a small fixed commission on a per-order basis."
              />
            }
            textType="body2"
            inverted
          />
        </Margin>
      </Col>
      <Col xs={12} md={6} className={classes.article}>
        <Margin bottom={5}>
          <Article
            title={
              <FormattedMessage
                id="home.DEX.safety.title"
                defaultMessage="Never worry about the safety of your assets"
              />
            }
            text={
              <FormattedMessage
                id="home.DEX.safety.text"
                defaultMessage="Funds are kept in your wallet, not on the exchange."
              />
            }
            textType="body2"
            inverted
          />
        </Margin>
      </Col>
    </Row>
  </div>
);

export default injectSheet(styles)(DEX);
