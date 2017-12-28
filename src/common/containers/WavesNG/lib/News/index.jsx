import React from 'react';

import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';
import { Row, Col } from 'src/common/components/Grid';

const image = require('!svg-url-loader?noquotes!./img/image.svg');

import { FormattedHTMLMessage } from 'react-intl';

import injectSheet from 'react-jss';
import styles from './styles';

import news from './news.js';

const News = ({ classes }) => (
  <div className={classes.root}>
    <Row>
      <Col xs={12} md={7}>
        <Typography type="display3">
          <FormattedHTMLMessage id="wavesNG.news.title" />
        </Typography>
      </Col>
      <Col md={5} className={classes.imageCol}>
        <div className={classes.imageContainer}>
          <img src={image} className={classes.image} />
        </div>
      </Col>
    </Row>
    <Margin bottom={4} />    
    <Row>
      {news.map(({ Logo, url }, index) => (
        <Col
          key={`media_org_${index}`}
          xs={12}
          sm={6}
          md={4}
          className={classes.col}
        >
          <a href={url} target="_blank" className={classes.link}>
            <div className={classes.media}>
              <Logo
                className={classes.logo}
              />
            </div>
          </a>
        </Col>
      ))}
    </Row>
  </div>
);

export default injectSheet(styles)(News);
