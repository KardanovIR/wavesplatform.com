import React from 'react';

import Link from 'src/common/components/Link';
import IconProduct from 'src/common/components/IconProduct';

import { FormattedMessage } from 'react-intl';

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
                
              />
              <br />
              <Link
                target="_blank"
                href="https://wavesgo.com"
                textDecoration={false}
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
                
              />
              <br />
              <Link
                target="_blank"
                href="https://github.com/PyWaves"
                textDecoration={false}
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
              <FormattedMessage
                id="developers.wavesEcosystem.forum"
                
              />
              <br />
              <Link
                target="_blank"
                href="https://wavestalk.org"
                textDecoration={false}
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
