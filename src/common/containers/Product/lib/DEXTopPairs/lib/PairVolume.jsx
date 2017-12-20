import React from 'react';

import Typography from 'src/common/components/Typography';

import injectSheet from 'react-jss';

import { FormattedNumber, FormattedMessage } from 'react-intl';

const styles = theme => ({
  wrapper: {
    display: 'flex',
    alignItems: 'flex-end',
    lineHeight: 'normal',
  },
  assets: {
    flex: 1,
    textTransform: 'uppercase',
    letterSpacing: '1px',
    lineHeight: 1,
  },
  volume: {
    flex: 1,
    lineHeight: 1,
  },
  grayText: {
    color: theme.palette.grayBlue[500],
  },
});

const PairVolume = ({ classes, assets, volume }) => (
  <div className={classes.wrapper}>
    <Typography type="body" className={classes.assets} inverted>
      {assets[0]}/{assets[1]}
    </Typography>
    <Typography
      type="body"
      align="right"
      className={classes.volume}
      noMargin
      inverted
    >
      {volume ? (
        <span>
          $ <FormattedNumber value={volume} />
        </span>
      ) : (
        <span className={classes.grayText}>
          <FormattedMessage id="product.DEXTopPairs.unavailable" />
        </span>
      )}
    </Typography>
  </div>
);

export default injectSheet(styles)(PairVolume);
