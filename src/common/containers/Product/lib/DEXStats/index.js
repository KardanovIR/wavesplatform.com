import React from 'react';
import { Row, Col } from 'src/common/components/Grid';
import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';

import { FormattedMessage, FormattedNumber } from 'react-intl';

import injectSheet from 'react-jss';
import styles from './styles';

const DEXStats = ({ classes, dexData }) => (
  <Row centered>
    <Col xs={12} sm={10} md={6}>
      <Row>
        <Col xs={12} sm={6}>
          <Margin bottom={1} xsOnly />
          <Typography type="numeral" className={classes.number} inverted>
            <FormattedMessage
              id="product.DEX.wavesPrice.number"
              
              values={{
                price: <FormattedNumber value={dexData.wavesBtcRate} maximumFractionDigits={8} />,
              }}
            />
          </Typography>
          <Typography type="body" inverted>
            <FormattedMessage id="product.DEX.wavesPrice.label"  />
          </Typography>
          <Margin bottom={3} xsOnly />
        </Col>
        <Col xs={12} sm={6}>
          <Typography type="numeral" className={classes.number} inverted>
            <FormattedMessage
              id="product.DEX.dexVolume.number"
              
              values={{ volume: <FormattedNumber value={dexData.dexVolume} /> }}
            />
          </Typography>
          <Typography type="body" inverted>
            <FormattedMessage id="product.DEX.dexVolume.label"  />
          </Typography>
          <Margin bottom={2} xsOnly />
        </Col>
      </Row>
    </Col>
  </Row>
);

export default injectSheet(styles)(DEXStats);
