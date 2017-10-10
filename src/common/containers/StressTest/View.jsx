// import { connect } from 'react-redux';
import React from 'react';

import { FormattedMessage } from 'react-intl';


import Button from 'src/common/components/Button';
import Divider from 'src/common/components/Divider';
import Article from 'src/common/components/Article';
import { Row, Col } from 'src/common/components/Grid';
import Margin from 'src/common/components/Margin';
import Typography from 'src/common/components/Typography';


import injectSheet from 'react-jss';
import styles from './styles';



const StressTest = ({
	utx,
	confirmed,
	// status,
	onTestStart,
	classes,
	totalTime
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
				<Button className={classes.buttonWidth} onClick={onTestStart}>Run test</Button>
			</Col>

			<Col xs={12} md={4}>
				<Divider />
				<Typography type="body">
					<FormattedMessage
						id="wavesNG.stressTest.test.unconfirmed"
						defaultMessage="Unconfirmed trx"
					/>
				</Typography>
				<Divider />
				<Typography type="body">
					<FormattedMessage
						id="wavesNG.stressTest.test.confirmed"
						defaultMessage="Confirmed trx"
					/>
				</Typography>
				<Divider />
				<Typography type="body">
					<FormattedMessage
						id="wavesNG.stressTest.test.totalTime"
						defaultMessage="Total time: {minutes}:{seconds}"
						values={totalTime}
					/>
				</Typography>
				<Divider />
			</Col>

		</Row>
	)


export default injectSheet(styles)(StressTest);