// import { connect } from 'react-redux';
import React from 'react';

import { FormattedMessage } from 'react-intl';


import Button from 'src/common/components/Button';
import Divider from 'src/common/components/Divider';
import Article from 'src/common/components/Article';
// import Margin from 'src/common/components/Margin';

import { Row, Col } from 'src/common/components/Grid';



const StressTest = ({
	utx,
	confirmed,
	// status,
	onTestStart
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

		<Col xs={12} md={4}>
			<div>Unconfirmed: {utx}</div>
			<div>Confirmed: {confirmed}</div>
			<br/>
			<Button onClick={onTestStart}>Run test</Button>
		</Col>

		<Col xs={12} md={4}>
			<Divider />
			Бла бла
		</Col>
		
	</Row>
)

export default StressTest;