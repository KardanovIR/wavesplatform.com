import React from 'react';

import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';
import { Row, Col } from 'src/common/components/Grid';

import { FormattedMessage } from 'react-intl';

import injectSheet from 'react-jss';
import styles from './styles';

import exchanges from './exchanges.json';

const Exchanges = ({ classes }) => (
  <div className={classes.root}>
    <Row>
      <Col xs={12} md={7}>
        <Typography type="display5">
          <FormattedMessage id="getWaves.exchanges.title" defaultMessage="Buy Waves on Exchanges" />
        </Typography>
        <Margin bottom={4} />
      </Col>
    </Row>
    <Row>
      {exchanges.map((contact, index) => (
        <Col key={`media_org_${index}`} xs={12} sm={6} md={4} className={classes.col}>
          <a href={contact.url} target="_blank" className={classes.link}>
            <div className={classes.media}>
              <img src={contact.logo} className={classes.logo} alt="Exchange contact" />
            </div>
          </a>
        </Col>
      ))}
    </Row>
  </div>
);

export default injectSheet(styles)(Exchanges);
