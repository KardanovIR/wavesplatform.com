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
    shippingDate: <FormattedMessage id="smartContracts.plans.stage1.date" />,
    features: [
      <FormattedMessage id="smartContracts.plans.stage1.title" />,
      <FormattedMessage id="smartContracts.plans.stage1.feature" />,
    ],
  },

  {
    shippingDate: <FormattedMessage id="smartContracts.plans.stage2.date" />,
    features: [
      <FormattedMessage id="smartContracts.plans.stage2.title" />,
      <FormattedMessage id="smartContracts.plans.stage2.feature" />,
    ],
  },
];

const Block = ({ classes, features, shippingDate }) => (
  <Row className={classes.block}>
    <Col xs={2} sm={1}>
      <div className={classes.romb} />
    </Col>
    <Col xs={10} sm={11}>
      <Row>
        <Col xs={12} sm={3}>
          <ul className={classes.list}>
            {features.map((str, i) => (
              <li key={i} className={classes.listItem}>
                <Typography inverted {...(i === 0 ? {} : { weight: 600 })}>
                  {str}
                </Typography>
              </li>
            ))}
          </ul>
        </Col>
        <Col xs={12} sm={8} smOffset={1}>
          <Typography type="body" inverted>
            {shippingDate}
          </Typography>
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

const TwoStageImplementation = ({ classes }) => (
  <div className={classes.root}>
    <Typography type="display3" inverted>
      <FormattedMessage id="smartContracts.plans.title" />
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

export default injectSheet(styles)(TwoStageImplementation);
