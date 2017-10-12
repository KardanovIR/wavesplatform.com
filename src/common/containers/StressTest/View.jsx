import React from 'react';

import { FormattedMessage } from 'react-intl';

import Button from 'src/common/components/Button';
import Divider from 'src/common/components/Divider';
import Article from 'src/common/components/Article';
import { Row, Col } from 'src/common/components/Grid';
import Typography from 'src/common/components/Typography';

import injectSheet from 'react-jss';
import styles from './styles';

import getMinutesSeconds from './lib/getMinutesSeconds';

const StressTest = ({
    unconfirmed,
    confirmed,
    status,
    onTestStart,
    classes,
    totalTime,
    speed,
}) => (
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
            {status === 'error' && <span>Сорян, дерьмо случается</span>}

            {status !== 'error' && (
                <div>
                    {status === 'loading' && <span>Loading...</span>}
                    <div className={classes.barWrapper}>
                        <div className={classes.unconfirmed}>
                            <div className={classes.unconfirmedInner} />
                        </div>
                    </div>
                    <div className={classes.barWrapper}>
                        <div className={classes.confirmed}>
                            <div className={classes.confirmedInner} />
                        </div>
                    </div>
                    <Button
                        disabled={status !== 'idle'}
                        className={classes.buttonWidth}
                        onClick={onTestStart}
                    >
                        Run test
                    </Button>
                </div>
            )}
        </Col>

        <Col xs={12} md={4}>
            <Divider />
            <Typography type="body">
                <FormattedMessage
                    id="wavesNG.stressTest.test.unconfirmed"
                    defaultMessage="Unconfirmed trx"
                />
                {' ' + unconfirmed}
            </Typography>
            <Divider />
            <Typography type="body">
                <FormattedMessage
                    id="wavesNG.stressTest.test.confirmed"
                    defaultMessage="Confirmed trx"
                />
                {' ' + confirmed}
            </Typography>
            <Divider />

            <Typography type="body">
                <FormattedMessage
                    id="wavesNG.stressTest.test.totalTime"
                    defaultMessage="Total time: {minutes}:{seconds}"
                    values={getMinutesSeconds(totalTime)}
                />
            </Typography>
            <br />

            {!!speed && (
                <Typography type="body">
                    <FormattedMessage
                        id="wavesNG.stressTest.test.speed"
                        defaultMessage="Speed: {trx}/sec"
                        values={{ trx: speed }}
                    />
                </Typography>
            )}
        </Col>
    </Row>
);

export default injectSheet(styles)(StressTest);
