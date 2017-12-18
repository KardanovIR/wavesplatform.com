import React from 'react';
import PropTypes from 'prop-types';

import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';
import { Row, Col } from 'src/common/components/Grid';

import { FormattedMessage } from 'react-intl';

import injectSheet from 'react-jss';
import styles from './styles';

const FEATURES_LIST = [
  {
    shippingDate: <FormattedMessage id="home.plannedFeatures.0.shippingDate" />,
    features: [
      <FormattedMessage id="home.plannedFeatures.0.features.0" />,
      <FormattedMessage id="home.plannedFeatures.0.features.1" />,
      <FormattedMessage id="home.plannedFeatures.0.features.2" />,
      <FormattedMessage id="home.plannedFeatures.0.features.3" />,
      <FormattedMessage id="home.plannedFeatures.0.features.4" />,
    ],
  },
  {
    shippingDate: <FormattedMessage id="home.plannedFeatures.1.shippingDate" />,
    features: [
      <FormattedMessage id="home.plannedFeatures.1.features.0" />,
      <FormattedMessage id="home.plannedFeatures.1.features.1" />,
    ],
  },
  {
    shippingDate: <FormattedMessage id="home.plannedFeatures.2.shippingDate" />,
    features: [<FormattedMessage id="home.plannedFeatures.2.features.0" />],
  },
  {
    shippingDate: <FormattedMessage id="home.plannedFeatures.3.shippingDate" />,
    features: [
      <FormattedMessage id="home.plannedFeatures.3.features.0" />,
      <FormattedMessage id="home.plannedFeatures.3.features.1" />,
    ],
  },
];

const Block = ({ classes, features, shippingDate }) => (
  <Row className={classes.block}>
    <Col xs={2} sm={1}>
      <div className={classes.romb} />
    </Col>
    <Col xs={10} sm={10} md={7}>
      <Row>
        <Col xs={12} sm={3} md={4}>
          <Typography type="body" className={classes.date}>
            {shippingDate}
          </Typography>
        </Col>
        <Col xs={12} sm={8} md={8}>
          <ul className={classes.list}>
            {features.map((str, i) => (
              <li key={i} className={classes.listItem}>
                {str}
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Col>
  </Row>
);

Block.propTypes = {
  features: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.element])
  ),
  shippingDate: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

const PlannedFeatures = ({ classes }) => (
  <div className={classes.root}>
    <Typography type="display3">
      <FormattedMessage id="home.plannedFeatures.title" />
    </Typography>
    <Margin bottom={4} />
    {FEATURES_LIST.map((block, i) => (
      <Block
        key={i}
        classes={classes}
        features={block.features}
        shippingDate={block.shippingDate}
      />
    ))}
  </div>
);

export default injectSheet(styles)(PlannedFeatures);
