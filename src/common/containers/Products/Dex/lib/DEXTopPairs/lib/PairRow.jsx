import React from 'react';

import Typography from 'src/common/components/Typography';
import { Row, Col } from 'src/common/components/Grid';
import cn from 'classnames';
import injectSheet from 'react-jss';

import { FormattedNumber, FormattedMessage } from 'react-intl';
import MQ from 'react-responsive';
import { query } from 'src/common/theme/breakpoints';

const styles = theme => ({
  row: {
    height: 7 * theme.spacing.unit,
    alignItems: 'center',
    borderBottom: `1px solid ${theme.colors.gray[100]}`,
  },
  wrapper: {
    display: 'flex',
    alignItems: 'flex-end',
    lineHeight: 'normal',
  },
  assets: {
    textTransform: 'uppercase',
    letterSpacing: '1px',
    lineHeight: 1,
  },
  volume: {
    lineHeight: 1,
    textAlign: 'right',
  },
  price: {
    lineHeight: 1,
    textAlign: 'right',
  },
  change: {
    lineHeight: 1,
    textAlign: 'right',
  },
  changePlus: {
    color: theme.palette.blue[200],
  },
  changeMinus: {
    color: theme.palette.orange[200],
  },
});

const Unavailable = injectSheet(theme => ({
  grayText: {
    color: theme.palette.grayBlue[500],
  },
}))(({ classes }) => (
  <span className={classes.grayText}>
    <FormattedMessage id="products.dex.topPairs.unavailable" />
  </span>
));

const PairName = ({ classes, pair }) => (
  <Typography type="body" className={classes.assets} inverted>
    {pair.pair}
  </Typography>
);

const PairVolume = ({ classes, pair }) => (
  <Typography
    type="body"
    align="right"
    alignMobile="right"
    className={classes.volume}
    noMargin
    inverted
  >
    {pair.volumeUSD ? (
      <span>
        $ <FormattedNumber
          maximumFractionDigits={0}
          minimumFractionDigits={0}
          value={pair.volumeUSD}
        />
      </span>
    ) : (
      <Unavailable />
    )}
  </Typography>
);

const PairChange = ({ classes, pair }) => {
  const change = ((pair.lastPrice - pair.firstPrice) / pair.firstPrice) * 100;
  if (isNaN(change)) return <Unavailable />;
  return (
    <Typography
      type="body"
      align="right"
      className={cn({
        [classes.change]: true,
        [classes.changePlus]: change >= 0,
        [classes.changeMinus]: change < 0,
      })}
      noMargin
      inverted
    >
      {change > 0 ? '+' : ''}
      <FormattedNumber
        maximumFractionDigits={2}
        minimumFractionDigits={2}
        value={change}
      />%
    </Typography>
  );
};

const PairPrice = ({ classes, pair }) => (
  <Typography
    type="body"
    align="right"
    className={classes.price}
    noMargin
    inverted
  >
    {pair.lastPrice && pair.firstPrice ? (
      <FormattedNumber
        maximumFractionDigits={8}
        minimumFractionDigits={8}
        value={(pair.lastPrice + pair.firstPrice) / 2}
      />
    ) : (
      <Unavailable />
    )}
  </Typography>
);

const PairRow = ({ classes, pair }) => (
  <Row className={classes.row}>
    <Col xs={6} tablet={3}>
      <PairName classes={classes} pair={pair} />
    </Col>
    <MQ query={query.tablet}>
      <Col tablet={3}>
        <PairPrice classes={classes} pair={pair} />
      </Col>
      <Col tablet={3}>
        <PairChange classes={classes} pair={pair} />
      </Col>
    </MQ>
    <Col xs={6} tablet={3}>
      <PairVolume classes={classes} pair={pair} />
    </Col>
  </Row>
);

export default injectSheet(styles)(PairRow);
