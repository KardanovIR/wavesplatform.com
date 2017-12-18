import React from 'react';
import MQ from 'react-responsive';
// @todo refactor inject query
import { query } from 'src/common/theme/breakpoints.js';
import Typography from 'src/common/components/Typography';

import PairVolume from './lib/PairVolume';

import { FormattedMessage } from 'react-intl';

import injectSheet from 'react-jss';
import styles from './styles';

const DEXTopPairs = ({ classes, pairs }) => (
  <div className={classes.container}>
    <MQ query={query.sm}>
      {matches => (
        <img
          src={matches ? require('./img/dex@1x.jpg') : require('./img/dexMobile.jpg')}
          srcSet={matches ? `${require('./img/dex@1x.jpg')} 1x, ${require('./img/dex@2x.jpg')} 2x` : null}
          className={classes.image}
          alt=""
        />
      )}
    </MQ>
    <div className={classes.root}>
      <div className={classes.headers}>
        <Typography type="display1" inverted>
          <FormattedMessage id="product.DEXTopPairs.title"  />
        </Typography>
        <Typography align="right" noMargin inverted>
          <FormattedMessage id="product.DEXTopPairs.volume"  />
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
