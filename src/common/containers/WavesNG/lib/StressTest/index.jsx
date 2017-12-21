// import { connect } from 'react-redux';
import React from 'react';

import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

import Panel from 'src/common/components/Panel';
import Divider from 'src/common/components/Divider';
import Article from 'src/common/components/Article';
import Margin from 'src/common/components/Margin';
import Typography from 'src/common/components/Typography';
import { Row, Col } from 'src/common/components/Grid';

import StressTest from 'src/common/containers/StressTest';

import injectSheet from 'react-jss';
const styles = ({ breakpoints, palette }) => ({
  title: {
    color: palette.gray[400],
  },
  chartWrapper: {
    // opacity: 0.5,
    // pointerEvents: 'none',
    height: 150,
  },
  [breakpoints.up('md')]: {
    chartWrapper: {
      height: 180,
    },
  },
  [breakpoints.up('lg')]: {
    chartWrapper: {
      height: 220,
    },
  },
});

const StressTestSection = ({ classes, active }) => (
  <div>
    <Row centered>
      <Col xs={12}>
        <Typography type="display3">
          <FormattedHTMLMessage id="wavesNG.stressTest.title" />
        </Typography>
        <Margin bottom={4} />
      </Col>

      {active ? (
				<Col xs={12}>
					<StressTest />
				</Col>
      ) : (
        <Col xs={12} md={8}>
          <Margin top={2} bottom={4}>
            <Typography
              type="body2"
              tagName="div"
              align="center"
              className={classes.title}
            >
              <FormattedMessage id="wavesNG.stressTest.anounce" />
            </Typography>
          </Margin>
        </Col>
      )}
    </Row>

    <Divider />
    <Margin bottom={2} />

    <Row direction="row-reverse">
      <Col xs={12} sm={5} lg={4}>
        <Article
          title={<FormattedMessage id="wavesNG.stressTest.chart1.title" />}
          text={<FormattedMessage id="wavesNG.stressTest.chart1.text" />}
        />
        <Margin bottom={2} />
      </Col>
      <Col xs={12} sm={7} lg={8}>
        <div className={classes.chartWrapper}>
          <iframe
            src="https://grafana.wavesnodes.com/dashboard-solo/db/stress-test?orgId=2&from=now-10m&to=now&refresh=1s&panelId=1&theme=light"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ overflow: 'hidden' }}
            scrolling="no"
          />
        </div>
      </Col>
    </Row>

    <Margin bottom={2} />

    <Row direction="row-reverse">
      <Col xs={12} sm={5} lg={4}>
        <Article
          title={<FormattedMessage id="wavesNG.stressTest.chart2.title" />}
          text={<FormattedMessage id="wavesNG.stressTest.chart2.text" />}
        />
        <Margin bottom={2} />
      </Col>
      <Col xs={12} sm={7} lg={8}>
        <div className={classes.chartWrapper}>
          <iframe
            src="https://grafana.wavesnodes.com/dashboard-solo/db/stress-test?orgId=2&from=now-10m&to=now&refresh=1s&theme=light&panelId=2"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ overflow: 'hidden' }}
            scrolling="no"
          />
        </div>
      </Col>
    </Row>
  </div>
);

export default injectSheet(styles)(StressTestSection);
