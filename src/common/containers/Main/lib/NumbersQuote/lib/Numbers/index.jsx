import React from 'react';

import { Col } from 'src/common/components/Grid';
import Typography from 'src/common/components/Typography';

import { FormattedMessage, FormattedNumber } from 'react-intl';

import injectSheet from 'react-jss';

const styles = theme => ({
  numberWrapper: {
    marginBottom: theme.spacing.unit * 4,
  },
});

const ColNumber = injectSheet(styles)(({ classes, children }) => (
  <div className={classes.numberWrapper}>{children}</div>
));

const NumbersMain = ({
  wavesBtcRate,
  dexVolume,
  dexWallets,
  dexAssets,
  ...rest
}) =>
  wavesBtcRate && dexVolume && dexWallets && dexAssets ? (
    <Col xs={12} sm={4} {...rest}>
      <ColNumber>
        <Typography type="numeral">
          ฿<FormattedNumber value={wavesBtcRate} maximumFractionDigits={8} />
        </Typography>
        <Typography type="body">
          <FormattedMessage id="home.numbers.wavesPrice" />
        </Typography>
      </ColNumber>
      <ColNumber>
        <Typography type="numeral">
          $<FormattedNumber value={dexVolume} />
        </Typography>
        <Typography type="body">
          <FormattedMessage id="home.numbers.dexVolume" />
        </Typography>
      </ColNumber>
      <ColNumber>
        <Typography type="numeral">
          &gt;
          {/* @todo add value from api */}
          <FormattedNumber value={1000000} />
        </Typography>
        <Typography type="body">
          <FormattedMessage id="home.numbers.wallets" />
        </Typography>
      </ColNumber>
      <ColNumber>
        <Typography type="numeral">
          <FormattedNumber value={dexAssets} />
        </Typography>
        <Typography type="body">
          <FormattedMessage id="home.numbers.tokens" />
        </Typography>
      </ColNumber>
    </Col>
  ) : null;

export default NumbersMain;
