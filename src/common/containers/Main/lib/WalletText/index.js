import React from 'react';
import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';

import { Row, Col } from 'src/common/components/Grid';

import { FormattedMessage } from 'react-intl';

const WalletText = () => (
  <Row>
    <Col xs={12} sm={9}>
      <Typography type="display1">
        <FormattedMessage id="home.wallet.title"  />
      </Typography>
      <Typography type="body2">
        <FormattedMessage
          id="home.wallet.text"
          
        />
      </Typography>
      <Margin bottom={4} />
    </Col>
  </Row>
);

export default WalletText;
