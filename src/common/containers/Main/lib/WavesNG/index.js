import React from 'react';
import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';

import { Row, Col } from 'src/common/components/Grid';
import Button from 'src/common/components/Button';

import { FormattedMessage } from 'react-intl';
import url from 'src/common/utils/url';

const WavesNgView = () => (
  <Row>
    <Col xs={12} sm={9}>
      <Typography type="display1">
        <FormattedMessage id="home.wavesNg.title" />
      </Typography>
      <Typography type="body2">
        <FormattedMessage id="home.wavesNg.text" />
      </Typography>
      <Margin bottom={3} />
      <Button href={url('waves-ng')} secondary>
        <FormattedMessage id="home.wavesNg.testWavesNg" />
      </Button>
      <Margin bottom={4} />
    </Col>
  </Row>
);

export default WavesNgView;
