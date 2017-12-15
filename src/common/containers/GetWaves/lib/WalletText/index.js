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
          defaultMessage="Buy Waves in  a Waves client"
        />
      </Typography>
      <Typography type="body2" weight={400}>
        <FormattedHTMLMessage
          id="getWaves.wallet.text"
          defaultMessage="You will need WAVES to create custom tokens and fuel other operations on the Waves platform, like transferring and trading tokens. <br><br> There are lots of ways to get hold of WAVES, including through centralised exchanges, through the Waves DEX, and from the Waves client using a credit card via partnerships with third parties. You can trade them on popular exchanges such as Bittrex, and again on the DEX, against many other counterparty currencies, including EUR, USD and BTC."
        />
      </Typography>
      <Margin bottom={4} />
    </Col>
  </Row>
);

export default WalletText;
