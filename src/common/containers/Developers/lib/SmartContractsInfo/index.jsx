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
          defaultMessage="Versatile functionality for any use case"
        />
      </Typography>
      <Typography inverted type="body2">
        <FormattedMessage
          id="developers.smart.subtitle"
          defaultMessage="We are building simple, scalable, reliable and robust tools to perform secure and transparent business operations on the Waves blockchain."
        />
      </Typography>
      <Margin />
      <Typography inverted>
        <FormattedHTMLMessage
          id="developers.smart.text"
          defaultMessage="RIDE, our purpose-designed programming language, makes it straightforward to apply scripted conditions to both accounts and assets. We are currently creating Turing-complete smart contracts to enable the launch of fully-fledged dApps and the execution of any set of instructions on the blockchain."
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
