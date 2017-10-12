import React from 'react';

import { FormattedMessage } from 'react-intl';

import Button from 'src/common/components/Button';
import Divider from 'src/common/components/Divider';
import Article from 'src/common/components/Article';
import { Row, Col } from 'src/common/components/Grid';
import Typography from 'src/common/components/Typography';
import Spinner from 'src/common/components/Spinner';

import injectSheet from 'react-jss';
import styles from './styles';

import getMinutesSeconds from './lib/getMinutesSeconds';

const StressTest = ({ status, onTestStart, classes, totalTime, speed }) => {
    const { minutes, seconds } = getMinutesSeconds(totalTime);
    return (
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
            </Col>

            <Col xs={12} md={4} className={classes.centerWrapper}>
                <div className={classes.statusReport}>
                    {status === 'error' && <span>Сорян, дерьмо случается</span>}

                    {status !== 'error' && (
                        <div>
                            <div className={classes.barWrapper}>
                                <div className={classes.unconfirmed}>
                                    {status === 'loading' && (
                                        <Spinner
                                            type="points"
                                            color="orange[300]"
                                            size={12}
                                            style={{ marginTop: 6 }}
                                        />
                                    )}
                                    <div className={classes.unconfirmedInner} />
                                </div>
                            </div>
                            <div className={classes.barWrapper}>
                                <div className={classes.confirmed}>
                                    <div className={classes.confirmedInner} />
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {status === 'idle' && (
                    <Button
                        className={classes.buttonWidth}
                        onClick={onTestStart}
                    >
                        Run test
                    </Button>
                )}
                {status === 'loading' && (
                    <Typography type="body">
                        <FormattedMessage
                            id="wavesNG.stressTest.test.status.loading"
                            defaultMessage="Initiating test..."
                        />
                    </Typography>
                )}
                {status === 'testing' && (
                    <Typography type="body">
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
                        Run again
                    </Button>
                )}
            </Col>

            <Col xs={12} md={4}>
                <Divider />
                <Typography type="body" className={classes.legendWrapper}>
                    <span className={classes.unconfirmedLegend} />
                    <FormattedMessage
                        id="wavesNG.stressTest.test.unconfirmed"
                        defaultMessage="Unconfirmed trx"
                    />
                </Typography>
                <Divider />
                <Typography type="body" className={classes.legendWrapper}>
                    <span className={classes.confirmedLegend} />
                    <FormattedMessage
                        id="wavesNG.stressTest.test.confirmed"
                        defaultMessage="Confirmed trx"
                    />
                </Typography>
                <Divider className={classes.legendWrapper} />

                <Row>
                    <Col xs={6}>
                        <Typography type="body" tagName="div">
                            <FormattedMessage
                                id="wavesNG.stressTest.test.totalTime"
                                defaultMessage="Total time:"
                            />
                        </Typography>
                        <Typography type="numeral" tagName="div">
                            {status === 'testing' || status === 'finished' ? (
                                <span>
                                    {minutes}:{seconds}
                                </span>
                            ) : (
                                <span>--:--</span>
                            )}
                        </Typography>
                    </Col>
                    <Col xs={6}>
                        <Typography type="body" tagName="div">
                            <FormattedMessage
                                id="wavesNG.stressTest.test.speed"
                                defaultMessage="Speed:"
                            />
                        </Typography>
                        <Typography type="numeral" tagName="div">
                            {status === 'testing' || status === 'finished' ? (
                                <span>
                                    {speed}
                                </span>
                            ) : (
                                <span>--</span>
                            )}
                            /sec
                        </Typography>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};
export default injectSheet(styles)(StressTest);
