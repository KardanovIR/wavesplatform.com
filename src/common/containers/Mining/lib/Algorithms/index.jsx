import React from 'react';

import Margin from 'src/common/components/Margin';
import Hidden from 'src/common/components/Hidden';
import SectionTitleText from 'src/common/components/SectionTitleText';
import { Row, Col } from 'src/common/components/Grid';

import Card from './lib/Card';

import ImagePoS from '!svg-react-loader!./img/pos.svg';
import ImagePoSMobile from '!svg-react-loader!./img/pos-mobile.svg';
import ImagePoW from '!svg-react-loader!./img/pow.svg';
import ImagePoWMobile from '!svg-react-loader!./img/pow-mobile.svg';

import { FormattedMessage } from 'react-intl';

const Algorithms = () => (
  <div>
    <SectionTitleText
      title={<FormattedMessage id="mining.algorithms.title" />}
      text={<FormattedMessage id="mining.algorithms.text" />}
    />
    <Row>
      <Col xs={12} sm={6}>
        <Card
          title={<FormattedMessage id="mining.algorithms.pow.title" />}
          imageMobile={<ImagePoWMobile />}
          image={<ImagePoW />}
          text={<FormattedMessage id="mining.algorithms.pow.text" />}
        />
        <Margin bottom={4} xsOnly />
      </Col>
      <Col xs={12} sm={6}>
        <Card
          title={<FormattedMessage id="mining.algorithms.pos.title" />}
          imageMobile={<ImagePoSMobile />}
          image={<ImagePoS />}
          text={<FormattedMessage id="mining.algorithms.pos.text" />}
        />
        <Margin bottom={4} xsOnly />
      </Col>
    </Row>
  </div>
);

export default Algorithms;
