import React from 'react';

import { Row, Col } from 'src/common/components/Grid';

import injectSheet from 'react-jss';
import styles from './styles';

const Team = ({ classes }) => (
  <Row>
    <Col xs={12}>
      <img className={classes.img} src={require('./img/desktop.jpg')} />
      <img className={classes.imgMobile} src={require('./img/mobile.jpg')} />
    </Col>
  </Row>
);

export default injectSheet(styles)(Team);
