import React from 'react';

import Link from 'src/common/components/Link';
import IconProduct from 'src/common/components/IconProduct';
import HowToBlock from 'src/common/components/HowToBlock';
import url from 'src/common/utils/url';

import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

const HowToStart = ({ onGetClientClick }) => (
  <HowToBlock
    steps={[
      {
        avatar: <IconProduct name="cloud" />,
        text: (
          <div>
            <FormattedHTMLMessage id="product.howToToken.step1" />
            <br />
            <Link
              onClick={onGetClientClick}
              key="main_cta_button"
              target="_blank"
              href={url('online-client(beta)')}
              textDecoration={false}
            >
              <FormattedMessage id="cta.onlineClient" />
            </Link>
          </div>
        ),
      },
      {
        avatar: <IconProduct name="coins" />,
        text: <FormattedMessage id="product.howToToken.step2" />,
      },
      {
        avatar: <IconProduct name="dex" />,
        text: <FormattedMessage id="product.howToToken.step3" />,
      },
    ]}
  />
);

export default HowToStart;
