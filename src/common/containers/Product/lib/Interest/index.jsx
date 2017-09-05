import React from 'react';

import Panel from 'src/common/components/Panel';
import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';
import IconProduct from 'src/common/components/IconProduct';

import { Row, Col } from 'src/common/components/Grid';


import injectSheet from 'react-jss';
import styles from './styles';




const Interest = ({ classes }) => (
    <div>
        <Row centered>
            <Col xs={12} md={6}>
                <Typography type="display2" align="center">Get interest on your WAVES account balance</Typography>
                <Margin bottom={5} />
            </Col>
        </Row>
        <Row>
            <Col xs={12} md={6} className={classes.column}>
                <Panel className={classes.panel}>
                    <div className={classes.panelTitle}>
                        <div className={classes.icon}>
                            <IconProduct name="leasing" />
                        </div>
                        
                        <Typography type="display1">Leasing</Typography>
                    </div>
                    <Margin />
                    <Typography type="body">
                        Any sum of WAVES can be leased to miners to generate interest. You can cancel a lease at any time with just two clicks.
                    </Typography>
                </Panel>
            </Col>

            <Col xs={12} md={6} className={classes.column}>
                <Panel className={classes.panel}>
                    <div className={classes.panelTitle}>
                        <div className={classes.icon}>
                            <IconProduct name="mining" />
                        </div>
                        <Typography type="display1">Mining</Typography>
                    </div>
                    <Margin />  
                    <Typography type="body">
                        Waves uses a proof-of-stake algorithm. To start mining, all you need to do is to download and launch the node, and have 10,000 WAVES in your wallet.
                    </Typography>
                </Panel>
            </Col>
        </Row>
    </div>
);


export default injectSheet(styles)(Interest);