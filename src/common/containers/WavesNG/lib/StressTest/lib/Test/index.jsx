// import { connect } from 'react-redux';
import React from 'react';

import { FormattedMessage } from 'react-intl';


import Divider from 'src/common/components/Divider';
import Article from 'src/common/components/Article';
import Margin from 'src/common/components/Margin';

import { Row, Col } from 'src/common/components/Grid';

import Countdown from './Countdown';


// import { getClientClick } from 'src/public/actions';

// import View from './View';

// export default connect(s => s, {
//     onGetClientClick: () => getClientClick({ page: 'get-waves', source: 'how_to_buy_waves' }),
// })(View);

const StressTest = () => (
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
			бла бла
		</Col>

		<Col xs={12} md={4}>
			<Divider />
			Ензщпкфзрн
		</Col>

		<Divider />
		<Margin bottom={4} />

		<Row direction="row-reverse">
			<Col xs={12} sm={5} lg={4}>
				<Article
					title={
						<FormattedMessage
							id="wavesNG.stressTest.chart1.title"
							defaultMessage="UtxPool size"
						/>
					}
					text={
						<FormattedMessage
							id="wavesNG.stressTest.chart1.text"
							defaultMessage="Numeber of transaction waiting in queue for confirmation. The more trasnsactions are processed by network within a minute, the faster it decreases."
						/>
					}
				/>
			</Col>
			<Col xs={12} sm={7} lg={8}>
				chart1
			</Col>
		</Row>
		<Margin bottom={4} />
		<Row direction="row-reverse">
			<Col xs={12} sm={5} lg={4}>
				<Article
					title={
						<FormattedMessage
							id="wavesNG.stressTest.chart2.title"
							defaultMessage="Transaction througput"
						/>
					}
					text={
						<FormattedMessage
							id="wavesNG.stressTest.chart2.text"
							defaultMessage="Number of transactions mined (confirmed) by the blockchain per minute."
						/>
					}
				/>
			</Col>
			<Col xs={12} sm={7} lg={8}>
				chart1
			</Col>
		</Row>
	</Panel>
)

export default StressTest;