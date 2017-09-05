import React from 'react';

import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';
import Article from 'src/common/components/Article';
import { Row, Col } from 'src/common/components/Grid';



import injectSheet from 'react-jss';
import styles from './styles';




const DEX = ({ classes }) => (
    <div>
        <Margin bottom={5}>
            <Typography type="display2" tagName="div" className={classes.title}>
                Decentralised Exchange (DEX)
            </Typography>
        </Margin>
        <Row className={classes.root}>
            <Col xs={12} sm={5}>
                <div className={classes.imageWrapper}>
                    <div className={classes.image} />
                </div>
                <Margin />
            </Col>
            <Col xs={12} sm={7}>
                <Row>
                    <Col xs={12} md={6} lg={5} className={classes.article}>
                        <Article
                            title="Trade without limits"
                            text="There are no limits on withdrawals, and any cryptocurrency purchased immediately appears in your wallet’s balance."
                        />
                    </Col>
                    <Col xs={12} md={6} lg={5} lgOffset={1} className={classes.article}>
                        <Article
                            title="Don’t waste money on high commission fees"
                            text="Our exchange has a small fixed commission on a per-order basis."
                        />
                    </Col>
                    <Col xs={12} md={6} lg={5} className={classes.article}>
                        <Article
                            title="Trade quickly and safely"
                            text="A centralised matcher and high channel capacity allow you to make deals as quickly as on a centralised exchange, but without the risk of losing your money."
                        />
                    </Col>
                    <Col xs={12} md={6} lg={5} lgOffset={1} className={classes.article}>
                        <Article
                            title="Never worry about the safety of your assets"
                            text="Funds are kept in your wallet, not on the exchange."
                        />
                    </Col>                  
                </Row>
            </Col>
        </Row>
    </div>

);


export default injectSheet(styles)(DEX);