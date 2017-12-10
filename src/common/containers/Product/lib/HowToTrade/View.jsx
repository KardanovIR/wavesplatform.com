import React from 'react';

import Button from 'src/common/components/Button';
import Margin from 'src/common/components/Margin';
import Typography from 'src/common/components/Typography';

import { FormattedMessage } from 'react-intl';

const HowToStart = ({ onGetClientClick }) => (
  <div>
    <Typography type="display1">
      <FormattedMessage
        id="product.howToTrade.title"
        defaultMessage="How do I start trading on the Waves DEX?"
      />
    </Typography>
    <Typography type="body2">
      <FormattedMessage
        id="product.howToTrade.text"
        defaultMessage="After that, put the token on sale in the DEX tab at a price that will ensure that you achieve your project’s fundraising goals. You can create orders in several pairs if you want to accept different currencies, and you can even sell them at different prices to create bonus conditions for the first investors."
      />
    </Typography>
    <Margin bottom={2} />
    <Button
      onClick={onGetClientClick}
      key="main_cta_button"
      target="_blank"
      href="https://chrome.google.com/webstore/detail/wavesliteapp/kfmcaklajknfekomaflnhkjjkcjabogm"
      secondary
    >
      <FormattedMessage id="cta.getDesktopClient" defaultMessage="Get desktop client" />
    </Button>
  </div>
);

export default HowToStart;
