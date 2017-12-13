import React from 'react';

import { Row, Col } from 'src/common/components/Grid';
import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';

import Steps from './lib/Steps';

import { FormattedMessage } from 'react-intl';

import injectSheet from 'react-jss';

const styles = theme => ({
  text: {
    textAlign: 'center',
  },
  resourceColumn: {
    display: 'flex',
    marginBottom: theme.spacing.unit * 2,
  },
  [theme.mixins.atMedia('md')]: {
    resourceColumn: {
      marginBottom: 0,
    },
  },
});

const WavesEcosystem = ({ classes }) => (
  <div>
    <Steps>
      <Typography type="display3" inverted>
        <FormattedMessage id="developers.wavesEcosystem.title" defaultMessage="Waves Ecosystem" />
      </Typography>
      <Margin bottom={4} />
    </Steps>
  </div>
);

export default injectSheet(styles)(WavesEcosystem);
