import React from 'react';

import Margin from 'src/common/components/Margin';
import { Row, Col } from 'src/common/components/Grid';

import { FormattedMessage } from 'react-intl';
import Typography from 'src/common/components/Typography';
import BlockQuote from 'src/common/components/BlockQuote';

import Numbers from './lib/Numbers';

import injectSheet from 'react-jss';
import styles from './styles';

const NumbersQuote = ({ classes, dexData }) => (
  <Row>
    <Numbers {...dexData} className={classes.numbersContainer} />
    <Col xs={12} sm={8} className={classes.investorsContainer}>
      <Typography type="display1" className={classes.investorsLabel}>
        <FormattedMessage
          id="home.audience.investors.title"
          defaultMessage="Investors"
        />
      </Typography>
      <Typography type="display3" className={classes.investorsText}>
        <FormattedMessage
          id="home.audience.investors.text"
          defaultMessage="Become part of a fast-growing area of the crypto world. Create a multiple-currency wallet and invest in verified crypto assets and the underlying WAVES platform token."
        />
      </Typography>
      <Margin bottom={4} />
    </Col>
    <Col xs={12} sm={8} smOffset={4}>
      <BlockQuote>
        <div className={classes.deloitteLogo} />
        <FormattedMessage
          tagName="div"
          id='home.quote'
          defaultMessage="In 2017 we partnered with Deloitte to launch the development of a legal framework for wider adoption of blockchain technologies."
        />
      </BlockQuote>
      <Margin bottom={1} />
    </Col>
  </Row>
);

export default injectSheet(styles)(NumbersQuote);
