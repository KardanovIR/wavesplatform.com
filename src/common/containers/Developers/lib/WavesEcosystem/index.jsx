import React from 'react';

import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';

import Steps from './lib/Steps';

import { FormattedMessage } from 'react-intl';

const WavesEcosystem = () => (
  <div>
    <Steps>
      <Typography type="display3" inverted>
        <FormattedMessage id="developers.wavesEcosystem.title" />
      </Typography>
      <Margin bottom={4} />
    </Steps>
  </div>
);

export default WavesEcosystem;
