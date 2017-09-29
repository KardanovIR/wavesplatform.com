import React from 'react';

import { Row, Col } from 'src/common/components/Grid';
import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';
import Panel from 'src/common/components/Panel';
import IconProduct from 'src/common/components/IconProduct';


import LeftRight from './lib/LeftRight';

import { FormattedMessage } from 'react-intl';

import injectSheet from 'react-jss';
import styles from './styles';




const WavesNetwork = ({ classes }) => (
    <div>
        <Row className={classes.text} centered>
            <Col xs={12} sm={8} md={8} lg={6}>
                <Typography type="display2">
                    <FormattedMessage
                        id="developers.wavesNetwork.title"
                        defaultMessage="Waves Network"
                    />
                </Typography>
                <Typography type="body2">
                    <FormattedMessage
                        id="developers.wavesNetwork.text"
                        defaultMessage="New versions of the Waves Node are tested by the development community on the TestNet cluster, where any developers can play with new features and ensure their applications are ready for upcoming releases."
                    />
                </Typography>
                <Margin />
                <Typography type="quote" color="gray-600">
                    <FormattedMessage
                        id="developers.wavesNetwork.explorers"
                        defaultMessage="Here are explorers for MainNet and TestNet Waves clusters:"
                    />
                </Typography>
                <Margin bottom={3} />
            </Col>
        </Row>

        <Row>
            <Col xs={12} sm={6}>
                <Panel>
                    <Typography type="display1" className={classes.title}>
                        <Margin right={1} className={classes.titleEl}>
                            <IconProduct name="applicationWaves" />
                        </Margin>
                        <FormattedMessage
                            tagName="div"
                            id="developers.wavesNetwork.mainNet"
                            defaultMessage="MainNet"
                        />
                    </Typography>
                    <Margin />
                    <LeftRight
                        left={
                            <FormattedMessage
                                id="developers.wavesNetwork.explorer"
                                defaultMessage="Explorer"
                            />
                        }
                        right="wavesexplorer.com"
                        href="https://wavesexplorer.com"
                    />
                    <div className={classes.divider} />
                    <LeftRight
                        left={
                            <FormattedMessage
                                id="developers.wavesNetwork.onlineWalet"
                                defaultMessage="Online wallet"
                            />
                        }
                        right="waveswallet.io"
                        href="https://waveswallet.io"
                    />
                </Panel>
                <Margin bottom={3} />
            </Col>
            <Col xs={12} sm={6}>
                <Panel>
                    <Typography type="display1" className={classes.title}>
                        <Margin right={1} className={classes.titleEl}>
                            <IconProduct name="settings" />
                        </Margin>
                        <FormattedMessage
                            tagName="div"
                            id="developers.wavesNetwork.testNet"
                            defaultMessage="TestNet"
                        />
                    </Typography>
                    <Margin />
                    <LeftRight
                        left={
                            <FormattedMessage
                                id="developers.wavesNetwork.explorer"
                                defaultMessage="Explorer"
                            />
                        }
                        right="testnet.wavesexplorer.com"
                        href="https://testnet.wavesexplorer.com"
                    />
                    <div className={classes.divider} />
                    <LeftRight
                        left={
                            <FormattedMessage
                                id="developers.wavesNetwork.onlineWallet"
                                defaultMessage="Online wallet"
                            />
                        }
                        right="testnet.waveswallet.io"
                        href="https://testnet.waveswallet.io"
                    />
                </Panel>
                <Margin bottom={3} />
            </Col>
        </Row>
    </div>


);


export default injectSheet(styles)(WavesNetwork);