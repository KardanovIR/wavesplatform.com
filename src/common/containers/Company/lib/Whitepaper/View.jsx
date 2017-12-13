import React from 'react';

import Typography from 'src/common/components/Typography';
import { Row, Col } from 'src/common/components/Grid';
import Button from 'src/common/components/Button';
import Margin from 'src/common/components/Margin';

const wpImageSrc = require('!svg-url-loader?noquotes!./img/paper_ico.svg');

import { FormattedMessage } from 'react-intl';

import injectSheet from 'react-jss';
import styles from './styles';

const Whitepaper = ({ classes, onWhitepaperClick }) => (
  <Row alignItems="left" className={classes.row}>
    <Col xs={12} sm={6} md={8} className={classes.blockText}>
      <Typography type="display2" style={{ fontSize: 23 }}>
        <FormattedMessage id="company.whitepaper.title" defaultMessage="Whitepaper" />
      </Typography>
      <Typography type="body" className={classes.text} style={{ fontSize: 32 }} cut>
        <FormattedMessage
          id="company.whitepaper.text"
          defaultMessage="WAVES is a decentralized blockchain platform focusing on custom blockchain tokens operations. National currencies transfer is maintained on the WAVES blockchain through compliant gateway operators."
        />
      </Typography>

      <Margin bottom={3} />

      <Button
        onClick={onWhitepaperClick}
        href="https://s3.ca-central-1.amazonaws.com/wavesdb.com/images/whitepaper_v0.pdf"
        target="_blank"
        secondary
      >
        <FormattedMessage id="cta.whitepaper" defaultMessage="Download Whitepaper" />
      </Button>
    </Col>
    <Col xs={12} sm={6} md={4} className={classes.svgrow}>
      <img src={wpImageSrc} alt="Whitepaper" className={classes.image} />
    </Col>
  </Row>
);

export default injectSheet(styles)(Whitepaper);
