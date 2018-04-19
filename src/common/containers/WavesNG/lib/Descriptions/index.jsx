import React from 'react';

import { FormattedMessage } from 'react-intl';

import Typography from 'src/common/components/Typography';
import Section from 'src/common/components/Section';
import Button from 'src/common/components/Button';
import { Row, Col } from 'src/common/components/Grid';
import Margin from 'src/common/components/Margin';
import Panel from 'src/common/components/Panel';

import injectSheet from 'react-jss';
import styles from './styles';

import ImageTxCost from '!svg-react-loader!./img/cost.svg';
import ImageTxPerSec from '!svg-react-loader!./img/tx.svg';

const Descriptions = ({ classes }) => (
  <div>
    <Typography type="display3">
      <FormattedMessage id="wavesNG.descriptions.title" />
    </Typography>
    <Margin bottom={3} />
    <Row>
      <Col xs={12} sm={6} className={classes.bgGray}>
        <div className={classes.panel}>
          <Typography type="display1" inverted>
            <FormattedMessage
              id="wavesNG.descriptions.costPerTxs"
              defaultMessage="Cost per transaction"
            />
          </Typography>
          <Margin className={classes.imageWrapper} top={4} bottom={2}>
            <ImageTxCost />
          </Margin>
        </div>
      </Col>
      <Col xs={12} sm={6} className={classes.bgBlue}>
        <div className={classes.panel}>
          <Typography type="display1" inverted>
            <FormattedMessage
              id="wavesNG.descriptions.txsPerSecond"
              defaultMessage="Transaction per second"
            />
          </Typography>
          <Margin className={classes.imageWrapper} top={4} bottom={2}>
            <ImageTxPerSec />
          </Margin>
        </div>
      </Col>
    </Row>
    <Margin bottom={4} />
    <Row>
      <Col xs={12} md={8}>
        <Typography type="body2">
          <FormattedMessage id="wavesNG.descriptions.text.p1" />
        </Typography>
        <Typography type="body" cut={30}>
          <FormattedMessage id="wavesNG.descriptions.text.p2" />
        </Typography>
        <Margin bottom={2} />
        <Button
          href="https://www.usenix.org/system/files/conference/nsdi16/nsdi16-paper-eyal.pdf"
          target="_blank"
        >
          <FormattedMessage id="wavesNG.descriptions.button" />
        </Button>
      </Col>
    </Row>

    <Margin bottom={5} />
    <Row>
      <Col xs={12} md={6} className={classes.column}>
        <Typography type="display1" tagName="div">
          <FormattedMessage id="wavesNG.descriptions.1.title" />
        </Typography>
        <Typography type="body" tagName="div">
          <FormattedMessage id="wavesNG.descriptions.1.text" />
        </Typography>
      </Col>
      <Col xs={12} md={6} className={classes.column}>
        <Typography type="display1" tagName="div">
          <FormattedMessage id="wavesNG.descriptions.2.title" />
        </Typography>
        <Typography type="body" tagName="div">
          <FormattedMessage id="wavesNG.descriptions.2.text" />
        </Typography>

        <Margin />

        <Button
          target="_blank"
          href="https://docs.wavesplatform.com/platform-features/waves-ng-protocol.html"
        >
          <FormattedMessage id="wavesNG.descriptions.2.buttonFullDetails" />
        </Button>
        <Margin display="inline-block" right={1} />
        <Button
          bordered
          target="_blank"
          href="http://support.wavesplatform.com/topics/8675-qa-waves-ng/"
        >
          <FormattedMessage id="wavesNG.descriptions.2.buttonFAQ" />
        </Button>
      </Col>
    </Row>
  </div>
);

export default injectSheet(styles)(Descriptions);
