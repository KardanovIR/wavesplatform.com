import React from 'react';

import Typography from 'src/common/components/Typography';
import DownloadClientDropdown from 'src/common/containers/DownloadClientDropdown';

import Margin from 'src/common/components/Margin';
import { Row, Col } from 'src/common/components/Grid';
import Button from 'src/common/components/Button';
import url from 'src/common/utils/url';

import { FormattedMessage } from 'react-intl';

import injectSheet from 'react-jss';
import styles from './styles';

const GetClient = ({ classes, onClientDownload, onNewClientClick }) => (
  <Row alignItems="center" className={classes.root}>
    <Col xs={12} sm={8} md={8}>
      <Row>
        <Col xs={12} tablet={10}>
          <Typography
            type="display3Inverted"
            inverted
            alignMobile="center"
            align="left"
          >
            <FormattedMessage
              id="products.dex.getClient.title"
              defaultMessage="Use Waves Client for fast access to the DEX."
            />
          </Typography>
        </Col>
      </Row>
      <Margin />
      <Row className={classes.buttonRow}>
        <Col>
          <div className={classes.showNotMobile}>
            <DownloadClientDropdown onChange={onClientDownload} />
          </div>
          <div className={classes.showMobileOnly}>
            <Button
              onClick={onNewClientClick}
              href={url('online-client(beta)')}
              key="main_cta_button2"
              bordered
              inverted
            >
              <FormattedMessage id="cta.onlineClient" />
            </Button>
          </div>
        </Col>
      </Row>
    </Col>
  </Row>
);

export default injectSheet(styles)(GetClient);
