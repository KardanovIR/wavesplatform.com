import React from 'react';

import { Row, Col } from 'src/common/components/Grid';
import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';
import Panel from 'src/common/components/Panel';


import LeftRight from './lib/LeftRight';


import injectSheet from 'react-jss';
import styles from './styles';




const WavesNetwork = ({ classes }) => (
    <div>
        <Row className={classes.text} centered>
            <Col xs={12} sm={8} md={8} lg={6}>
                <Typography type="display2">
                    Waves Network
                </Typography>
                <Typography type="body">
                    New versions of Waves Node are tested by the development community on the TestNet cluster, where any developers can play with new features and ensure their applications are ready for upcoming releases.
                </Typography>
                <Margin bottom={3} />
                <Typography type="quote" color="gray-500">
                    Here are explorers for MainNet and TestNet Waves clusters:
                </Typography>
                <Margin bottom={3} />
            </Col>
        </Row>

        <Row>
            <Col xs={12} sm={6}>
                <Panel>
                    <Typography type="display1">
                        MainNet
                    </Typography>
                    <Margin />
                    <LeftRight
                        left="Explorer"
                        right="wavesexplorer.com"
                        href="https://wavesexplorer.com"
                    />
                    <LeftRight
                        left="Online wallet"
                        right="waveswallet.io"
                        href="https://waveswallet.io"
                    />
                </Panel>
                <Margin bottom={3} />
            </Col>
            <Col xs={12} sm={6}>
                <Panel>
                    <Typography type="display1">
                        TestNet
                    </Typography>
                    <Margin />
                    <LeftRight
                        left="Explorer"
                        right="testnet.wavesexplorer.com"
                        href="https://testnet.wavesexplorer.com"
                    />
                    <LeftRight
                        left="Online wallet"
                        right="waveswallet.io"
                        href="https://testnet.waveswallet.io"
                    />
                </Panel>
                <Margin bottom={3} />
            </Col>
        </Row>
    </div>


);


export default injectSheet(styles)(WavesNetwork);