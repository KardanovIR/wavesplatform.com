import React from 'react';

import { FormattedMessage } from 'react-intl';

import injectSheet from 'react-jss';
import styles from './styles';
import Button from 'src/common/components/Button';
import SmartContractsImg from '!svg-react-loader!./img/code-img.svg';
import { Row, Col } from 'src/common/components/Grid';
import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';

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
        <FormattedMessage
          id="developers.smart.text"
          defaultMessage="Safe, secure and transparent business operations are already a reality. Provide the transactions with whatever conditions are required, based on a range of different parameters, including two-factor authentication, elapsed time and real-world data."
        />
      </Typography>
      <Margin />
      <Button secondary>
        <FormattedMessage
          id="developers.smart.cta"
          defaultMessage="Learn more"
        />
      </Button>
    </Col>
  </Row>
);

export default injectSheet(styles)(WavesNgInfo);
