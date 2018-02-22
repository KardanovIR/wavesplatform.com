import React from 'react';
import PropTypes from 'prop-types';

import Link from 'src/common/components/Link';
import IconProduct from 'src/common/components/IconProduct';
import url from 'src/common/utils/url';

import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

import HowToBlock from 'src/common/components/HowToBlock';

const HowToWallet = ({
  children,
  title,
  getClientClick,
  eventPage,
  eventSource,
}) => (
  <div>
    {children}
    <HowToBlock
      title={title}
      steps={[
        {
          avatar: <IconProduct name="cloud" />,
          text: (
            <div>
              <FormattedHTMLMessage id="howToWallet.step1" />
              <br />
              <Link
                onClick={() =>
                  getClientClick({ page: eventPage, source: eventSource })
                }
                key="main_cta_button"
                target="_blank"
                href={url('online-client(beta)')}
                textDecoration={false}
                icon={null}
              >
                <FormattedMessage id="cta.onlineClient" />
              </Link>
            </div>
          ),
        },
        {
          avatar: <IconProduct name="coins" />,
          text: <FormattedMessage id="howToWallet.step2" />,
        },
        {
          avatar: <IconProduct name="dex" />,
          text: <FormattedMessage id="howToWallet.step3" />,
        },
      ]}
    />
  </div>
);

HowToWallet.propTypes = {
  eventPage: PropTypes.string.isRequired,
  eventSource: PropTypes.string.isRequired,
};

export default HowToWallet;
