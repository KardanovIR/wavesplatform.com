import React from 'react';

import { FormattedMessage, FormattedNumber } from 'react-intl';

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
    // speed,
    unconfirmed,
    confirmed,
}) => {
    const { minutes, seconds } = getTotalTime(totalTime);
    return status === 'error_fatal' ? (
        <Row centered>
            <Col xs={12} md={6} lg={4}>
                <Typography type="quote" align="center">
                    <FormattedMessage
                        id="wavesNG.stressTest.test.errorFatal"
                        // defaultMessage="Sorry, it seems your device is unable to connect to our testing server. Please check your network connection and try again."
                        defaultMessage="Sorry, it seems our testing server is experiencing some network issues. We're working on it, please try again later."
                    />
                </Typography>
                <Margin bottom={3} />
            </Col>
        </Row>
    ) : (
        <Row>
            <Col xs={12} md={4}>
                <Article
                    title={
                        <FormattedMessage
                            id="wavesNG.stressTest.test.title"
                            defaultMessage="Transaction confirmation"
                        />
                    }
                    text={
                        <FormattedMessage
                            id="wavesNG.stressTest.test.text"
                            defaultMessage="Нажимая на на кнопку, вы отправляете в сеть 100 транзакций. Наблюдайте в реальном времени скорость их обработки и характеристики работы сети."
                        />
                    }
                />
                <Margin bottom={4} />
            </Col>

            <Col xs={12} md={4} className={classes.centerWrapper}>
                <div className={classes.statusReport}>
                    {status === 'error' && (
                        <Typography type="quote">
                            <FormattedMessage
                                id="wavesNG.stressTest.test.error"
                                defaultMessage="Чувак, ты молодец, но UtxPool полный — другие пользователи активно тестят. Попробуй позже. "
                            />
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
                                        <div
                                            className={classes.unconfirmedInner}
                                        />
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
                                        <div
                                            className={classes.confirmedInner}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                </div>

                <Margin bottom={1} />

                {status === 'idle' && (
                    <Button
                        className={classes.buttonWidth}
                        onClick={onTestStart}
                    >
                        <FormattedMessage
                            id="wavesNG.stressTest.test.run"
                            defaultMessage="Run test"
                        />
                    </Button>
                )}
                {status === 'loading' && (
                    <Typography type="quote" className={classes.statusMessage}>
                        <FormattedMessage
                            id="wavesNG.stressTest.test.status.loading"
                            defaultMessage="Initiating test..."
                        />
                    </Typography>
                )}
                {status === 'testing' && (
                    <Typography type="quote" className={classes.statusMessage}>
                        <FormattedMessage
                            id="wavesNG.stressTest.test.status.testing"
                            defaultMessage="Running test..."
                        />
                    </Typography>
                )}

                {(status === 'finished' || status === 'error') && (
                    <Button
                        className={classes.buttonWidth}
                        onClick={onTestStart}
                    >
                        <FormattedMessage
                            id="wavesNG.stressTest.test.runAgain"
                            defaultMessage="Run again"
                        />
                    </Button>
                )}

                <Margin bottom={4} />
            </Col>

            <Col xs={12} md={4}>
                <Divider />
                <div className={classes.legendWrapper}>
                    <Typography
                        type="body"
                        className={classes.legendTypeWrapper}
                    >
                        <span className={classes.unconfirmedLegend} />
                        <FormattedMessage
                            id="wavesNG.stressTest.test.unconfirmed"
                            defaultMessage="Unconfirmed trx"
                        />
                    </Typography>
                    {!!unconfirmed && (
                        <Typography
                            type="numeral"
                            className={classes.legendNumberWrapper}
                        >
                            {unconfirmed}
                        </Typography>
                    )}
                </div>

                <Divider />

                <div className={classes.legendWrapper}>
                    <Typography
                        type="body"
                        className={classes.legendTypeWrapper}
                    >
                        <span className={classes.confirmedLegend} />
                        <FormattedMessage
                            id="wavesNG.stressTest.test.confirmed"
                            defaultMessage="Confirmed trx"
                        />
                    </Typography>
                    {!!confirmed && (
                        <Typography
                            type="numeral"
                            className={classes.legendNumberWrapper}
                        >
                            {confirmed}
                        </Typography>
                    )}
                </div>
                <Divider className={classes.legendWrapper} />

                <Row>
                    <Col xs={12}>
                        <Typography type="body" tagName="div">
                            <FormattedMessage
                                id="wavesNG.stressTest.test.totalTime"
                                defaultMessage="Total time"
                            />
                        </Typography>
                        <Typography type="numeral" tagName="div">
                            {status === 'testing' || status === 'finished' ? (
                                <span>
                                    <FormattedNumber
                                        value={minutes}
                                        minimumIntegerDigits={2}
                                    />
                                    :
                                    <FormattedNumber
                                        value={seconds}
                                        minimumIntegerDigits={2}
                                        maximumFractionDigits={2}
                                    />
                                </span>
                            ) : (
                                <span>--:--</span>
                            )}
                        </Typography>
                    </Col>
                    {/* <Col xs={6}>
                        <Typography type="body" tagName="div">
                            <FormattedMessage
                                id="wavesNG.stressTest.test.speed"
                                defaultMessage="Speed, trx/sec"
                            />
                        </Typography>
                        <Typography type="numeral" tagName="div">
                            {status === 'finished' ? (
                                <FormattedNumber
                                    value={speed}
                                    maximumFractionDigits={1}
                                    minimumFractionDigits={1}
                                />
                            ) : (
                                <span>--</span>
                            )}
                        </Typography>
                    </Col> */}
                </Row>

                <Margin bottom={4} />
            </Col>
        </Row>
    );
};
export default injectSheet(styles)(StressTest);
