// @todo locale
import React from 'react';

import Typography from 'src/common/components/Typography';

import { FormattedMessage } from 'react-intl';

const DEX = () => (
  <div>
    <Typography type="display1" inverted>
      <FormattedMessage id="product.DEX.title" defaultMessage="Decentralised Exchange" />
    </Typography>
    <Typography type="body2" inverted>
      By trading on a centralized exchange, you risk losing your funds in the event of hacking,
      which has happened on almost all popular exchanges. The main advantage of our exchange is that
      the money is always stored in your wallet, and the match only compares orders.
      <br />
      <br />
      You retain complete control over your funds when trading them on our decentralized exchange.
      The DEX is powered by a matcher, which stores user orders and sends token exchange
      transactions for fulfilled orders.
    </Typography>
  </div>
);

export default DEX;
