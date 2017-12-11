import React from 'react';

import Typography from 'src/common/components/Typography';

import PairVolume from './lib/PairVolume';

import { FormattedMessage } from 'react-intl';

import injectSheet from 'react-jss';
import styles from './styles';

const DEXTopPairs = ({ classes, pairs }) => (
  <div className={classes.container}>
    <img
      src={require('./img/dex@1x.jpg')}
      srcSet={`${require('./img/dex@1x.jpg')} 1x, ${require('./img/dex@2x.jpg')} 2x`}
      className={classes.image}
      alt=""
    />
    <div className={classes.root}>
      <div className={classes.headers}>
        <Typography type="display1" inverted>
          <FormattedMessage id="product.DEXTopPairs.title" defaultMessage="Top pairs" />
        </Typography>
        <Typography align="right" noMargin inverted>
          <FormattedMessage id="product.DEXTopPairs.volume" defaultMessage="Volume (24h)" />
        </Typography>
      </div>

      {pairs.map((pair, index) => (
        <div key={`top_pair_${index}`} className={classes.pairContainer}>
          <PairVolume {...pair} />
        </div>
      ))}
    </div>
  </div>
);

DEXTopPairs.defaultProps = {
  pairs: [],
};

export default injectSheet(styles)(DEXTopPairs);
