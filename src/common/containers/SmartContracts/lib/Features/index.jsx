import React from 'react';

import AvatarTitleText from 'src/common/components/AvatarTitleText';
import Margin from 'src/common/components/Margin';
import IconProduct from 'src/common/components/IconProduct';
import { Row, Col } from 'src/common/components/Grid';
import Typography from 'src/common/components/Typography';

import { FormattedMessage } from 'react-intl';

const SCFeatures = () => (
  <div>
    <Row>
      <Col xs={6} xsOffset={3}>
        <Typography type="display2" inverted align="center">
          What Will Smart Contracts Bring to Waves?
        </Typography>
      </Col>
    </Row>
    <Margin bottom={4} />
    <Row>
      <Col xs={12} sm={6}>
        <Margin bottom={3} xsOnly />
        <AvatarTitleText
          avatar={<IconProduct name="wallet" />}
          title={<FormattedMessage id="smartContracts.features.1.title" />}
          text={<FormattedMessage id="smartContracts.features.1.text" />}
          inverted
        />
        <Margin bottom={5} />
        <br />
        <Margin bottom={3} xsOnly />
      </Col>
      <Col xs={12} sm={6}>
        <AvatarTitleText
          avatar={<IconProduct name="atomicSwap" />}
          title={<FormattedMessage id="smartContracts.features.2.title" />}
          text={<FormattedMessage id="smartContracts.features.2.text" />}
          inverted
        />
        <Margin bottom={5} />
        <br />
        <Margin bottom={3} xsOnly />
      </Col>
      <Col xs={12} sm={6}>
        <AvatarTitleText
          avatar={<IconProduct name="tokenFreeze" />}
          title={<FormattedMessage id="smartContracts.features.3.title" />}
          text={<FormattedMessage id="smartContracts.features.3.text" />}
          inverted
        />
        <Margin bottom={5} />
        <br />
        <Margin bottom={3} xsOnly />
      </Col>
      <Col xs={12} sm={6}>
        <AvatarTitleText
          avatar={<IconProduct name="turingContracts" />}
          title={<FormattedMessage id="smartContracts.features.4.title" />}
          text={<FormattedMessage id="smartContracts.features.4.text" />}
          inverted
        />
        <Margin bottom={5} />
        <br />
        <Margin bottom={3} xsOnly />
      </Col>
    </Row>
  </div>
);

export default SCFeatures;
