// import { connect } from 'react-redux';
import React from 'react';

import { FormattedMessage } from 'react-intl';


import Panel from 'src/common/components/Panel';
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
import injectSheet from 'react-jss';
const styles = ({ breakpoints }) => ({
    sheetWrapper: {
        height: 150,
    },
    [breakpoints.up('md')]: {
        sheetWrapper: {
            height: 180,
        },
    },
    [breakpoints.up('lg')]: {
        sheetWrapper: {
            height: 200,
        },
    }
})



const StressTest = ({ classes }) => (
    <Panel>
        <Margin top={2} bottom={4}>
            <Countdown />
        </Margin>

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
                <div className={classes.chartWrapper}>
                    <iframe src="http://grafana.wavesnodes.com/dashboard-solo/db/stress-test?orgId=2&panelId=1&theme=light" width="100%" height="100%" frameBorder="0" />
                </div>

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
                <div className={classes.chartWrapper}>
                    <iframe src="http://grafana.wavesnodes.com/dashboard-solo/db/stress-test?orgId=2&panelId=2&theme=light" width="100%" height="100%" frameBorder="0" />
                </div>
            </Col>
        </Row>
    </Panel>
)

export default injectSheet(styles)(StressTest);