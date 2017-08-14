import React from 'react';

import { Row, Col } from 'src/common/components/Grid';
import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';
import NumeralDemo from 'src/common/components/NumeralDemo';


import injectSheet from 'react-jss';
import styles from './styles';



const Facts = ({
    classes,
}) => (
        <div>
            <Row className={classes.row}>

                <Col xs={12} className={classes.withMargin}>
                    <Typography type="display3" className={classes.title}>
                        Decentralized Exchange
                </Typography>
                    <Margin bottom={4} />
                </Col>


                <Col xs={12}>
                    <Typography type="display1" className={classes.title}>
                        Stop worrying about the safety of your assets
                </Typography>
                    <Margin bottom={3} />
                </Col>


                <Col xs={12} md={3} lg={4} className={classes.column}>
                    <div className={classes.columnContent}>
                        <Typography type="body" className={classes.topParagraph}>
                            By trading on a centralized exchange, you risk losing your funds in the event of hacking, which has happened on almost all popular exchanges.
                        </Typography>
                        <Typography type="body" className={classes.bottomParagraph}>
                            The main advantage of our exchange is that the money is always stored in your wallet, and the match only compares orders.
                        </Typography>
                    </div>

                </Col>

                <Col xs={12} md={6} lg={4} className={classes.column}>
                    <div className={classes.imageWrapper}>
                        <div className={classes.image} />
                    </div>
                </Col>

                <Col xs={12} md={3} lg={4} className={classes.column}>
                    <div className={classes.columnContent}>
                        <Typography type="body" className={classes.topParagraph}>
                            The DEX is powered by a matcher, which stores user orders and sends token exchange transactions for fulfilled orders.
                        </Typography>
                        <Typography type="body" className={classes.bottomParagraph}>
                            You retain complete control over your funds when trading them on our decentralized exchange.
                        </Typography>
                    </div>

                </Col>

            </Row>

            <Margin bottom={3} />

            <Row centered>
                <Col xs={12} md={6} lg={4}>
                    <Row>
                        <Col xs={6}>
                            <NumeralDemo
                                number={0.00110862}
                                text="Waves token value"
                            />
                        </Col>
                        <Col xs={6}>
                            <NumeralDemo
                                number={0.00110862}
                                text="Waves token value"
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>

        </div>
    );


export default injectSheet(styles)(Facts);