import React from 'react';
import MQ from 'react-responsive';
// @todo refactor inject query
import { query } from 'src/common/theme/breakpoints.js';
import Typography from 'src/common/components/Typography';
import { Col, Row } from 'src/common/components/Grid';
import { FormattedMessage } from 'react-intl';
import Margin from 'src/common/components/Margin';
import AvatarTitleTextRow from 'src/common/components/AvatarTitleTextRow';
import IconProduct from 'src/common/components/IconProduct';
import ContentContainer from 'src/common/components/ContentContainer';

import injectSheet from 'react-jss';
import styles from './styles';

const RealLiquidity = () => (
  <AvatarTitleTextRow
    avatar={<IconProduct name="liquidity" />}
    title={
      <FormattedMessage
        id="products.dex.features.realLiqudity.title"
        defaultMessage="Real liquidity"
      />
    }
    text={
      <FormattedMessage
        id="products.dex.features.realLiqudity.description"
        defaultMessage=">$6,310,000 average 24h volume."
      />
    }
    inverted
  />
);

const LowFees = () => (
  <AvatarTitleTextRow
    avatar={<IconProduct name="fees" />}
    title={
      <FormattedMessage
        id="products.dex.features.lowFees.title"
        defaultMessage="Insanely low fees"
      />
    }
    text={
      <FormattedMessage
        id="products.dex.features.lowFees.description"
        defaultMessage="<$0.01 (0.003 WAVES) per order."
      />
    }
    inverted
  />
);

const CryptoGateways = () => (
  <AvatarTitleTextRow
    avatar={<IconProduct name="coins" />}
    title={
      <FormattedMessage
        id="products.dex.features.gateways.title"
        defaultMessage="Crypto gateways"
      />
    }
    text={
      <FormattedMessage
        id="products.dex.features.gateways.description"
        defaultMessage="BTC, BCH, ETH, WAVES, ZEC, XMR, DASH, LTC, EUR, USD, TRY."
      />
    }
    inverted
  />
);

const FriendlyUI = () => (
  <AvatarTitleTextRow
    avatar={<IconProduct name="ui" />}
    title={
      <FormattedMessage
        id="products.dex.features.ui.title"
        defaultMessage="Friendly UI"
      />
    }
    text={
      <FormattedMessage
        id="products.dex.features.ui.description"
        defaultMessage="Fast and easy to use."
      />
    }
    inverted
  />
);

const DEXFeatures = ({ classes }) => (
  <ContentContainer>
    <Typography type="display3" inverted align="center" alignMobile="center">
      <FormattedMessage
        id="products.dex.trade"
        defaultMessage="Trade on the world's fastest decentralised digital asset exchange"
      />
    </Typography>
    <Margin bottom={4} />
    <Row>
      <Col xs={12} tablet={7} md={5} className={classes.featuresContainer}>
        <RealLiquidity />
        <LowFees />
        <CryptoGateways />
        <FriendlyUI />
      </Col>
      <Col tablet={5} md={7} className={classes.imageContainer}>
        <MQ query={query.sm}>
          {matches => (
            <img
              src={
                matches
                  ? require('./img/dex@1x.jpg')
                  : require('./img/dexMobile.jpg')
              }
              alt=""
              className={classes.image}
            />
          )}
        </MQ>
      </Col>
    </Row>
  </ContentContainer>
);

export default injectSheet(styles)(DEXFeatures);
