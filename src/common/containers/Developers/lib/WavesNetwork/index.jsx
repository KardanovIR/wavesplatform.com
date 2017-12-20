import React from 'react';
import { Row, Col } from 'src/common/components/Grid';
import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';
import Link from 'src/common/components/Link';
import IconProduct from 'src/common/components/IconProduct';

import { FormattedMessage } from 'react-intl';

import injectSheet from 'react-jss';
import styles from './styles';

const TitleApp = injectSheet(styles)(({ classes }) => (
  <Typography inverted type="display1" className={classes.title}>
    <Margin right={1} className={classes.titleEl}>
      <IconProduct name="applicationWaves" />
    </Margin>
    <FormattedMessage tagName="div" id="developers.wavesNetwork.mainNet" />
  </Typography>
));

const TitleSettings = injectSheet(styles)(({ classes }) => (
  <Typography inverted type="display1" className={classes.title}>
    <Margin right={1} className={classes.titleEl}>
      <IconProduct name="settings" />
    </Margin>
    <FormattedMessage tagName="div" id="developers.wavesNetwork.testNet" />
  </Typography>
));

const TableDesktop = injectSheet(styles)(({ classes }) => [
  <Row key="th" className={classes.tableHeader}>
    <Col sm={4} />
    <Col sm={4}>
      <Typography inverted type="body">
        <FormattedMessage id="developers.wavesNetwork.explorer" />
      </Typography>
    </Col>
    <Col sm={4}>
      <Typography inverted type="body">
        <FormattedMessage id="developers.wavesNetwork.onlineWallet" />
      </Typography>
    </Col>
  </Row>,
  <Row key="tr1" className={classes.tableRow}>
    <Col xs={12} sm={4} className={classes.titleCol}>
      <TitleApp />
    </Col>
    <Col xs={12} sm={4} className={classes.elipsis}>
      <Link target="_blank" href="https://wavesexplorer.com">
        wavesexplorer.com
      </Link>
      <Margin bottom={1} xsOnly />
    </Col>
    <Col xs={12} sm={4} className={classes.elipsis}>
      <Link target="_blank" href="https://waveswallet.io">
        waveswallet.io
      </Link>
    </Col>
  </Row>,
  <Row key="tr2" className={classes.tableRow}>
    <Col xs={12} sm={4} className={classes.titleCol}>
      <TitleSettings />
    </Col>
    <Col xs={12} sm={4} className={classes.elipsis}>
      <Link target="_blank" href="https://testnet.wavesexplorer.com">
        testnet.wavesexplorer.com
      </Link>
      <Margin bottom={1} xsOnly />
    </Col>
    <Col xs={12} sm={4} className={classes.elipsis}>
      <Link target="_blank" href="https://testnet.waveswallet.io">
        testnet.waveswallet.io
      </Link>
    </Col>
  </Row>,
]);

const WavesNetwork = ({ classes }) => (
  <div>
    <Row className={classes.text}>
      <Col xs={12} sm={8} md={12}>
        <Typography inverted type="display3">
          <FormattedMessage id="developers.wavesNetwork.title" />
        </Typography>
        <Typography inverted type="body2" weight={400}>
          <FormattedMessage id="developers.wavesNetwork.text" />
        </Typography>
        <Margin bottom={3} />
        <Typography inverted type="quote" color="gray-600">
          <FormattedMessage id="developers.wavesNetwork.explorers" />
        </Typography>
        <Margin bottom={3} />
      </Col>
    </Row>

    <TableDesktop />
  </div>
);

export default injectSheet(styles)(WavesNetwork);
