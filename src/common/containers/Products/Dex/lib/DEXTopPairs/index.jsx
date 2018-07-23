import React from 'react';
import Typography from 'src/common/components/Typography';

import PairRow from './lib/PairRow';
import { Row, Col } from 'src/common/components/Grid';

import { FormattedMessage } from 'react-intl';

import injectSheet from 'react-jss';
import styles from './styles';
import MQ from 'react-responsive';
import { query } from 'src/common/theme/breakpoints';
import Margin from 'src/common/components/Margin';
const Unavailable = () => (
  <Typography inverted type="display1">
    <FormattedMessage
      id="products.dex.topPairs.notAvailable"
      defaultMessage="Service is temporarily unavalaible. Try to refresh page."
    />
  </Typography>
);
const DEXTopPairs = ({ classes, pairs }) => {
  if (!pairs || pairs.length === 0) {
    return (
      <Col xs={12}>
        <Typography inverted type="display2">
          <FormattedMessage id="products.dex.topPairs.title" />
        </Typography>
        <Margin />
        <Unavailable />
      </Col>
    );
  }
  return (
    <Col xs={12}>
      <Typography inverted type="display2">
        <FormattedMessage id="products.dex.topPairs.title" />
      </Typography>
      <Margin />
      <Row>
        <Col xs={6} tablet={3}>
          <Typography noMargin inverted className={classes.header}>
            <FormattedMessage
              id="products.dex.topPairs.pair"
              defaultMessage="Pair"
            />
          </Typography>
        </Col>
        <MQ query={query.tablet}>
          <Col tablet={3}>
            <Typography
              align="right"
              noMargin
              inverted
              className={classes.header}
            >
              <FormattedMessage
                id="products.dex.topPairs.price"
                defaultMessage="Price"
              />
            </Typography>
          </Col>
          <Col tablet={3}>
            <Typography
              align="right"
              noMargin
              inverted
              className={classes.header}
            >
              <FormattedMessage
                id="products.dex.topPairs.chg"
                defaultMessage="Chg"
              />
            </Typography>
          </Col>
        </MQ>

        <Col xs={6} tablet={3}>
          <Typography
            align="right"
            alignMobile="right"
            noMargin
            inverted
            className={classes.header}
          >
            <FormattedMessage id="products.dex.topPairs.volume" />
          </Typography>
        </Col>
      </Row>
      <Margin bottom={1} />
      {pairs.map((pair, index) => (
        <PairRow pair={pair} key={`pair-${index}`} />
      ))}
    </Col>
  );
};

DEXTopPairs.defaultProps = {
  pairs: [],
};

export default injectSheet(styles)(DEXTopPairs);
