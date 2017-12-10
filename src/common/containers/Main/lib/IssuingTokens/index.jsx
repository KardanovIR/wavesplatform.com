import React from 'react';

import Typography from 'src/common/components/Typography';
import { Row, Col } from 'src/common/components/Grid';
import injectSheet from 'react-jss';
import styles from './styles';

import { FormattedMessage } from 'react-intl';

const IssuingTokens = ({classes}) => (
  <Row>
    <Col xs={12} md={11}>
      <Typography type="display1">
        <FormattedMessage id="home.issuingTokens.title" defaultMessage="Issue your own tokens" />
      </Typography>

      <Typography type="display3" className={classes.text}>
        <FormattedMessage
          id="home.issuingTokens.text"
          defaultMessage="To get your own internal digital currency. Use blockchain for crowdfunding, pay for goods, services. Use tokens to create voting systems and loyalty or discount programmes. They have released their own tokens on Waves:"
        />
      </Typography>
    </Col>
  </Row>
);

export default injectSheet(styles)(IssuingTokens);
