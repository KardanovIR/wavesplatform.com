import React from 'react';

import { FormattedMessage } from 'react-intl';

import injectSheet from 'react-jss';
import styles from './styles';
import Button from 'src/common/components/Button';
import NGImage from '!svg-react-loader!./img/ng-protocol-img.svg';
import { Row, Col } from 'src/common/components/Grid';
import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';

const WavesNgInfo = ({ classes }) => (
  <Row className={classes.rowWithOrders}>
    <Col xs={12} sm={8}>
      <Typography inverted type="display1">
        <FormattedMessage
          id="developers.ng.title"
          defaultMessage="Unbeatable speed and throughput"
        />
      </Typography>
      <Typography inverted type="body2">
        <FormattedMessage
          id="developers.ng.subtitle"
          defaultMessage="Based on the Waves-NG protocol, our system supports up to 6,000 transactions per minute, leaving other blockchains far behind."
        />
      </Typography>
      <Margin />
      <Typography inverted>
        <FormattedMessage
          id="developers.ng.text"
          defaultMessage="In the NG model, the next miner is selected in advance. This miner
          creates a ‘key block’, which is then immediately filled with microblocks
          containing transactions, which requires no further proof-of-work. Whilst
          maintaining the open structure of the protocol, this allows transactions
          to be confirmed as fast as network latency will allow."
        />
      </Typography>
    </Col>
    <Col xs={12} sm={4} className={classes.firstOnMobile}>
      <NGImage style={{ width: '100%', height: '100%' }} />
    </Col>
    <Col xs={12} sm={12}>
      <Margin />
      <Button secondary>
        <FormattedMessage id="developers.ng.cta" defaultMessage="Learn more" />
      </Button>
    </Col>
  </Row>
);

export default injectSheet(styles)(WavesNgInfo);
