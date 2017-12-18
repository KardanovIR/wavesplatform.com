import React from 'react';
import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';

import { Row, Col } from 'src/common/components/Grid';

import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

const WalletText = () => (
  <Row>
    <Col xs={12} sm={9}>
      <Typography type="display1" weight={400}>
        <FormattedMessage
          id="getWaves.wallet.title"
          
        />
      </Typography>
      <Typography type="body2" weight={400}>
        <FormattedHTMLMessage
          id="getWaves.wallet.text"
          
        />
      </Typography>
      <Margin bottom={4} />
    </Col>
  </Row>
);

export default WalletText;
