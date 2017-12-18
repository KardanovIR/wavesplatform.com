import React from 'react';

import AvatarTitleText from 'src/common/components/AvatarTitleText';
import Margin from 'src/common/components/Margin';
import IconProduct from 'src/common/components/IconProduct';
import { Row, Col } from 'src/common/components/Grid';

import { FormattedMessage } from 'react-intl';

const DEXFeatures = () => (
  <Row>
    <Col xs={12} sm={6}>
      <Margin bottom={3} xsOnly />
      <AvatarTitleText
        avatar={<IconProduct name="safe" />}
        title={<FormattedMessage id="product.DEXFeatures.security.title" />}
        text={<FormattedMessage id="product.DEXFeatures.security.text" />}
        inverted
      />
      <Margin bottom={5} />
      <br />
      <Margin bottom={3} xsOnly />
    </Col>
    <Col xs={12} sm={6}>
      <AvatarTitleText
        avatar={<IconProduct name="noLimits" />}
        title={
          <FormattedMessage id="product.DEXFeatures.tradeNoLimits.title" />
        }
        text={<FormattedMessage id="product.DEXFeatures.tradeNoLimits.text" />}
        inverted
      />
      <Margin bottom={5} />
      <br />
      <Margin bottom={3} xsOnly />
    </Col>
    <Col xs={12} sm={6}>
      <AvatarTitleText
        avatar={<IconProduct name="fees" />}
        title={<FormattedMessage id="product.DEXFeatures.fees.title" />}
        text={<FormattedMessage id="product.DEXFeatures.fees.text" />}
        inverted
      />
      <Margin bottom={5} />
      <br />
      <Margin bottom={3} xsOnly />
    </Col>
    <Col xs={12} sm={6}>
      <AvatarTitleText
        avatar={<IconProduct name="invisible" />}
        title={<FormattedMessage id="product.DEXFeatures.frontRunning.title" />}
        text={<FormattedMessage id="product.DEXFeatures.frontRunning.text" />}
        inverted
      />
      <Margin bottom={5} />
      <br />
      <Margin bottom={3} xsOnly />
    </Col>
  </Row>
);

export default DEXFeatures;
