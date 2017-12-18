import React from 'react';

import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';
import Button from 'src/common/components/Button';
import Link from 'src/common/components/Link';
import { Row, Col } from 'src/common/components/Grid';
import Background from 'src/common/components/Background';

import Panel from 'src/common/components/Panel';

import { FormattedMessage } from 'react-intl';

import injectSheet from 'react-jss';
import styles from './styles';

const Branding = ({ classes, onBrandingPackageClick }) => (
  <div className={classes.root}>
    <Row className={classes.bgRow}>
      <Col xs={12} md={8} lg={5} className={classes.contactUs}>
        <Typography type="body2" inverted>
          <FormattedMessage
            id="company.media.contactUs"
            
            values={{
              link: (
                <Link pseudo href="#contact">
                  <FormattedMessage id="company.media.contactUsLink"  />
                </Link>
              ),
            }}
          />
        </Typography>

        <Margin bottom={3} />

        <Button
          onClick={onBrandingPackageClick}
          href="https://s3.ca-central-1.amazonaws.com/wavesdb.com/images/Waves_brand_pack_1.2.zip"
          target="_blank"
          bordered
          inverted
        >
          <Typography type="body2" style={{ fontSize: 22 }} inverted>
            <FormattedMessage id="cta.brandingPackage"  />
          </Typography>
        </Button>
      </Col>
    </Row>
  </div>
);

export default injectSheet(styles)(Branding);
