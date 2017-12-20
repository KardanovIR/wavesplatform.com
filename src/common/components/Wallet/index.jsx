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
              text={<FormattedMessage id="home.wallet.security" />}
            />
          </ColFeature>
          <ColFeature className={classes.feature}>
            <AvatarWithText
              avatar={<IconProduct name="leasing" circle />}
              text={<FormattedMessage id="home.wallet.interest" />}
            />
          </ColFeature>
          <ColFeature className={classes.feature}>
            <AvatarWithText
              avatar={<IconProduct name="transaction" circle />}
              text={<FormattedMessage id="home.wallet.transfer" />}
            />
          </ColFeature>
          <ColFeature className={classes.feature}>
            <AvatarWithText
              avatar={<IconProduct name="mining" circle />}
              text={<FormattedMessage id="home.wallet.mining" />}
            />
          </ColFeature>
          <ColFeature className={classes.feature}>
            <AvatarWithText
              avatar={<IconProduct name="wallet" circle />}
              text={<FormattedMessage id="home.wallet.wallet" />}
            />
          </ColFeature>
        </Row>
      </Col>
    </Row>
  </div>
);

export default injectSheet(styles)(Wallet);
