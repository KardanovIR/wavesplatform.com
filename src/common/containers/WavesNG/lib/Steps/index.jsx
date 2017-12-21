import React from 'react';

import { FormattedMessage } from 'react-intl';

import AvatarTitleText from 'src/common/components/AvatarTitleText';
import IconProduct from 'src/common/components/IconProduct';
import { Row, Col } from 'src/common/components/Grid';
import Margin from 'src/common/components/Margin';

import injectSheet from 'react-jss';
import styles from './styles';

const Step = injectSheet(styles)(
  ({ iconName, title, text, complete, classes }) => (
    <div>
      <AvatarTitleText
        avatar={<IconProduct name={iconName} circle />}
        title={title}
        text={text}
        cut={10}
        titleClassName={complete && classes.dimmed}
        textClassName={complete && classes.dimmed}
      />
      <Margin bottom={4} />
    </div>
  )
);

const Steps = () => {
  return (
    <div>
      <Row>
        <Col xs={12} sm={6} lg={3}>
          <Step
            complete
            iconName="script"
            title={<FormattedMessage id="wavesNG.preview.p1.title" />}
            text={<FormattedMessage id="wavesNG.preview.p1.text" />}
          />
        </Col>
        <Col xs={12} sm={6} lg={3}>
          <Step
            complete
            iconName="script"
            title={<FormattedMessage id="wavesNG.preview.p2.title" />}
            text={<FormattedMessage id="wavesNG.preview.p2.text" />}
          />
        </Col>
        <Col xs={12} sm={6} lg={3}>
          <Step
            complete
            iconName="script"
            title={<FormattedMessage id="wavesNG.preview.p3.title" />}
            text={<FormattedMessage id="wavesNG.preview.p3.text" />}
          />
        </Col>
        <Col xs={12} sm={6} lg={3}>
          <Step
            iconName="noLimits"
            title={<FormattedMessage id="wavesNG.preview.p4.title" />}
            text={<FormattedMessage id="wavesNG.preview.p4.text" />}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Steps;
