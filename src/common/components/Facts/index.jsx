import React from 'react';

import { Row, Col } from 'src/common/components/Grid';
import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';

import { FormattedMessage, FormattedNumber } from 'react-intl';

import injectSheet from 'react-jss';
import styles from './styles';

const Facts = ({ classes, tokens }) => (
  <Row>
    <Col xs={12}>
      <Typography type="display5" weight={500} className={classes.text}>
        <FormattedMessage
          id="facts.tokens"
          values={{ number: <FormattedNumber value={tokens} /> }}
        />
      </Typography>
      <Margin bottom={5} />
    </Col>
    <Col xs={12}>
      <Typography type="display5" weight={500} className={classes.text}>
        <FormattedMessage
          id="facts.capitalisation"
          values={{ cap: <FormattedNumber value={1000000000} /> }}
        />
      </Typography>
    </Col>
  </Row>
);

export default injectSheet(styles)(Facts);
