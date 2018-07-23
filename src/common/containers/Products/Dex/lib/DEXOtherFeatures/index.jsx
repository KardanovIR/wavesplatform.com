import React from 'react';

import AvatarTitleTextRow from 'src/common/components/AvatarTitleTextRow';
import IconProduct from 'src/common/components/IconProduct';
import Typography from 'src/common/components/Typography';
import { Col, Row } from 'src/common/components/Grid';
import { FormattedMessage } from 'react-intl';
import Margin from 'src/common/components/Margin';

/* eslint-disable react/display-name */
const OtherFeatures = {
  Anonymous: () => (
    <AvatarTitleTextRow
      avatar={<IconProduct name="applicationWaves" />}
      title={
        <FormattedMessage
          id="products.dex.features.anonymous.title"
          defaultMessage="Decentralized and anonymous"
        />
      }
      text={
        <FormattedMessage
          id="products.dex.features.anonymous.description"
          defaultMessage="No middle man or difficult registration procedures. Funds are stored safely in your wallet, not on the exchange."
        />
      }
      inverted
    />
  ),
  FastAndSecure: () => (
    <AvatarTitleTextRow
      avatar={<IconProduct name="tokenFreeze" />}
      title={
        <FormattedMessage
          id="products.dex.features.fastAndSecure.title"
          defaultMessage="Fast and secure."
        />
      }
      text={
        <FormattedMessage
          id="products.dex.features.fastAndSecure.description"
          defaultMessage="Matcher nodes execute trades in near-real time, whilst the Waves-NG protocol ensures that settlement occurs on the blockchain within seconds — giving speeds similar to centralised exchanges."
        />
      }
      inverted
    />
  ),
  Withdrawals: () => (
    <AvatarTitleTextRow
      avatar={<IconProduct name="wallet" />}
      title={
        <FormattedMessage
          id="products.dex.features.withdrawals.title"
          defaultMessage="Unlimited withdrawals for crypto"
        />
      }
      text={
        <FormattedMessage
          id="products.dex.features.withdrawals.description"
          defaultMessage="No high fees or daily limits on how much can be withdrawn."
        />
      }
      inverted
    />
  ),
  Token: () => (
    <AvatarTitleTextRow
      avatar={<IconProduct name="dexList" />}
      title={
        <FormattedMessage
          id="products.dex.features.token.title"
          defaultMessage="Issue a token and see it on DEX"
        />
      }
      text={
        <FormattedMessage
          id="products.dex.features.token.description"
          defaultMessage="All tokens launched within the Waves Platform appear on DEX immediately after issuance and can be traded instantly."
        />
      }
      inverted
    />
  ),
  Pairs: () => (
    <AvatarTitleTextRow
      avatar={<IconProduct name="trading" />}
      title={
        <FormattedMessage
          id="products.dex.features.pairs.title"
          defaultMessage="Trading of any pairs"
        />
      }
      text={
        <FormattedMessage
          id="products.dex.features.pairs.description"
          defaultMessage="Easy and flexible search for a given pair, from hundreds of thousands of possibilities."
        />
      }
      inverted
    />
  ),
  AnyDevice: () => (
    <AvatarTitleTextRow
      avatar={<IconProduct name="device" />}
      title={
        <FormattedMessage
          id="products.dex.features.device.title"
          defaultMessage="Available for any device."
        />
      }
      text={
        <FormattedMessage
          id="products.dex.features.device.description"
          defaultMessage="Use the DEX anywhere, whether in a browser window or in standalone or mobile versions."
        />
      }
      inverted
    />
  ),
};

const DEXOtherFeatures = () => (
  <div>
    <Typography type="display3" inverted align="center" alignMobile="center">
      <FormattedMessage
        id="products.dex.features.otherFeatures.title"
        defaultMessage="Among the amazing features of the Waves DEX are the following:"
      />
    </Typography>
    <Margin bottom={4} />
    <Row>
      <Col xs={12} tablet={6}>
        <OtherFeatures.Anonymous />
      </Col>
      <Col xs={12} tablet={6}>
        <OtherFeatures.FastAndSecure />
      </Col>
      <Col xs={12} tablet={6}>
        <OtherFeatures.Withdrawals />
      </Col>
      <Col xs={12} tablet={6}>
        <OtherFeatures.Token />
      </Col>
      <Col xs={12} tablet={6}>
        <OtherFeatures.Pairs />
      </Col>
      <Col xs={12} tablet={6}>
        <OtherFeatures.AnyDevice />
      </Col>
    </Row>
  </div>
);

export default DEXOtherFeatures;
