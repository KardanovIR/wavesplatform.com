import React from 'react';

import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';
import AvatarWithText from 'src/common/components/AvatarWithText';
import IconProduct from 'src/common/components/IconProduct';
import { Row, Col } from 'src/common/components/Grid';

import { FormattedMessage } from 'react-intl';

import injectSheet from 'react-jss';
import styles from './styles';

const ColFeature = ({ children, className }) => (
  <Col xs={12} sm={6} md className={className}>
    {children}
  </Col>
);

const Wallet = ({ classes }) => (
  <div className={classes.root}>
    <Row>
      <Col xs={12} sm={9}>
        <Typography type="display1">
          <FormattedMessage id="home.wallet.title" defaultMessage="Wallet" />
        </Typography>
        <Typography type="body2">
          <FormattedMessage
            id="home.wallet.text"
            defaultMessage="Your funds are stored in a blockchain address that only you control. You are the only person who can access your crypto assets."
          />
        </Typography>
        <Margin bottom={4} />
      </Col>
    </Row>
    <Row>
      <Col xs={12} lg={10}>
        <Row className={classes.featuresRow}>
          <ColFeature className={classes.feature}>
            <AvatarWithText
              avatar={<IconProduct name="shield" circle />}
              text={
                <FormattedMessage
                  id="home.wallet.security"
                  defaultMessage="Take advantage of our platform’s outstanding security"
                />
              }
            />
          </ColFeature>
          <ColFeature className={classes.feature}>
            <AvatarWithText
              avatar={<IconProduct name="leasing" circle />}
              text={
                <FormattedMessage
                  id="home.wallet.interest"
                  defaultMessage="Receive interest on your Waves account balance"
                />
              }
            />
          </ColFeature>
          <ColFeature className={classes.feature}>
            <AvatarWithText
              avatar={<IconProduct name="transaction" circle />}
              text={
                <FormattedMessage
                  id="home.wallet.transfer"
                  defaultMessage="Transfer funds from person to person"
                />
              }
            />
          </ColFeature>
          <ColFeature className={classes.feature}>
            <AvatarWithText
              avatar={<IconProduct name="mining" circle />}
              text={
                <FormattedMessage
                  id="home.wallet.mining"
                  defaultMessage="Start mining — it’s easy with Waves"
                />
              }
            />
          </ColFeature>
          <ColFeature className={classes.feature}>
            <AvatarWithText
              avatar={<IconProduct name="wallet" circle />}
              text={
                <FormattedMessage
                  id="home.wallet.wallet"
                  defaultMessage="Create a multiple-currency wallet"
                />
              }
            />
          </ColFeature>
        </Row>
      </Col>
    </Row>
  </div>
);

export default injectSheet(styles)(Wallet);
