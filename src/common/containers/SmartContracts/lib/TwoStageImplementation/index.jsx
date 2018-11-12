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
    leftColumn: [
      <FormattedMessage
        id="smartContracts.plans.stage1.left.title"
        defaultMessage="Stage 1"
      />,
      <FormattedMessage
        id="smartContracts.plans.stage1.left.subtitle"
        defaultMessage="Smart Accounts"
      />,
    ],
    rightColumn: [
      <FormattedMessage
        id="smartContracts.plans.stage1.right.text"
        defaultMessage="Lightweight implementation of smart contracts with limited functionality, based on the most popular and in-demand use cases."
      />,
    ],
  },

  {
    leftColumn: [
      <FormattedMessage
        id="smartContracts.plans.stage2.left.title"
        defaultMessage="Stage 2"
      />,
      <FormattedMessage
        id="smartContracts.plans.stage2.left.subtitle"
        defaultMessage="Smart Assets"
      />,
    ],
    rightColumn: [
      <FormattedMessage
        id="smartContracts.plans.stage2.right.text"
        defaultMessage="A unique feature that dramatically extends token functionality, offering the ability to script token behaviour and providing the flexibility to satisfy any developer’s needs."
      />,
    ],
  },

  {
        leftColumn: [
            <FormattedMessage
                id="smartContracts.plans.stage3.left.title"
                defaultMessage="Stage 3"
            />,
            <FormattedMessage
                id="smartContracts.plans.stage3.left.subtitle"
                defaultMessage="Smart Contracts"
            />,
        ],
        rightColumn: [
            <FormattedMessage
                id="smartContracts.plans.stage3.right.text"
                defaultMessage="Decentralised applications based on Turing-complete smart contracts will be able to carry out almost any computational task on the blockchain."
            />,
        ],
    },
];

const Block = ({ classes, leftColumn, rightColumn }) => (
  <Row className={classes.block}>
    <Col xs={2} sm={1}>
      <div className={classes.romb} />
    </Col>
    <Col xs={10} sm={11}>
      <Row>
        <Col xs={12} sm={3}>
          <ul className={classes.list}>
            {leftColumn.map((str, i) => (
              <li key={i} className={classes.listItem}>
                <Typography inverted {...(i === 0 ? {} : { weight: 600 })}>
                  {str}
                </Typography>
              </li>
            ))}
          </ul>
        </Col>
        <Col xs={12} sm={8} smOffset={1}>
          {rightColumn.map((str, i) => (
            <Typography type="body" inverted key={i}>
              {str}
            </Typography>
          ))}
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
      <FormattedMessage
        id="smartContracts.plans.title"
        defaultMessage="Smart Contracts Development Plan"
      />
    </Typography>
    <Margin bottom={4} />
    {FEATURES_LIST.map((block, i) => (
      <Block key={i} classes={classes} {...block} />
    ))}
  </div>
);

export default injectSheet(styles)(TwoStageImplementation);
