import React from 'react';

import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';
import { Row, Col } from 'src/common/components/Grid';

const image = require('!svg-url-loader?noquotes!./img/image.svg');

import { FormattedMessage } from 'react-intl';

import injectSheet from 'react-jss';
import styles from './styles';
import cl from 'classnames';

import exchanges from './exchanges.json';

const Exchanges = ({ classes }) => (
  <div className={classes.root}>
    <Row>
      <Col xs={12} md={7}>
        <Typography type="display5">
          <FormattedMessage id="getWaves.exchanges.title" />
        </Typography>
        <Margin bottom={4} />
      </Col>
      <Col md={5} className={classes.imageCol}>
        <div className={classes.imageContainer}>
          <img src={image} className={classes.image} />
        </div>
      </Col>
    </Row>
    <Row>
      {exchanges.map((contact, index) => (
        <Col
          key={`media_org_${index}`}
          xs={12}
          sm={6}
          md={4}
          className={classes.col}
        >
          <a href={contact.url} target="_blank" className={classes.link}>
            <div className={classes.media}>
              <img
                src={contact.logo}
                className={cl(classes.logo, classes[contact.custom_class])}
                alt="Exchange contact"
              />
            </div>
          </a>
        </Col>
      ))}
    </Row>
  </div>
);

export default injectSheet(styles)(Exchanges);
