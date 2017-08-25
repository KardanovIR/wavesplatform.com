import React from 'react';

import Typography from 'src/common/components/Typography';
import IconButton from 'src/common/components/Button/Icon';
import Margin from 'src/common/components/Margin';
import { Row, Col } from 'src/common/components/Grid';

import dexImageSrc from '!svg-url-loader?noquotes!./img/dex.svg';


import injectSheet from 'react-jss';



const styles = theme => ({
    image: {
        maxWidth: '100%'
    },
    [theme.breakpoints.up('md')]: {
        buttonWrapper: {
            display: 'inline-block',
            verticalAlign: 'middle'
        },
        text: {
            paddingLeft: theme.spacing.unit * 4,
            paddingRight: '10%'
        },
        mdAlignCenter: {
            textAlign: 'center'
        }
    },
})


const FriendlyAPI = ({ classes }) => (
    <div>
        <Row centered>
            <Col xs={12} md={8} lg={7}>
                <Typography type="display2" className={classes.mdAlignCenter}>
                    Decentralized Exchange
                </Typography>
                <Typography type="body2" className={classes.mdAlignCenter}>
                    Our nodes contain an order matcher which is used as decentralized exchange — it enables token trades that don’t require transferring them from the blockchain to a centralized exchange.
                </Typography>
                <Margin bottom={4} />
            </Col>
        </Row>


        <Row direction="row-reverse">
            <Col xs={12} md={6} lg={6} className={classes.text}>
                <Typography type="body" margin>
                    All operations within the DEX are secure and validated by blockchain nodes. Since the DEX is open source and a part of every node, each user can run their own instance of the DEX. 
                </Typography>
                <Typography type="body" margin>
                    The matcher exposes its own REST API for accessing the order book and submitting orders. This allows users to implement any kind of trading UI or trading robots.
                </Typography>                

                <Margin bottom={2} />
                    <IconButton
                        href="https://github.com/wavesplatform/Waves/wiki/Matcher"
                        target="_blank"
                        iconName="github"
                    >
                        DEX API
                </IconButton>
            </Col>
            <Col xs={12} md={6} lg={6}>
                <img src={dexImageSrc} alt="DEX image" className={classes.image} />
            </Col>
        </Row>
    </div>
);


export default injectSheet(styles)(FriendlyAPI);