import React from 'react';

import AvatarWithText from 'src/common/components/AvatarWithText/index';
import IconProduct from 'src/common/components/IconProduct/index';
import { Row, Col } from 'src/common/components/Grid/index';

import { FormattedMessage } from 'react-intl';

import injectSheet from 'react-jss';
import styles from './styles';

const ColFeature = ({ children, className }) => (
  <Col xs={12} sm={6} md className={className}>
    {children}
  </Col>
);

const Wallet = ({ children, classes }) => (
  <div className={classes.root}>
    {children}
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
