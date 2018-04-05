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
        defaultMessage="Non-Turing-complete Contracts"
      />,
    ],
    rightColumn: [
      <FormattedMessage
        id="smartContracts.plans.stage1.right.title"
        defaultMessage="RIDE language."
      />,
      <FormattedMessage
        id="smartContracts.plans.stage1.right.subtitle"
        defaultMessage="Lightweight implementation of smart contracts via smart assets and smart accounts. Release in a testnet in Spring 2018."
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
        defaultMessage="Turing-complete Contracts"
      />,
    ],
    rightColumn: [
      <FormattedMessage
        id="smartContracts.plans.stage2.right.title"
        defaultMessage="RIDEON language."
      />,
      <FormattedMessage
        id="smartContracts.plans.stage2.right.subtitle"
        defaultMessage="Turing-complete smart contracts will be able to undertake complex processes on the blockchain according to a range of different conditions. After the first release of smart accounts in Spring 2018 and extensive testing and feedback, Turing-complete smart contracts will follow, enabling developers to implement sophisticated logic to address almost any computational task."
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
            <Typography
              type="body"
              inverted
              key={i}
              {...(i === 0 ? { weight: 600 } : {})}
            >
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
        defaultMessage="Two-stage Implementation"
      />
    </Typography>
    <Margin bottom={4} />
    {FEATURES_LIST.map((block, i) => (
      <Block key={i} classes={classes} {...block} />
    ))}
  </div>
);

export default injectSheet(styles)(TwoStageImplementation);
