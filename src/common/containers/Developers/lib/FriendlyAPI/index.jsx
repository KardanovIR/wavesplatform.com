import React from 'react';

import Typography from 'src/common/components/Typography';
import IconButton from 'src/common/components/Button/Icon';
import Margin from 'src/common/components/Margin';
import { Row, Col } from 'src/common/components/Grid';

import codeImageSrc from './img/code.svg';


import injectSheet from 'react-jss';



const styles = theme => ({
    image: {
        maxWidth: '100%'
    },
    buttonWrapper: {
        marginBottom: theme.spacing.unit * 2,
    },
    [theme.mixins.atMedia('md')]: {
        buttonWrapper: {
            display: 'inline-block',
            verticalAlign: 'middle',
            marginRight: theme.spacing.unit * 2,
        },
        text: {
            paddingLeft: theme.spacing.unit * 4,
            paddingRight: '10%'
        },
        mdAlignCenter: {
            textAlign: 'center'
        }
    }
})


const FriendlyAPI = ({ classes }) => (
    <div>
        <Row centered>
            <Col xs={12} md={8} lg={7}>
                <Typography type="display2" className={classes.mdAlignCenter}>
                    Developer-Friendly API
                </Typography>
                <Typography type="body2" className={classes.mdAlignCenter}>
                    Our open source client application uses the same API. You can explore it and implement any kind of client application yourself.
                </Typography>
                <Margin bottom={4} />
            </Col>
        </Row>


        <Row direction="row-reverse">
            <Col xs={12} md={6} lg={6} className={classes.text}>
                <Typography type="body">
                    Our nodes expose the REST API allowing access to all blockchain data (transaction history, balances, etc.) as well as operations for creating a new transaction — it’s easy to make a transfer, exchange, issue of tokens or lease fund transactions programmatically.
                </Typography>

                <Margin bottom={2} />

                <div className={classes.buttonWrapper}>
                    <IconButton
                        href="https://github.com/wavesplatform/Waves/wiki/Waves-Node-REST-API"
                        target="_blank"
                        iconName="github"
                    >
                        Documentation
                </IconButton>
                </div>
                <div className={classes.buttonWrapper}>
                    <IconButton
                        href="https://github.com/wavesplatform/WavesGUI"
                        target="_blank"
                        iconName="github"
                        secondary
                    >
                        Client
                </IconButton>
                </div>
            </Col>
            <Col xs={12} md={6} lg={6}>
                <img src={codeImageSrc} alt="Code image" className={classes.image} />
            </Col>
        </Row>
    </div>
);


export default injectSheet(styles)(FriendlyAPI);