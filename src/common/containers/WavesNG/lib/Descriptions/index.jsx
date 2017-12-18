import React from 'react';

import { FormattedMessage } from 'react-intl';

import AlgorithmDesc from '../AlgorithmDesc';

import Typography from 'src/common/components/Typography';
import Button from 'src/common/components/Button';
import { Row, Col } from 'src/common/components/Grid';
import Margin from 'src/common/components/Margin';

import ImageNG from '!svg-react-loader!./img/ng.svg';
import ImageTraditional from '!svg-react-loader!./img/traditional.svg';

import injectSheet from 'react-jss';
const styles = ({ spacing }) => ({
  column: {
    paddingBottom: spacing.unit * 4,
  },
});

const Descriptions = ({ classes }) => (
  <Row>
    <Col xs={12}>
      <Row centered>
        <Col xs={12} md={8}>
          <Typography type="display3" align="center">
            <FormattedMessage id="wavesNG.descriptions.title" />
          </Typography>
          <Typography type="body2" align="center">
            <FormattedMessage id="wavesNG.descriptions.text.p1" />
          </Typography>
          <Typography type="body2" align="center">
            <FormattedMessage id="wavesNG.descriptions.text.p2" />
            <Margin bottom={2} />
            <Button
              href="https://www.usenix.org/system/files/conference/nsdi16/nsdi16-paper-eyal.pdf"
              target="_blank"
            >
              <FormattedMessage id="wavesNG.descriptions.button" />
            </Button>
          </Typography>

          <Margin bottom={4} />
        </Col>
      </Row>
    </Col>
    <Col xs={12} md={6} className={classes.column}>
      <AlgorithmDesc
        title={<FormattedMessage id="wavesNG.descriptions.1.title" />}
        image={<ImageTraditional />}
        text={<FormattedMessage id="wavesNG.descriptions.1.text" />}
      />
    </Col>
    <Col xs={12} md={6} className={classes.column}>
      <AlgorithmDesc
        title={<FormattedMessage id="wavesNG.descriptions.2.title" />}
        image={<ImageNG />}
        text={<FormattedMessage id="wavesNG.descriptions.2.text" />}
      >
        <Button
          target="_blank"
          href="https://github.com/wavesplatform/Waves/wiki/Waves-NG-Protocol"
        >
          <FormattedMessage id="wavesNG.descriptions.2.buttonFullDetails" />
        </Button>
        <Margin display="inline-block" right={1} />
        <Button
          secondary
          target="_blank"
          href="http://support.wavesplatform.com/topics/8675-qa-waves-ng/"
        >
          <FormattedMessage id="wavesNG.descriptions.2.buttonFAQ" />
        </Button>
      </AlgorithmDesc>
    </Col>
  </Row>
);

export default injectSheet(styles)(Descriptions);
