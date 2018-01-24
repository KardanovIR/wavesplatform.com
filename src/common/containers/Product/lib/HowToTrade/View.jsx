import React from 'react';

import Button from 'src/common/components/Button';
import Margin from 'src/common/components/Margin';
import Typography from 'src/common/components/Typography';
import url from 'src/common/utils/url';

import { FormattedMessage } from 'react-intl';

const HowToStart = ({ onGetClientClick }) => (
  <div>
    <Typography type="display1">
      <FormattedMessage id="product.howToTrade.title" />
    </Typography>
    <Typography type="body2">
      <FormattedMessage id="product.howToTrade.text" />
    </Typography>
    <Margin bottom={2} />
    <Button
      onClick={onGetClientClick}
      key="main_cta_button"
      target="_blank"
      href={url('online-client')}
      secondary
    >
      <FormattedMessage id="cta.getClient" />
    </Button>
  </div>
);

export default HowToStart;
