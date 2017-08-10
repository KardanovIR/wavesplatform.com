import React from 'react';

import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';
import IconButton from 'src/common/components/Button/Icon';
// import TitleTextCTA from 'src/common/components/TitleTextCTA';
// import Article from 'src/common/components/Article';
import { Row, Col } from 'src/common/components/Grid';



import injectSheet from 'react-jss';
import styles from './styles';




const MainScreen = ({ classes }) => (
    <div>
        <Typography type="display2" margin>
            Decentralized Exchange (DEX)
        </Typography>
        <Row className={classes.root}>
            <Col xs={12} sm={6}>
                <div className={classes.imageWrapper}>
                    <div className={classes.image} />
                </div>
            </Col>
            <Col xs={12} sm={6}>
                <Typography type="body" margin>
                    Our nodes contain an order matcher which is used as decentralized exchange — it enables token trades that don’t require transferring them from the blockchain to a centralized exchange. All operations within the DEX are secure and validated by blockchain nodes.
                </Typography>
                <Typography type="body" margin>
                    Since the DEX is open source and a part of every node, each user can run their own instance of the DEX.
                </Typography>
                <Typography type="body" margin>
                    The matcher exposes its own REST API for accessing the order book and submitting orders. This allows users to implement any kind of trading UI or trading robots.
                </Typography>

                <Margin bottom={3}>
                    <Typography type="body" margin>
                        Decentralized Exchange (DEX)
                    </Typography>
                </Margin>

                <IconButton iconName="github">DEX API</IconButton>
            </Col>
        </Row>
    </div >

);


export default injectSheet(styles)(MainScreen);