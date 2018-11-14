import React from 'react';

import Typography from 'src/common/components/Typography';
import { Row, Col } from 'src/common/components/Grid';
import Button from 'src/common/components/Button';
import Margin from 'src/common/components/Margin';

import { fileUrl } from 'src/common/utils/url';

const wpImageSrc = require('!svg-url-loader?noquotes!./img/paper_ico.svg');

import { FormattedMessage } from 'react-intl';

import injectSheet from 'react-jss';
import styles from './styles';

const Whitepaper = ({ classes, onWhitepaperClick }) => (
  <Row alignItems="left" className={classes.twoblocks}>
    <Col xs={12} sm={6} md={8} className={classes.blockText}>
      <Typography type="display2" className={classes.title}>
        <FormattedMessage id="company.whitepaper.title" />
      </Typography>
      <Typography type="body" className={classes.text} cut>
        <FormattedMessage id="company.whitepaper.text" />
      </Typography>

      <Margin bottom={3} />

      <Button
        onClick={onWhitepaperClick}
        href={fileUrl('whitepaper_v0.pdf')}
        target="_blank"
        secondary
      >
        <FormattedMessage id="cta.whitepaper" />
      </Button>
    </Col>
    <Col xs={12} sm={6} md={4} className={classes.svgrow}>
      <img src={wpImageSrc} alt="Whitepaper" className={classes.image} />
    </Col>
  </Row>
);

export default injectSheet(styles)(Whitepaper);
