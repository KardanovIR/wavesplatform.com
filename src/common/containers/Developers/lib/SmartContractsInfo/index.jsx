import React from 'react';

import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

import injectSheet from 'react-jss';
import styles from './styles';
import Button from 'src/common/components/Button';
import SmartContractsImg from '!svg-react-loader!./img/code-img.svg';
import { Row, Col } from 'src/common/components/Grid';
import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';

import url from 'src/common/utils/url/';

const WavesNgInfo = () => (
  <Row>
    <Col xs={12} sm={4}>
      <SmartContractsImg style={{ width: '100%', height: '100%' }} />
    </Col>
    <Col xs={12} sm={7} smOffset={1}>
      <Typography inverted type="display1">
        <FormattedMessage
          id="developers.smart.title"
          defaultMessage="Failsafe operation for business logic"
        />
      </Typography>
      <Typography inverted type="body2">
        <FormattedMessage
          id="developers.smart.subtitle"
          defaultMessage="Outstanding functionality for implementing different types of transaction parameters."
        />
      </Typography>
      <Margin />
      <Typography inverted>
        <FormattedHTMLMessage
          id="developers.smart.text"
          defaultMessage="Safe, secure and transparent business operations are already a reality. Provide the transactions with whatever conditions are required, based on a range of different parameters, including two-factor authentication, elapsed time and real-world data.<br><br>Waves blockchain is already the fastest and most user-friendly in existence. Nevertheless, we are improving our platform all the time! The next revolution from Waves is already on the horizon: smart contracts, packed with powerful features."
        />
      </Typography>
      <Margin />
      <Button href={url('smart-contracts')} secondary>
        <FormattedMessage
          id="developers.smart.cta"
          defaultMessage="Learn more"
        />
      </Button>
    </Col>
  </Row>
);

export default injectSheet(styles)(WavesNgInfo);
