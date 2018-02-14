import React from 'react';

import Typography from 'src/common/components/Typography';
import AvatarTitleText from 'src/common/components/AvatarTitleText';
import Margin from 'src/common/components/Margin';
import IconProduct from 'src/common/components/IconProduct';
import { Row, Col } from 'src/common/components/Grid';

import { FormattedMessage } from 'react-intl';

import injectSheet from 'react-jss';
import styles from './styles';

const IssuingTokens = ({ classes }) => (
  <div>
    <Row>
      <Col xs={12} md={6}>
        <Typography type="display3Inverted">
          <FormattedMessage id="products.token.issuingTokens.title" />
        </Typography>
        <Margin bottom={2} />
      </Col>
      <Col xs={12} sm={5} md={8}>
        <Typography type="body">
          <FormattedMessage id="products.token.issuingTokens.description.p1" />
          <br />
          <br />
          <FormattedMessage id="products.token.issuingTokens.description.p2" />
        </Typography>
        <Margin bottom={4} />
      </Col>
      <Col sm={4} smOffset={1} mdOffset={0}>
        <div className={classes.imageWrapper}>
          <div className={classes.image} />
        </div>
      </Col>
    </Row>

    <Margin bottom={1} />

    <Row>
      <Col xs={12} sm={5}>
        <AvatarTitleText
          avatar={<IconProduct name="target" />}
          title={
            <FormattedMessage id="products.token.issuingTokens.raiseFunds.title" />
          }
          text={
            <FormattedMessage id="products.token.issuingTokens.raiseFunds.text" />
          }
        />
        <Margin bottom={4} />
      </Col>
      <Col xs={12} smOffset={1} sm={5}>
        <AvatarTitleText
          avatar={<IconProduct name="message" />}
          title={
            <FormattedMessage id="products.token.issuingTokens.loyalUsers.title" />
          }
          text={
            <FormattedMessage id="products.token.issuingTokens.loyalUsers.text" />
          }
        />
        <Margin bottom={4} />
      </Col>
    </Row>
  </div>
);

export default injectSheet(styles)(IssuingTokens);
