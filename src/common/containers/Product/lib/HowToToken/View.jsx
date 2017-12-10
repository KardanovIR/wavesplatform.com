import React from 'react';

import Link from 'src/common/components/Link';
import IconProduct from 'src/common/components/IconProduct';
import HowToBlock from 'src/common/components/HowToBlock';

import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

const HowToStart = ({ onGetClientClick }) => (
  <HowToBlock
    steps={[
      {
        avatar: <IconProduct name="cloud" />,
        text: (
          <div>
            <FormattedHTMLMessage
              id="product.howToToken.step1"
              defaultMessage="First, install the <br/> Waves client"
            />
            <br />
            <Link
              onClick={onGetClientClick}
              key="main_cta_button"
              target="_blank"
              href="https://chrome.google.com/webstore/detail/wavesliteapp/kfmcaklajknfekomaflnhkjjkcjabogm"
              textDecoration={false}
            >
              <FormattedMessage id="cta.getClient" />
            </Link>
          </div>
        ),
      },
      {
        avatar: <IconProduct name="coins" />,
        text: (
          <FormattedMessage
            id="product.howToToken.step2"
            defaultMessage="Fill your wallet with bitcoins, ethereum, ethereum classic, US dollars or Euros."
          />
        ),
      },
      {
        avatar: <IconProduct name="dex" />,
        text: (
          <FormattedMessage
            id="product.howToToken.step3"
            defaultMessage="You will need to pay a small commission in Waves to trade any pairs, so buy Waves in advance."
          />
        ),
      },
    ]}
  />
);

export default HowToStart;
