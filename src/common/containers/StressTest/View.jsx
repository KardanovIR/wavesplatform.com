import React from 'react';

import { FormattedMessage, FormattedNumber, FormattedTime } from 'react-intl';

import Button from 'src/common/components/Button';
import Divider from 'src/common/components/Divider';
import Article from 'src/common/components/Article';
import { Row, Col } from 'src/common/components/Grid';
import Typography from 'src/common/components/Typography';
import Spinner from 'src/common/components/Spinner';
import Margin from 'src/common/components/Margin';

import injectSheet from 'react-jss';
import styles from './styles';

import getTotalTime from './lib/getTotalTime';

const StressTest = ({
  status,
  onTestStart,
  classes,
  totalTime,
  unconfirmed,
  confirmed,
  targetWalletAddress,
}) => {
  const { minutes, seconds, centiSeconds } = getTotalTime(totalTime);
  return status === 'error_fatal' ? (
    <Row centered>
      <Col xs={12} md={6} lg={4}>
        <Typography type="quote" align="center">
          <FormattedMessage
            id="wavesNG.stressTest.test.errorFatal"
            //
          />
        </Typography>
        <Margin bottom={2} />
      </Col>
    </Row>
  ) : (
    <Row>
      <Col xs={12} md={4}>
        <Article
          title={<FormattedMessage id="wavesNG.stressTest.test.title" />}
          text={<FormattedMessage id="wavesNG.stressTest.test.text" />}
        />
        <Margin bottom={2} />
      </Col>

      <Col xs={12} md={4} className={classes.centerWrapper}>
        <div className={classes.statusReport}>
          {status === 'error' && (
            <Typography type="quote">
              <FormattedMessage id="wavesNG.stressTest.test.error" />
            </Typography>
          )}

          {status !== 'error' &&
            status !== 'error_fatal' && (
              <div>
                <div className={classes.barWrapper}>
                  <div className={classes.unconfirmed}>
                    {status === 'loading' && (
                      <Spinner
                        type="points"
                        color="orange[300]"
                        size={12}
                        className={classes.loader}
                      />
                    )}
                    <div className={classes.unconfirmedInner} />
                  </div>
                </div>
                <div className={classes.barWrapper}>
                  <div className={classes.confirmed}>
                    {status === 'testing' && (
                      <Spinner
                        type="points"
                        style={{ color: '#64ca57' }}
                        size={12}
                        className={classes.loader}
                      />
                    )}
                    <div className={classes.confirmedInner} />
                  </div>
                </div>
              </div>
            )}
        </div>

        <Margin bottom={1} />

        {status === 'connecting' && (
          <Typography type="quote" className={classes.statusMessage}>
            <FormattedMessage id="wavesNG.stressTest.test.status.connecting" />
          </Typography>
        )}

        {status === 'idle' && (
          <Button
            className={classes.buttonWidth}
            onClick={onTestStart}
            href="#stress-test"
          >
            <FormattedMessage id="wavesNG.stressTest.test.run" />
          </Button>
        )}
        {status === 'loading' && (
          <Typography type="quote" className={classes.statusMessage}>
            <FormattedMessage id="wavesNG.stressTest.test.status.loading" />
          </Typography>
        )}
        {status === 'testing' && (
          <Typography type="quote" className={classes.statusMessage}>
            <FormattedMessage id="wavesNG.stressTest.test.status.testing" />
          </Typography>
        )}

        {(status === 'finished' || status === 'error') && (
          <Button className={classes.buttonWidth} onClick={onTestStart}>
            <FormattedMessage id="wavesNG.stressTest.test.runAgain" />
          </Button>
        )}

        <Margin bottom={2} />
      </Col>

      <Col xs={12} md={4}>
        <Divider />
        <div className={classes.legendWrapper}>
          <Typography type="body" className={classes.legendTypeWrapper}>
            <span className={classes.unconfirmedLegend} />
            <FormattedMessage id="wavesNG.stressTest.test.unconfirmed" />
          </Typography>
          <Typography type="numeral" className={classes.legendNumberWrapper}>
            {unconfirmed}
          </Typography>
        </div>

        <Divider />

        <div className={classes.legendWrapper}>
          <Typography type="body" className={classes.legendTypeWrapper}>
            <span className={classes.confirmedLegend} />
            <FormattedMessage id="wavesNG.stressTest.test.confirmed" />
          </Typography>
          <Typography type="numeral" className={classes.legendNumberWrapper}>
            {confirmed}
          </Typography>
        </div>
        <Divider className={classes.legendWrapper} />

        <Row>
          <Col xs={4} md={5}>
            <Typography type="body" tagName="div">
              <FormattedMessage id="wavesNG.stressTest.test.totalTime" />
            </Typography>
            <Typography type="numeral" tagName="div">
              {status === 'testing' || status === 'finished' ? (
                <span>
                  <FormattedNumber value={minutes} minimumIntegerDigits={2} />
                  :
                  <FormattedNumber
                    value={seconds}
                    minimumIntegerDigits={2}
                    maximumFractionDigits={0}
                  />
                  :
                  <FormattedNumber
                    value={centiSeconds}
                    minimumIntegerDigits={2}
                  />
                </span>
              ) : (
                <span>--:--:--</span>
              )}
            </Typography>
          </Col>

          <Col xs={8} md={7}>
            {status === 'finished' && (
              <Button
                secondary
                className={classes.explorerButton}
                href={`http://testnet.wavesexplorer.com/address/${targetWalletAddress}`}
                target="_blank"
              >
                <FormattedMessage id="wavesNG.stressTest.test.explorer" />
              </Button>
            )}
          </Col>
        </Row>

        <Margin bottom={2} />
      </Col>
    </Row>
  );
};
export default injectSheet(styles)(StressTest);
