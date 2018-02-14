import React from 'react';

import { Row, Col } from 'src/common/components/Grid';
import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';

import { FormattedMessage, FormattedNumber } from 'react-intl';

const Facts = ({ tokens }) => (
  <Row>
    <Col xs={12}>
      <Typography type="display3Inverted" weight={500}>
        <FormattedMessage
          id="facts.tokens"
          values={{ number: <FormattedNumber value={tokens} /> }}
        />
      </Typography>
      <Margin bottom={5} />
    </Col>
    <Col xs={12}>
      <Typography type="display3Inverted" weight={500}>
        <FormattedMessage
          id="facts.capitalisation"
          values={{ cap: <FormattedNumber value={1000000000} /> }}
        />
      </Typography>
    </Col>
  </Row>
);

export default Facts;
