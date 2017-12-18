import React from 'react';

import Typography from 'src/common/components/Typography';

import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

const DEX = () => (
  <div>
    <Typography type="display1" inverted>
      <FormattedMessage id="product.DEX.title"  />
    </Typography>
    <Typography type="body2" inverted>
      <FormattedHTMLMessage id="product.DEX.description"  />
    </Typography>
  </div>
);

export default DEX;
