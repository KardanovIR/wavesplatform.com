import React from 'react';
import PropTypes from 'prop-types';

import Link from 'src/common/components/Link';
import IconProduct from 'src/common/components/IconProduct';

import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

import HowToBlock from 'src/common/components/HowToBlock';

const HowToWallet = ({ children, title }) => (
  <div>
    {children}

    <HowToBlock
      inverted
      title={title}
      steps={[
        {
          avatar: <IconProduct name="list" />,
          text: (
            <div>
              <FormattedMessage
                id="developers.wavesEcosystem.explorer"
                defaultMessage="Function-rich blockchain explorer"
              />
              <br/>
              <Link
                target="_blank"
                href="https://wavesgo.com"
                textDecoration={false}
                icon={null}
              >
                wavesgo.com
              </Link>
            </div>
          ),
        },
        {
          avatar: <IconProduct name="script" />,
          text: (
            <div>
              <FormattedMessage
                id="developers.wavesEcosystem.pywaves"
                defaultMessage="Python API client and useful scripts"
              />
              <br/>
              <Link
                target="_blank"
                href="https://github.com/PyWaves"
                textDecoration={false}
                icon={null}
              >
                github.com/PyWaves
              </Link>
            </div>
          ),
        },
        {
          avatar: <IconProduct name="message" />,
          text: (
            <div>
              <FormattedMessage id="developers.wavesEcosystem.forum" defaultMessage="Waves forum" />
              <br/>
              <Link
                target="_blank"
                href="https://wavestalk.org"
                textDecoration={false}
                icon={null}
              >
                wavestalk.org
              </Link>
            </div>
          ),
        },
      ]}
    />
  </div>
);

export default HowToWallet;
