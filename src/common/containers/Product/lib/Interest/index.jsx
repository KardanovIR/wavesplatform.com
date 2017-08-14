import React from 'react';

import Panel from 'src/common/components/Panel';
import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';

import { Row, Col } from 'src/common/components/Grid';


import injectSheet from 'react-jss';
import styles from './styles';




const MainScreen = ({ classes }) => (
    <div className={classes.root}>
        <Row>
            <Col xs={12}>
                <Typography type="display2">Wallet</Typography>
                <Margin bottom={5} />
            </Col>
            <Col xs={12} md={6}>
                <Panel>
                    <Typography type="display1">Leasing</Typography>
                    <Typography type="body">
                        Any sum of Waves can be leased to miners to generate interest. You can refund at any time in 2 clicks.
                        <br />
                        <br />
                    </Typography>
                </Panel>
                <Margin /> 
            </Col>
            
            <Col xs={12} md={6}>
                <Panel>
                    <Typography type="display1">Mining</Typography>
                    <Typography type="body">The Waves algorithm uses a proof-of-stake algorithm. To start mining, all you need is to download and launch the node and have 10,000 Waves in your wallet.</Typography>
                </Panel>
                <Margin />
            </Col>
        </Row>
    </div>
);


export default injectSheet(styles)(MainScreen);