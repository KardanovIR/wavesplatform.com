import React from 'react';

import Typography from 'src/common/components/Typography';
import ButtonGetApp from 'src/common/components/ButtonGetApp';
import Margin from 'src/common/components/Margin';
import { Row, Col } from 'src/common/components/Grid';

import { FormattedMessage } from 'react-intl';

import injectSheet from 'react-jss';
import styles from './styles';

const MobileApp = ({ classes, onAndroidClientClick, onIosClientClick }) => (
  <Row className={classes.root} alignItems="center">
    <Col xs={12} sm={8} md={8}>
      <Row>
        <Col xs={12} sm={10}>
          <Typography type="display3Inverted" inverted>
            <FormattedMessage id="products.dex.mobileApp.title" />
          </Typography>
        </Col>
        <Col xs={12} sm={6}>
          <Margin top={2} xsOnly />
          <Typography type="body" inverted>
            <FormattedMessage id="products.dex.mobileApp.text" />
          </Typography>
        </Col>
      </Row>

      <Margin bottom={5} />

      <Row className={classes.buttonRow}>
        <Col>
          <Margin bottom={1} right={1} className={classes.buttonWrapper}>
            <ButtonGetApp
              onClick={onAndroidClientClick}
              type="google-play"
              whited
              className={classes.noShadow}
            />
          </Margin>
        </Col>
        <Col>
          <Margin bottom={1} right={1} className={classes.buttonWrapper}>
            <ButtonGetApp
              onClick={onIosClientClick}
              type="app-store"
              className={classes.noShadow}
              whited
            />
          </Margin>
        </Col>
      </Row>
    </Col>
  </Row>
);

export default injectSheet(styles)(MobileApp);
