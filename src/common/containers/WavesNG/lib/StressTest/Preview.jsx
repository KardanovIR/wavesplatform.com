import React, { Component } from 'react';

import { FormattedMessage } from 'react-intl';


import Typography from 'src/common/components/Typography';
import AvatarTitleText from 'src/common/components/AvatarTitleText';
import IconProduct from 'src/common/components/IconProduct';
import { Row, Col } from 'src/common/components/Grid';
import Margin from 'src/common/components/Margin';




const MARGIN_BOTTOM = 4;


class Steps extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs={12} sm={4}>
                        <AvatarTitleText
                            avatar={<IconProduct name="script" circle />}
                            title={
                                <FormattedMessage
                                    id="wavesNG.preview.p1.title"
                                    defaultMessage="Testnet release"
                                />
                            }
                            text={
                                <FormattedMessage
                                    id="wavesNG.preview.p1.text"
                                    defaultMessage="Anyone will be able to download node version 8.0 with Waves-NG for testnet. We will lease testnet WAVES to anyone who wants to run a testnet node. Nodes will start voting for Waves-NG using the new Waves Activation Protocol. Once the voting conditions have been met, Waves-NG will be activated on testnet."
                                />
                            }
                        />
                        <Margin bottom={MARGIN_BOTTOM} />
                    </Col>
                    <Col xs={12} sm={4}>
                        <AvatarTitleText
                            avatar={<IconProduct name="noLimits" circle />}
                            title={
                                <FormattedMessage
                                    id="wavesNG.preview.p2.title"
                                    defaultMessage="Stress test"
                                />
                            }
                            text={
                                <FormattedMessage
                                    id="wavesNG.preview.p2.text"
                                    defaultMessage="Once activated, we will perform a public stress test on the Waves testnet. Anyone will be able to generate transactions and monitor how the network responds in realtime."
                                />
                            }
                        />
                        <Margin bottom={MARGIN_BOTTOM} />
                    </Col>
                    <Col xs={12} sm={4}>
                        <AvatarTitleText
                            avatar={<IconProduct name="applicationWaves" circle />}
                            title={
                                <FormattedMessage
                                    id="wavesNG.preview.p3.title"
                                    defaultMessage="Mainnet release"
                                />
                            }
                            text={
                                <FormattedMessage
                                    id="wavesNG.preview.p3.text"
                                    defaultMessage="When it is clear that the new version works as expected, we will release Waves-NG on mainnet and everyone can upgrade their nodes."
                                />
                            }
                        />
                        <Margin bottom={MARGIN_BOTTOM} />
                    </Col>
                </Row>


                <Typography type="display2">
                    <FormattedMessage
                        id="wavesNG.preview.activation.title"
                        defaultMessage="Activation"
                    />
                </Typography>

                <Margin bottom={2} />

                <Row>
                    <Col xs={12} sm={6}>
                        <Typography>
                            <FormattedMessage
                                id="wavesNG.preview.activation.p1"
                                defaultMessage="The Waves Activation Protocol is designed to ensure that activation of features requiring a hardfork occurs smoothly. Once a new version is released and nodes are updated, miners will begin to set new feature approval flags in their blocks."
                            />
                        </Typography>
                        <Margin bottom={MARGIN_BOTTOM} />
                    </Col>
                    <Col xs={12} sm={6}>
                        <Typography>
                            <FormattedMessage
                                id="wavesNG.preview.activation.p2"
                                defaultMessage="When 10,000 blocks or roughly 1 week pass (3,000 blocks on testnet), the protocol checks how many blocks contain the flag. If 90% of miners have approved the feature, it is automatically activated after a further 1,000 blocks."
                            />
                        </Typography>
                        <Margin bottom={MARGIN_BOTTOM} />
                    </Col>
                </Row>
            </div>

        )
    }
}



// export default injectSheet(styles)(Countdown);
export default Steps;