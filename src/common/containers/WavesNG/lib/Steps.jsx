import React from 'react';

import { FormattedMessage } from 'react-intl';


import AvatarTitleText from 'src/common/components/AvatarTitleText';
import IconProduct from 'src/common/components/IconProduct';
import { Row, Col } from 'src/common/components/Grid';
import Margin from 'src/common/components/Margin';



const MARGIN_BOTTOM = 4;


const Steps = () => {
    return (
        <div>
            <Row>
                <Col xs={12} sm={6} lg={3}>
                    <AvatarTitleText
                        avatar={<IconProduct name="script" circle />}
                        title={
                            <FormattedMessage
                                id="wavesNG.preview.p1.title"
                                defaultMessage="1. TestNet release"
                            />
                        }
                        text={
                            <FormattedMessage
                                id="wavesNG.preview.p1.text"
                                defaultMessage="Anyone will be able to download node version 0.8 with Waves-NG for TestNet. We will lease TestNet WAVES to anyone who wants to run a TestNet node. Nodes will start voting for Waves-NG using the new Waves Activation Protocol."
                            />
                        }
                    />
                    <Margin bottom={MARGIN_BOTTOM} />
                </Col>
                <Col xs={12} sm={6} lg={3}>
                    <AvatarTitleText
                        avatar={<IconProduct name="noLimits" circle />}
                        title={
                            <FormattedMessage
                                id="wavesNG.preview.p2.title"
                                defaultMessage="2. Stress test"
                            />
                        }
                        text={
                            <FormattedMessage
                                id="wavesNG.preview.p2.text"
                                defaultMessage="Once the voting conditions have been met, Waves-NG will be activated on TestNet and we will perform a public stress test. Anyone will be able to generate transactions and monitor how the network responds in realtime to the increased throughput."
                            />
                        }
                    />
                    <Margin bottom={MARGIN_BOTTOM} />
                </Col>
                <Col xs={12} sm={6} lg={3}>
                    <AvatarTitleText
                        avatar={<IconProduct name="applicationWaves" circle />}
                        title={
                            <FormattedMessage
                                id="wavesNG.preview.p3.title"
                                defaultMessage="3. MainNet release"
                            />
                        }
                        text={
                            <FormattedMessage
                                id="wavesNG.preview.p3.text"
                                defaultMessage="When it is clear that the new version works as expected, we will release Waves-NG on MainNet and everyone can upgrade their nodes. Waves-NG will again be activated after the conditions of the Waves Activation Protocol have been met."
                            />
                        }
                    />
                    <Margin bottom={MARGIN_BOTTOM} />
                </Col>
                <Col xs={12} sm={6} lg={3}>
                    <AvatarTitleText
                        avatar={<IconProduct name="transaction" circle />}
                        title={
                            <FormattedMessage
                                id="wavesNG.preview.p4.title"
                                defaultMessage="4. Activation"
                            />
                        }
                        text={
                            <FormattedMessage
                                id="wavesNG.preview.p4.text"
                                defaultMessage="The Waves Activation Protocol ensures that hardforks required for upgrades occur smoothly. Miners set approval flags for new features in their blocks. If 80% of miners have approved the feature after 5,000 blocks or roughly 3.5 days (3,000 blocks on TestNet), it is automatically activated after a further 5,000 blocks."
                            />
                        }
                    />
                    <Margin bottom={MARGIN_BOTTOM} />
                </Col>
            </Row>
        </div>

    )
}



// export default injectSheet(styles)(Countdown);
export default Steps;