import React from 'react';

import Margin from 'src/common/components/Margin';
import SectionTitleText from 'src/common/components/SectionTitleText';
import Link from 'src/common/components/Link';
import Typography from 'src/common/components/Typography';
import Button from 'src/common/components/Button';
import { Row, Col } from 'src/common/components/Grid';

import Image1 from '!svg-react-loader!./img/start_leasing_download_client.svg';
import Image2 from '!svg-react-loader!./img/start_leasing_deposit_waves.svg';
import Image3 from '!svg-react-loader!./img/start_leasing_choose_node.svg';
import Image4 from '!svg-react-loader!./img/start_leasing_done_leasing.svg';

import { FormattedMessage } from 'react-intl';

import url from 'src/common/utils/url';

import injectSheet from 'react-jss';
import styles from './styles';

const StartLeasing = ({ classes }) => (
  <div>
    <SectionTitleText
      title={<FormattedMessage id="leasing.startLeasing.title" />}
      text={
        <FormattedMessage
          id="leasing.startLeasing.text"
          values={{
            miningLink: (
              <Link href={url('mining')}>
                <FormattedMessage id="leasing.startLeasing.miningLink" />
              </Link>
            ),
          }}
        />
      }
    />

    <Row>
      <Col xs={12} sm={6} lg={3} className={classes.col}>
        <div className={classes.imageWrapper}>
          <Image1 />
          <div className={classes.arrow} />
          <div className={classes.arrowMobile} />
        </div>
        <Margin bottom={1} />
        <Typography tagName="div" align="center" className={classes.message}>
          <FormattedMessage id="leasing.startLeasing.p1.title" />
        </Typography>
        <Margin bottom={2} />
        <Button
          target="_blank"
          href="https://chrome.google.com/webstore/detail/wavesliteapp/kfmcaklajknfekomaflnhkjjkcjabogm"
        >
          <FormattedMessage id="cta.getClient" />
        </Button>
        <Margin bottom={5} />
      </Col>

      <Col xs={12} sm={6} lg={3} className={classes.col}>
        <div className={classes.imageWrapper}>
          <Image2 />
          <div className={classes.arrow} />
          <div className={classes.arrowMobile} />
        </div>
        <Margin bottom={1} />
        <Typography tagName="div" align="center" className={classes.message}>
          <FormattedMessage id="leasing.startLeasing.p2.title" />
        </Typography>
        <Margin bottom={2} />
        <Button href={url('get-waves')} withLoader secondary>
          <FormattedMessage id="cta.getWaves" />
        </Button>
        <Margin bottom={5} />
      </Col>

      <Col xs={12} sm={6} lg={3} className={classes.col}>
        <div className={classes.imageWrapper}>
          <Image3 />
          <div className={classes.arrow} />
          <div className={classes.arrowMobile} />
        </div>
        <Margin bottom={1} />
        <Typography tagName="div" align="center" className={classes.message}>
          <FormattedMessage
            id="leasing.startLeasing.p3.title"
            values={{
              nodesLink: (
                <Link pseudo href="#nodes">
                  which node
                </Link>
              ),
            }}
          />
        </Typography>
        <Margin bottom={5} />
      </Col>

      <Col xs={12} sm={6} lg={3} className={classes.col}>
        <div className={classes.imageWrapper}>
          <Image4 />
        </div>
        <Margin bottom={1} />
        <Typography tagName="div" align="center" className={classes.message}>
          <FormattedMessage id="leasing.startLeasing.p4.title" />
        </Typography>
        <Margin bottom={2} />
      </Col>
    </Row>
  </div>
);

export default injectSheet(styles)(StartLeasing);
