import React from 'react';

import { Row, Col } from 'src/common/components/Grid';
import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';
import NumeralDemo from 'src/common/components/NumeralDemo';

import formatNumber from 'src/common/utils/formatNumber';


import Image from '!svg-react-loader!./img/dex.svg';


import injectSheet from 'react-jss';
import styles from './styles';
import cn from 'classnames';



const DEX = ({
    classes,
    dexData,
}) => (
        <div>
            <Row>

                <Col xs={12} className={classes.withMargin}>
                    <Typography type="display3" className={classes.title}>
                        Decentralised Exchange (DEX)
                    </Typography>
                    <Margin bottom={4} />
                </Col>

                <Col xs={12}>
                    <Row centered>
                        <Col xs={12} md={6} lg={4}>
                            <Typography type="display1" className={classes.title}>
                                Stop worrying about the safety of your assets
                            </Typography>
                            <Margin bottom={4} />
                        </Col>
                    </Row>
                </Col>

                <Col xs={12} md={4} lg={3} className={classes.column}>
                    <div className={cn(classes.columnContent, classes.columnLeft)}>
                        <Typography type="body" className={classes.topParagraph}>
                            By trading on a centralised exchange, you risk losing your funds in the event of a hack, which has happened on almost all popular exchanges.
                        </Typography>
                        <Typography type="body" className={classes.bottomParagraph}>
                            The main advantage of our exchange is that funds are always stored in your wallet, and the matching process simply pairs orders.
                        </Typography>
                    </div>

                </Col>

                <Col xs={12} md={4} lg={6} className={classes.column}>
                    <div className={classes.imageWrapper}>
                        <Image />
                    </div>
                </Col>

                <Col xs={12} md={4} lg={3} className={classes.column}>
                    <div className={cn(classes.columnContent, classes.columnRight)}>
                        <Typography type="body" className={classes.topParagraph}>
                            The DEX is powered by a matcher, which stores user orders and sends token exchange transactions for fulfilled orders. All final settlement is carried out on the blockchain for security.
                        </Typography>
                        <Typography type="body" className={classes.bottomParagraph}>
                            You retain complete control over your funds when trading them on our decentralised exchange.
                        </Typography>
                    </div>

                </Col>

            </Row>

            <Margin bottom={4} />

            <Row centered>
                <Col xs={12} md={6}>
                    <Row className={classes.rowNumbers}>
                        <Col xs={6} md={4}>
                            <Typography type="numeral">
                                <span dangerouslySetInnerHTML={{ __html: `฿&nbsp;${formatNumber(dexData.wavesBtcRate)}` }} />
                            </Typography>
                            <Typography type="body">
                                waves price
                            </Typography>
                        </Col>
                        <Col xs={6} md={4}>
                            <Typography type="numeral">
                                <span dangerouslySetInnerHTML={{ __html: `$&nbsp;${formatNumber(dexData.dexVolume)}` }} />
                            </Typography>
                            <Typography type="body">
                                24h DEX volume
                            </Typography>
                        </Col>
                    </Row>
                </Col>
            </Row>

        </div>
    );


export default injectSheet(styles)(DEX);