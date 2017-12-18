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
                                
                            />
                        }
                        text={
                            <FormattedMessage
                                id="wavesNG.preview.p1.text"
                                
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
                                
                            />
                        }
                        text={
                            <FormattedMessage
                                id="wavesNG.preview.p2.text"
                                
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
                                
                            />
                        }
                        text={
                            <FormattedMessage
                                id="wavesNG.preview.p3.text"
                                
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
                                
                            />
                        }
                        text={
                            <FormattedMessage
                                id="wavesNG.preview.p4.text"
                                
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